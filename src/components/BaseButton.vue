<!-- JS -->
<script>


export default {
    name: 'BaseButton',
    props: {
        // TESTO BOTTONE
        text: String,
        // CLASSE ICONA
        hasArrow: Boolean,
        hasHelmet: Boolean
    }
};

</script>

<!-- HTML -->
<template>
    <!-- BOTTONI GLOBALI -->
    <button>
        <img v-if="hasHelmet" src="../../src/assets/img/casco-bianco-su-nero.png" alt="Helmet">
        {{ text }}
        <FontAwesomeIcon v-if="hasArrow" icon="arrow-right" />
    </button>
</template>

<!-- CSS -->
<style scoped lang="scss">
@use '../assets/scss/vars' as *;

button {
    padding: 15px 25px;
    background-color: $black;
    color: $white;
    border: 1px solid $black;
    border-radius: 1px;

    img {
        width: 50px;
    }

}
</style>