<template>
<div class="column">
<div class="ui link card">
    <div class="image">
        <img :src=aiInfo.imageUrl class="transition visible">
    </div>
    <div class="content">
        <div class="header">{{aiInfo.name}}</div>
        <div class=" meta">
            <i class="user icon"></i>
            <a>{{aiInfo.auther}}</a>
        </div>
        <div class="description">
            {{aiInfo.description}}
        </div>
    </div>
    <div class="extra content">
        <span class="right floated">
            {{aiInfo.date}}
        </span>
        <span>
            <i class="heart red icon" @click="onLike(aiInfo.id)"></i>
            {{aiInfo.likes}}  Likes
        </span>
    </div>
</div>
</div>
</template>

<style scoped>

</style>
<script>
import { useAiStore } from '@/store/ai.js'
export default {
    props: ['aiInfo'],
    setup() {
        function onLike(id) {
            const store = useAiStore();
            store.like(id);
        }
        return {
            onLike
        }
    },

}
</script>
