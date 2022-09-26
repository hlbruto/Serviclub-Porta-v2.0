<template>
  <div>
    <div
      class="servicios full-width q-pb-xl"
      style="background-color: #f0f0f0 !important"
    >
      <div
        class="row full-width flex flex-center text-center"
        style="height:200px"
      >
        <div>
          <div class="text-h4 text-black text-bold">Nuestros Servicios</div>
          <q-item-label class="text-black">
            Algunos de los Servicios que ofrecemos <br><br>
            <a href="#/servicios">VER TODOS</a>
          </q-item-label>
        </div>
      </div>

      <div paddind style="padding: 0 100px">
          <div class="row justify-center"
            style="margin-top:10px"
            v-if="store.servicios.length !== 0"
          >
            <div class="col-4" v-for="(s, index) in store.servicios" :key="s.id">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useServiciosStore } from 'stores/servicios-store'
import TarjetaServicio from 'components/TarjetaServicio.vue'

const store = useServiciosStore()

onBeforeMount(() => {
  store.listarServicios()
})
</script>
