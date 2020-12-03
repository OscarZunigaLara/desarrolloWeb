require('@/assets/styles/cssCatalog.css')

<template>

  <div id = "catalog">
      <body>

    <div class="p-catalog">
        <div class="p-card">
        
          <a v-on:click ="agregarCarrito" class="gradio"></a>
          <h5>Producto: {{A01654827_productos_nombre_producto}}</h5>
          <h5>Descripcion: {{A01654827_producto_descripcion}} </h5>
          <h5>Stock: {{A01654827_stock_producto}} </h5>
          <h5>Precio:  {{precio}} </h5>
          <input type="submit" value="Agregar a carrito" v-on:click ="agregarCarrito"/>

          <hr>
          <img v-bind:src= link_Imagen alt = "Honda Civic Type R">
      </div>
    </div>

</body>
  </div>

</template>
<script>
import axios from 'axios';

  export default {
name: 'Button',
props: ['A01654827_productos_pk','A01654827_productos_nombre_producto', 'A01654827_producto_descripcion', 'A01654827_stock_producto',
 'precio', 'link_Imagen'],

 methods:{
   agregarCarrito: function(event){
     const article = {"mail": this.$cookies.get('usuarios')};
     ///alert(article.mail);
     alert
     axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/actualizaContrasena/obtenerpk", article)
    .then 	(response => {
      //alert(response.data[0].A01654827_cliente_id);
      //alert(this.A01654827_productos_pk)
      const prod = {"usuario": response.data[0].A01654827_cliente_id, "numproduct": this.A01654827_productos_pk};
      //alert(prod.usuario)
      //alert(prod.usuario);
      //alert(prod.numproduct);
      axios.post("https://dqllp5rc6g.execute-api.us-east-1.amazonaws.com/actualizaContrasena/agregaproductocarro", prod)
    .then 	(response2 => {
      alert(response2.data.response)

    })


        })
   

   }
 }

}


</script>
<style scoped src="@/assets/styles/cssCatalog.css">

</style>