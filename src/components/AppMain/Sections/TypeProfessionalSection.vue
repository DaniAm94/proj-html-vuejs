<script>
import CarouselButton from '../../CarouselButton.vue'
import SectionCard from './SectionCard.vue';
import { profTypeData } from '../../../assets/data';
export default {
    name: 'TypeProfessionalSection',
    components: { SectionCard, CarouselButton },
    data: () => ({
        elements: profTypeData
    })
}
</script>
<template>
    <section id="type-professional">
        <div class="container py-3">

            <h2 class="text-center py-3">Our Professional Cycling Trainings</h2>
            <div class="row row-cols-4 flex-nowrap">
                <div v-for="element in elements" class="col">
                    <SectionCard :hasBlackBorder="true" :hasImg="true" :img="element.img" :hasOverlay="true"
                        :top-title="element.title" />
                </div>
            </div>
            <div class="text-center mt-3">
                <CarouselButton class="color me-3 border border-black  " direction="left" />
                <CarouselButton class="color border border-black" direction="right" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.row {
    overflow: hidden;


}
</style>