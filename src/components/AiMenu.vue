<script setup>

</script>

<template>
   <div class="ui sidebar vertical left menu overlay  borderless visible sidemenu inverted  grey" style="-webkit-transition-duration: 0.1s; transition-duration: 0.1s;" data-color="grey">
            <a class="item logo" href="index.html">
                <img src="../assets/logo.png" alt="stagblogo" /><img src="../assets/thumblogo.png" alt="stagblogo" class="displaynone" />
            </a>
            <div class="ui accordion inverted">

                <router-link class="title item active" to="/ai">
                    <i class="ion-speedometer titleIcon icon"></i> Ai分类 <i class="dropdown icon"></i>
                </router-link>
                <div class="content active">
                <a class="item transition visible" @click="getAiByCategory()">
                    全部
                </a>
                </div>
                <div class="content active">
                <a class="item transition visible" @click="getAiByCategory('fun')">
                    生活
                </a>
                </div>
                <div class="content active">
                <a class="item transition visible" @click="getAiByCategory('work')">
                    工作
                </a>
                </div>

                <router-link class="title item active"  to="/tool">
                    <i class="ion-ios-lightbulb titleIcon icon"></i>

                    <i class="dropdown icon"></i> 小工具
                </router-link>

                <div class="content active">
                <a class="item transition visible" href="index.html">
                    测试
                </a>
                </div>  
                   
             </div>
   </div>
</template>

<style scoped>

</style>
<script>
import { useAiStore} from '@/store/ai.js'
export default {
  setup(){
    function getAiByCategory(cate){
      const sore = useAiStore();
      sore.category(cate);
    }
    return {
      getAiByCategory
    }
  }
}
</script>