<script setup lang="ts">
import PasswordInput from '@/components/forms/PasswordInput.vue';
import SubmitButton from '@/components/forms/SubmitButton.vue';
import TextInput from '@/components/forms/TextInput.vue';
</script>

<template>
  <div id="loginForm">
    <form>
      <TextInput
        id="emailInput"
        :label="$t('loginForm.emailInput')"
        :hint="$t('loginForm.emailInputHint')"
      />
      <PasswordInput
        id="passwordInput"
        :label="$t('loginForm.passwordInput')"
        :hint="$t('loginForm.passwordInputHint')"
      />
      <SubmitButton
        id="submitPasswordButton"
        :buttonText="$t('loginForm.submitButton')"
      />
    </form>

    <span class='signUp'>
      {{ $t('loginForm.noAccount') }}
      <a href="#">{{ $t('loginForm.signUpLink') }}</a>
    </span>
  </div>
</template>
