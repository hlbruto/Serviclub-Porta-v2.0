<template>
  <q-page>
    <div>
      <small class="q-mt-sm q-mr-sm row justify-end text-grey-7">
        {{ formattedString }}
      </small>

      <div class="q-mt-sm q-ml-xl q-mr-xl row justify-between text-grey-7">
        <a href="#/servicios">Página Anterior</a>
        <a @click="mostrarOtroServicio()">Ver otro Servicio</a>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-card flat bordered>
          <div class="row justify-around">
            <q-card-section class="col-5">
              <div class="col-6">
                <q-img
                  class="icon2"
                  :src="'portada/' + store.unServicio.attributes.foto"
                />
                <q-item-label class="text-h6 q-mb-md text-center">
                  {{ store.unServicio.attributes.servicio }}
                </q-item-label>
                <q-item-label>{{ store.unServicio.attributes.descripcion }}</q-item-label>
                <q-item-label>Precio: {{ store.unServicio.attributes.Precio }}</q-item-label>
              </div>
            </q-card-section>
            <q-separator vertical inset />
            <q-card-section class="col-6">
              <div class="col-6">
                <q-item-label class="q-mb-lg text-h6 text-primary">Solicitar el Servicio:</q-item-label>
                <PedidoForm />
              </div>
              <q-card-actions align="between">
                <q-btn
                  no-caps
                  class="text-white text-body1 full-width bg-primary"
                  style="width: 200px"
                >
                  Escoger instalación
                </q-btn>
                <q-btn
                  no-caps
                  class="text-white text-body1 q-mt-md full-width bg-primary"
                  flat
                  style="width: 200px"
                  disable
                >
                  Solicitar el Servicio
                </q-btn>
              </q-card-actions>
            </q-card-section>
          </div>
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
// import { ref } from 'vue'
import { useServiciosStore } from 'stores/servicios-store'
// import { useRouter } from 'vue-router'
import PedidoForm from 'components/PedidoForm.vue'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const store = useServiciosStore()
// const router = useRouter()

async function mostrarOtroServicio () {
  console.log('otro')
  // await store.otroServicio(store.unServicio.id)
  // store.irAlServicio(store.siguienteServicio.id)
}

</script>

<style lang="scss" scoped>
.my-card{
width: 240px;
height: 200px;
margin-bottom: 80px;
}

.icon2{
height: 90.7px;
width: 90.7px;
left: 40%;
margin-bottom: 40px;
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
