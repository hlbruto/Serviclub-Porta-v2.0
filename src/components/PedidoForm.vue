<template>
  <q-form>
    <div class="q-pa-md q-gutter-md">
      <q-input filled v-model="momento" label="Momento">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="momento" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="momento" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cerrar" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        filled
        label="Lugar donde desea recibir el servicio"
        v-model="lugar"
        type="textarea"
        class="q-mb-sm"
        hide-bottom-space
      >
        <template v-slot:prepend>
          <q-icon name="mdi-google-maps" class="cursor-pointer" />
        </template>
      </q-input>
    </div>
  </q-form>
</template>

<script setup>
import { date } from 'quasar'
import { ref } from 'vue'
// import { QInput, QForm } from 'quasar'

/* defineProps({
  momento: {
    required: true,
    type: String
  },
  lugar: {
    required: true,
    type: String
  }
}) */

/* const emit = defineEmits([
  'update:email',
  'update:password',
  'update:passwordConfirmation',
  'update:name',
  'update:username'
]) */

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm')

const momento = formattedString
const lugar = ref('')
</script>
