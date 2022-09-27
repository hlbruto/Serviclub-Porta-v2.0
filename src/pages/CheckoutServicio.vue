<template>
  <q-page class="q-pa-sm bg-white">
    <div>
      <small class="q-mt-sm q-mr-sm row justify-end text-grey-7">
        {{ formattedString }}
      </small>

      <div
        class="q-pa-sm q-ml-xl q-mr-xl row justify-between text-grey-7"
      >
        <a href="#/servicios">Volver a Servicios</a>
      </div>
    </div>

    <div class="q-pa-md row q-col-gutter-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card class="bg-grey-2">
          <q-card-section class="text-center text-h6 text-primary">
            <q-img
              class="q-mr-sm icon2"
              :src="'portada/' + store.servicio.attributes.foto"
            />
            {{ store.servicio.attributes.servicio }}
          </q-card-section>
          <q-card-section horizontal>
            <q-card-section>
              <div class="text-subtitle2 q-mb-xs">
                {{ store.servicio.attributes.descripcion }}
              </div>
            </q-card-section>
          </q-card-section>

          <q-separator></q-separator>
          <q-card-section class="row">
            <div class="  col-12 text-h6 full-width">
              <div class="float-right q-mr-md">
                Precio:
                <span class="text-blue">
                  {{ store.servicio.attributes.precio }}
                </span>
              </div>
            </div>
          </q-card-section>

        </q-card>
      </div>

      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Su problemática"
            icon="shopping_cart"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item>
                  <q-input dense autogrow outlined
                    class="full-width"
                    v-model="momento" type="textarea"
                    label="Momento*" />
                </q-item>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item>
                  <q-input
                    dense autogrow outlined
                    label="Problema*"
                    v-model="problema" type="textarea"
                    class="full-width"
                  />
                </q-item>
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn rounded @click="() => { done1 = true; step = 2 }"
                class="float-right q-mr-md q-mb-md" color="blue"
                label="Siguiente" />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Escoger la instalación"
            icon="mdi-home-automation"
            :done="step > 2"
            :header-nav="step > 2"
          >
            <div class="text-caption text-grey-7">
              Seleccione la instalación que desea le ofrezca el Servicio:
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item>
                  <q-select dense outlined class="full-width"
                    v-model="provincia"
                    label="Provincia*" :options="options"
                  />
                </q-item>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item>
                  <q-select dense outlined class="full-width"
                    v-model="provincia"
                    label="Municipio*" :options="options"
                  />
                </q-item>
              </div>
              <div class="col-12 q-pa-lg">
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
            </div>

            <q-stepper-navigation>
              <q-btn rounded @click="() => { done2 = true; step = 3 }" class="float-right q-mr-md q-mb-md" color="blue"
                label="Siguiente"/>
              <q-btn flat @click="step = 1" color="primary" rounded label="Atrás" class="q-mr-sm float-right"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Revise su pedido"
            icon="shopping_cart"
            :header-nav="step > 3"
          >
            <div class="row">
              <div class="col-12">
                <q-item-label header class="text-h6">Sumario</q-item-label>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">
                      {{ store.servicio.attributes.servicio }}
                    </q-item-label>
                    <q-item-label caption>Solicitado a: Florencia II</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    {{ store.servicio.attributes.precio }}
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width" style="border-top: 3px dotted blue">
                  <q-item-section>
                    <q-item-label lines="1">Total a pagar</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    {{ store.servicio.attributes.precio }}
                  </q-item-section>
                </q-item>
              </div>
            </div>

            <q-card class="rounded-borders">
              <q-card-section horizontal>
                <q-card-section class="col-xs-12 col-sm-12 col-md-6 col-lg-8 q-pt-xs">
                  <div class="text-h6 text-center">Problemática:</div>
                  <div class="text-subtitle2">
                    Momento:
                  </div>
                  <div class="text-caption">
                    {{ momento }}
                  </div>
                  <div class="text-subtitle2">
                    Problema:
                  </div>
                  <div class="text-caption">
                    {{ problema }}
                  </div>
                </q-card-section>
                <q-card-section class="col-xs-12 col-sm-12 col-md-5 col-lg-3 q-pt-xs">
                  <div class="text-h6 text-center">Detalles de pago</div>
                  <div class="text-subtitle1 q-mb-xs">
                    Saldo cuenta SISCAE - $1000.00 cup
                  </div>
                  <div class="text-subtitle1 q-mb-xs">
                    Total a pagar - {{ store.servicio.attributes.precio }}
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>

            <q-stepper-navigation>

              <q-btn rounded
                @click="() => { done3 = true; confirm = true }"
                class="float-right q-mr-md q-mb-md" color="blue"
                label="Realizar el Pedido"
              />
              <q-btn flat @click="step = 2" color="primary"
                rounded label="Atrás" class="q-mr-sm float-right"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>

    <q-dialog v-model="confirm">
      <q-card>
        <q-card-section>
          <div class="text-h6">Confirmación</div>
        </q-card-section>
        <q-card-section>
          <span class="row items-center">
            ¿Está seguro de que desea realizar el pedido?
            <br>
            Se descontará el precio de su cuenta de SISCAE.
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn push dense label="No" color="negative" v-close-popup />
          <q-btn push dense label="Sí" color="primary" to="/dashboard" @click="confirm = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { date, useQuasar } from 'quasar'
import { useServiciosStore } from 'stores/servicios-store'
// import { useRouter } from 'vue-router'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const $q = useQuasar()
// const router = useRouter()
const store = useServiciosStore()

const step = ref(1)
const momento = ref('')
const problema = ref('')
const provincia = ref(null)
const selected = ref([])
const confirm = ref(false)

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
  if (store.servicio.attributes === undefined) {
    store.servicio = $q.localStorage.getItem('servicio')
    console.log('store', store.servicio)
  }
})
</script>

<style lang="scss" scoped>
.icon2{
  height: 30.7px;
  width: 30.7px;
}
</style>
