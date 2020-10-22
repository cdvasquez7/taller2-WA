<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

    <v-btn dark text :to="{name:'departments'}" >Departamentos </v-btn>
    <v-btn dark text :to="{name:'users'}" >Usuarios </v-btn>
    <v-spacer></v-spacer>
    <v-btn v-if="!authUser" dark text :to="{name:'login'}" >Usuarios </v-btn>
    <v-toolbar-title v-else v-text="authUser.nombre"></v-toolbar-title>
    <v-menu
        left
        bottom
        v-if="authUser"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-main>
      <router-view  />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  computed: {
    authUser() {
      return this.$store.getters["authUser"];
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('load', undefined)  
    }
  },
  created() {
    this.$store.dispatch('load', undefined)
  }
};
</script>
