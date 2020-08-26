<template>
  <form id="sign-in" @submit.prevent="handleSubmit">
    <h1>Sign in</h1>

    <h2 v-if="requestError">{{ requestError }}</h2>
    
    <p class="form-group">
      <label for="name">Email</label>
      <input
        id="email"
        ref="email"
        v-model.trim="email"
        type="text"
        name="email"
        placeholder="Enter email"
        @input="setInputValue('email', $event.target.value)"
      >

      <span class="error" v-if="$v.email.$error && !$v.email.required">Field is required</span>
      <span class="error" v-if="$v.email.$error && !$v.email.minLength">Value must have at least {{$v.email.$params.minLength.min}} letters.</span>
    </p>

     <p class="form-group">
      <label for="name">Password</label>
      <input
        id="password"
        ref="password"
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="Enter password"
        @input="setInputValue('password', $event.target.value)"
      >

      <span class="error" v-if="$v.password.$error && !$v.password.required">Field is required</span>
      <span class="error" v-if="$v.password.$error && !$v.password.minLength">Value must have at least {{$v.password.$params.minLength.min}} letters.</span>
    </p>

    <button type="submit">Submit</button>

    <router-link to="/sign-up">Sign up</router-link>
    <router-link to="/reset-password">Reset password</router-link>

  </form>
</template>

<script>
  import { email, password } from '../validators/auth';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'sign-in',
    data: function() {
      return {
        email     : 'test@email',
        password  : '123456'
      }
    },
    computed: mapState({
      requestError: state => state.auth.error
    }),
    validations: {
      email,
      password
    },
    methods: {
      ...mapActions([
        'handleSignIn',
      ]),
      setInputValue(field, value) {
        this[field] = value;
        this.$v[field].$touch();
      },
      handleSubmit() {
        this.handleSignIn({
          email: this.$refs.email.value,
          password: this.$refs.password.value
        })
      }
    }
  }
</script>