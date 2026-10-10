<script setup lang="ts">
import { ref, useAttrs } from 'vue';

import FormElement from '@/components/forms/FormElement.vue';

const props = withDefaults(defineProps<{
  /* Id for the password input */
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

/* Elements for showing/hiding password */
const passwordIsMasked = ref(true);
const togglePasswordVisibility = (): void => {
  passwordIsMasked.value = !passwordIsMasked.value;
};
</script>

<template>
  <FormElement
    v-bind="formElementProps"
    :access=access
    :childSlotId=id
  >
    <div class='passwordInput__inputWrapper'>
      <input
        :type="passwordIsMasked? 'password': 'text'"
        :id=id
        :placeholder=hint
        :readonly="access === 'read'"
      />
      <button
        class="passwordInput__showPasswordButton"
        type="button"
        @click="togglePasswordVisibility"
      >{{ passwordIsMasked ? 'Show' : 'Hide' }}</button>
    </div>
  </FormElement>
</template>
