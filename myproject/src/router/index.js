import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VuePage from '@/components/VuePage'
import login from '@/components/login'
import MemberHome from '@/components/MemberHome'
import crearCuenta from '@/components/crearCuenta'
import catalog from '@/components/catalog'
import loged from '@/components/logged'
import cambiarContrasena from '@/components/cambiarContrasena'
import cambiarCuenta from '@/components/cambiarCuenta'
import tab from '@/components/tab'
import buscar from '@/components/buscar'
import miCarrito from '@/components/miCarrito'
import historialDeCompras from '@/components/historialDeCompras'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'VuePage',
      component: VuePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    { 
      path: '/logged',
      name: 'logged',
      component: loged
    },
    { 
      path: '/crearCuenta',
      name: 'MemberHome',
      component: crearCuenta
    }
    ,
    { 
      path: '/catalog',
      name: 'catalog',
      component: catalog
    },
    { 
      path: '/cambiarContrasena',
      name: 'cambiarContrasena',
      component: cambiarContrasena
    },
    {
    path: '/cambiarCuenta',
    name: 'cambiarCuenta',
    component: cambiarCuenta
    },
    {
    path: '/tab',
    name: 'tab',
    component: tab

    }, 
    {
      path: '/buscar',
      name: 'buscar',
      component: buscar
    },
    {
      path: '/miCarrito',
      name: 'miCarrito',
      component: miCarrito
    },
    {
      path: '/historialDeCompras',
      name: 'historialDeCompras',
      component: historialDeCompras
    }
 
  ]
})
