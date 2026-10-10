<!-- 
Generic form element.
Do not use directly in forms; this is a parent element.
-->

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  /* Display label for the form field.
   * The label can be hidden for stylistic reasons. */
  label: string,
  hideLabel?: boolean,

  /* Help text to display to the user about the field */
  help?: string,

  /* Is this field required? */
  required?: boolean;
  /* Whether the field is read-only, write, or hidden from the user */
  access: 'write' | 'read' | 'hidden',

  /* The id of the child form slot element */
  childSlotId: string,
}>();

/*** Refs ***/

/* Shows/hides the help text for the form element */
const isHelpVisible = ref(false);
</script>

<template>
  <div
    v-if="access !== 'hidden'"
    class="formElement"
    :class="{ 'formElement--readonly': access === 'read' }"
  >
    <div
      class="formElement__labelWrapper"
      :class="{ 'formElement__label--hidden': hideLabel }"
    >
      <label :for="childSlotId">{{ label }}</label>
      <span
        v-if="required"
        title="Required"
        class="formElement__label--required"
      >*</span>
      <span
        v-if="access === 'read'"
        class="formElement__label--readonly"
      >(readonly)</span>
      <span
        v-if="!!help"
        :title="help"
        class="formElement__help"
      >?</span>
    </div>

    <!-- Form input goes here -->
    <slot />
  </div>
</template>

<style scoped>
.formElement {
  padding-bottom: 5px;
}

.formElement__help {
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 2em;
  padding: 1px 6px;
}

.formElement__label--hidden {
  display: none;
}

.formElement__label--required {
  font-size: 1.1em;
  font-weight: bold;
}

.formElement__label--readonly {
  margin-left: .5em;
}
</style>
