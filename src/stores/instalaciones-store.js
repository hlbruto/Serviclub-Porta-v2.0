import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useInstalacionesStore = defineStore('instalaciones', {
  state: () => ({
    instalaciones: [],
    instalacionFavorita: {
      id: '',
      attributes: {
        nombre: '',
        direccion: ''
      }
    }
  }),

  getters: {},

  actions: {
    async listarInstalaciones () {
      try {
        await api.get('/api/instalacions?populate=*').then((res) => {
          this.instalaciones = res.data.data
        })
      } catch (error) {}
    }
  }
})
