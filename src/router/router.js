import { createRouter,createWebHashHistory } from "vue-router";
import AiList from "@/components/AiList.vue";
import ToolList from  "@/components/ToolList.vue";

const routes =
[
    {
        path:"/",
        component:AiList
    },
    {
        path:"/ai",
        component:AiList
    },
    {
        path:"/tool",
        component:ToolList
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})
export default router