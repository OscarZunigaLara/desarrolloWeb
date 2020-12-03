import { Button } from 'ant-design-vue';
Vue.use(Button);
require('@/assets/styles/cssIndex.css')

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>


<template>
<body>

<div id = "intro" style = "text-align:center;">
    <h1>{{ msg }}</h1>
    </div>
    
    <h1>TIENDA DE OSCAR</h1>
    


    
 <ul>
           
           
    <h2> <span>Bienvenido {{this.$cookies.get('usuarios')}}</span> </h2>
    <br>
    
        <div class="main">
          <div class="sub-main">
            <button  class="buttonCrearCuenta" @click="$router.push('buscar')">Buscar</button>
            <button  class="buttonCrearCuenta" @click="$router.push('miCarrito')">Mi Carrito</button>
            <button  class="buttonCrearCuenta" @click="$router.push('historialDeCompras')">Historial</button>

        </div>
      </div> 
    <FONT size = 4>Se vende:</FONT>


        <li>

        <div class="main">
          <div class="sub-main">
            <input CLASS= "buttonCrearCuenta" type="submit" value="Juguetes" v-on:click ="routeCatalog('Juguetes')"/>

        </div>
      </div>    <br>        
      </li>
        
        <li>

        <div class="main">
          <div class="sub-main">
            
            <input CLASS= "buttonCrearCuenta" type="submit" value="Libros" v-on:click ="routeCatalog('libros')"/>

        </div>
      </div>    <br>        
      
      </li>
        <li>

<div class="main">
        <div class="sub-main">

  <input CLASS= "buttonCrearCuenta" type="submit" value="Videojuegos" v-on:click ="routeCatalog('Videojuegos')"/>

        </div>
      </div>    <br>        </li>
        </ul>


<div class="main">
        <div class="sub-main">
  <button  class="buttonCrearCuenta" @click="$router.push('crearCuenta')">Crear cuenta nueva</button>
  <button  class="buttonCrearCuenta" @click="$router.push('login')">Ya tengo una cuenta</button>
  <button  class="buttonCrearCuenta" @click="$router.push('cambiarContrasena')">Cambiar mi contraseña</button>
  <button  class="buttonCrearCuenta" @click="$router.push('cambiarCuenta')">Cambiar mis datos</button>

  <input CLASS= "buttonCrearCuenta" type="submit" value="Cerrar Sesion" v-on:click ="cerrarSesion"/>

        </div>
      </div>    <br>
      
 <h2>
   APROVECHA LOS MEJORES DESCUENTOS!!!
 </h2>


</body>    
</template>

<script>
import axios from "axios";
export default {
  name: 'VuePage',
  data () {
    return {
      msg: 'Hola Clase de desarrollo web'
    }
  },
  

name: 'routeCatalog',
  data () {
    return {
      msg: 'Hola Clase de desarrollo web'
    }
  },
   methods: {
    routeCatalog: function (catalog) {
    //alert(catalog)
    this.$cookies.set('catalog', catalog , '1d')
    //alert('cookie ' +  this.$cookies.get('catalog'))
    this.$router.push("catalog");
    },
      cerrarSesion: function(event) {
      alert("Cerrando Sesion")
      this.$cookies.remove('misitio_jwt')
      this.$cookies.remove('usuarios')
      //alert(this.$cookies.get('misitio_jwt'))
      //alert(this.$cookies.get('usuarios'))
      
      this.$router.push("home")

    }
    },

  
}  
</script>



<style scoped src="@/assets/styles/cssIndex.css">
</style>
