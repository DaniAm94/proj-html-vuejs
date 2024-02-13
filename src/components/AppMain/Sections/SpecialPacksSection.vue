<script>
import CardsList from './CardsList.vue';
export default {
    name: 'SpecialPacksSection',
    components: { CardsList },
}
</script>
<template>
    <section>
        <div class="container border pt-3">
            <img src="#" alt="medal">
            <h2>Special Packs</h2>
            <p>Subtitle</p>
            <CardsList />
        </div>
    </section>
</template>
<style lang="scss" scoped>
.container {
    min-height: 300px;
    text-align: center;
}
</style>