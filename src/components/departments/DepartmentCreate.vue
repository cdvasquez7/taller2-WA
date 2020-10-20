<template>
    <div class="main">
        
        <h1 class="mt-2 mb-2">Crear departamento</h1>

        <v-card class="mt-4 pa-5">
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="nombre" prepend-icon="mdi-label" label="Nombre"></v-text-field>
                            <v-text-field v-model="coordinador" prepend-icon="mdi-account-tie" label="Coordinador"></v-text-field>
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
                            <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">
                                submit
                            </v-btn>
                            <!-- <v-btn @click="clear">
                                clear
                            </v-btn> -->
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>

export default {

    
    data: () => ({
		nombre: "",
		coordinador: "",
		numeroUsuarios: "",
		direccion: "",
		estado: true,
        valid: true,
        
	}),
	methods: {
		submit() {
            var department = {
                nombre: this.nombre,
                coordinador: this.coordinador,
                numeroUsuarios: this.numeroUsuarios,
                direccion: this.direccion,
                estado: this.estado,
            }

            console.log(department);

            this.$store.dispatch('createDepartment', department)
            .then(() => this.$router.push("/departments"))
            .catch(e => {
                alert("Error al agregar el departamento")
                console.log(e);
                }) 
        },
	}
};
</script>

<style>
.main{
    margin: 3em;
}
</style>

