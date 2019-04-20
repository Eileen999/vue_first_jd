import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Login from './views/login.vue'
import Shopping from './views/Shopping.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import Result from './views/Result.vue'
import Product from './views/Product.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/user',
		alias:'/yonghu',
		name: 'user',
		component: User
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/category',
		name: 'category',
		component: Category
	}, {
		path: '/shopping',
		name: 'shopping',
		component: Shopping
	}, {
		path: '/search',
		name: 'search',
		component: Search
	}, {
		path: '/result',
		name: 'result',
		component: Result
	}, {
		path: '/product',
		name: 'product',
		component: Product
	}]
})