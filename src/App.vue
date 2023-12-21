<script setup>
</script>

<template>
      
<AiMenu/>
<AiSearch/>
<Suspense>
    <template v-slot:default>
        <AiList/>
    </template>
    <template v-slot:fallback>
        <div class="ui segment">
            <div class="ui active inverted dimmer">
                <div class="ui large text loader">Loading</div>                    
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>  
    </template>
</Suspense>


</template>
<script>
import AiMenu from './components/AiMenu.vue';
import AiSearch from './components/AiSearch.vue';
import { defineAsyncComponent } from 'vue';
const AiList = defineAsyncComponent(()=>import("./components/AiList.vue"))
export default {
    setup(){

    },
    components: {
        AiList,AiMenu,AiSearch
    }
}
</script>
<style scoped>

</style>
