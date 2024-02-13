<script>
import CarouselButton from '../../CarouselButton.vue'
import SectionCard from './SectionCard.vue';
import { profTypeData } from '../../../assets/data';
export default {
    name: 'TypeProfessionalSection',
    components: { SectionCard, CarouselButton },
    data: () => ({
        elements: profTypeData,
        currentCards: [],
    }),
    computed: {
        hiddenCard() {
            return this.elements.find(element => !this.currentCards.includes(element))
        }
    },
    created() {
        this.currentCards = this.elements.filter((element, i) => i !== this.elements.length - 1)
    },
    methods: {
        goTo(direction) {
            if (direction === 'right') {
                this.currentCards.push(this.hiddenCard);
                this.currentCards.shift()
            } else {
                this.currentCards.unshift(this.hiddenCard);
                this.currentCards.pop()
            }

        }
    }
}
</script>
<template>
    <section id="type-professional" class="py-5">
        <div class="container py-3">

            <h2 class="text-center">Our Professional Cycling Trainings</h2>
            <span>Learn from the mountain biking expert.</span>
            <div class="row row-cols-4 flex-nowrap">
                <div v-for="card in currentCards" class="col">
                    <SectionCard :hasBlackBorder="true" :hasImg="true" :img="card.img" :hasOverlay="true"
                        :top-title="card.title" />
                </div>
            </div>
            <div class="text-center mt-5">
                <CarouselButton @click="goTo('left')" class="me-3 border border-black  " :direction="'left'"
                    :backColor="'bg-white'" />
                <CarouselButton @click="goTo('right')" class="border border-black" :direction="'right'"
                    :backColor="'bg-white'" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h2 {
    font-weight: bold;
}

span {
    display: block;
    text-align: center;
    margin-bottom: 30px;
}
</style>