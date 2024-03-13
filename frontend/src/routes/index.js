import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: () => import('@/views/Home.vue') },
	{ path: '/login', component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue') },
	{ path: '/tarefas', component: () => import(/* webpackChunkName: "Tarefas" */ '@/views/Tarefas.vue') },
	{ path: '/minha-conta', component: () => import(/* webpackChunkName: "Minha-conta" */ '@/views/Minha-conta.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'todo-active-link',
})

router.beforeEach((to, from, next) => {
	const publicPages = ['/login'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('token');

	if (authRequired && !loggedIn) {
		return next('/login');
	}else{
		if(to.path === '/login' && loggedIn){
			return next('/');
		}
	}

	next();
})

export default router;
