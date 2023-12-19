<script setup>

</script>

<template>
<div class="pusher pushable">
   <div class="navslide navwrap">
     <div class="ui menu icon borderless grid" data-color="inverted white">
        <a class="item labeled openbtn">
            <i class="ion-navicon-round big icon"></i>
        </a>
        <a class="item labeled expandit" onclick="toggleFullScreen(document.body)">
            <i class="ion-arrow-expand big icon"></i>
        </a>
        <div class="item ui colhidden">
            <div class="ui icon input">
                <input type="text" placeholder="Search...">
                <i class="search icon"></i>
            </div>
        </div>
        
     </div>
   </div>
 </div>
</template>
<script>
export default {
  name: "AiSearch",
  data(){
    return {
      titel:'',
    }
  },
  methods:{
    search(){

    }
  }
}
</script>
