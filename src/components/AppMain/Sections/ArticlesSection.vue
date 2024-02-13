<script>
import SectionCard from './SectionCard.vue';
export default {
    name: 'ArticlesSection',
    components: { SectionCard },
}
</script>

<template>
    <section id="recipe-articles" class="my-5">
        <div class="text-center bg-danger py-2">
            <h2>TITLE</h2>
            <h6>loremmmmmmmmmmmmm</h6>
        </div>
        <div class="container my-2">
            <SectionCard />
        </div>
    </section>
</template>

<style scoped lang="scss">
.container {
    height: 400px;
    display: flex;
    background-color: green;
}
</style>