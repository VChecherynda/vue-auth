<template>
  <form id="sign-up" @submit.prevent="checkForm">
    <h1>Sign up</h1>

    <p class="form-group">
      <label for="name">Email</label>
      <input
        id="email"
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

    <router-link to="/">Sign in</router-link>
  </form>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators';

  export default {
    name: 'sign-up',
    data: function() {
      return {
        email     : '',
        password  : ''
      }
    },
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
      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
      },
      setPassword(value) {
        this.password = value
        this.$v.password.$touch()
      }
    }
  }
</script>