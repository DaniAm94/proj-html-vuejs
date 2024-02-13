<script>
import CarouselButton from '../../CarouselButton.vue'
import SectionCard from './SectionCard.vue';
import { profTypeData } from '../../../assets/data';
export default {
    name: 'TypeProfessionalSection',
    components: { SectionCard, CarouselButton }
}
</script>
<template>
    <section id="type-professional">
        <div class="container py-3">

            <h2 class="text-center py-3">Our Professional Cycling Trainings</h2>
            <div class="row row-cols-4 ">
                <div v-for="element in profTypeData" class="col">
                    <SectionCard :hasBlackBorder="true" />
                </div>
            </div>
            <div class="text-center mt-3">
                <CarouselButton class="color me-3" direction="left" />
                <CarouselButton class="color" direction="right" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.row {
    height: 400px;
    border: 1px dashed red;
}
</style>