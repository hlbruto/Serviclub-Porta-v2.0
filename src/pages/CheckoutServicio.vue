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
          <div v-if="storeUsuarios.logueado == true">
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
              <q-btn rounded @click="() => { step = 2 }"
                class="float-right q-mr-md q-mb-sm" color="blue"
                label="Siguiente" :disable="(momento == '' || problema == '')"/>
            </q-stepper-navigation>
            </div>

            <div v-else class="text-negative text-center row justify-center">
              <q-item-label class="col-12">
                Debe estar autenticado para solicitar el Servicio
              </q-item-label>
              <q-btn rounded to="/login" color="blue"
                class="q-mt-lg q-mb-md col-3"
                label="Autenticarse"
              />
            </div>
          </q-step>

          <q-step
            :name="2"
            title="Escoger la instalación"
            icon="mdi-home-automation"
            :done="step > 2"
            :header-nav="step > 2"
          >
            <div class="text-caption text-grey-7">
              Instalación que le ofrecerá el Servicio:
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item>
                  <q-input
                    dense autogrow outlined
                    label="Instalación*"
                    v-model="instalacion.attributes.nombre"
                    disable
                    type="text"
                    class="full-width"
                    v-if="instalacion !== null"
                  />
                  <q-input
                    dense autogrow outlined
                    label="Instalación*"
                    v-model="instalacion"
                    disable
                    type="text"
                    class="full-width"
                    v-else
                  />
                </q-item>
              </div>
              <div class="col-12">
                <q-item>
                  <q-item-label> Seleccione la instalación que desea
                    <q-btn
                      color="grey"
                      round
                      flat
                      dense
                      :icon="otra ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                      @click="otra = !otra"
                    />
                  </q-item-label>
                </q-item>
              </div>

                  <q-slide-transition>
                    <div v-show="otra">
                      <q-separator class="q-mt-md q-mb-md" />
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
                            :rows="storeInstalaciones.instalaciones"
                            :columns="columns"
                            row-key="name"
                            selection="single"
                            v-model="selected"
                            grid
                            hide-header
                          >
                            <template v-slot:item="props">
                              <div
                                class="q-pa-xs q-mr-md col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition text-center"
                                :style="props.selected ? 'transform: scale(0.95);' : ''"
                              >
                                <q-card bordered class="cardInst" @click="elegirInstalacion(props.row)">
                                  <q-card-section>
                                    <q-icon size="xl" name="mdi-home-automation" />
                                    <div class="text-caption text-bold">
                                      {{ props.row.attributes.nombre }}
                                    </div>
                                    <div class="text-caption">
                                      {{ props.row.attributes.direccion }}
                                    </div>
                                  </q-card-section>
                                </q-card>
                              </div>
                            </template>
                            <template v-slot:bottom>
                            </template>
                          </q-table>
                        </div>
                      </div>
                    </div>
                  </q-slide-transition>
            </div>

            <q-stepper-navigation>
              <q-btn rounded @click="() => { step = 3, modificarFavorita()}"
                class="float-right q-mr-md q-mb-md" color="blue"
                label="Siguiente" :disable="instalacion === null"
              />
              <q-btn flat @click="step = 1" color="primary" rounded
                label="Atrás" class="q-mr-sm float-right"
              />
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
                    <q-item-label caption>
                      Solicitado a: {{ instalacion.attributes.nombre }}
                    </q-item-label>
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
                <q-card-section class="col-xs-12 col-sm-12 col-md-5 col-lg-8 q-pt-xs">
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
          <q-btn push dense label="Sí" color="primary" @click="realizarPedido()" />
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
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import { useUsuariosStore } from 'stores/usuarios-store'
import { useServiciosStore } from 'stores/servicios-store'
import { useInstalacionesStore } from 'stores/instalaciones-store'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const $q = useQuasar()
const router = useRouter()
const storeUsuarios = useUsuariosStore()
const store = useServiciosStore()
const storeInstalaciones = useInstalacionesStore()

const step = ref(1)
const momento = ref('')
const problema = ref('')
const instalacion = ref(null)
const otra = ref(false)
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
    name: 'nombre',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.nombre,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'direccion', align: 'center', label: 'Calories', field: 'direccion', sortable: true }
]

onBeforeMount(() => {
  storeUsuarios.authorization = $q.localStorage.getItem('authorization')
  if (!store.servicio.attributes) {
    store.servicio = $q.localStorage.getItem('servicio')
  }
  if (!storeUsuarios.user.id) {
    storeUsuarios.user = $q.localStorage.getItem('user')
    storeInstalaciones.instalacionFavorita.id = storeUsuarios.user.instalacionFavorita.id
    storeInstalaciones.instalacionFavorita.attributes.nombre = storeUsuarios.user.instalacionFavorita.nombre
    storeInstalaciones.instalacionFavorita.attributes.direccion = storeUsuarios.user.instalacionFavorita.direccion
    storeUsuarios.logueado = true
  }
  if (!storeInstalaciones.instalacionFavorita.id) {
    otra.value = true
  } else {
    instalacion.value = storeInstalaciones.instalacionFavorita
  }
  storeInstalaciones.listarInstalaciones()
})

function elegirInstalacion (inst) {
  storeInstalaciones.instalacionFavorita = inst
  instalacion.value = inst
  otra.value = !otra.value
}

async function modificarFavorita () {
  const data = {
    instalacionFavorita: instalacion.value.id
  }
  try {
    await api.put('/api/users/' + storeUsuarios.user.id, data, storeUsuarios.authorization).then((res) => {
      console.log('res.data', res.data)
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Ha ocurrido un error. Revise su conexión.'
    })
  }
}

async function realizarPedido () {
  confirm.value = false
  const a = {
    data: {
      momento: momento.value,
      problema: problema.value,
      estado: 'Pendiente de pago',
      instalacion: instalacion.value.id,
      servicio: store.servicio.id,
      user: storeUsuarios.user.id
    }
  }
  try {
    await api
      .post('/api/pedidos', a, storeUsuarios.authorization)
      .then((res) => {
        $q.notify({
          type: 'info',
          message: 'El pedido se guardó correctamente.'
        })
        router.push({ path: '/dashboard' })
      })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Ha ocurrido un error. Revise su conexión.'
    })
  }
}
</script>

<style lang="scss" scoped>
.icon2 {
  height: 30.7px;
  width: 30.7px;
}

.cardInst:hover {
  border-color: #0a0349;
  border-width: 0.5pt;
}
</style>
