<script >
  import axios from 'axios';

  export default{
    data(){
      return{
        project:[],
        baseUrl:'http://127.0.0.1:8000'
      }
    },
    mounted(){
      this.getProject();
    },
    methods:{
      getProject(){
        axios.get(`${this.baseUrl}/api/projects`)
        .then(res=>{
          this.project = res.data.project
        })
      }
    }
  }
</script>

<template>

  <div class="container">
  <h1>ecco i progetti</h1>
    <div class="row">
      <div class="col-3 m-2" v-for="(elem,index) in project" :key="index">
        <div class="card">
          <img class="card-img-top" :src="`${baseUrl}/storage/${elem.cover_image}`" alt="Title">
          <div class="card-body">
            <h4 class="card-title">{{elem.title}}</h4>
            <p class="card-text">{{elem.content}}</p>
            <span v-if="elem.category">{{ elem.category.name }}</span>
            <div>
              <ul>
                <li class="" v-for="(elem,index) in elem.technologies" :key="index">{{ elem.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
