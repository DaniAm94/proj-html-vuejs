<!-- JS -->
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    name: 'CarouselButton',
    props: {
        // CLASSE ICONA 
        direction: String,
        // COLORE 
        color: String,
        // COLORE SFONDO 
        backColor: String
    },
    components: { FontAwesomeIcon }
};

</script>

<!-- HTML -->
<template>
    <!-- BOTTONE CON ICONA A SINISTRA -->
    <button v-if="direction === 'right'" :class="[color, backColor]">
        <FontAwesomeIcon icon="angle-right" />
    </button>
    <!-- BOTTONE CON ICONA A DESTRA -->
    <button v-else-if="direction === 'left'" :class="[color, backColor]">
        <FontAwesomeIcon icon="angle-left" />
    </button>
</template>

<!-- CSS -->
<style scoped lang="scss">
button {
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 1px;
}
</style>