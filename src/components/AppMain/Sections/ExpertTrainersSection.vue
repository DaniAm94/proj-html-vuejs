<script>

import { expertTrainers } from '../../../assets/data/index'
import SectionCard from './SectionCard.vue';

export default {
    name: 'ExpertTrainersSection',
    data: () => ({
        expertTrainers
    }),
    components: { SectionCard },
}

</script>

<template>

    <!-- SEZIONE ESPERTI -->
    <section>

        <!-- CONTENITORE -->
        <div class="container">

            <h2>Our Expert Trainers</h2>
            <p>Learn to ride a bike from the experts.</p>

            <!-- ROW -->
            <div class="row">
                <div v-for="card in expertTrainers" class="col-3">

                    <!-- CARD -->
                    <SectionCard :hasImg="true" :hasBlackBottom="true" :name="card.name" :img="card.img" />

                </div>
            </div>

        </div>

    </section>

</template>

<style lang="scss" scoped>

// SEZIONE PROFESSIONISTI 
section {
    background-image: linear-gradient(#fbfbfb 25%,#ffffff);

// CONTENITORE 
.container {
    min-height: 300px;
    text-align: center;
    margin-top: 100px;

    // TITOLO
    h2 {
        font-weight: bold;
        padding-top: 3px;
    }
}

}

</style>