<script>
import CardsList from './CardsList.vue';
export default {
    name: 'EventsSection',
    components: { CardsList },
}
</script>


<template>
    <h2>TITOLO</h2>
    <div class="container">
        <CardsList />
    </div>
</template>


<style scoped lang="scss">
.container {
    height: 700px;
    border: 2px dashed black;
    display: flex;
    background-color: aquamarine;
}

h2 {
    padding: 20px 30px;
    border: 2px dashed black;
    text-align: center;
    background-color: aquamarine;

}
</style>