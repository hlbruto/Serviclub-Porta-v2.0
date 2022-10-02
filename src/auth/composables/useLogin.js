import { useIdentityPasswordLogin, useAuthState } from '@vueauth/core'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import { useUsuariosStore } from 'stores/usuarios-store'

export default () => {
  const $q = useQuasar()
  const router = useRouter()
  const storeUsuarios = useUsuariosStore()
  const {
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    login,
    isReauthenticating,
    resetForm,
    resetErrors
  } = useIdentityPasswordLogin()
  const { user } = useAuthState()

  async function onLoginClicked () {
    resetErrors()
    await login()
    if (!hasErrors.value) {
      autenticarConToken()
    }
  }

  async function autenticarConToken () {
    const { data } = await api.post('/api' + '/auth/local', {
      identifier: form.value.email,
      password: form.value.password
    })
    console.log(data)

    $q.localStorage.set('jwt', data.jwt) // para guardar el token
    storeUsuarios.token = data.jwt

    storeUsuarios.authorization = {
      headers: {
        Authorization: `Bearer ${data.jwt}`
      }
    }
    $q.localStorage.set('authorization', storeUsuarios.authorization) // para guardar la cabecera
    llenarDatosUser()
  }

  async function llenarDatosUser () {
    try {
      await api
        .get('/api/users/me?populate=*', storeUsuarios.authorization)
        .then((res) => {
          storeUsuarios.user = res.data
          $q.localStorage.set('user', res.data)
          storeUsuarios.role = res.data.role.name
          storeUsuarios.logueado = true
          router.push({ path: 'dashboard' })
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * For some auth providers reauthentication requires an email address.
   * This function prefills the email if possible,
   * thus saving the user from typing it in
   */
  function attemptSetEmailOnForm () {
    if (typeof form.value.email === 'string' && user.value?.email) {
      form.value.email = user.value.email
    }
  }

  return {
    onLoginClicked,
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    login,
    resetForm,
    isReauthenticating,
    attemptSetEmailOnForm
  }
}
