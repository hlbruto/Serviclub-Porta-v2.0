<template>
  <q-page class="q-pa-sm">
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
                  <q-input dense v-model="user_details.user_name" label="Usuario"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user_details.email" label="Correo electrónico"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user_details.first_name" label="Nombre(s)"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user_details.last_name" label="Apellidos"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input autogrow dense v-model="user_details.address" label="Dirección"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user_details.city" label="Municipio"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input dense v-model="user_details.post_code" label="Provincia"/>
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input type="textarea" dense v-model="user_details.about" label="Escriba algo sobre ud."/>
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
            <div class="text-subtitle2 q-mt-lg">pratik@cubava.cu</div>
            <div class="text-h6 q-mt-md">Pratik Patel</div>
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
              My name is Pratik Patel (also known as @pratik227). I noticed myself pulling into programming since 2013,
              and then determined myself to become a skilled and knowledgeable programmer. My passion for my programming
              increases as I started working for Incentius (where I am currently working in).
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
                         v-model="password_dict.current_password"
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
                <q-input type="password" dense outlined round v-model="password_dict.new_password"
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
                         v-model="password_dict.confirm_new_password"
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
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserProfile',
  setup () {
    return {
      user_details: {},
      password_dict: {}
    }
  }
})
</script>

<style scoped>

.card-bg {
  background-color: #e1e4eb83;
}
</style>
