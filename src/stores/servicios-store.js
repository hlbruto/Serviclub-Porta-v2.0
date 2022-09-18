import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
// import { useQuasar, QSpinnerGears } from 'quasar'

// const $q = useQuasar()

export const useServiciosStore = defineStore('servicios', {
  state: () => ({
    servicios: ['qw', 'sad']
  }),

  getters: {
    listServicios: (state) => state.servicios
  },

  actions: {
    async listarServicios () {
      /* $q.loading.show({
        spinner: QSpinnerGears,
        spinnerColor: 'primary',
        messageColor: 'black',
        backgroundColor: 'blue',
        message: 'Cargando los servicios...'
      })
 */
      try {
        await api.get('/api/servicios').then((res) => {
          console.log(res)
          this.servicios = res.data
          // $q.loading.hide()
        })
      } catch (error) {
        /* $q.loading.hide()
        $q.notify({
          type: 'warning',
          message: 'Ha ocurrido un error. Contacte al administrador.'
        }) */
      }
      // this.servicios = ['q', '1']
    }
  }
})
