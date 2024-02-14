<script>

import { articleData } from '../../../assets/data';
import SectionCard from './SectionCard.vue';

export default {
    name: 'ArticlesSection',
    data: () => ({
        articleData
    }),
    components: { SectionCard },
}
</script>

<template>

    <!-- SEZIONE NUOVI ARTICOLI -->

    <section id="articles">

        <!-- TITOLO -->
        <div class="text-center py-2">
            <h2 class="fw-bold">Resent New & Articles</h2>
            <h6>Important information about bike</h6>
        </div>

        <!-- CONTENITORE -->
        <div class="container my-2">
            <div class="row row-cols-4">
                <div v-for="article in articleData" class="col">

                    <!-- CARD -->
                    <SectionCard :hasWhiteBorder="true" :img="article.img" :hasImg="true" :articleTitle="article.title"
                        :articleText="article.text" />

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

@use '../../../assets/scss/vars' as*;

// SEZIONE ARTICOLO
#articles {
    background-color: $milk;
    padding: 60px 0;

    // BOTTONE
    button {
        padding: 20px 40px;
        border-radius: 5px;
        font-weight: 600;
    }
}

</style>