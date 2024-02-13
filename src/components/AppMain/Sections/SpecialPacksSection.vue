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
    <section>
        <div class="container text-center pt-3">
            <p>stellina</p>
            <h2>Special Packs</h2>
            <p>Subtitle</p>
            <div class="row row-cols-3">
                <div v-for="pack in specPacks" class="col">
                    <SectionCard :packName="pack.title" :isFlipCard="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>