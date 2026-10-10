<script setup lang="ts">
import { useAttrs } from 'vue';

import FormElement from '@/components/forms/FormElement.vue';

const props = withDefaults(defineProps<{
  /* Id for the input element */
  id: string,

  /* Placeholder hint text displayed if there is no input */
  hint?: string,

  /* Whether the field is read-only, write, or hidden from the user */
  access?: 'write' | 'read' | 'hidden',
}>(), {
  access: 'write',
});

/* Props passed to the FormElement */
const formElementProps = useAttrs();
</script>

<template>
  <FormElement
    v-bind="formElementProps"
    :access=access
    :childSlotId=id
  >
    <input
      type="text"
      :id=id
      :placeholder=hint
      :readonly="access === 'read'"
    />
  </FormElement>
</template>
