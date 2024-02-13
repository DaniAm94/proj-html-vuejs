<script>
import { Carousel } from 'bootstrap';

export default {
    name: 'MainJumbotron',
    components: { Carousel }
}
</script>
<template>
    <section id="jumbotron">
        <figure>
            <img src="../../assets/img/slider-bike-4.jpg" alt="bike-4">
        </figure>
        <div class="container">
            <!--PREV BUTTON-->
            <CarouselButton class="carousel-button left" :direction="'left'" :backColor="'bg-black'"
                :color="'text-white'" />

            <!--CAPTION-->
            <figcaption>
                <h2 class="high-title text-white ps-5">Unforgettable Cycling Experience</h2>
                <span class="text-white ps-5">Learn cycling from the pros.</span>
            </figcaption>
            <!--BUTTON-->
            <BaseButton :hasArrow="true" :text="'Learn More'" class="ms-5 base-button" />


            <!--NEXT BUTTON-->
            <CarouselButton class="carousel-button right" :direction="'right'" :backColor="'bg-black'"
                :color="'text-white'" />
        </div>
    </section>
</template>


<style lang="scss" scoped>
#jumbotron {


    .container {
        max-height: 800px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        row-gap: 10px;

        h2 {
            font-size: 50px;
            font-weight: 900;
            position: absolute;
            top: 50%;
            transform: translateY(-100%);
        }

        span {
            font-size: 17px;
            position: absolute;
            top: 50%;
            transform: translateY(200%);
        }

        .base-button {
            position: absolute;
            top: 50%;
            transform: translateY(250%);
        }
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