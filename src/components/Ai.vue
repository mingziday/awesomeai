<template>
<div class="column">
<div class="ui link card">
    <div class="image">
        <img :src=aiInfo.imageUrl class="transition visible">
    </div>
    <div class="content">
        <div class="header">{{aiInfo.title}}</div>
        <div class="meta">
            <a>Dressmaker</a>
        </div>
        <div class="description">
            Amalia is an Dressmaker living in Baku.
        </div>
    </div>
    <div class="extra content">
        <span class="right floated">
            Joined in 2010
        </span>
        <span>
            <i class="user icon"></i>
            23 Friends
        </span>
    </div>
</div>
</div>
</template>

<style scoped>

</style>
<script>
export default {
    props: ['aiInfo'],
    setup() {
        
    },

}
</script>
