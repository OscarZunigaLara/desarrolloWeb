require('@/assets/styles/cssCatalog.css')

<template>
<div id = "catalog">

<body>
    <h2>
    <span>Bienvenido {{this.$cookies.get('usuarios')}}</span>
    </h2>
    <h1>
      
    <span>Catalogo de: {{this.$cookies.get('catalog')}}</span>


    </h1>
      <div ref="container">
        <button @click="crearCatalogo">Mostrar Catalogo</button>
        
      </div>



</body>

</div>
</template>

<script>
import axios from 'axios';

import Vue from 'vue';
import VueCookies from 'vue-cookies';
import tab from './tab.vue'


Vue.use(VueCookies)





export default {

     name: 'catalog',
     components: {tab},
  data () {
    return {
     msg: '',

      posts: [],
      errors: [],

      catalogoCarro: []

    }
  },
  mounted(){
    this.GetCatalog(event)
    //alert(Object.values(this.catalogoCarro[0]))
    this.crearCatalogo(event)
      },

   methods: {
    crearCatalogo: function(event) {
      for (var i = 0; i < this.catalogoCarro.length; i++){
        this.crearTabla(event,this.catalogoCarro[i].A01654827_productos_pk ,this.catalogoCarro[i].A01654827_productos_nombre_producto, this.catalogoCarro[i].A01654827_producto_descripcion,
        this.catalogoCarro[i].A01654827_stock_producto, this.catalogoCarro[i].precio, this.catalogoCarro[i].link_Imagen
        )
      }
    },


    crearTabla: function (event, A01654827_productos_pk ,A01654827_productos_nombre_producto, A01654827_producto_descripcion,
    A01654827_stock_producto, precio, link_Imagen) {
        var ComponentClass = Vue.extend(tab)
        var instance = new ComponentClass({
            propsData: {A01654827_productos_pk: A01654827_productos_pk , A01654827_productos_nombre_producto: A01654827_productos_nombre_producto,
            A01654827_producto_descripcion: A01654827_producto_descripcion, A01654827_stock_producto: A01654827_stock_producto,
            precio: precio,  link_Imagen: link_Imagen }
        })
        instance.$slots.default = ['Click me!']
        instance.$mount() // pass nothing
//         console.log(this.$refs)
        this.$refs.container.appendChild(instance.$el)
    },
    GetCatalog: function (event) {
      const article ={"cadena" :this.$cookies.get('catalog'), "pagina": 2}
      //alert(article.cadena)
      //alert(article.pagina)
      //alert(article)
      axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/traeCarro/traecarro", article)
        .then 	(response => {
            //==alert(response.data)
            this.catalogoCarro =   response.data
            //this.catalogoCarro = response.data[0].attributes.name; 
            //alert(catalogoCarro)
            //alert(this.catalogoCarro.length)
            //for (var i = 0; i < this.catalogoCarro.length; i++){
              alert(this.catalogoCarro[i].A01654827_productos_pk)
            //}


        })
    }
    }
    
    }

</script>


<style scoped src="@/assets/styles/cssCatalog.css">
</style>