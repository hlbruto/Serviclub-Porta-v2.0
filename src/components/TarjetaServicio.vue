<template>
  <q-card bordered
    class="q-mt-xl q-ml-lg q-mr-lg my-card text-center"
    @click="elegirServicio()"
  >
    <q-card-section>
      <q-img
        class="icon"
        :src="'portada/' + props.foto"
      />
    </q-card-section>
    <q-card-section>
      <div class="text-h6 q-pb-sm text-primary text-titulo" v-if="color == 'primary'">
        {{ props.servicio }}
      </div>
      <div class="text-h6 q-pb-sm text-dark text-titulo" v-else>
        {{ props.servicio }}
      </div>
      <div class="text-body1text-descripcion">
        {{ props.descripcion }}
      </div>
    </q-card-section>
    <q-card-actions vertical>
      <q-btn
        no-caps
        class="text-white text-body1 q-px-lg bg-dark"
        flat
        v-if="color == 'primary'"
      >
        Leer Más
      </q-btn>
      <q-btn
        no-caps
        class="text-white text-body1 q-px-lg bg-primary"
        flat
        v-else
      >
        Leer Más
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
.my-card{
width: 100%;
margin-bottom: 80px;
}
.my-card:hover {
  background: radial-gradient(circle, #e1eaf1 0%, #bcd7f7 100%);
  // border-color: #0a0349;
  // border-width: 0.5pt;
  width: 100%;
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
-webkit-line-clamp: 2;
line-clamp: 2;
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
