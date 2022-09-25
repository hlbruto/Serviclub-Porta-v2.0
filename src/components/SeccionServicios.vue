<template>
  <div>
    <div
      class="servicios full-width q-pb-xl"
      style="background-color: #f0f0f0 !important"
    >
      <div
        class="row full-width flex flex-center text-center"
        style="height: 200px"
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
        <div
          class="row q-gutter-x-lg justify-center"
          style="margin-top: 30px"
        >
          <div v-for="(el, index) in array1" :key="index">
            <q-card class="my-card text-center">
              <q-card-section>
                <q-img
                  class="icon"
                  :src="'portada/' + el.src"
                />
              </q-card-section>
              <q-card-section>
                <div class="text-h6 q-pb-sm text-primary text-titulo"
                    v-if="index%2 == 0"
                >
                  {{ el.title }}
                </div>
                <div class="text-h6 q-pb-sm text-dark text-titulo" v-else>{{ el.title }}</div>
                <div class="text-body1text-descripcion">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias repellat officiis aliquid, quia doloribus quibusdam!
                </div>
              </q-card-section>

              <q-card-actions vertical>
                 <q-btn
                  no-caps
                  class="text-white text-body1 q-px-lg bg-primary"
                  flat
                  v-if="index%2 != 0"
                >
                  Leer Más
                </q-btn>
                <q-btn
                  no-caps
                  class="text-white text-body1 q-px-lg bg-dark"
                  flat
                  v-else
                >
                  Leer Más
                </q-btn>
              </q-card-actions>
            </q-card>
            <!-- <TarjetaServicio /> -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import TarjetaServicio from 'components/TarjetaServicio'

const array1 = [
  {
    src: 'pc01.svg',
    title: 'Alquiler de computadora',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    color: 'primary'
  },
  {
    src: 'paint01.svg',
    title: 'Restauración digital de fotos y documentos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    color: 'dark'
  },
  {
    src: 'scanner01.svg',
    title: 'Digitalización de imágenes y documentos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    color: 'primary'
  },
  {
    src: 'cursos01.svg',
    title: 'Servicio de cursos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    color: 'dark'
  },
  {
    src: 'videocall01.svg',
    title: 'Videollamada',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    color: 'primary'
  },
  {
    src: 'servicios01.svg',
    title: 'Servicios profesionales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    color: 'dark'
  }
]

// const ind = 0
</script>

<style lang="scss" scoped>
.my-card{
width: 240px;
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
