import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Schoolhome from '../views/Schoolhome'
import download from '../views/download.vue'
import information from '../views/information.vue'
import notices from '../views/notices.vue'
import dm from '../views/dm.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'login',
		component: LoginView
	},
	{
		path: '/home',
		name: 'home',
		component: Schoolhome
	},
	{
		path: '/download',
		name: 'download',
		component: download
	},
	{
		path: '/information',
		name: 'information',
		component: information
	},
	{
		path: '/notices',
		name: 'notices',
		component: notices
	},
	{
		path: '/dm',
		name: 'dm',
		component: dm
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// router.beforeEach((to,from,next) => {
// 	//next("/login")//不加参数，直接放行 false:终端导航， 
// 	console.log(to)
// 	console.log(from)
// 	var userinfo=localStorage.getItem("userinfo")
// 	if(to.path!="/login" && (userinfo==""|| userinfo==null) &&to.path!="/home"){
// 		next("/")
// 	}
// 	next()	
// })

// 挂载路由导航守卫 -- 相当于通过token值是否为空 设置了网页的访问权限
// router.beforeEach((to, from, next) => {
// 	// to 将要访问的路径
// 	// from 代表从哪个路径跳转而来
// 	// next 是一个函数，表示放行，可以执行
// 	//   1. next()放行
// 	//   2. next('/login) 【强制跳转】到login页面

// 	/* 如果请求登录页面，就放行 */
// 	if (to.path === '/') return next()
// 	/* 请求登录之后才可以访问的页面 */
// 	// 获取token
// 	const tokenStr = window.sessionStorage.getItem('token')
// 	// 如果token的值为空，表示没有登陆，就强制跳转到登录页面
// 	if (!tokenStr) return next('/')
// 	// 如果token的值不为空，表示已经登陆了，就允许访问页面
// 	next()
// })
router.beforeEach((to, from, next) => {
 var userInfo=localStorage.getItem('userinfo')
 if (to.path != '/' &&(userInfo==""||userInfo==null)) {
  next("/");
 }
 next()
})



export default router