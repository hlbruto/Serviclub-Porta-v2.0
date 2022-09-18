<template>
  <div class="col-6">
    <q-img
      style="height: calc(100vh - 66px) !important"
      src="~assets/hero01.jpg"
    >
      <div class="absolute-full flex flex-center">
        <div class="col flex flex-center">
          <div class="text-h2 text-white text-bold q-pb-lg">
            Bienvenidos a Serviclub
          </div>
          <div class="flex flex-center text-center">
            <p class="text-white text-body1" style="width: 50%">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden Sydney College in Virginia, The standard
              chunk of Lorem Ipsum used since the 1500s is reproduced below for
              those interested.
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

    <!-- <section class="full-height full-width" style="background-color: #1976d2">
      <div
        class="row full-width flex flex-center text-center"
        style="height: 200px"
      >
        <div class="">
          <div class="text-h4 text-black text-bold">Nuestros Productos</div>
        </div>
      </div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="black"
        navigation
        padding
        arrows
        class="text-black flex column justify-between q-mx-lg"
        style="background-color: transparent !important"
      >
        <q-carousel-slide
          name="style"
          class="column no-wrap items-end"
          style="width: 95%; padding-right: 0px"
        >
          <div
            class="card-container flex row justify-between"
            style="width: 95%"
          >
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 20px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img01.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    class="text-body1 q-px-lg"
                    q-px-lg
                    no-caps
                    rounded
                    color="primary"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 15px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                elevated
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img02.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="tv"
          class="column no-wrap items-end"
          style="width: 95%; padding-right: 0px"
        >
          <div
            class="card-container flex row justify-between"
            style="width: 95%"
          >
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 20px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img01.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 15px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                elevated
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img02.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="layers"
          class="column no-wrap items-end"
          style="width: 95%; padding-right: 0px"
        >
          <div
            class="card-container flex row justify-between"
            style="width: 95%"
          >
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 20px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img01.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 15px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                elevated
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img02.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="map"
          class="column no-wrap items-end"
          style="width: 95%; padding-right: 0px"
        >
          <div
            class="card-container flex row justify-between"
            style="width: 95%"
          >
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 20px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img01.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
            <q-card
              class="flex row items-center text-black"
              style="width: 45%; padding: 15px 0; height: 250px"
            >
              <q-card-section
                class="col-3"
                elevated
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 5px;
                  padding: 0px;
                  overflow: hidden;
                  position: relative;
                  left: -40px;
                "
              >
                <img style="width: 100%" src="../assets/img02.jpg" />
              </q-card-section>

              <q-card-section
                class="col-6 q-pt-none flex column justify-between"
                style="padding-bottom: 0px; height: 200px"
              >
                <div>
                  <div class="text-h6" style="color: #1976d2">
                    Nombre de producto
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias repellat officiis aliquid, quia doloribus quibusdam!
                  </p>
                </div>
                <div>
                  <q-btn
                    no-caps
                    rounded
                    color="primary"
                    class="text-body1 q-px-lg"
                    >Ver Más</q-btn
                  >
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section> -->
    <!-- <section>
      <div
        class="full-height full-width"
        style="
          background-color: rgba(255, 255, 255, 1) !important;
          z-index: 0;
          height: 100vh !important;
        "
      >
        <div
          class="row full-width flex flex-center text-center"
          style="height: 200px"
        >
          <div class="">
            <div class="text-h4 text-black text-bold">Acerca de nosotros</div>
          </div>
        </div>

        <div class="row flex q-ml-lg q-mr-lg" style="height: 330px">
          <div class="col flex flex-center q-ml-lg q-mr-lg">
            <q-img
              style="height: 330px; width: 85%"
              src="~assets/img01.jpg"
            ></q-img>
          </div>
          <div class="col flex q-ml-lg q-mr-lg">
            <div class="text-h5 text-black text-bold q-pb-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat
            </div>
            <p class="text-black text-subtitle1">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden Sydney College in Virginia, The standard
              chunk of Lorem Ipsum used since the 1500s is reproduced below for
              those interested.
            </p>
            <q-btn
              no-caps
              rounded
              class="self-end text-body1 q-px-lg"
              text-color="white"
              style="background-color: #222"
              label="Leer Más"
            />
          </div>
        </div>
      </div>
    </section> -->

    <!--     <section class="contact-us flex items-center">
      <div class="contact-info-wrapper">
        <h1 class="text-h4 text-black text-bold text-center title">
          Contáctenos
        </h1>
        <div class="contact-info">
          <div>
            <div class="flex items-center q-mb-md">
              <img class="contct-icon" src="../assets/phone-2.svg" alt="" />
              <div class="flex column">
                <span class="text-h6">Llámenos:</span>
                <span class="text-subtitle1">(+84) 123 456 789</span>
              </div>
            </div>

            <div class="flex items-center q-mb-md">
              <img class="contct-icon" src="../assets/bag-2.svg" alt="" />
              <div class="flex column">
                <span class="text-h6">E-mail:</span>
                <span class="text-subtitle1">support@freshmeal.com</span>
              </div>
            </div>

            <div class="flex items-center q-mb-md">
              <img class="contct-icon" src="../assets/clock-2.svg" alt="" />
              <div class="flex column">
                <span class="text-h6">Horario de atención:</span>
                <span class="text-subtitle1">Lun - Sab (8.00am - 6.30pm)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <img src="../assets/map.png" />
        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45012861438!2d-115.31508258571672!3d36.124918453865035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sru!4v1580850940897!5m2!1sen!2sru"
                            width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
    </section> -->
    <section class="footer" style="height: 360px">
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
                    <!--img src="./icons/facebook.svg" alt="" /-->
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/CoderGyan"
                    class="text-subtitle1"
                  >
                    <q-icon class="q-mr-md" name="mdi-twitter"></q-icon>
                    <!--img src="./icons/twitter.svg" alt="" /-->
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a class="text-subtitle1" href="#">
                    <q-icon class="q-mr-md" name="mdi-google"></q-icon>
                    <!--img src="./icons/google.svg" alt="" /-->
                    <span>Google +</span>
                  </a>
                </li>
                <li>
                  <a
                    class="text-subtitle1"
                    href="https://www.instagram.com/codersgyan/"
                  >
                    <q-icon class="q-mr-md" name="mdi-instagram"></q-icon>
                    <!--img src="./icons/instagram.svg" alt="" /-->
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
    </section>
    <!--  <section>
      <div
        class="full-height full-width"
        style="
          background-color: rgba(255, 255, 255, 1) !important;
          z-index: 0;
          height: 100vh !important;
        "
      >
        <q-parallax :height="500" :speed="0.5">
          <template v-slot:media>
            <img src="~assets/img01.jpg" />
          </template>

          <h4 class="text-white">Nuestras cifras esta semana</h4>
        </q-parallax>
      </div>
    </section> -->

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="grey-9" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
// import { ref } from 'vue'
import SeccionServicios from 'src/components/SeccionServicios.vue'

/* const slide = ref('1')
const lorem = ref('Lorem ipsum dolor sit amet') */
</script>
