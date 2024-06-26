import {defineStore} from 'pinia'

export const useCounterStore = defineStore('user', {
    state: () => ({
        token: '',
        isAuthenticated: false,
        user: null,
    }),
    getters: {
        getAuthenticated(state) {
            return state.isAuthenticated
        },
        getToken(state) {
            return state.token
        },
        getUser(state) {
            return state.user
        }
    },
    actions: {
        setUser(token, user) {
            this.token = token
            this.isAuthenticated = !!token
            this.user = user
        },
        clearToken() {
            this.token = ''
            this.isAuthenticated = false
            this.user = null
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user',
                storage: localStorage,
                paths: ['token', 'isAuthenticated', 'user']
            }
        ]
    }
})
