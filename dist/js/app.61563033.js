(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/taller2-WA/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"039a":function(e,t,a){"use strict";var r=a("7174"),n=a.n(r);n.a},"07e7":function(e,t,a){},"07e9":function(e,t,a){"use strict";var r=a("7eae"),n=a.n(r);n.a},"0a02":function(e,t,a){},"1cad":function(e,t,a){"use strict";var r=a("0a02"),n=a.n(r);n.a},"2c71":function(e,t,a){},"372c":function(e,t,a){"use strict";var r=a("839f"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e.authUser?a("v-btn",{attrs:{dark:"",text:"",to:{name:"departments"}}},[e._v("Departamentos ")]):e._e(),e.authUser?a("v-btn",{attrs:{dark:"",text:"",to:{name:"users"}}},[e._v("Usuarios ")]):e._e(),a("v-spacer"),e.authUser?e._e():a("v-btn",{attrs:{dark:"",text:"",to:{name:"userCreate"}}},[e._v(" Registrarse ")]),e.authUser?a("v-toolbar-title",{domProps:{textContent:e._s(e.authUser.nombre)}}):a("v-btn",{attrs:{dark:"",text:"",to:{name:"login"}}},[e._v(" Iniciar ")]),e.authUser?a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,3221905750)},[a("v-list",[a("v-list-item",{on:{click:e.logout}},[a("v-list-item-title",[e._v("Cerrar Sesión")])],1)],1)],1):e._e()],1),a("v-main",[a("router-view")],1)],1)},o=[],s={name:"app",computed:{authUser:function(){return this.$store.getters["authUser"]}},methods:{logout:function(){this.$store.dispatch("logout",void 0)}},created:function(){this.$store.dispatch("login",{email:void 0,password:void 0}),this.$store.dispatch("load",void 0)}},i=s,c=a("2877"),l=a("6544"),d=a.n(l),u=a("7496"),m=a("40dc"),p=a("8336"),v=a("132d"),h=a("8860"),f=a("da13"),b=a("5d23"),x=a("f6c4"),_=a("e449"),D=a("2fa4"),C=a("2a7f"),g=Object(c["a"])(i,n,o,!1,null,null,null),U=g.exports;d()(g,{VApp:u["a"],VAppBar:m["a"],VBtn:p["a"],VIcon:v["a"],VList:h["a"],VListItem:f["a"],VListItemTitle:b["b"],VMain:x["a"],VMenu:_["a"],VSpacer:D["a"],VToolbarTitle:C["a"]});a("4160"),a("a15b"),a("fb6a"),a("d3b7"),a("25f0"),a("159b");var k=a("2f62"),V=a("8aa50"),w={apiKey:"AIzaSyBdA_Cm4B_LO_7uWRKBCeb7mP8QgKE_RYs",authDomain:"taller2-f1a65.firebaseapp.com",databaseURL:"https://taller2-f1a65.firebaseio.com",projectId:"taller2-f1a65",storageBucket:"taller2-f1a65.appspot.com",messagingSenderId:"334993998813",appId:"1:334993998813:web:ba7846ce2b03bd262f2c34"},y=V,S=V["initializeApp"](w),A=(S.database(),y.firestore().collection("departments")),E=y.firestore().collection("users");r["a"].use(k["a"]);var T={departments:{},users:{},authUser:void 0},j={departments:function(e){return e.departments},users:function(e){return e.users},authUser:function(e){return e.authUser}},$={load:function(e){var t=e.commit;A.onSnapshot((function(e){var a={};e.forEach((function(e){var t=e.data();t.id=e.id,a[t.id]=t})),t("SET_DEPARTMENTS",a)})),E.onSnapshot((function(e){var a={};e.forEach((function(e){var t=e.data();t.id=e.id,a[t.id]=t})),t("SET_USERS",a)}))},createDepartment:function(e,t){return A.add(t)},updateDepartment:function(e,t){var a=t.id,r=t.payload;return A.doc(a).set(r)},deleteDepartment:function(e,t){return A.doc(t).delete()},createUser:function(e,t){return R(t.password).then((function(a){return t.password=a,E.add(t).then((function(a){t.departamento&&e.dispatch("addUserDepartment",{idUser:a.id,idDepartment:t.departamento})}))}))},updateUser:function(e,t){var a=t.id,r=t.payload;return R(r.password).then((function(t){r.password=t;var n=e.state.users[a];return n&&n.departamento!=r.departamento&&(e.dispatch("removeUserDepartment",{idUser:a,idDepartment:n.departamento}),e.dispatch("addUserDepartment",{idUser:a,idDepartment:r.departamento})),E.doc(a).set(r)}))},deleteUser:function(e,t){return E.doc(t).delete()},addUserDepartment:function(e,t){var a=t.idUser,r=t.idDepartment,n=e.state.departments[r];n&&(n.users||(n.users={}),n.users[a]=a,e.dispatch("updateDepartment",{id:r,payload:n}))},removeUserDepartment:function(e,t){var a=t.idUser,r=t.idDepartment,n=e.state.departments[r];n&&(n.users||(n.users={}),delete n.users[a],e.dispatch("updateDepartment",{id:r,payload:n}))},login:function(e,t){var a=e.commit,r=t.email,n=t.password;return console.log("commit: ",a),void 0==r&&void 0==n?a("SET_AUTH_USER_DATA",void 0):R(n).then((function(e){return E.where("email","==",r).where("password","==",e).get().then((function(e){if(e.size>0){var t=void 0;if(e.forEach((function(e){t=e.data()})),t)return delete t.password,a("SET_AUTH_USER_DATA",t),!0}return!1})).catch((function(e){console.log("Error getting documents: ",e)}))}))},logout:function(e){var t=e.commit;t("CLEAR_AUTH_USER_DATA")}},O={SET_DEPARTMENTS:function(e,t){e.departments=t},SET_USERS:function(e,t){e.users=t},SET_AUTH_USER_DATA:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(void 0===t){var a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(t=a)}void 0!==t&&(e.authUser=t,localStorage.setItem("user",JSON.stringify(t)))},CLEAR_AUTH_USER_DATA:function(){localStorage.removeItem("user"),location.reload()}},I=new k["a"].Store({state:T,mutations:O,getters:j,actions:$});function R(e){var t=new TextEncoder("utf-8").encode(e);return crypto.subtle.digest("SHA-256",t).then((function(e){return F(e)}))}function F(e){for(var t=[],a=new DataView(e),r=0;r<a.byteLength;r+=4){var n=a.getUint32(r),o=n.toString(16),s="00000000",i=(s+o).slice(-s.length);t.push(i)}return t.join("")}a("45fc");var N=a("8c4f"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Crear departamento")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-label",label:"Nombre"},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-account-tie",label:"Coordinador"},model:{value:e.coordinador,callback:function(t){e.coordinador=t},expression:"coordinador"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-account-group",type:"number",label:"Número de usuarios"},model:{value:e.numeroUsuarios,callback:function(t){e.numeroUsuarios=t},expression:"numeroUsuarios"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-map-marker",label:"Dirección"},model:{value:e.direccion,callback:function(t){e.direccion=t},expression:"direccion"}}),a("v-checkbox",{attrs:{label:"Departamento activo: "+e.estado.toString()},model:{value:e.estado,callback:function(t){e.estado=t},expression:"estado"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submit}},[e._v(" submit ")])],1)],1)],1)],1)],1)],1)},q=[],z={data:function(){return{nombre:"",coordinador:"",numeroUsuarios:"",direccion:"",estado:!0,valid:!0}},methods:{submit:function(){var e=this,t={nombre:this.nombre,coordinador:this.coordinador,numeroUsuarios:this.numeroUsuarios,direccion:this.direccion,estado:this.estado};this.$store.dispatch("createDepartment",t).then((function(){return e.$router.push("/departments")})).catch((function(e){alert("Error al agregar el departamento"),console.log(e)}))}}},P=z,M=(a("07e9"),a("b0af")),L=a("ac7c"),H=a("62ad"),J=a("a523"),K=a("4bd4"),W=a("0fd9"),Q=a("8654"),Y=Object(c["a"])(P,B,q,!1,null,null,null),G=Y.exports;d()(Y,{VBtn:p["a"],VCard:M["a"],VCheckbox:L["a"],VCol:H["a"],VContainer:J["a"],VForm:K["a"],VRow:W["a"],VTextField:Q["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Actualizar departamento")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-label",label:"Nombre"},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-account-tie",label:"Coordinador"},model:{value:e.coordinador,callback:function(t){e.coordinador=t},expression:"coordinador"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-account-group",type:"number",label:"Número de usuarios"},model:{value:e.numeroUsuarios,callback:function(t){e.numeroUsuarios=t},expression:"numeroUsuarios"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-map-marker",label:"Dirección"},model:{value:e.direccion,callback:function(t){e.direccion=t},expression:"direccion"}}),a("v-checkbox",{attrs:{label:"Departamento activo: "+e.estado.toString()},model:{value:e.estado,callback:function(t){e.estado=t},expression:"estado"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submit}},[e._v(" submit ")])],1)],1)],1)],1)],1)],1)},Z=[],ee={created:function(){this.id=this.$route.params.ID},data:function(){return{nombre:"",coordinador:"",numeroUsuarios:"",direccion:"",estado:!0,valid:!0,id:""}},computed:{department:function(){return this.$store.getters["departments"][this.id]}},watch:{department:function(e){this.nombre=e.nombre,this.coordinador=e.coordinador,this.numeroUsuarios=e.numeroUsuarios,this.direccion=e.direccion,this.estado=e.estado}},methods:{submit:function(){var e=this,t={nombre:this.nombre,coordinador:this.coordinador,numeroUsuarios:this.numeroUsuarios,direccion:this.direccion,estado:this.estado};this.$store.dispatch("updateDepartment",{id:this.id,payload:t}).then((function(){return e.$router.push("/departments")})).catch((function(e){alert("Error al actualizar el departamento"),console.log(e)}))}}},te=ee,ae=(a("6efe"),Object(c["a"])(te,X,Z,!1,null,null,null)),re=ae.exports;d()(ae,{VBtn:p["a"],VCard:M["a"],VCheckbox:L["a"],VCol:H["a"],VContainer:J["a"],VForm:K["a"],VRow:W["a"],VTextField:Q["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v(e._s(e.department.nombre))]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6",sm:"12",md:"6"}},[a("b",[e._v("Coordinador:")]),e._v(" "+e._s(e.department.coordinador)+" ")]),a("v-col",{attrs:{cols:"6",sm:"12",md:"6"}},[a("b",[e._v("Máximo de usuarios:")]),e._v(" "+e._s(e.department.numeroUsuarios)+" ")]),a("v-col",{attrs:{cols:"6",sm:"12",md:"6"}},[a("b",[e._v("Dirección:")]),e._v(" "+e._s(e.department.direccion)+" ")]),a("v-col",{attrs:{cols:"6",sm:"12",md:"6"}},[a("b",[e._v("Estado:")]),e._v(" "+e._s(e.department.estado?"Activo":"Inactivo")+" ")])],1)],1)],1),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.users,search:e.search},scopedSlots:e._u([{key:"item.vencimiento",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.vencimiento)+" ")]}}])})],1)],1)},oe=[],se=(a("d81d"),a("07ac"),{created:function(){this.id=this.$route.params.ID},data:function(){return{search:"",headers:[{text:"Nombres",value:"nombre"},{text:"Apellidos",value:"apellidos"},{text:"Correo",value:"email"},{text:"Fecha",value:"vencimiento"},{text:"Estado",value:"estado"}],stateDeleteUser:!1,objectUser:void 0,id:""}},methods:{modalDeleteUser:function(e){this.stateDeleteUser=!0,this.objectUser=e},cancelDeleteUser:function(){this.stateDeleteUser=!1,this.objectUser=void 0},deleteUser:function(){var e=this;this.$store.dispatch("deleteUser",this.objectUser.id).then((function(){return e.cancelDeleteUser()})).catch((function(e){alert("Error al actualizar el Usuario"),console.log(e)}))}},computed:{users:function(){var e=this.$store.getters["users"];return Object.values(this.department.users).map((function(t){return e[t]}))},department:function(){return this.$store.getters["departments"][this.id]}}}),ie=se,ce=(a("a055"),a("99d9")),le=a("8fea"),de=Object(c["a"])(ie,ne,oe,!1,null,null,null),ue=de.exports;d()(de,{VCard:M["a"],VCardTitle:ce["c"],VCol:H["a"],VContainer:J["a"],VDataTable:le["a"],VRow:W["a"],VTextField:Q["a"]});var me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Departamentos")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.departments,search:e.search},scopedSlots:e._u([{key:"item.acciones",fn:function(t){var r=t.item;return[a("v-btn",{staticClass:"ma-2",attrs:{to:{name:"departmentDetail",params:{ID:r.id}},color:"green",dark:""}},[e._v(" Ver ")]),a("v-btn",{staticClass:"ma-2",attrs:{to:{name:"departmentUpdate",params:{ID:r.id}},color:"primary",dark:""}},[e._v(" Actualizar ")]),a("v-btn",{staticClass:"ma-2",attrs:{color:"red",dark:""},on:{click:function(t){return e.modalDeleteDepartament(r)}}},[e._v(" Eliminar ")])]}}])})],1),a("div",{staticClass:"mt-4"},[a("v-btn",{staticClass:"mt-2 mb-2 ",attrs:{to:{name:"departmentCreate"},color:"primary",dark:""}},[e._v(" Crear Departamento ")])],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.stateDeleteDepartament,callback:function(t){e.stateDeleteDepartament=t},expression:"stateDeleteDepartament"}},[a("v-card",[e.objectDepartament?a("v-card-title",{staticClass:"headline"},[e._v(" ¿Desea eliminar el departamento "+e._s(e.objectDepartament.nombre)+"? ")]):e._e(),a("v-card-text",[e._v("Si se elimina, no se podra recuperar")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.cancelDeleteDepartment}},[e._v(" Cancelar ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.deleteDepartment}},[e._v(" Eliminar ")])],1)],1)],1)],1)},pe=[],ve={data:function(){return{search:"",headers:[{text:"Nombre",value:"nombre"},{text:"Coordinador",value:"coordinador"},{text:"Número de usuarios",value:"numeroUsuarios"},{text:"Dirección",value:"direccion"},{text:"Estado",value:"nestado"},{text:"Acciones",value:"acciones",align:"center"}],stateDeleteDepartament:!1,objectDepartament:void 0}},methods:{modalDeleteDepartament:function(e){this.stateDeleteDepartament=!0,this.objectDepartament=e},cancelDeleteDepartment:function(){this.stateDeleteDepartament=!1,this.objectDepartament=void 0},deleteDepartment:function(){var e=this;this.$store.dispatch("deleteDepartment",this.objectDepartament.id).then((function(){return e.cancelDeleteDepartment()})).catch((function(e){alert("Error al actualizar el departamento"),console.log(e)}))}},computed:{departments:function(){return Object.values(this.$store.getters["departments"]).map((function(e){return e.nestado=e.estado?"Activo":"Inactivo",e}))}}},he=ve,fe=(a("a6ac"),a("169a")),be=Object(c["a"])(he,me,pe,!1,null,null,null),xe=be.exports;d()(be,{VBtn:p["a"],VCard:M["a"],VCardActions:ce["a"],VCardText:ce["b"],VCardTitle:ce["c"],VDataTable:le["a"],VDialog:fe["a"],VSpacer:D["a"],VTextField:Q["a"]});var _e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Usuarios")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.users,search:e.search},scopedSlots:e._u([{key:"item.vencimiento",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.vencimiento)+" ")]}},{key:"item.acciones",fn:function(t){var r=t.item;return[a("v-btn",{staticClass:"ma-2",attrs:{to:{name:"userUpdate",params:{ID:r.id}},color:"primary",dark:""}},[e._v(" Actualizar ")]),a("v-btn",{staticClass:"ma-2",attrs:{color:"red",dark:""},on:{click:function(t){return e.modalDeleteUser(r)}}},[e._v(" Eliminar ")])]}}])})],1),a("div",{staticClass:"mt-4"},[a("v-btn",{staticClass:"mt-2 mb-2 ",attrs:{to:{name:"userCreate"},color:"primary",dark:""}},[e._v(" Crear Usuario ")])],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.stateDeleteUser,callback:function(t){e.stateDeleteUser=t},expression:"stateDeleteUser"}},[a("v-card",[e.objectUser?a("v-card-title",{staticClass:"headline"},[e._v(" ¿Desea eliminar el usuario "+e._s(e.objectUser.nombre)+"? ")]):e._e(),a("v-card-text",[e._v("Si se elimina, no se podra recuperar")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.cancelDeleteUser}},[e._v(" Cancelar ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.deleteUser}},[e._v(" Eliminar ")])],1)],1)],1)],1)},De=[],Ce={data:function(){return{search:"",headers:[{text:"Nombres",value:"nombre"},{text:"Apellidos",value:"apellidos"},{text:"Correo",value:"email"},{text:"Departamento",value:"ndepartamento"},{text:"Fecha",value:"vencimiento"},{text:"Estado",value:"nestado"},{text:"Acciones",value:"acciones",align:"center"}],stateDeleteUser:!1,objectUser:void 0}},methods:{modalDeleteUser:function(e){this.stateDeleteUser=!0,this.objectUser=e},cancelDeleteUser:function(){this.stateDeleteUser=!1,this.objectUser=void 0},deleteUser:function(){var e=this;this.$store.dispatch("deleteUser",this.objectUser.id).then((function(){return e.cancelDeleteUser()})).catch((function(e){alert("Usuario Creado"),console.log(e)}))}},computed:{users:function(){var e=this;return Object.values(this.$store.getters["users"]).map((function(t){return e.departments[t.departamento]&&(t.ndepartamento=e.departments[t.departamento].nombre),t.nestado=t.estado?"Activo":"Inactivo",t}))},departments:function(){return this.$store.getters["departments"]}}},ge=Ce,Ue=(a("372c"),Object(c["a"])(ge,_e,De,!1,null,null,null)),ke=Ue.exports;d()(Ue,{VBtn:p["a"],VCard:M["a"],VCardActions:ce["a"],VCardText:ce["b"],VCardTitle:ce["c"],VDataTable:le["a"],VDialog:fe["a"],VSpacer:D["a"],VTextField:Q["a"]});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Actualizar usuario")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-label",label:"Nombres"},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-label",label:"Apellidos"},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Correo",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-form-textbox-password",label:"Contraseña",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-calendar-range",label:"Fecha vencimiento",type:"date"},model:{value:e.vencimiento,callback:function(t){e.vencimiento=t},expression:"vencimiento"}}),a("v-select",{attrs:{items:e.departments,label:"departamento","item-text":"nombre","item-value":"id","prepend-icon":"mdi-family-tree"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}}),a("v-switch",{attrs:{label:"Departamento activo: "+e.estado.toString()},model:{value:e.estado,callback:function(t){e.estado=t},expression:"estado"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submit}},[e._v(" submit ")])],1)],1)],1)],1)],1)],1)},we=[],ye={created:function(){this.id=this.$route.params.ID,this.user&&(this.nombre=this.user.nombre,this.apellidos=this.user.apellidos,this.email=this.user.email,this.password=this.user.password,this.vencimiento=this.user.vencimiento,this.departamento=this.user.departamento,this.estado=this.user.estado)},data:function(){return{nombre:"",apellidos:"",email:"",password:"",vencimiento:"",departamento:"",estado:!0,valid:!0,items:[],id:""}},computed:{user:function(){return this.$store.getters["users"][this.id]},departments:function(){return Object.values(this.$store.getters["departments"])}},watch:{user:function(e){this.nombre=e.nombre,this.apellidos=e.apellidos,this.email=e.email,this.password=e.password,this.vencimiento=e.vencimiento,this.departamento=e.departamento,this.estado=e.estado}},methods:{submit:function(){var e=this,t={nombre:this.nombre,apellidos:this.apellidos,email:this.email,password:this.password,vencimiento:this.vencimiento,departamento:this.departamento,estado:this.estado};this.$store.dispatch("updateUser",{id:this.id,payload:t}).then((function(){return e.$router.push("/users")})).catch((function(e){alert("Error al actualizar el usuario"),console.log(e)}))}}},Se=ye,Ae=(a("1cad"),a("b974")),Ee=a("b73d"),Te=Object(c["a"])(Se,Ve,we,!1,null,null,null),je=Te.exports;d()(Te,{VBtn:p["a"],VCard:M["a"],VCol:H["a"],VContainer:J["a"],VForm:K["a"],VRow:W["a"],VSelect:Ae["a"],VSwitch:Ee["a"],VTextField:Q["a"]});var $e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Crear usuario")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-label",label:"Nombres"},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-label",label:"Apellidos"},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Correo",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-form-textbox-password",label:"Contraseña",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-calendar-range",label:"Fecha vencimiento",type:"date"},model:{value:e.vencimiento,callback:function(t){e.vencimiento=t},expression:"vencimiento"}}),a("v-select",{attrs:{items:e.departments,label:"departamento","item-text":"nombre","item-value":"id","prepend-icon":"mdi-family-tree"},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}}),a("v-switch",{attrs:{label:"Usuario activo: "+e.estado.toString()},model:{value:e.estado,callback:function(t){e.estado=t},expression:"estado"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submit}},[e._v(" submit ")])],1)],1)],1)],1)],1)],1)},Oe=[],Ie={data:function(){return{nombre:"",apellidos:"",email:"",password:"",vencimiento:"",departamento:"",estado:!0,valid:!0}},computed:{departments:function(){return Object.values(this.$store.getters["departments"])}},methods:{submit:function(){var e=this,t={nombre:this.nombre,apellidos:this.apellidos,email:this.email,password:this.password,vencimiento:this.vencimiento,departamento:this.departamento,estado:this.estado};this.$store.dispatch("createUser",t).then((function(){return e.$router.push("/users")})).catch((function(e){alert("Error al agregar el usuario"),console.log(e)}))}}},Re=Ie,Fe=(a("c1b2"),Object(c["a"])(Re,$e,Oe,!1,null,null,null)),Ne=Fe.exports;d()(Fe,{VBtn:p["a"],VCard:M["a"],VCol:H["a"],VContainer:J["a"],VForm:K["a"],VRow:W["a"],VSelect:Ae["a"],VSwitch:Ee["a"],VTextField:Q["a"]});var Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"mt-2 mb-2"},[e._v("Inicio de sesión")]),a("v-card",{staticClass:"mt-4 pa-5"},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Correo",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-form-textbox-password",label:"Contraseña",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.submit}},[e._v(" Iniciar ")])],1)],1)],1)],1)],1)],1)},qe=[],ze={data:function(){return{email:"",password:"",valid:!0}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};this.$store.dispatch("login",t).then((function(t){t?e.$router.push("/departments"):alert("Error al iniciar sesión, verifique los datos ingresados")})).catch((function(e){alert("Error al iniciar sesión, verifique los datos ingresados"),console.log(e)}))}}},Pe=ze,Me=(a("039a"),Object(c["a"])(Pe,Be,qe,!1,null,null,null)),Le=Me.exports;d()(Me,{VBtn:p["a"],VCard:M["a"],VCol:H["a"],VContainer:J["a"],VForm:K["a"],VRow:W["a"],VTextField:Q["a"]}),r["a"].use(N["a"]);var He=[{path:"/users",name:"users",component:ke,meta:{requiresAuth:!0}},{path:"/user/create",name:"userCreate",component:Ne,meta:{requiresAuth:!1}},{path:"/user/update/:ID",name:"userUpdate",component:je,meta:{requiresAuth:!0}},{path:"/departments",name:"departments",component:xe,meta:{requiresAuth:!0}},{path:"/department/detail/:ID",name:"departmentDetail",component:ue,meta:{requiresAuth:!0}},{path:"/department/create",name:"departmentCreate",component:G,meta:{requiresAuth:!0}},{path:"/department/update/:ID",name:"departmentUpdate",component:re,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Le,meta:{requiresAuth:!1}},{path:"/",name:"login",component:Le,meta:{requiresAuth:!1}}],Je=new N["a"]({base:"/taller2-WA/",routes:He});Je.beforeEach((function(e,t,a){var r=localStorage.getItem("user");console.log(e),e.matched.some((function(e){return e.meta.requiresAuth}))&&!r?a("/login"):"/"===e.path&&r&&a("/departments"),a()}));var Ke=Je,We=a("f309");r["a"].use(We["a"]);var Qe=new We["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:Qe,router:Ke,store:I,render:function(e){return e(U)}}).$mount("#app")},"6efe":function(e,t,a){"use strict";var r=a("07e7"),n=a.n(r);n.a},7174:function(e,t,a){},"7eae":function(e,t,a){},"801b":function(e,t,a){},"839f":function(e,t,a){},a055:function(e,t,a){"use strict";var r=a("801b"),n=a.n(r);n.a},a6ac:function(e,t,a){"use strict";var r=a("2c71"),n=a.n(r);n.a},c1b2:function(e,t,a){"use strict";var r=a("f48d"),n=a.n(r);n.a},f48d:function(e,t,a){}});
//# sourceMappingURL=app.61563033.js.map