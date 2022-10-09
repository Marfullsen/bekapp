import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: localStorage.getItem('current-user'),
    isAdmin: false,
    role: 'admin' // admin, supervisor, colaborador
  }),
  getters: {
    isLogged: (state) => state.name||false,
  },
  actions: {
    async login(username, password) {
      this.name = username.value
      localStorage.setItem('current-user', this.name)
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            {
              username,
              password
            }
          )
        };
        this.userData = await fetch("api/login", requestOptions)
      } catch (error) {
        console.log('Error al intentar iniciar sesión.')
        return error
      }
    },
    logout() {
      this.name = null;
      localStorage.removeItem('current-user')
    },
  },
})