
import Login from './components/login.vue';
import Register from './components/Register.vue';
import Forget from './components/Forget.vue';
import Home from './components/Home.vue';
import Logout from './components/Logout.vue';

const routes = [
    { 
        path: '/',
        component: Login,
        name:'Login' 
    },

    { 
        path: '/register', 
        component: Register, 
        name:'Register'
     },
     { 
        path: '/forget', 
        component: Forget, 
        name:'Forget'
     },

     { 
        path: '/home', 
        component: Home, 
        name:'Home'
     },
     { 
        path: '/logout', 
        component: Logout, 
        name:'Logout'
     },
    
  ];

export  default routes; 