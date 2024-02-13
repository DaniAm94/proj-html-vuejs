<!-- JS -->
<script>

export default {
    name: 'BaseButton',
    props: {
        // TESTO BOTTONE
        text: String,
        // CLASSE ICONA
        icon: String
    }
    
};

</script>

<!-- HTML -->
<template>
    <!-- BOTTONI GLOBALI -->
    <button>{{ text }} <span :class="icon"></span></button>
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