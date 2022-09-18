import { useIdentityPasswordLogout } from '@vueauth/core'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()

  const { logout, loading } = useIdentityPasswordLogout()

  async function onLogoutClicked () {
    await logout()
    console.log('me deloguee')
    router.push('/')
  }

  return {
    logout,
    loading,
    onLogoutClicked
  }
}
