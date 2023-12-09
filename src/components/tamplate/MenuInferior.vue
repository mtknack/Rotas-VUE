<template>
    <nav class="menu">
        <ul>
            <router-link 
            tag="li" 
            to="/" 
            active-class="active" 
            exact>
                <a>Contato</a>
            </router-link>
            <router-link 
            tag="li" 
            to="/usuario" 
            active-class="active" 
            exact>
                <a>Info.</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>