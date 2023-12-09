<template>
    <nav class="menu">
        <ul>
            <router-link 
            tag="li" 
            to="/" 
            active-class="active" 
            exact>
                <a>Dados</a>
            </router-link>
            <router-link 
            tag="li" 
            to="/usuario" 
            active-class="active" 
            exact>
                <a>Conta</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>