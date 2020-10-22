<template>
	<div class="main">
		<h1 class="mt-2 mb-2">Actualizar usuario</h1>

		<v-card class="mt-4 pa-5">
			<v-form v-model="valid">
				<v-container>
					<v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="nombre" prepend-icon="mdi-label" label="Nombres"></v-text-field>
                            <v-text-field v-model="apellidos" prepend-icon="mdi-label" label="Apellidos"></v-text-field>
                            <v-text-field v-model="email" prepend-icon="mdi-email" label="Correo" type="email"></v-text-field>
                            <v-text-field v-model="password" prepend-icon="mdi-form-textbox-password" label="Contraseña" type="password"></v-text-field>
                            <v-text-field v-model="vencimiento" prepend-icon="mdi-calendar-range" label="Fecha vencimiento" type="date"></v-text-field>
                            <v-select
                            v-model="departamento"
                            :items="departments"
                            label="departamento"
                            item-text="nombre"
                            item-value="id"
                            prepend-icon="mdi-family-tree"                            
                            >

                            </v-select>
                            <v-switch
                            v-model="estado"
                            :label="`Departamento activo: ${estado.toString()}`"
                            ></v-switch>
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
	created() {
		this.id = this.$route.params.ID;
		if (this.user) {
			this.nombre = this.user.nombre;
			this.apellidos = this.user.apellidos;
			this.email = this.user.email;
			this.password = this.user.password;
			this.vencimiento = this.user.vencimiento;
			this.departamento = this.user.departamento;    
			this.estado = this.user.estado;
		}
	},
	data: () => ({
		nombre: "",
		apellidos: "",
		email: "",
        password: "",
        vencimiento: "",
        departamento: "",        
		estado: true,
        valid: true,
        items:[],
		id: ""
	}),
	computed: {
		user: function() {
			return this.$store.getters["users"][this.id];
		},
		departments: function() {
			return Object.values(this.$store.getters["departments"]);
		}		
	},
	watch: {
		user: function(newVal) {
			this.nombre = newVal.nombre;
			this.apellidos = newVal.apellidos;
			this.email = newVal.email;
			this.password = newVal.password;
			this.vencimiento = newVal.vencimiento;
			this.departamento = newVal.departamento;    
			this.estado = newVal.estado;
		}
	},
	methods: {
		submit() {
			var user = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                email: this.email,
                password: this.password,
                vencimiento: this.vencimiento,
                departamento: this.departamento,       
                estado: this.estado,
			};

			this.$store
				.dispatch("updateUser", {id:this.id, payload:user})
				.then(() => this.$router.push("/users"))
				.catch(e => {
					alert("Error al actualizar el usuario");
					console.log(e);
				});
		}
	}
};
</script>

<style>
.main {
	margin: 3em;
}
</style>
