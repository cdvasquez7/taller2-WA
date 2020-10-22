<template>
	<div class="main">
        
        <h1 class="mt-2 mb-2">Inicio de sesión</h1>

		<v-card class="mt-4 pa-5">
			<v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="email" prepend-icon="mdi-email" label="Correo" type="email"></v-text-field>
                            <v-text-field v-model="password" prepend-icon="mdi-form-textbox-password" label="Contraseña" type="password"></v-text-field>
                            <v-btn color="primary" class="mr-4" @click="submit">
                                Iniciar
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
		email: "",
        password: "",
        valid: true,       
    }),
    methods: {
		submit() {
            var user = {
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch('login', user)
            .then(e => {
                if(e){
                    this.$router.push("/departments")
                }else{
                     alert("Error al iniciar sesión, verifique los datos ingresados")
                }
            })
            .catch(e => {
                alert("Error al iniciar sesión, verifique los datos ingresados")
                console.log(e);
                }) 
        },
	}
}
</script>


<style>
.main{
    margin: 3em;
}
</style>
