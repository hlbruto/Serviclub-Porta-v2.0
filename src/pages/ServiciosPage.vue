<template>
  <q-page>
    <div>
      <small class="q-mt-sm q-mr-sm row justify-end text-grey-7">
        {{ formattedString }}
      </small>
    </div>

    <div class="q-pa-md row justify-center">
      <div class="q-gutter-y-md">
        <q-card flat>
          <q-card-section>
            <q-tabs
              v-model="tab"
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              narrow-indicator
            >
              <div v-for="clasif in clasificacion" :key="clasif.id">
                <q-tab :id="clasif.id" :name="clasif.name" :label="clasif.label" />
              </div>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab">
              <q-tab-panel name="casa">
                <div class="row justify-start" v-if="store.serviciosCasa.length !== 0">
                  <div v-for="(s, index) in store.serviciosCasa" :key="s.id">
                    <TarjetaServicio
                      :servicio="s.attributes.servicio"
                      :foto="s.attributes.foto"
                      :descripcion="s.attributes.descripcion"
                      :id="s.id"
                      :color="'primary'"
                      v-if="index%2 == 0"
                    />
                    <TarjetaServicio
                      :servicio="s.attributes.servicio"
                      :foto="s.attributes.foto"
                      :descripcion="s.attributes.descripcion"
                      :id="s.id"
                      :color="'dark'"
                      v-else
                    />
                  </div>
                </div>
                <q-card flat class="q-mt-xl q-ml-lg q-mr-lg text-caption" v-else>
                  No hay servicios que mostrar
                </q-card>
              </q-tab-panel>
              <q-tab-panel name="red">
                <div class="row justify-start" v-if="store.serviciosRed.length !== 0">
                  <div v-for="(s, index) in store.serviciosRed" :key="index">
                    <TarjetaServicio
                      :servicio="s.attributes.servicio"
                      :foto="s.attributes.foto"
                      :descripcion="s.attributes.descripcion"
                      :id="s.id"
                      :color="'primary'"
                      v-if="index%2 == 0"
                    />
                    <TarjetaServicio
                      :servicio="s.attributes.servicio"
                      :foto="s.attributes.foto"
                      :descripcion="s.attributes.descripcion"
                      :id="s.id"
                      :color="'dark'"
                      v-else
                    />
                  </div>
                </div>
                <q-card flat class="q-mt-xl q-ml-lg q-mr-lg text-caption" v-else>
                  No hay servicios que mostrar
                </q-card>
              </q-tab-panel>
              <q-tab-panel name="instalacion">
                <div class="row justify-start" v-if="store.serviciosInstalacion.length !== 0">
                  <div v-for="(s, index) in store.serviciosInstalacion" :key="index">
                    <TarjetaServicio
                      :servicio="s.attributes.servicio"
                      :foto="s.attributes.foto"
                      :descripcion="s.attributes.descripcion"
                      :id="s.id"
                      :color="'primary'"
                      v-if="index%2 == 0"
                    />
                    <TarjetaServicio
                      :servicio="s.attributes.servicio"
                      :foto="s.attributes.foto"
                      :descripcion="s.attributes.descripcion"
                      :id="s.id"
                      :color="'dark'"
                      v-else
                    />
                  </div>
                </div>
                <q-card flat class="q-mt-xl q-ml-lg q-mr-lg text-caption" v-else>
                  No hay servicios que mostrar
                </q-card>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
      </div>
    </div>

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
import { date } from 'quasar'
import { ref, onBeforeMount } from 'vue'
import { useServiciosStore } from 'stores/servicios-store'
import TarjetaServicio from 'components/TarjetaServicio.vue'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const tab = ref('casa')

const store = useServiciosStore()

const clasificacion = [
  { id: '1', name: 'casa', label: 'En la casa' },
  { id: '2', name: 'red', label: 'En la red' },
  { id: '3', name: 'instalacion', label: 'En la instalación' }
]

onBeforeMount(() => {
  store.listarServicios()
})

</script>

<style lang="scss" scoped>
.my-card{
width: 240px;
height: 200px;
margin-bottom: 80px;
}

.icon{
position: absolute;
height: 90.7px;
width: 90.7px;
top: -45px;
right: 30%;
left: 30%;
}

.text-titulo {
font-size: 10pt;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
line-clamp: 1;
overflow: hidden;
text-align: center;
}

.text-descripcion {
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
line-clamp: 3;
overflow: hidden;
text-align: center;
}
</style>
