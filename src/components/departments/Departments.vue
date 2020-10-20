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
				<template v-slot:item.acciones="{ item }">			
					<v-btn :to="{
                        name: 'departmentUpdate',
                        params: { ID: item.id }
                      }"
                      class="ma-2" color="primary" dark>
						Actualizar
					</v-btn>

					<v-btn class="ma-2" color="red" dark>
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
        

		<!-- 
      <div v-for="(department, k) in departments"
            :key="k">
            {{department.nombre}}
      </div> -->
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
				{ text: "Acciones", value: "acciones" }
			]
		};
	},

	computed: {
		departments() {
			return this.$store.getters["departments"];
		}
	}
};
</script>

<style>
.main{
    margin: 3em;
}
</style>
