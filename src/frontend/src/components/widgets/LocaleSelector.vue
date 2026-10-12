<script setup lang="ts">
const flags = {
  de: '🇩🇪',
  en: '🇬🇧',
}
</script>

<template>
  <div class="localeSelector">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ flags[locale] }}
        {{ locale.toUpperCase() }}
      </option>
    </select>
  </div>
</template>
