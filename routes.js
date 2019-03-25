const routes = [
	{path: '/', component: Vue.component('home-page')},
	{path: '/:number', component: Vue.component('about-page')} 
];

const myRoute = new VueRouter({routes});
