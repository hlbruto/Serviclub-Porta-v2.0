import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useServiciosStore = defineStore('servicios', {
  state: () => ({
    servicios: [],
    servCasa: [],
    servRed: [],
    servInst: [],
    servicio: {},
    sigServicio: {}
  }),

  getters: {
    serviciosArray: (state) => state.servicios,
    serviciosCasa: (state) => state.servCasa,
    serviciosRed: (state) => state.servRed,
    serviciosInstalacion: (state) => state.servInst,
    unServicio: (state) => state.servicio,
    siguienteServicio: (state) => state.sigServicio
  },

  actions: {
    async listarServicios () {
      try {
        await api.get('/api/servicios').then((res) => {
          this.servicios = res.data.data
          this.clasificarServicios()
        })
      } catch (error) {}
    },

    clasificarServicios () {
      const element = []
      const element2 = []
      const element3 = []
      for (let index = 0; index < this.servicios.length; index++) {
        if (this.servicios[index].attributes.casa === true) {
          element.push(this.servicios[index])
        }
        if (this.servicios[index].attributes.red === true) {
          element2.push(this.servicios[index])
        }
        if (this.servicios[index].attributes.instalacion === true) {
          element3.push(this.servicios[index])
        }
      }
      this.servCasa = element
      this.servRed = element2
      this.servInst = element3
    },

    irAlServicio (id) {
      for (let index = 0; index < this.servicios.length; index++) {
        if (this.servicios[index].id === id) {
          this.servicio = this.servicios[index]
        }
      }
    },

    otroServicio (id) {
      for (let index = 0; index < this.servicios.length; index++) {
        if (this.servicios[index].id === id) {
          this.sigServicio = this.servicios[index + 1]
        }
      }
    }
  }
})
