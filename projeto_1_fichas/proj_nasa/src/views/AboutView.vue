<template>
  <h1>VueAxios demo</h1>
  <ul>
    <li v-for="user in users" :key="user.id">{{user.name}}</li>
  </ul>
</template>


<script>
export default {
  name: "About",
  data(){
    return{
      users: [],
    };
  },
  async mounted() {
    const { data } = await this.axios.get(
      "https://jsonplaceholder.typicode.com/users"   
  );
  this.users = data;
  },
};
</script>