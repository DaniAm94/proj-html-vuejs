<script>
import { Carousel } from 'bootstrap';

export default {
    name: 'MainJumbotron',
    components: { Carousel }
}
</script>
<template>
    <section id="jumbotron">
        <div class="container">
            <h2>Jumbo title</h2>
            <span>random text</span>
            <BaseButton :hasArrow="true" :text="'Learn More'" />
            <CarouselButton class="carousel-button left" :direction="'left'" :backColor="'bg-black'"
                :color="'text-white'" />
            <CarouselButton class="carousel-button right" :direction="'right'" :backColor="'bg-black'"
                :color="'text-white'" />
        </div>
    </section>
</template>
<style lang="scss" scoped>
#jumbotron {
    position: relative;

    background-color: dodgerblue;

    .container {
        height: 700px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        row-gap: 10px;
    }
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.left {
        left: 10px;
    }

    &.right {
        right: 10px;
    }
}
</style>