<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa">
    <button @click="carregaInfo(pesquisa)">pesquisa</button>
    
  </div>
  <div v-for="(res,index) in resultado" :key="index">
    <img v-bind:src="res" width="150" alt="">
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
      this.axios.get("https://dog.ceo/api/breed/" + query + "/images")
      .then(res=>{
        this.resultado = res.data.message
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
