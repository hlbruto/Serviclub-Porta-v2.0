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
              src="nuestro-logo.png"
              style="height: 30px; margin-right: 5px"
              v-if="$q.platform.is.desktop"
            />
            <div class="text-h5">ServiClub</div>
          </div>

          <q-space></q-space>

          <q-btn
            icon="home"
            label="Inicio"
            flat
            to="/inicio"
            v-if="$q.platform.is.desktop"
          />

          <q-btn
            icon="streetview"
            label="Servicios"
            flat
            to="/servicios"
            v-if="$q.platform.is.desktop"
          />

          <q-btn round icon="person" color="primary" dense v-if="storeUsuarios.logueado == true">
            <q-menu auto-close
              transition-show="scale"
              transition-hide="scale"
            >
              <q-list>
                <q-item><ToggleDarkMode /></q-item>
                <q-item
                  clickable
                  to="/dashboard"
                >
                  <q-item-section side>
                    <q-icon
                      size="xs"
                      name="dashboard"
                    />
                  </q-item-section>
                  <q-item-section>Mis Pedidos</q-item-section>
                </q-item>
                <q-item
                  clickable
                  to="/perfil"
                >
                  <q-item-section side>
                    <q-icon
                      size="xs"
                      name="settings"
                    />
                  </q-item-section>
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-separator />
                <AuthLogoutItem />
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn round icon="login" color="primary" dense to="/login" v-if="storeUsuarios.logueado == false" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        behavior="mobile"
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
      </q-drawer>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUsuariosStore } from 'stores/usuarios-store'
import ToggleDarkMode from 'src/components/ToggleDarkMode.vue'
import EssentialLink from 'components/EssentialLink.vue'
import AuthLogoutItem from 'src/auth/components/AccountMenu/LogoutItem.vue'

const storeUsuarios = useUsuariosStore()

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
