<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-avatar>
          <img src="nuestro-logo.png">
        </q-avatar>

        <q-toolbar-title>
          Serviclub
        </q-toolbar-title>

        <ToggleDarkMode />

        <q-btn
          icon="home"
          label="Inicio"
          flat
          size="sm"
          to="/"
        />

        <q-btn
          icon="streetview"
          label="Servicios"
          flat
          size="sm"
          to="/servicios"
        />

        <q-btn
          icon="dashboard"
          label="Mis Pedidos"
          flat
          size="sm"
          to="/dashboard"
        />

        <q-btn
          icon="mdi-cogs"
          label="Perfil"
          flat
          size="sm"
          to="/perfil"
        />

        <q-btn
          icon="login"
          label="Entrar"
          flat
          size="sm"
          to="/login"
        />

        <q-btn
          icon="logout"
          label="Salir"
          flat
          size="sm"
          @click="onLogoutClicked"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      behavior="desktop"
      bordered
      :width="200"
      :breakpoint="500"
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
    </q-drawer>

    <q-page-container>
      <div><small class="q-mt-xs q-mr-xs row justify-end text-grey-7">{{ formattedString }}</small></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { date } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'
import ToggleDarkMode from 'src/components/ToggleDarkMode.vue'
import useLogout from 'src/auth/composables/useLogout'

const { onLogoutClicked } = useLogout()

const essentialLinks = [
  {
    title: 'Inicio',
    caption: 'quasar.dev',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Servicios',
    caption: 'github.com/quasarframework',
    icon: 'streetview',
    link: 'servicios'
  },
  {
    title: 'Mis Pedidos',
    caption: 'quasar.dev',
    icon: 'dashboard',
    link: 'dashboard'
  },
  {
    title: 'Mi Perfil',
    caption: 'chat.quasar.dev',
    icon: 'mdi-cogs',
    link: 'perfil'
  }
  /* {
    title: 'Inicio',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Servicios',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Mi Perfil',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  }
  {
    title: '',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  } */
]
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
