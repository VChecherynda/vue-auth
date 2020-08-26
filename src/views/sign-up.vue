<template>
  <form id="sign-up" @submit.prevent="handleSubmit">
    <h1>Sign up</h1>

    <h2 v-if="requestError">{{ requestError }}</h2>

    <p class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        ref="name"
        v-model.trim="name"
        type="text"
        name="name"
        placeholder="Enter name"
        @input="setInputValue('name', $event.target.value)"
      >

      <span class="error" v-if="$v.name.$error && !$v.name.required">Field is required</span>
      <span class="error" v-if="$v.name.$error && !$v.name.minLength">Value must have at least {{$v.name.$params.minLength.min}} letters.</span>
    </p>

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

    <router-link to="/">Sign in</router-link>
  </form>
</template>

<script>
  import { name, email, password } from '../validators/auth';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'sign-up',
    data: function() {
      return {
        name      : 'Test',
        email     : 'test@email.com',
        password  : '123456'
      }
    },
    computed: mapState({
      requestError: state => state.auth.error
    }),
    validations: {
      name,
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
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          password: this.$refs.password.value
        })
      }
    }
  }
</script>