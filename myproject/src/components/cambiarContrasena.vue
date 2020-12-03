import { Button } from 'ant-design-vue';
require('@/assets/styles/cssCrearCuenta.css')
import {script} 
Vue.use(Button);
Vue.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
Vue.loadScript("js/creaCuentaJavaScript.js")

<template>
  <body>
    <center>
      <h4>Recuperar Contraseña</h4>
      <table>
        

       <tr>
          <td>Nombre de usario:</td>
          <td><input type="text" ref="nombre" id="nombre" /></td>
        </tr>
        <tr>
          <td>Contraseña:</td>
          <td><input type="password" ref="pass1" id="pass1" /></td>
        </tr>
        <tr>
          <td>Repite tu contraseña:</td>
          <td><input type="password" ref="pass2" id="pass2" /></td>
        </tr>
      </table>

      <div class="main">
        <div class="sub-main">
          <button
            class="buttonCrearCuenta"
            type="submit"
            value="crearCuenta"
            V-onclick="crearCuenta"
          >
            <span>Crear Cuenta</span>
          </button>
          <button class="buttonCrearCuenta" @click="$router.push('home')">
            Volver a casa
          </button>

          <input class= "buttonCrearCuenta" type="submit" value="Ingresar" v-on:click="actualizaContrasena" />
          <p />
          <p />
        </div>
      </div>
      <br />
    </center>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      msg: "",

      posts: [],
      errors: [],
    };
  },
  methods: {
    checkMail: function (mail) {
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
      if (mail.match(mailformat)) {
        return true;
      } else {
        alert("Dirección de correo no válida!");
        return false;
      }
    },

    actualizaContrasena: function (event) {
      let nombre = this.$refs.nombre.value;
      let pass1 = this.$refs.pass1.value;
      let pass2 = this.$refs.pass2.value;

       

      const article = {
        usuarios: nombre,
        pass1: pass1,
        pass2: pass2
      };



      
      axios
        .post(
          "https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/actualizaContrasena/actualizacontrasena",
          article
        )
        .then((response) => {
            //console.debug(response.data)
            //alert(response.data)
          // JSON responses are automatically parsed.
          if (response.data == "SUCCESS") {
              alert("Contrasena cambiada con exito")
              this.$router.push("login");
          } else {
            alert("Error al actualizar contrasena");
          }
        })
        .catch((e) => {
          alert(e);
          this.errors.push(e);
        });
  },
  },

  // Fetches posts when the component is created.
};
</script>

<style scoped src="@/assets/styles/cssCrearCuenta.css">
</style>