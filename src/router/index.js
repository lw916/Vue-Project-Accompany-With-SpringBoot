import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        component:import("../components/Login")
    },
    {
        path:"/fail",
        component:import("../components/Fail")
    },
    {
        path:"/home",
        component:import("../components/Home")
    },
    {
        path:"/access",
        component: import("../components/Access")
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router