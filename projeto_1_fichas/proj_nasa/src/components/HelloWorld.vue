<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa">
    <button @click="carregaInfo(pesquisa)">pesquisa</button>

    <div v-for="(res,index) in resultado" :key="index">
      <h3>{{res.data[0].title}}</h3>
      <img :src="res.links[0].href" alt="">
      <p>{{res.data[0].description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      pesquisa:"",
      resultado:""
    }
  },
  methods:{
    carregaInfo(query){
      this.axios.get("https://images-api.nasa.gov/search?q=" + query + "&media_type=image")
      .then(res=>{
        this.resultado = res.data.collection.items
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
