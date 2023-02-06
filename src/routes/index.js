import {createRouter,createWebHashHistory} from 'vue-router';
const routes = [
	{ 
		path: '/:pathMatch(.*)*', 
		name: 'NotFound',
		component: () => import('../components/HelloWorld.vue') 
	},
	{
		path: '/',
		component: () => import('@/views/Home/index.vue'),
		children: [
			{
				path: '',
				name: 'login',
				component: ()=>import('../views/log/index.vue')
			},
			{
				path: 'helloword',
				name: 'login',
				component: ()=>import('../views/log/index.vue')
			},
			{
				path: 'security',
				name: 'security',
				component: () => import('../views/security/index.vue')
			},
			{
				path: 'components/table',
				name: 'table',
				component: () => import('@/views/Table/index.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/log/index.vue')
	}
]
export default createRouter({
	history: createWebHashHistory(),
	routes,
})