import Vue from "vue"
import Router from "vue-router"
import Inicio from "./components/Inicio.vue"
import Usuario from "./components/usuario/Usuario.vue"

import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue"
import UsuarioLista from "./components/usuario/UsuarioLista.vue"
import UsuarioEditar from "./components/usuario/UsuarioEditar.vue"

import Menu from "./components/tamplate/Menu.vue"
import MenuAlt from "./components/tamplate/MenuAlt.vue"
import MenuInferior from "./components/tamplate/MenuInferior.vue"

// Registar o vue-router para acesso as rotas
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            // component: Inicio,
            components:{
                default: Inicio,
                menu: Menu
            },
            name: "inicio"
        },
        {
            path: '/usuario',
            // component: Usuario, 
            components:{
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuInferior
            },
            props: true,
            children:[
                {
                    path: '',
                    component: UsuarioLista,       
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe, 
                    props: true
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar, 
                    props: true,
                    name: "editarUsuario"
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})