import VueCookies from 'vue-cookies'
require('@/assets/styles/cssLogin.css')



<template>
<body>
    <center>
        INICIA TU SESION
        <form action="registro.html" method="get">
          <tr><td>mail:</td><td><input type="text" ref= "mail" id ="mail"/></td></tr>
          <tr><td>password:</td><td><input type="password" ref = "pwd" id="password"/></td></tr>
        </form>
    <div class="main">
        <div class="sub-main">
    <input CLASS= "buttonCrearCuenta" type="submit" value="Ingresar" v-on:click ="login"/>
        </div>
    </div>
      <br>
     <div class="main">
        <div class="sub-main">
          <button CLASS="buttonCrearCuenta" @click="$router.push('home')">Volver a casa</button>
        </div>
      </div>    <br>
    </center>
</body>
</template>

<script>
import axios from 'axios';

import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)




export default {

     name: 'Login',
  data () {
    return {
     msg: '',

      posts: [],
      errors: []
    }
  },
   methods: {
    login: function (event) {

    let mail=this.$refs.mail.value;   


    const requestToken={"username":mail}
      let tokenJWT=""
      axios.post(" https://aetqcdvca4.execute-api.us-east-1.amazonaws.com/default/gettoken", requestToken)
        .then 	(response => {
            tokenJWT=response.data.token

      let currentObj = this;
      let pwd=this.$refs.pwd.value;
      const article = { "usuarios":mail,
     "password":pwd ,"token":tokenJWT};

    axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/validaCuenta/validacuenta", article)
    .then 	(response => {
      // JSON responses are automatically parsed.
     if(response.data.login=='success'){

      this.$cookies.set('misitio_jwt', tokenJWT, '1d')
      this.$cookies.set('usuarios', article.usuarios, '1d')

      //alert(this.$cookies.get('misitio_jwt') + 'soy la cookie')
      //alert(this.$cookies.get('usuarios') + 'USUARIO')

       
        //alert("logged")
        this.$router.push('logged');
   
    }else{
        
       alert("error de login");
     }
        })
    })
    .catch(e => {
      this.errors.push(e)
    })
  }}
  
   

  // Fetches posts when the component is created.
  
}
</script>
<style scoped src="@/assets/styles/cssLogin.css">
</style>