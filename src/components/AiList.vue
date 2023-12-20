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
import { ref,reactive } from 'vue'
import {origAis} from './seed.js'
import Ai from './Ai.vue';
export default {
    props: ['aiInfo'],
    setup() {
        const aiList = reactive(origAis);
        function increment() {
            // 在 JavaScript 中需要 .value
            // count.value++
        }
        // 不要忘记同时暴露 increment 函数
        return {
            aiList,
        };
    },
    components: { Ai }
}
</script>
<style scoped>

</style>
