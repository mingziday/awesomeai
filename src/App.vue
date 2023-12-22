<script setup>
</script>

<template> 
<AiMenu/>
<AiSearch/>
<router-view></router-view>
</template>
<script>
import AiMenu from './components/AiMenu.vue';
import AiSearch from './components/AiSearch.vue';
//import { defineAsyncComponent } from 'vue';
//const AiList = defineAsyncComponent(()=>import("./components/AiList.vue"))
export default {
    setup(){

    },
    components: {
        AiMenu,AiSearch
    }
}
</script>
<style scoped>

</style>
