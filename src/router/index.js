import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path:"/",
        redirect:"/login"//主页重定向登陆页
    },
    {
        path:"/:pathMatch(.*)*",//3.0版本404页面匹配规则需要使用正则表达式，老版本使用"*"
        component: () => import("../components/Main/Error")
    },
    {
        path:"/login",
        component: () =>  import("../components/Main/Login")
    },
    {
        path:"/errorLoginFail",
        component: () => import("../components/ErrorLoginFail")
    },
    {
        path:"/home",
        component: () => import("../components/Main/Home")
    },
    {
        path:"/access",
        component: () => import("../components/basic/Access")
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next();// 访问路径为登录
    if (to.path == '/errorLoginFail') return next();
    if (!window.sessionStorage.getItem("user")) return next('/errorLoginFail');// 没登录去登录
    next();
})

export default router