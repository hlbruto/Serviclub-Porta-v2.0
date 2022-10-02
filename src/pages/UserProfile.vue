<template>
  <q-page class="q-pa-sm">
    <div>
      <small class="q-mt-sm q-mr-sm row justify-end text-grey-7">
        {{ formattedString }}
      </small>
    </div>

    <div class="row q-col-gutter-sm">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card bordered flat>
          <q-card-section class="text-h6 ">
            <div class="text-h6">Editar Perfil</div>
            <div class="text-subtitle2">Complete su perfil</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <q-avatar size="100px">
                    <img src="avatar.jpg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-btn label="Foto" class="text-capitalize" rounded color="primary"
                    style="max-width: 120px"></q-btn>
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user.username" label="Usuario"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user.email" label="Correo electrónico"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="firstName" label="Nombre(s)"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="lastName" label="Apellidos"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input autogrow dense v-model="user.address" label="Dirección"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user.city" label="Municipio"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="postCode" label="Provincia"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-primary text-white">Actualizar</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">

        <q-card flat bordered>
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="100px" class="shadow-10">
              <img src="avatar.jpg">
            </q-avatar>
            <div class="text-subtitle2 q-mt-lg">{{ user.email }}</div>
            <div class="text-h6 q-mt-md">{{ user.username }}</div>
          </q-card-section>
          <q-card-section>
            <q-item>
              <q-item-section avatar>
            <q-item-label>
              <div class="text-body1">Saldo de su cuenta JC:</div>
            </q-item-label>
            <q-item-label class="text-bold text-primary">$1000.00</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-section>
            <div class="text-body2 text-justify">
              {{ user.address }} - {{ user.city }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card flat bordered>
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Cambiar Contraseña</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Contraseña Anterior
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input type="password" dense outlined round
                         v-model="oldPass"
                         label="Contraseña Anterior"/>
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Nueva Contraseña
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input type="password" dense outlined round v-model="newPass"
                         label="Nueva Contraseña"/>
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Confirme Nueva Contraseña
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input type="password" dense outlined round
                         v-model="ConfPass"
                         label="Confirme Nueva Contraseña"/>
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-primary text-white">Cambiar contraseña</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

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
import { ref, onBeforeMount } from 'vue'
import { date, useQuasar } from 'quasar'
// import { api } from 'src/boot/axios'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const $q = useQuasar()

const user = ref(null)
const firstName = ref('')
const lastName = ref('')
const postCode = ref('')
const oldPass = ref('')
const newPass = ref('')
const ConfPass = ref('')

onBeforeMount(() => {
  user.value = $q.localStorage.getItem('user')
  console.log('us', user.value)
})
</script>

<style scoped>

.card-bg {
  background-color: #e1e4eb83;
}
</style>
