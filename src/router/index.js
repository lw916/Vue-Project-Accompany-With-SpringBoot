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
        path:"/success",
        component:import("../components/Success")
    },
    {
        path:"/fail",
        component:import("../components/Fail")
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router