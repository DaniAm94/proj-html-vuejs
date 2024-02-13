<script>
import SectionCard from './SectionCard.vue';
export default {
    name: 'ExpertTrainersSection',
    components: { SectionCard },
}
</script>
<template>
    <section>
        <div class="container">

            <h2>Our Expert Trainers</h2>
            <p>Learn to ride a bike from the experts.</p>
            <SectionCard :hasImg="true" />

        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    min-height: 300px;
    text-align: center;
    margin-top: 100px;

    h2 {
        font-weight: bold;
    }

}
</style>