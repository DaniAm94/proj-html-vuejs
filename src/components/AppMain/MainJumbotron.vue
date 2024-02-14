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
    /* Il carosello inizia a girare dall'avvio della pagina verso sinistra*/
    created() {
        setInterval(() => {
            this.goTo('right')
        }, 10000);

    },
    computed: {
        /*computed che mi determina qual è la lunghezza dell'array*/
        lastIndex() {
            return this.slides.length - 1;
        },



    },
    methods: {
        /*method che se ha come direction right entra in un secondo if: se il currentActiveindex è uguale all'indice 
        dell'ultimo elemento dell'array, diventa 0, altrimenti il suo indice aumenta di uno */
        goTo(direction) {
            if (direction === 'right') {
                if (this.currentActiveIndex === this.lastIndex) {
                    this.currentActiveIndex = 0;
                } else {
                    clearInterval(this.startAutoplay)
                    this.currentActiveIndex++;
                }
                /*se la direction non è right, si entra in un'altro if: se il currentActiveindex è uguale a zero,
                il suo indice diventa l'indice dell'ultimo elemento, altrimenti il suo indice diminuisce di uno */
            } else {
                if (this.currentActiveIndex === 0) {
                    this.currentActiveIndex = this.lastIndex;
                } else {
                    clearInterval(this.startAutoplay)
                    this.currentActiveIndex--;
                }
            }
        },
        /*method per creare il path dell'image dinamica*/
        getImagePath(img) {
            const url = new URL(`../../assets/img/${img}`, import.meta.url);
            return url.href;
        },


    },
}
</script>
<template>
    <section id="jumbotron">
        <!--IMAGE-->
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
    height: calc(100vh);
    margin-top: 100px;

    figure {
        width: 100%;
        height: calc(100% - 100px);

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center bottom;
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