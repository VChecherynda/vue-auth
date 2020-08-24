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
        @input="setEmail($event.target.value)"
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
        @input="setPassword($event.target.value)"
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
  import { required, minLength } from 'vuelidate/lib/validators';
  import { mapState, mapMutations } from 'vuex';
  import axios from 'axios';

  export default {
    name: 'sign-in',
    data: function() {
      return {
        email     : 'test@email.com',
        password  : '123456'
      }
    },
    computed: mapState({
      requestError: state => state.auth.error
    }),
    validations: {
      email: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(4)
      }
    },
    methods: {
      ...mapMutations([
        'saveAuth',
        'saveError'
      ]),
      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
      },
      setPassword(value) {
        this.password = value
        this.$v.password.$touch()
      },
      handleSubmit() {
        axios
          .post('https://node-rest-caht.herokuapp.com/auth/sign-in', {
            email: this.$refs.email.value,
            password: this.$refs.password.value
          })
          .then(response => this.saveAuth(response.data))
          .then(() => this.$router.push('/admin'))
          .catch(err => this.saveError(err.response.data));
      }
    }
  }
</script>