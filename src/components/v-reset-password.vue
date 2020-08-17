<template>
  <form id="sign-in" @submit.prevent="checkForm">
    <h1>Reset password</h1>

    <div class="form-group">
      <label for="name">New Password</label>
      <input
        id="password"
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="Enter new password"
        @input="setEmail($event.target.value)"
      >

      <p v-if="$v.password.$error">
        <span class="error" v-if="!$v.password.required">Field is required</span>
        <span class="error" v-if="!$v.password.minLength">Value must have at least {{$v.password.$params.minLength.min}} letters.</span>
      </p>
    </div>

     <div class="form-group">
      <label for="name">Confirm Password</label>
      <input
        id="repeatPassword"
        v-model.trim="repeatPassword"
        type="password"
        name="repeatPassword"
        placeholder="Confirm new password"
        @input="setPassword($event.target.value)"
      >

      <p v-if="$v.repeatPassword.$error">
        <span class="error" v-if="!$v.repeatPassword.required">Field is required</span>
        <span class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be the same</span>
        <span class="error" v-if="!$v.repeatPassword.minLength">Value must have at least {{$v.repeatPassword.$params.minLength.min}} letters.</span>
      </p>
    </div>

    <button type="submit">Submit</button>

    <router-link to="/">Sign in</router-link>
  </form>
</template>

<script>
  import { required, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    name: 'reset-password',
        data: function() {
      return {
        password        : '',
        repeatPassword  : ''
      }
    },
    validations: {
      password: {
        required,
        minLength: minLength(4)
      },
      repeatPassword: {
        required,
        minLength: minLength(4),
        sameAsPassword: sameAs('password')
      }
    },
    methods: {
      setEmail(value) {
        this.password = value;
        this.$v.password.$touch();
      },
      setPassword(value) {
        this.repeatPassword = value;
        this.$v.repeatPassword.$touch();
      }
    }
  }
</script>