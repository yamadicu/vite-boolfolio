<script >
  import axios from 'axios';

  export default{
    name:'ProjectList',
    data(){
      return{
        baseUrl:'http://127.0.0.1:8000',
        project: null
      }
    },
    created(){
        this.getSingleProject();
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        getSingleProject(){
            axios.get(`${this.baseUrl}/api/project/${this.$route.params.slug}`)
                .then((response) => {
                    this.project = response.data.project;
                }, error =>{
                    if(error.response.status === 404){
                        this.$router.push({name:'not-found'})
                    }else{

                    }
                })
            
        }
    }
}
</script>

<template>

    <div class="container">
        <h1>Progetto: {{ project.tille }}</h1>
        <p>{{ project.content }}</p>

        <div>
            <ul>
                <li v-if="(elem,index) in project.technologies" :key="index">
                    {{ elem.name }}
                </li>
            </ul>
        </div>

        <a href="" @click.prevent="goBack" class="btn btn-primary">Pagina progetti</a>
    </div>

</template>

<style lang="scss">
@use '../style/main.scss';
</style>
