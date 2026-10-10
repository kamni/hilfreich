<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useHead } from "vue3-head";

import Header from '@/components/branding/Header.vue'

const pageTitle = ref('Page Title: Default')
const pageDescription = ref('Page Description: Default')

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
  ],
  link: [
    { rel: 'icon', href: '/img/favicon-16x16.jpeg', sizes: '16x16' },
    { rel: 'icon', href: '/img/favicon-24x24.jpeg', sizes: '24x24' },
    { rel: 'icon', href: '/img/favicon-32x32.jpeg', sizes: '32x32' },
    { rel: 'icon', href: '/img/favicon-48x48.jpeg', sizes: '48x48' },
    { rel: 'icon', href: '/img/favicon-64x64.jpeg', sizes: '64x64' },
  ],
})
</script>

<template>
  <Header />
  <RouterView />
</template>
