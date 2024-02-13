<script>
import { Carousel } from 'bootstrap';

export default {
    name: 'MainJumbotron',
    components: { Carousel }
}
</script>
<template>
    <section id="jumbotron">
        <h2>Jumbo title</h2>
        <span>random text</span>
        <BaseButton :hasArrow="true" :text="'Learn More'" />
        <CarouselButton class="carousel-button left" :direction="'left'" :backColor="'bg-black'" :color="'text-white'" />
        <CarouselButton class="carousel-button right" :direction="'right'" :backColor="'bg-black'" :color="'text-white'" />
    </section>
</template>
<style lang="scss" scoped>
#jumbotron {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 10px;
    height: 700px;
    background-color: dodgerblue;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.left {
        left: 20px;
    }

    &.right {
        right: 20px;
    }
}
</style>