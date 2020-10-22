<template>
	<div class="main">
        
        <h1 class="mt-2 mb-2">Departamentos</h1>

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
			<v-data-table :headers="headers" :items="departments" :search="search">
				<template class="" v-slot:item.acciones="{ item }">			
                    <v-btn :to="{
                        name: 'departmentDetail',
                        params: { ID: item.id }
                      }"
                      class="ma-2" color="green" dark>
						Ver
					</v-btn>
                    
                    <v-btn :to="{
                        name: 'departmentUpdate',
                        params: { ID: item.id }
                      }"
                      class="ma-2" color="primary" dark>
						Actualizar
					</v-btn>

					<v-btn @click="modalDeleteDepartament(item)" class="ma-2" color="red" dark>
						Eliminar
					</v-btn>
				</template>
			</v-data-table>
		</v-card>
        <div class="mt-4">
            <v-btn :to="{
            name: 'departmentCreate',
            }"
            class="mt-2 mb-2 " color="primary" dark>
            Crear Departamento
            </v-btn>
        </div>
        
    <v-dialog
      v-model="stateDeleteDepartament"
      persistent
      max-width="290"
    >
       <v-card>
        <v-card-title v-if="objectDepartament" class="headline">
          ¿Desea eliminar el departamento {{objectDepartament.nombre}}?
        </v-card-title>
        <v-card-text>Si se elimina, no se podra recuperar</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="cancelDeleteDepartment"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteDepartment"
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
				{ text: "Nombre", value: "nombre" },
				{ text: "Coordinador", value: "coordinador" },
				{ text: "Número de usuarios", value: "numeroUsuarios" },
				{ text: "Dirección", value: "direccion" },
				{ text: "Estado", value: "estado" },
				{ text: "Acciones", value: "acciones" , align: 'center',}
            ],
            stateDeleteDepartament: false,
            objectDepartament: undefined,
		};
	},
    methods:{
        modalDeleteDepartament: function(department){
           this.stateDeleteDepartament = true;
           this.objectDepartament = department;
        },
        cancelDeleteDepartment: function(){ 
           this.stateDeleteDepartament = false;
           this.objectDepartament = undefined;       
        }, 
        deleteDepartment: function(){          
            this.$store
            .dispatch("deleteDepartment", this.objectDepartament.id)
            .then(() => this.cancelDeleteDepartment())
            .catch(e => {
                alert("Error al actualizar el departamento");
            console.log(e);
            });

        }
    },
	computed: {
		departments() {
			return Object.values(this.$store.getters["departments"]);
		}
	}
};
</script>

<style>
.main{
    margin: 3em;
}
</style>
