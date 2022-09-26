<template>
  <q-card bordered
    class="q-mt-xl q-ml-lg q-mr-lg my-cardS text-center"
  >
    <q-card-section>
      <q-img
        class="iconS"
        :src="'portada/' + props.foto"
      />
    </q-card-section>
    <q-card-section>
      <div class="text-h6 q-pb-sm text-primary text-tituloS" v-if="color == 'primary'">
        {{ props.servicio }}
      </div>
      <div class="text-h6 q-pb-sm text-dark text-tituloS" v-else>
        {{ props.servicio }}
      </div>
      <div class="text-body2 text-descripcionS">
        {{ props.descripcion }}
      </div>
    </q-card-section>
    <q-card-actions vertical>
      <q-btn
        no-caps
        class="text-white text-body1 q-px-lg bg-dark"
        flat
        @click="elegirServicio()"
        v-if="color == 'primary'"
      >
        Solicitar
      </q-btn>
      <q-btn
        no-caps
        class="text-white text-body1 q-px-lg bg-primary"
        flat
        @click="elegirServicio()"
        v-else
      >
        Solicitar
      </q-btn>
</q-card-actions>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { useServiciosStore } from 'stores/servicios-store'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: {
    type: Number,
    require: true
  },
  servicio: {
    type: String,
    require: true
  },
  foto: {
    type: String,
    require: true
  },
  descripcion: {
    type: String,
    require: true
  },
  color: {
    type: String,
    require: true
  }
})

const store = useServiciosStore()
const router = useRouter()

async function elegirServicio () {
  await store.irAlServicio(props.id)
  console.log('func', props.id)
  router.push({ path: 'servicio/' + props.id })
}
</script>

<style lang="scss">
.my-cardS{
  max-width: 250px;
  margin-bottom: 80px;
}

.my-cardS:hover {
  background: radial-gradient(circle, #e1eaf1 0%, #bcd7f7 100%);
  // border-color: #0a0349;
  // border-width: 0.5pt;
  width: 100%;
}

.iconS{
  position: absolute;
  height: 90.7px;
  width: 90.7px;
  top: -45px;
  right: 30%;
  left: 30%;
}

.text-tituloS {
  font-size: 10pt;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-align: center;
}

.text-descripcionS {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-align: center;
}
</style>
