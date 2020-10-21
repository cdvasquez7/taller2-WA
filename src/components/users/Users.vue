<template>
	<div class="main">
        
        <h1 class="mt-2 mb-2">Usuarios</h1>

		<v-card class="mt-4 pa-5">
			<v-card-title>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
				></v-text-field>
			</v-card-title>
			<v-data-table :headers="headers" :items="users" :search="search">
				
        <template class="" v-slot:item.vencimiento="{ item }">			
            {{item.vencimiento}}
				</template>
        
        <template class="" v-slot:item.acciones="{ item }">			
					<v-btn :to="{
                        name: 'userUpdate',
                        params: { ID: item.id }
                      }"
                      class="ma-2" color="primary" dark>
						Actualizar
					</v-btn>

					<v-btn @click="modalDeleteUser(item)" class="ma-2" color="red" dark>
						Eliminar
					</v-btn>
				</template>
			</v-data-table>
		</v-card>
        <div class="mt-4">
            <v-btn :to="{
            name: 'userCreate',
            }"
            class="mt-2 mb-2 " color="primary" dark>
            Crear Usuario
            </v-btn>
        </div>
        
    <v-dialog
      v-model="stateDeleteUser"
      persistent
      max-width="290"
    >
       <v-card>
        <v-card-title v-if="objectUser" class="headline">
          ¿Desea eliminar el usuario {{objectUser.nombre}}?
        </v-card-title>
        <v-card-text>Si se elimina, no se podra recuperar</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="cancelDeleteUser"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteUser"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

	</div>
</template>

<script>
export default {
	data() {
		return {
			search: "",
			headers: [
				{ text: "Nombres", value: "nombre" },
				{ text: "Apellidos", value: "apellidos" },
				{ text: "Correo", value: "email" },
				{ text: "Fecha", value: "vencimiento" },
				{ text: "Estado", value: "estado" },
				{ text: "Acciones", value: "acciones" , align: 'center',}
            ],
            stateDeleteUser: false,
            objectUser: undefined,
		};
	},
    methods:{
        modalDeleteUser: function(user){
           this.stateDeleteUser = true;
           this.objectUser = user;
        },
        cancelDeleteUser: function(){ 
           this.stateDeleteUser = false;
           this.objectUser = undefined;       
        }, 
        deleteUser: function(){          
            this.$store
            .dispatch("deleteUser", this.objectUser.id)
            .then(() => this.cancelDeleteUser())
            .catch(e => {
                alert("Error al actualizar el Usuario");
            console.log(e);
            });

        },
        // date(date) {
        //   var options = {
        //     weekday: 'long',
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric'
        //   }
        //   return date.toLocaleDateString('es-CO', options)
        // },
    },
	computed: {
		users() {
			return Object.values(this.$store.getters["users"]);
		}
	}
};
</script>

<style>
.main{
    margin: 3em;
}
</style>
