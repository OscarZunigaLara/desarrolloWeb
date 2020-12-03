require('@/assets/styles/cssCatalog.css')

<template>
<div id = "catalog">

<body>
    <h2>
    <span>Bienvenido {{this.$cookies.get('usuarios')}}</span>
    </h2>
    <h1>
      
    <h2>
        Carrito de compras
    </h2>
    <span>Total: ${{this.total}}  </span>

    </h1>
      <div ref="container">
        <button @click="crearCatalogo">Mostrar carrito</button>
        <button @click="pagar">Pagar</button>
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

      catalogoCarro: [],
      total: 0

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
        ///alert(this.catalogoCarro[i].precio)
        this.total =  this.catalogoCarro[i].precio + this.total;
        //alert(this.total)
      }
    },


    crearTabla: function (event, A01654827_productos_pk ,A01654827_productos_nombre_producto, A01654827_producto_descripcion,
    A01654827_stock_producto, precio, link_Imagen) {
        //alert("creando tabla")
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
      const article ={"usuario": 13}
      //alert(article.cadena)
      //alert(article.pagina)
      //alert(article)
      //alert(article.usuario)
      axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/actualizaContrasena/traerproductoscarro", article)
        .then 	(response => {
            //==alert(response.data)
            //alert(response)
            this.catalogoCarro =   response.data
            //this.catalogoCarro = response.data[0].attributes.name; 
            //alert(catalogoCarro)
            //alert(this.catalogoCarro.length)
            //for (var i = 0; i < this.catalogoCarro.length; i++){
              //alert(this.catalogoCarro[i].A01654827_productos_pk)
            //}


        })
    },
    pagar: function (event){
        alert("PAGANDO")
        const article ={"mail": this.$cookies.get('usuarios')}
        //alert(article.mail)
        axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/actualizaContrasena/obtenerpk", article)
        .then 	(response => {
            //alert(response.data[0].A01654827_cliente_id)
            const article2 = {"usuario": (response.data[0].A01654827_cliente_id).toString()}
            //alert (article2.usuario)
            axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/actualizaContrasena/vaciarcarrito", article2)
        .then 	(response => {
            //alert(response.data[0].A01654827_cliente_id)
            alert(response.data.response)
            location.reload()
            
        })

        })

        
    }
    }
    
    }

</script>


<style scoped src="@/assets/styles/cssCatalog.css">
</style>