import {defineStore} from 'pinia'

export const useCounterStore = defineStore('user', {
    /**
     * @params {token,isAuthenticated,user}
     * @returns {{isAuthenticated: boolean, user: null, token: string}}
     */
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
        /**
         * 设置用户登录状态，储存token
         * @param token
         * @param user
         */
        setUser(token, user) {
            this.token = token
            this.isAuthenticated = !!token
            this.user = user
        },
        /**
         * 清除用户登录状态
         */
        clearToken() {
            this.token = ''
            this.isAuthenticated = false
            this.user = null
        }
    },
    /**
     * 持久化配置
     */
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
