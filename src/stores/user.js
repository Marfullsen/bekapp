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
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      };

      const response = await Promise.resolve(username) //fetch("api/login", requestOptions);

      // Usuario de prueba.
      if (username == 'ico' && password == '123') {
        this.name = username;
        localStorage.setItem('current-user', this.name);
        return true
      }

      if (response && response.status == 200) {
        this.name = username;
        localStorage.setItem('current-user', this.name);
        return true;
      }

      console.log('Error al intentar iniciar sesión.');
      return false;
    },
    logout() {
      this.name = null;
      localStorage.removeItem('current-user');
    },
  },
})