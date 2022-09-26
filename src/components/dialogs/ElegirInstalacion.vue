<template>
  <q-dialog v-model="storeDialog.instalacDialogo">
    <q-card>
      <q-card-section>
        <div class="text-subtitle1 text-weight-bold text-primary">
          Escoge la Instalación a la que solicitarás el Servicio
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="q-pa-md row justify-around" style="max-width: 250px">
          <div class="q-gutter-md">
            <q-badge color="secondary" multi-line>
              Model: "{{ model }}"
            </q-badge>

            <q-select filled v-model="model" :options="options" label="Standard" />
          </div>
        </div>
        <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useDialogosStore } from 'stores/dialogos-store'

const storeDialog = useDialogosStore()
const model = ref(null)

const options = [
  {
    label: 'Google',
    value: 'Google',
    description: 'Search engine',
    category: '1'
  },
  {
    label: 'ME Isla de la Juventud',
    value: 'Facebook',
    description: 'Social media',
    category: '1'
  },
  {
    label: 'Twitter',
    value: 'Twitter',
    description: 'Quick updates',
    category: '2'
  },
  {
    label: 'Apple',
    value: 'Apple',
    description: 'iStuff',
    category: '2'
  }
]
</script>
