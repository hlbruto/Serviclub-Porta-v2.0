import { useIdentityPasswordLogout } from '@vueauth/core'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useUsuariosStore } from 'stores/usuarios-store'

export default () => {
  const router = useRouter()
  const $q = useQuasar()
  const storeUsuarios = useUsuariosStore()

  const { logout, loading } = useIdentityPasswordLogout()

  async function onLogoutClicked () {
    await logout()
    $q.localStorage.clear()
    storeUsuarios.logueado = false
    router.push('/')
  }

  return {
    logout,
    loading,
    onLogoutClicked
  }
}
