<template>
    <div class="usuario">
        <h2>Usuario</h2>
        <hr>
        <p><strong>Codigo: </strong>{{ id }}</p>
        <router-view></router-view>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default{
    props:['id'],
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // },
    methods:{
        irParaInicio(){
            // this.$router.push('/')
            // this.$router.push({path: '/'})
            this.$router.push({name: "inicio"})
        }
    },
    // watch:{
    //     $route(to){
    //         this.id = to.params.id
    //     }
    // }
}
</script>

<style>

</style>