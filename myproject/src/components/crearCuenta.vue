import { Button } from 'ant-design-vue';
require('@/assets/styles/cssCrearCuenta.css')
import {script} 
Vue.use(Button);
Vue.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
Vue.loadScript("js/creaCuentaJavaScript.js")

<template>
  <body>
    <center>
      <h4>CREA TU CUENTA</h4>
      <table>
        <tr>
          <td>Genero:</td>
          <td>
            <div class="cajaSeleccion">
              <select ref="genre" id="genero">
                <option>Mujer</option>
                <option>Hombre</option>
                <option>Otro</option>
              </select>
            </div>
          </td>
        </tr>

        <tr>
          <td>username:</td>
          <td><input type="text" ref="username" id="username" /></td>
        </tr>

        <tr>
          <td>Nombre:</td>
          <td><input type="text" ref="nombre" id="nombre" /></td>
        </tr>
        <tr>
          <td>apPaterno:</td>
          <td><input type="text" ref="appPaterno" id="appPaterno" /></td>
        </tr>
        <tr>
          <td>apMaterno:</td>
          <td><input type="text" ref="appMaterno" id="appMaterno" /></td>
        </tr>
        <tr>
          <td>telefono:</td>
          <td><input type="text" ref="telefono" id="telefono" /></td>
        </tr>
        <tr>
          <td>password:</td>
          <td><input type="password" ref="password" id="password" /></td>
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

          <input class= "buttonCrearCuenta" type="submit" value="Ingresar" v-on:click="login" />
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

    login: function (event) {
      let username = this.$refs.username.value;
      let nombre = this.$refs.nombre.value;
      let trato = this.$refs.genre.value;
      let appMaterno = this.$refs.appMaterno.value;
      let appPaterno = this.$refs.appPaterno.value;
      let telefono = this.$refs.telefono.value;
      let password = this.$refs.password.value;

      const article = {
        username: username,
        password: password,
        nombre: nombre,
        trato: trato,
        apPaterno: appPaterno,
        apMaterno: appMaterno,
        telefono: telefono,
      };
      //alert(article.username);
      //alert(article.nombre)
      //alert(article.trato);
      //alert(article.apPaterno);
      ///alert(article.apMaterno);
      //alert(article.telefono);
      //alert(article.password);

      if (this.checkMail(article.username)){

      
      axios
        .post(
          "https://atidhjsnzl.execute-api.us-east-1.amazonaws.com/default/crearcuenta",
          article
        )
        .then((response) => {
          // JSON responses are automatically parsed.
         alert(response.data.result);
         if (
            response.data.result == "success") {
              alert("Cuenta creada con exito")
            this.$router.push("login");
          } else {
            alert(response.data);
            alert("Error al crear cuenta");
          }
        })
        .catch((e) => {
          alert(e);
          this.errors.push(e);
        });
  }},
  },

  // Fetches posts when the component is created.
};
</script>

<style scoped src="@/assets/styles/cssCrearCuenta.css">
</style>