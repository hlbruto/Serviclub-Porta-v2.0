<script setup>
import { QInput, QForm } from 'quasar'
import { ref } from 'vue'

defineProps({
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  validationErrors: {
    required: false,
    type: Object,
    default () { return {} }
  }
})

const emit = defineEmits([
  'update:email',
  'update:password'
])

const isPwd = ref(false)
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
      filled
      label="Correo electrónico"
      hint="De su cuenta Joven Club. Ejemplo: usuario@cubava.cu"
      :model-value="email"
      class="q-mb-md"
      hide-bottom-space
      @update:model-value="value => emit('update:email', value)"
    />
    <q-input
      filled
      label="Contraseña"
      :model-value="password"
      :type="isPwd ? 'password' : 'text'"
      class="q-mb-sm"
      hide-bottom-space
      @update:model-value="value => emit('update:password', value)"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <slot name="bottom" />
  </q-form>
</template>
