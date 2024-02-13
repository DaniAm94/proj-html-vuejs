<script>
import CardsList from './CardsList.vue';
export default {
    name: 'ExpertTrainersSection',
    components: { CardsList },
}
</script>
<template>
    <section>
        <div class="container">

            <h2>TITLE</h2>
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