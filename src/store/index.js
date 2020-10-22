import Vue from "vue";
import Vuex from "vuex";

//import db from '../plugins/firebase'
import firebase from "../plugins/firebase";

let fDepartment = firebase.firestore().collection("departments");
let fUsers = firebase.firestore().collection("users");

Vue.use(Vuex);

const state = {
  departments: {},
  users: {},
  authUser: undefined,
};
const getters = {
  departments: (state) => state.departments,
  users: (state) => state.users,
  authUser: (state) => state.authUser,
};
// actions
const actions = {
  load: function({ commit }) {
    fDepartment.onSnapshot((query) => {
      var departments = {};
      query.forEach((doc) => {
        var dep = doc.data();
        dep.id = doc.id;
        departments[dep.id] = dep;
      });
      commit("SET_DEPARTMENTS", departments);
    });

    fUsers.onSnapshot((query) => {
      var users = {};
      query.forEach((doc) => {
        var usr = doc.data();
        usr.id = doc.id;
        users[usr.id] = usr;
      });
      commit("SET_USERS", users);
    });
  },
  createDepartment: function(_, payload) {
    return fDepartment.add(payload);
  },
  updateDepartment: function(_, { id, payload }) {
    return fDepartment.doc(id).set(payload);
  },
  deleteDepartment: function(_, id) {
    return fDepartment.doc(id).delete();
  },
  createUser: function(context, payload) {
    return sha256(payload.password).then((e) => {
      payload.password = e;
      return fUsers.add(payload).then(x => {
        if (payload.departamento) context.dispatch("addUserDepartment", {idUser:x.id, idDepartment:payload.departamento})
      });
    });
  },
  updateUser: function(context, { id, payload }) {
    return sha256(payload.password).then((e) => {
      payload.password = e;
      var usr = context.state.users[id];
      if (usr && usr.departamento != payload.departamento){
        context.dispatch("removeUserDepartment", {idUser:id, idDepartment:usr.departamento});
        context.dispatch("addUserDepartment", {idUser:id, idDepartment:payload.departamento});        
      } 
      return fUsers.doc(id).set(payload);
    });
  },
  deleteUser: function(_, id) {
    return fUsers.doc(id).delete();
  },
  addUserDepartment: function( context, {idUser, idDepartment}) {
    var dep = context.state.departments[idDepartment];
    if (dep){
      if (!dep.users) dep.users = {};
      dep.users[idUser] = idUser;
      context.dispatch("updateDepartment", {id:idDepartment, payload:dep})
    }
  },
  removeUserDepartment: function( context, {idUser, idDepartment}) {
    var dep = context.state.departments[idDepartment];
    if (dep){
      if (!dep.users) dep.users = {};
      delete dep.users[idUser]
      context.dispatch("updateDepartment", {id:idDepartment, payload:dep})
    }
  },  

  login({ commit }, { email, password }) {
    console.log("commit: ", commit);
    return sha256(password).then((pass) => {
      return fUsers
        .where("email", "==", email)
        .where("password", "==", pass)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            var userData = undefined;
            querySnapshot.forEach(function(doc) {
              userData = doc.data();
            });
            if (userData) {
              delete userData.password;
              commit("SET_AUTH_USER_DATA", userData);
              return true;
            }
          }
          return false;
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    });
  },
  logout({ commit }) {
    commit("CLEAR_AUTH_USER_DATA");
  },
};

// mutations
const mutations = {
  SET_DEPARTMENTS: (state, payload) => {
    state.departments = payload;
  },
  SET_USERS: (state, payload) => {
    state.users = payload;
  },

  SET_AUTH_USER_DATA(state, userData = undefined) {
    if (userData === undefined) {
      var uData = JSON.parse(localStorage.getItem("user"));
      if (!!uData && !!uData.id) userData = uData;
    }
    if (userData !== undefined) {
      state.authUser = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    }
  },
  CLEAR_AUTH_USER_DATA() {
    localStorage.removeItem("user");
    location.reload();
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});

function sha256(str) {
  // We transform the string into an arraybuffer.
  var buffer = new TextEncoder("utf-8").encode(str);
  return crypto.subtle.digest("SHA-256", buffer).then(function(hash) {
    return hex(hash);
  });
}

function hex(buffer) {
  var hexCodes = [];
  var view = new DataView(buffer);
  for (var i = 0; i < view.byteLength; i += 4) {
    // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
    var value = view.getUint32(i);
    // toString(16) will give the hex representation of the number without padding
    var stringValue = value.toString(16);
    // We use concatenation and slice for padding
    var padding = "00000000";
    var paddedValue = (padding + stringValue).slice(-padding.length);
    hexCodes.push(paddedValue);
  }

  // Join all the hex strings into one
  return hexCodes.join("");
}
