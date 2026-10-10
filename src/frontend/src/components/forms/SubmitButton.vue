<script setup lang="ts">
import { useAttrs } from 'vue';

import FormElement from '@/components/forms/FormElement.vue';

const props = withDefaults(defineProps<{
  /* Id for the password input */
  id: string,

  /* What the button should say */
  buttonText?: string,

  /* Whether the field is read-only, write, or hidden from the user */
  access?: 'write' | 'read' | 'hidden',
}>(), {
  access: 'write',
  buttonText: 'Submit',
});

/* Props passed to the FormElement */
const formElementProps = useAttrs();
</script>

<template>
  <FormElement
    v-bind="formElementProps"
    :label=buttonText
    :hideLabel=true
    :access=access
    :childSlotId=id
  >
    <button
      type="submit"
      :disabled="access !== 'write'"
    >
      {{ buttonText }}
    </button>
  </FormElement>
</template>
