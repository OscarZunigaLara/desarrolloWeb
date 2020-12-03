<template>
<div id = "intro" style = "text-align:center;">
   
    <h1>{{ msg[0].body }}</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {

     name: 'VuePage',
  data () {
    return {
     msg: '',

      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.

  created() {
      let currentObj = this;
      const article = { title: "Vue POST Request Example" };
    axios.post("https://reqres.in/api/articles", article)
    .then(response => {
      // JSON responses are automatically parsed.
      currentObj.msg=response.data.id;

    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
