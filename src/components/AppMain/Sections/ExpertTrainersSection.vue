<script>
import CardsList from './CardsList.vue';
export default {
    name: 'ExpertTrainersSection',
    components: { CardsList },
}
</script>
<template>
    <section class="container border border-success">
        <h2>TITLE</h2>
        <p>Subtitle</p>
        <CardsList />
    </section>
</template>

<style lang="scss" scoped>
.container {
    min-height: 300px;
    text-align: center;

}
</style>