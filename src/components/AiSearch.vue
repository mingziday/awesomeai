<script setup>

</script>

<template>
<div class="pusher pushable">
   <div class="navslide navwrap">
     <div class="ui menu icon borderless grid" data-color="inverted white">
        <a class="item labeled openbtn">
            <i class="ion-navicon-round big icon"></i>
        </a>
        <div class="item ui colhidden">
            <div class="ui action input">
                <input type="text" placeholder="Search..." v-model="title">
                <button class="ui button" @click="search">Search</button>
            </div>
        </div>
        
     </div>
   </div>
 </div>
</template>
<script>
import { useAiStore} from '@/store/ai.js'
import { ref } from  'vue'
export default {
  setup(){
    const title = ref('');
    function search(){
      const sore = useAiStore();
      sore.search(title.value);
    }
    return {
      title,search
    }
  }
}
</script>
