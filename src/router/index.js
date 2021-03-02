import { createRouter,createWebHashHistory} from "vue-router";

const login = () => import("../components/Login")
const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        name:"login",
        component:login
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router