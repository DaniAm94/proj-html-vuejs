<script>
import SectionCard from './SectionCard.vue';
export default {
    name: 'SpecialPacksSection',
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
                <div class="col">
                    <SectionCard />
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>