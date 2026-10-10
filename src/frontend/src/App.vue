<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <link rel="icon" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/favicon/9c388f8e-c7c5-44bb-8bee-e77a297f3927.png/:/rs=w:16,h:16,m" sizes="16x16">
    <link rel="icon" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/favicon/9c388f8e-c7c5-44bb-8bee-e77a297f3927.png/:/rs=w:24,h:24,m" sizes="24x24">
    <link rel="icon" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/favicon/9c388f8e-c7c5-44bb-8bee-e77a297f3927.png/:/rs=w:32,h:32,m" sizes="32x32">
    <link rel="icon" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/favicon/9c388f8e-c7c5-44bb-8bee-e77a297f3927.png/:/rs=w:48,h:48,m" sizes="48x48">
    <link rel="icon" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/favicon/9c388f8e-c7c5-44bb-8bee-e77a297f3927.png/:/rs=w:64,h:64,m" sizes="64x64">
    <meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>hilfreich e.V.</title><meta name="author" content="hilfreich e.V."><meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000"><link rel="canonical" href="https://hilfreichev.de/"><link rel="manifest" href="https://hilfreichev.de/manifest.webmanifest"><link rel="apple-touch-icon" sizes="57x57" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:57,h:57,m"><link rel="apple-touch-icon" sizes="60x60" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:60,h:60,m"><link rel="apple-touch-icon" sizes="72x72" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:72,h:72,m"><link rel="apple-touch-icon" sizes="114x114" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:114,h:114,m"><link rel="apple-touch-icon" sizes="120x120" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:120,h:120,m"><link rel="apple-touch-icon" sizes="144x144" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:144,h:144,m"><link rel="apple-touch-icon" sizes="152x152" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:152,h:152,m"><link rel="apple-touch-icon" sizes="180x180" href="https://img1.wsimg.com/isteam/ip/5c48b805-4e6b-450e-b94f-40d4b474889a/hilfreichLogo.webp/:/rs=w:180,h:180,m"><meta property="og:url" content="https://hilfreichev.de/">

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
