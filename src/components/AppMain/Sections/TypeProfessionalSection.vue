<script>
import CarouselButton from '../../CarouselButton.vue'
import SectionCard from './SectionCard.vue';
export default {
    name: 'TypeProfessionalSection',
    components: { SectionCard, CarouselButton }
}
</script>
<template>
    <section id="type-professional">
        <div class="container py-3">

            <h2 class="text-center py-3">Titolo type professional</h2>
            <SectionCard />
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