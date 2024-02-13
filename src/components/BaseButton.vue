<!-- JS -->
<script>


export default {
    name: 'BaseButton',
    props: {
        // TESTO BOTTONE
        text: String,
        // CLASSE ICONA
        hasArrow: Boolean
    },
};

</script>

<!-- HTML -->
<template>
    <!-- BOTTONI GLOBALI -->
    <button>{{ text }}
        <FontAwesomeIcon v-if="hasArrow" icon="arrow-right" />
    </button>
</template>

<!-- CSS -->
<style scoped lang="scss">
@use '../assets/scss/vars' as *;

button {
    padding: 10px 20px;
    background-color: $black;
    color: $white;
    border: 1px solid $black;
    border-radius: 1px;

}
</style>