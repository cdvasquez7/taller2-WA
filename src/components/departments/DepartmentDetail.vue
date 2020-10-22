<template>
	<div class="main">
        
        <h1 class="mt-2 mb-2">{{department.nombre}}</h1>

        <v-card class="mt-4 pa-5">
            <v-container>
                <v-row>
                    <v-col cols="6" sm="12" md="6">
                        <b>Coordinador:</b> {{department.coordinador}}
                    </v-col>
                    <v-col cols="6" sm="12" md="6">
                        <b>Máximo de usuarios:</b> {{department.numeroUsuarios}}
                    </v-col>
                    <v-col cols="6" sm="12" md="6">
                        <b>Dirección:</b> {{department.direccion}}
                    </v-col>                    
                    <v-col cols="6" sm="12" md="6">
                        <b>Estado:</b> {{ department.estado?"Activo":"Inactivo" }}
                    </v-col>                                        
                </v-row>
            </v-container>
           
		</v-card>

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

			</v-data-table>
		</v-card>


	</div>
</template>

<script>
export default {
    created() {
		this.id = this.$route.params.ID;
	},
	data() {
		return {
			search: "",
			headers: [
				{ text: "Nombres", value: "nombre" },
				{ text: "Apellidos", value: "apellidos" },
                { text: "Correo", value: "email" },
				{ text: "Fecha", value: "vencimiento" },
				{ text: "Estado", value: "estado" },
            ],
            stateDeleteUser: false,
            objectUser: undefined,
            id: ""
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
    },
	computed: {
		users() {
            var users = this.$store.getters["users"];
			return Object.values( this.department.users ).map(e => users[e]);
        },
        department: function() {
            return this.$store.getters["departments"][this.id];
        }
	}
};
</script>

<style>
.main{
    margin: 3em;
}
</style>
