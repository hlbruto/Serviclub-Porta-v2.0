import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const usePedidosStore = defineStore('pedidos', {
  state: () => ({
    pedidos: []
  }),

  getters: {},

  actions: {
    async listarPedidos () {
      try {
        await api.get('/api/pedidos?populate=*').then((res) => {
          this.pedidos = res.data.data
          console.log('ped:', this.pedidos)
        })
      } catch (error) {}
    }
  }
})
