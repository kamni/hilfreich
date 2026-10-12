<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import Logo from '@/components/branding/Logo.vue';
</script>

<template>
  <main>
    <Logo />
    <h1>{{ $t('homeView.appName') }}</h1>
    <h2>{{ $t('homeView.appByline') }}</h2>

    <LoginForm />
  </main>
</template>
