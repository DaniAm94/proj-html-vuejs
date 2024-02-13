<script>
import { articleData } from '../../../assets/data'
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
    <section id="recipe-articles" class="my-5">
        <div class="text-center bg-danger py-2">
            <h2>TITLE</h2>
            <h6>loremmmmmmmmmmmmm</h6>
        </div>
        <div class="container my-2">
            <div class="row row-cols-4">
                <div v-for="article in articleData" class="col">
                    <SectionCard :hasWhiteBorder="true" :img="article.img" :hasImg="true" :articleTitle="article.title"
                        :articleText="article.text" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#recipe-articles {

    button {
        padding: 20px 40px;
        border-radius: 5px;
        font-weight: 600;
    }
}
</style>