<template>
  <q-form>
    <div class="q-gutter-md">
      <div class="row justify-between">
        <div class="col-3">
        <q-icon size="md" name="event" class="cursor-pointer q-ml-lg q-mr-lg">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="momento" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Cerrar" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>

        <q-icon size="md" name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="momento" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Cerrar" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
        </div>

        <q-input class="col-9" filled v-model="momento" label="Momento" />
      </div>

      <q-input
        filled
        label="Lugar donde desea recibir el servicio"
        v-model="lugar"
        type="textarea"
        class="q-mb-sm"
        hide-bottom-space
      />

      <q-input
        filled
        label="Otros detalles"
        v-model="detalles"
        type="textarea"
        class="q-mb-sm"
        hide-bottom-space
      />

      <q-card bordered flat class="q-mt-xl">
        <q-card-section class="text-caption text-grey-7 text-center">
          Seleccione la instalación que desea le ofrezca el Servicio:
        </q-card-section>

        <q-card-section>
          <!-- <q-badge color="secondary" multi-line>
            Model: "{{ provincia }}"
          </q-badge> -->

          <div class="row justify-between">
            <q-select class="q-ml-md col-5" filled
              v-model="provincia" :options="options"
              label="Provincia"
            />
            <q-select class="q-mr-md col-5" filled
              v-model="provincia" :options="options"
              label="Municipio"
            />
          </div>
        </q-card-section>

        <q-card-section>
          <div class="q-pa-lg">
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              selection="single"
              v-model:selected="selected"
              grid
              hide-header
            >
              <template v-slot:item="props">
                <div
                  class="q-pa-xs q-mr-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition text-center"
                  :style="props.selected ? 'transform: scale(0.95);' : ''"
                >
                  <q-card bordered :class="props.selected ? 'instCard' : ''">
                    <q-card-section>
                      <q-icon size="xl" name="mdi-home-automation" />
                      <div class="text-caption text-bold">
                        Instalacion II
                      </div>
                      <div class="text-caption">
                        Calle Maceo #2 % Calle 1 y Calle 3
                      </div>
                      <q-checkbox dense v-model="props.selected" />
                    </q-card-section>
                  </q-card>
                </div>
              </template>
              <template v-slot:bottom>
              </template>
            </q-table>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-form>
</template>

<script setup>
import { date } from 'quasar'
import { ref, onBeforeMount } from 'vue'
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

const momento = ref('')
const lugar = ref('')
const detalles = ref('')
const provincia = ref(null)
const selected = ref([])

const options = [
  {
    label: 'La Habana',
    value: 'La Habana',
    description: 'Search engine',
    category: '1'
  },
  {
    label: 'ME Isla de la Juventud',
    value: 'ME Isla de la Juventud',
    description: 'Social media',
    category: '1'
  },
  {
    label: 'Ciego de Ávila',
    value: 'Ciego de Ávila',
    description: 'Quick updates',
    category: '2'
  }
]

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  }
]

onBeforeMount(() => {
  momento.value = formattedString.value
})
</script>

<style lang="scss">
.instCard {
  background: radial-gradient(circle, #e1eaf1 0%, #bcd7f7 100%);
  border-color: #0a0349;
  border-width: 0.5pt;
}
</style>
