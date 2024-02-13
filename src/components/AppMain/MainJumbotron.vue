<script>
import { Carousel } from 'bootstrap';
import { jumbotronData } from '../../assets/data/index.js';

export default {
    name: 'MainJumbotron',
    components: { Carousel },
    data: () => ({
        slides: jumbotronData,
        currentActiveIndex: 0,
    }),
    computed: {
        isFirstIndex() {
            return this.currentActiveIndex === 0;

        },
        isLastIndex() {
            return this.currentActiveIndex === this.slides.length - 1;
        },
        lastIndex() {
            return this.slides.length - 1;
        },

    },
    methods: {
        goTo(direction) {
            if (direction === 'right') {
                if (this.currentActiveIndex === this.lastIndex) {
                    this.currentActiveIndex = 0;
                } else {
                    this.currentActiveIndex++;
                }

            } else {
                if (this.currentActiveIndex === 0) {
                    this.currentActiveIndex = this.lastIndex;
                } else {
                    this.currentActiveIndex--;
                }
            }
        },
        getImagePath(img) {
            const url = new URL(`../../assets/img/${img}`, import.meta.url);
            return url.href;
        }

    },
}
</script>
<template>
    <section id="jumbotron">
        <figure v-for="(slide, i) in  slides " v-show="i === currentActiveIndex">
            <img :src="getImagePath(slide.img)" :alt="slide.title">
        </figure>
        <div class="container">
            <!--PREV BUTTON-->
            <CarouselButton @click="goTo('left')" class="carousel-button left" :direction="'left'" :backColor="'bg-black'"
                :color="'text-white'" />

            <!--CAPTION-->
            <div v-for="(slide, i) in  slides " v-show="i === currentActiveIndex">
                <h2 class="text-white ps-5">{{ slide.title }}</h2>
                <span class="text-white ps-5">{{ slide.text }}</span>
            </div>
            <!--BUTTON-->
            <BaseButton :hasArrow="true" :text="'Learn More'" class="ms-5 base-button" />


            <!--NEXT BUTTON-->
            <CarouselButton @click="goTo('right')" class="carousel-button right" :direction="'right'"
                :backColor="'bg-black'" :color="'text-white'" />
        </div>
    </section>
</template>


<style lang="scss" scoped>
#jumbotron {
    position: relative;

    figure {
        width: 100%;

        img {
            width: 100%;
            height: auto;
        }
    }

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
            width: 600px;
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