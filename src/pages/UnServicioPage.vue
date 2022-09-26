<template>
  <q-page>
    <div>
      <small class="q-mt-sm q-mr-sm row justify-end text-grey-7">
        {{ formattedString }}
      </small>

      <div class="q-mt-sm q-ml-xl q-mr-xl row justify-between text-grey-7">
        <a href="#/servicios">Volver a Servicios</a>
      </div>
    </div>

    <div class="q-pa-lg">
      <div class="q-gutter-y-md">
        <q-card flat bordered>
          <div class="q-mt-lg q-mb-lg row justify-around">
            <q-card-section class="col-4">
              <div>
                <q-img
                  class="icon2"
                  :src="'portada/' + store.unServicio.attributes.foto"
                />
                <q-item-label class="text-h5 q-mb-md text-center">
                  {{ store.unServicio.attributes.servicio }}
                </q-item-label>
                <q-item-label class="text-body2">
                  {{ store.unServicio.attributes.descripcion }}
                </q-item-label>
                <q-item-label class="text-body1" style="margin-top:30px">
                  <strong>Precio:</strong> {{ store.unServicio.attributes.Precio }}
                </q-item-label>
              </div>
            </q-card-section>

            <q-separator vertical inset />

            <q-card-section class="col-7">
              <div>
                <q-item-label class="q-mb-xl text-h6 text-primary text-center">
                  Detalles del Servicio que desea solicitar:
                </q-item-label>
                <PedidoForm />
              </div>

              <div class="row justify-end">
                <q-btn
                  no-caps
                  class="text-white text-body1 q-mt-md bg-primary"
                  push
                  disable
                >
                  Solicitar el Servicio
                </q-btn>
                <q-btn
                  class="text-primary q-mt-md q-ml-md"
                  push
                  label="Cancelar"
                  to="/servicios"
                >
                </q-btn>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>

    <InstalacionDialogo />

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
import InstalacionDialogo from 'components/dialogs/ElegirInstalacion.vue'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const store = useServiciosStore()
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
