<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <hr>
        <p><strong>Codigo: </strong>{{ id }}</p>
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->

        <!-- <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">Editar route</router-link> -->
    
        <router-link 
        tag="button" primario :to="{
            name: 'editarUsuario', 
            params: {id},
            query: { completo: true, lingua: 'pt' } }"
         >Editar</router-link>
    </div>
</template>

<script>
export default{
    props:['id']
}
</script>

<style>

</style>