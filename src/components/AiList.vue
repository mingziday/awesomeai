<template>
  <div class="pusher pushable"> 
  <div class="mainWrap navslide">
      <div class="ui equal width left aligned padded grid stackable">
      <div class="stretched row">
        <div class="sixteen wide column">
            <div class="ui segments">
                <div class="ui segment">
                    <h5 class="ui header">
                        Linkable Cards
                    </h5>
                </div>
                <div class="ui segment">
                    <div class="ui five column grid stackable">
                    <Ai v-for="ai in aiList" :aiInfo="ai" :key="ai.id"></Ai>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>


<script set up >
import { useAiStore } from '@/store/ai.js'
import Ai from './Ai.vue'
import { storeToRefs } from 'pinia'
export default {
    setup() {
        const {aiList} = storeToRefs(useAiStore());
        console.log(aiList);
        return {
            aiList,
        };
    },
    components: { Ai }
}
</script>
<style scoped>

</style>