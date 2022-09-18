import { useRouter } from 'vue-router'
import { useIdentityPasswordLogin, useAuthState } from '@vueauth/core'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'

export default () => {
  const router = useRouter()
  const $q = useQuasar()
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
  const authorization = ref(null)

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

    $q.localStorage.set('jwt', data.jwt) // para guardar el token

    authorization.value = {
      headers: {
        Authorization: `Bearer ${data.jwt}`
      }
    }

    llenarDatosUser()
  }

  async function llenarDatosUser () {
    try {
      await api
        .get('/api/users/me?populate=*', authorization.value)
        .then((res) => {
          /* $q.localStorage.set('user', res.data)
          $q.localStorage.set('role', res.data.role.name) */

          console.log(res.data)
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
