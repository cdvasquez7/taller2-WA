import Vue from 'vue'
import Vuex from 'vuex'


//import db from '../plugins/firebase'
import firebase from '../plugins/firebase'

let ref =  firebase.firestore().collection("departments");
Vue.use(Vuex)

const state = {
  departments:[],
  getters
};
const getters = {
  departments: state => state.departments  
};

// actions
const actions = {
  load: function({ commit }) {
    ref.onSnapshot(query => {
      var departments = [];      
      query.forEach(doc => {
        var dep = doc.data();
        dep.id = doc.id;
        departments.push(dep);
      });
      commit("SET_DEPARTMENTS", departments);
    });
  },
  createDepartment: function(payload) { 
    console.log(payload.nombre);
    console.log(ref.add(payload));
    return ref.add(payload)
  },
}

// mutations
const mutations = {
  SET_DEPARTMENTS: (state, payload) => {
    state.departments = payload
  },
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})