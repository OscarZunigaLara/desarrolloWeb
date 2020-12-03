import { Button } from 'ant-design-vue';
Vue.use(Button);
require('@/assets/styles/cssIndex.css')

<template>
<body>

<div id = "intro" style = "text-align:center;">
    <h1>{{ msg }}</h1>
    </div>

    <h1>TIENDA DE OSCAR</h1>
 <ul>
    <FONT size = 4>Se vende:</FONT>
        <li>

        <div class="main">
          <div class="sub-main">
            <button  class="buttonCrearCuenta" @click="$router.push('catalog')">Juguetes</button>
        </div>
      </div>    <br>        
      </li>
        
        <li>

        <div class="main">
          <div class="sub-main">
            <button  class="buttonCrearCuenta" @click="$router.push('catalog')">Videojuegos</button>
        </div>
      </div>    <br>        
      
      </li>
        <li>

<div class="main">
        <div class="sub-main">
  <button  class="buttonCrearCuenta" @click="$router.push('catalog')">Juguetes</button>
        </div>
      </div>    <br>        </li>
        </ul>


<div class="main">
        <div class="sub-main">
  <button  class="buttonCrearCuenta" @click="$router.push('crearCuenta')">Crear cuenta nueva</button>
  <button  class="buttonCrearCuenta" @click="$router.push('login')">Ya tengo una cuenta</button>
        </div>
      </div>    <br>
      
 <h2>
   APROVECHA LOS MEJORES DESCUENTOS!!!
 </h2>


</body>    
</template>

<script>
export default {
  name: 'VuePage',
  data () {
    return {
      msg: 'Hola Clase de desarrollo web'
    }
  }
}
</script>



<style scoped src="@/assets/styles/cssIndex.css">
</style>
