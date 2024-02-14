<script>
import SectionCard from './SectionCard.vue';
import { specPacks } from '../../../assets/data'
export default {
    name: 'SpecialPacksSection',
    data: () => ({
        specPacks
    }),

    components: { SectionCard },
}
</script>
<template>
    <section id="special-packs">
        <div class="container text-center pt-3">
            <img class="ribbon-img" src="../../../assets/img/special-packs.png" alt="ribbon">
            <h2 class="fw-bold">Special Packs</h2>
            <p>Select pricing plan to get more</p>
            <div class="row row-cols-3">
                <div v-for="pack in specPacks" class="col">
                    <SectionCard :packName="pack.title" :packPrice="pack.price" :isFlipCard="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#special-packs {
    padding: 60px 0;

    .ribbon-img {
        width: 100px;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
    }
}
</style>