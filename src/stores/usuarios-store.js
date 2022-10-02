import { defineStore } from 'pinia'
// import { api } from 'src/boot/axios'

export const useUsuariosStore = defineStore('usuarios', {
  state: () => ({
    logueado: false,
    user: {},
    role: {},
    token: '',
    authorization: ''
  }),

  getters: {},

  actions: {}
})
