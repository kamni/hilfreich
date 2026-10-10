<script setup lang="ts">
import PasswordInput from '@/components/forms/PasswordInput.vue';
import SubmitButton from '@/components/forms/SubmitButton.vue';
import TextInput from '@/components/forms/TextInput.vue';
</script>

<template>
  <div id="loginForm">
    <h1>Login</h1>

    <p>Work in progress. Ignore the style.</p>

    <form>
      <TextInput
        id="emailInput"
        label="Email"
        hint="email"
      />
      <PasswordInput
        id="passwordInput"
        label="Password"
        hint="password"
      />
      <SubmitButton id="submitPasswordButton" />
    </form>
  </div>
</template>
