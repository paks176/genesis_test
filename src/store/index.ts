import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        selectedAction: "",
        results: [],
    },
    actions: {
        setAction(context, selectAction): void {
            if (selectAction) {
                context.commit('changeAction', selectAction);
            }
        }
    },
    mutations: {
        changeAction(state, selectAction): void {
            state.selectedAction = selectAction;
        }
    },
    getters: {
        getResults: state => {
            return state.results;
        },
        getSelectedAction: state => {
            return state.selectedAction;
        }
    }
})

export default store;
