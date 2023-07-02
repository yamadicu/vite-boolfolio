<script >
  import axios from 'axios';

  export default{
    name:'ProjectList',
    data(){
      return{
        project:[],
        baseUrl:'http://127.0.0.1:8000',
        currentPage:1,
        lastPage:null,
      }
    },
    mounted(){
      this.getProject(1);
    },
    methods:{
      getProject(projectApiPage){
        axios.get(`${this.baseUrl}/api/projects`,{
          params:{
            page: projectApiPage 
          }
        }).then(res=>{
          this.project = res.data.project.data
          this.currentPage = res.data.project.current_page
          this.lastPage = res.data.project.last_page
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

    <nav aria-label="Page navigation">
        <ul class="pagination">

            <li class="page-item">
                <a class="page-link" @click.prevent="getProject(currentPage - 1)" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li class="page-item" :class="(currentPage === elem) ? 'active' : '' " aria-current="page" v-for="(elem, index) in lastPage" :key="index">
                <a class="page-link" @click.prevent="getProject(elem)" href="#">{{ elem }}</a>
            </li>

            <li class="page-item">
            <a class="page-link" @click.prevent="getProject(currentPage + 1)" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>

        </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@use '../style/main.scss';
</style>
