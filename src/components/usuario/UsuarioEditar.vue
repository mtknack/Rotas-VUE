<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p><strong>Codigo: </strong>{{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua: </strong>{{ $route.query.lingua }}</p>
    </div>
</template>

<script>
export default{
    props:['id']
}
</script>

<style>

</style>