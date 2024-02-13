<script>
import SectionCard from './SectionCard.vue';
export default {
    name: 'EventsSection',
    components: { SectionCard },
}
</script>


<template>
    <section>
        <h2>TITOLO</h2>
        <div class="container">
            <SectionCard />
        </div>
    </section>
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