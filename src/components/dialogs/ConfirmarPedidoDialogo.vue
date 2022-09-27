<template>
  <q-dialog v-model="storeDialog.confirmarPedidoDialogo">
    <q-card>
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="q-pa-md row justify-around" style="max-width: 250px">
          <div class="q-gutter-md">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogosStore } from 'stores/dialogos-store'

const storeDialog = useDialogosStore()
</script>
