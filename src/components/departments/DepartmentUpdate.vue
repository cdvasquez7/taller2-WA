<template>
	<v-form v-model="valid">
		<v-container>
			<v-row>
				<v-col cols="12" sm="6" md="6">
					<v-text-field v-model="nombre" prepend-icon="mdi-label" label="Nombre"></v-text-field>
					<v-select v-model="coordinador"
						prepend-icon="mdi-account-tie"
						:items="items"
						label="Coordinador"
					></v-select>
					<v-text-field v-model="numeroUsuarios"
						prepend-icon="mdi-account-group"
						type="number"
						label="Número de usuarios"
					></v-text-field>
					<v-text-field v-model="direccion"
						prepend-icon="mdi-map-marker"
						label="Dirección"
					></v-text-field>
					<v-checkbox
						v-model="estado"
						:label="`Departamento activo: ${estado.toString()}`"
					></v-checkbox>
					<v-btn :disabled="!valid" class="mr-4" @click="submit">
						submit
					</v-btn>
					<v-btn @click="clear">
						clear
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>

export default {

    
    data: () => ({
		nombre: "",
		coordinador: "",
		numeroUsuarios: "",
		direccion: "",
		estado: true,
		items: ["Prueba"],
		valid: true
	}),
	methods: {
		submit() {

        },
        clear() {},
        // state:{
        //     favorites:[]
        // },
        // mutations:{
        //     addToFavorites(state,payload){
        //         state.favorites.push(payload);
        //     },
        // },
        // actions:{
        //     addToFavorites({commit}, payload){
        //         commit('addToFavorites', payload);
        //     }
        // }
	}
};
</script>

<style></style>
