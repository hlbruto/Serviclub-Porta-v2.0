<template>
  <div>
  <div class="col-6">
    <q-img
      style="height: calc(80vh - 50px) !important"
      src="~assets/hero01.jpg"
    >
      <template v-slot:loading>
        <q-spinner-gears color="white" />
      </template>

      <div class="absolute-full flex flex-center">
        <div class="col flex flex-center">
          <div class="text-h2 text-white text-bold q-pb-lg">
            Bienvenidos a Serviclub
          </div>
          <div class="flex flex-center text-center">
            <p class="text-white text-body1" style="width: 50%">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old..Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>

          <q-btn
            no-caps
            rounded
            class="self-end text-body1 q-px-lg"
            color="primary"
            label="Leer Más"
          />
        </div>
      </div>
    </q-img>
  </div>

  <q-page style="height: 100vh" color="primary">
    <SeccionServicios />

    <footer style="background-color: #2d333f; padding: 6.5rem 0 4rem">
        <div
          style="margin: 0px 79.5px; padding: 0px 15px; color: #fff"
          class="container row"
        >
          <div class="box col-4">
            <h3 class="encabezado">Acerca de</h3>
            <p>
              It was popularised in the 1960 with the release of Latest sheets
              containing Lorem Ipsum passage.
            </p>
            <div style="width: 90%">
              <q-btn
                no-caps
                rounded
                flat
                style="background-color: #232b38"
                class="btn btn-secondary text-body1 q-px-lg"
                >Leer Más</q-btn
              >
            </div>
          </div>
          <div class="box col-4">
            <h3 class="encabezado">Enlaces</h3>
            <ul>
              <li>
                <a class="text-subtitle1" href="http://www.jovenclub.cu">
                  http://www.jovenclub.cu
                </a>
              </li>
              <li>
                <a class="text-subtitle1" href="http://www.ecured.cu">
                  http://www.ecured.cu
                </a>
              </li>
              <li>
                <a class="text-subtitle1" href="http://www.mochila.cubava.cu">
                  http://www.mochila.cubava.cu
                </a>
              </li>
            </ul>
          </div>
          <div class="box col-4">
            <h3 class="encabezado">Síganos</h3>
            <div>
              <ul>
                <li>
                  <a
                    class="text-subtitle1"
                    href="https://www.facebook.com/codersgyan"
                  >
                    <q-icon class="q-mr-md" name="facebook"></q-icon>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/CoderGyan"
                    class="text-subtitle1"
                  >
                    <q-icon class="q-mr-md" name="mdi-twitter"></q-icon>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a class="text-subtitle1" href="#">
                    <q-icon class="q-mr-md" name="mdi-google"></q-icon>
                    <span>Google +</span>
                  </a>
                </li>
                <li>
                  <a
                    class="text-subtitle1"
                    href="https://www.instagram.com/codersgyan/"
                  >
                    <q-icon class="q-mr-md" name="mdi-instagram"></q-icon>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer class="copyright">
        <div>
          Copyright © 2022 .Todos los derechos reservados
          <a href="https://www.instagram.com/codersgyan/">Joven Club</a>.
        </div>
      </footer>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </q-page>
  </div>
</template>

<script setup>
import SeccionServicios from 'src/components/SeccionServicios.vue'
</script>
