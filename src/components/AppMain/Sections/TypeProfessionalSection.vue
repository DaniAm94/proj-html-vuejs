<script>
import CarouselButton from '../../CarouselButton.vue'
import CardsList from './CardsList.vue';
export default {
    name: 'TypeProfessionalSection',
    components: { CardsList, CarouselButton }
}
</script>
<template>
    <section class="container py-3" id="type-professional">
        <h2 class="text-center py-3">Titolo type professional</h2>
        <div class="row"></div>
        <CardsList />
        <div class="text-center mt-3">
            <CarouselButton class="color me-3" direction="left" />
            <CarouselButton class="color" direction="right" />
        </div>
    </section>
</template>

<style>
.row {
    height: 400px;
    border: 1px dashed red;
}
</style>