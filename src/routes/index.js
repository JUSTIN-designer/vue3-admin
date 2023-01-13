import {createRouter,createWebHashHistory} from 'vue-router';
const routes = [
	{ 
		path: '/:pathMatch(.*)*', 
		name: 'NotFound',
		component: () => import('../components/HelloWorld.vue') 
	},
	{
		path: '/',
		component: () => import('../views/Home/index.vue'),
		children: [{
			path: 'helloword',
			name: 'login'
			component: ()=>import('../views/log/index.vue')
		},
		{
			path: 'security',
			name: 'security'
			component: () => import('../views/security/index.vue')
		}
		]
	}
]
export default createRouter({
	history: createWebHashHistory(),
	routes,
})