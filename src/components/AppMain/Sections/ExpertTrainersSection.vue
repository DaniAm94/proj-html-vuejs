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
                    <SectionCard :hasImg="true" :hasBlackBottom="true" :name="card.name" :img="card.img"
                        :hasMilkBorder="true" />

                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../../assets/scss/vars' as *;

// SEZIONE PROFESSIONISTI 
section {
    margin: 70px 0;
    padding: 50px 0;
    background-image: linear-gradient($milk 40%, $white 40%);

    // CONTENITORE 
    .container {
        min-height: 300px;
        text-align: center;

        // TITOLO
        h2 {
            font-weight: bold;
            padding-top: 3px;
        }
    }

}
</style>