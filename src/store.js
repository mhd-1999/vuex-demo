import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        todo: {
            id: 1,
            text: "This is a test",
            completed: false
        },
        fullName: '123', loading: false
    },
    mutations: {
        SET_FULL_NAME(state, text) {
            console.log("SET_FULL_NAME", text);
            state.fullName = text;
        },
        SET_LOADING(state, payload) {
            state.loading = payload
        }
    },
    getters: {
        getTodo: state => state.todo.completed,
        // fullName: state => state.fullName
    },
    actions: {
        setLoading({ commit }, payload) {
            console.log("2")
            commit("SET_LOADING", payload)
        },
        async getProvinde({ commit, },) {
            try {
                const response = await fetch('/api/provinde');
                if (response.statusCode === 200) {
                    commit("SET_FULL_NAME", response.data);
                }
            }
            catch (error) {
                console.log("getProvinde error: " + error)
            }
            finally {
                // remove
            }


        }
    }
})