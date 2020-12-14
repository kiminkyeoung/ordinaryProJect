import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

// Polyfill for `window.fetch()`
require('whatwg-fetch')

export default () => new Vuex.Store({

    state: () => ({
        authUser: null
    }),

    mutations: {
        SET_USER: function(state, user) {
            state.authUser = user;
        },
        FLUSH_FLASH(state) {
            state.flash = null
        }
    },
    getters: {
        ID(state) {
            return state.authUser["ID"];
        },
        Role(state) {
            return state.authUser["Role"];
        }
    },
    actions: {
        nuxtServerInit({ commit }, { req }) {
            if (req.session.authUser) {
                commit('SET_USER', req.session.authUser)
            }
        },
        errorHandler({ state }, message) {
            state.Snotify.error(message)
        },
        async login({ commit }, { id, password }) {
            console.log("fetch login")
            return fetch('/api/user/login', {
                    // Send the client cookies to the server
                    credentials: 'same-origin',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id,
                        password
                    })
                })
                .then(response => response.json())
                .then(json => {
                    //handle json response
                    if (json.result === 'login fail') {
                        throw new Error(json.message)
                    } else {
                        return json
                    }
                })
                // .then((res) => {
                //   if (res.status === 401) {
                //     console.log(res.json());
                //     return res.json();
                //     //throw new Error('Bad credentials')
                //   } else {
                //     return res.json()
                //   }
                // })
                .then((authUser) => {
                    commit('SET_USER', authUser)
                })
        }
    },
    async logout({ commit }) {
        console.log("fetch logout")
        return fetch('/api/user/logout', {
                // Send the client cookies to the server
                credentials: 'same-origin',
                method: 'POST'
            })
            .then(() => {
                commit('SET_USER', null)
            })
    }
})