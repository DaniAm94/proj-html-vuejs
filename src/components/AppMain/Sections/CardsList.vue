<script>
import SectionCard from './SectionCard.vue';
export default {
    name: 'CardList',
    components: { SectionCard },
    props: {
        col: Number
    }
}
</script>
<template>
    <div class="row" :class="col === 3 ? 'row-cols-3' : 'row-cols-4'">
        <SectionCard />
    </div>
</template>

<style></style>