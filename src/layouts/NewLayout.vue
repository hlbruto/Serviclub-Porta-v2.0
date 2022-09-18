<template>
  <q-layout view="hHh lpR fFf">
    <!--lHh lpr lFf-->
    <div
      v-bind:class="{
        main: $q.platform.is.desktop,
        mobile_main: $q.platform.is.ipad || $q.platform.is.mobile,
      }"
      class="full-height"
      style="background-color: rgba(0, 0, 0, 0.7)"
    >
      <q-header
        class="q-py-sm q-px-xl"
        style="background-color: rgba(0, 0, 0, 0.7)"
      >
        <q-toolbar class="text-h4">
          <q-btn
            class="q-mr-md"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            v-if="$q.platform.is.mobile"
          />

          <div class="flex items-center">
            <img
              src="../assets/logo01.png"
              style="height: 30px; margin-right: 5px"
            />
            <div class="text-h5">ServiClub</div>
          </div>

          <q-space></q-space>

          <ToggleDarkMode />

          <q-btn
            icon="home"
            label="Inicio"
            flat
            to="/inicio"
          />

          <q-btn
            icon="streetview"
            label="Servicios"
            flat
            to="/servicios"
          />

          <q-btn round icon="person" color="primary" dense>
            <q-menu auto-close>
              <q-list dense>
                <q-item clickable to="/dashboard">
                  <q-item-section>
                    Mis Pedidos
                  </q-item-section>
                </q-item>

                <q-item clickable to="/perfil">
                  <q-item-section>
                    Perfil
                  </q-item-section>
                </q-item>

                <q-item clickable to="/inicio">
                  <q-item-section>
                    Salir
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        behavior="desktop"
        bordered
        :width="200"
        :breakpoint="500"
        v-if="$q.platform.is.mobile"
      >
        <q-list>
          <q-item-label
            header
          >
            Menu
          </q-item-label>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>

        <div>
          <small class="row justify-center text-grey-7">
            {{ formattedString }}
          </small>
        </div>
      </q-drawer>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar, date } from 'quasar'
import ToggleDarkMode from 'src/components/ToggleDarkMode.vue'
import EssentialLink from 'components/EssentialLink.vue'

const $q = useQuasar()
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const essentialLinks = [
  {
    title: 'Inicio',
    caption: 'quasar.dev',
    icon: 'home',
    link: 'inicio'
  },
  {
    title: 'Servicios',
    caption: 'github.com/quasarframework',
    icon: 'streetview',
    link: 'servicios'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
