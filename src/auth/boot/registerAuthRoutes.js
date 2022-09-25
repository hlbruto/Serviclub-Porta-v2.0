import { boot } from 'quasar/wrappers'

export default boot(({ router }) => {
  router.addRoute('/', {
    path: '/',
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'inicio', component: () => import('pages/IndexPage.vue') },
      { path: 'servicios', component: () => import('pages/ServiciosPage.vue') },
      { path: 'servicio/:id', component: () => import('pages/UnServicioPage.vue') },
      { path: 'dashboard', component: () => import('pages/UserDashboard.vue') },
      { path: 'perfil', component: () => import('src/pages/UserProfile.vue') }
    ]
  })

  router.addRoute('/', {
    name: 'auth.login',
    path: '/',
    meta: { unauthOnly: true },
    component: () => import('layouts/NewLayout.vue'),
    children: [
      {
        path: '/login', component: () => import('src/auth/pages/IdentityPasswordLoginPage.vue')
      }
    ]
  })
})
