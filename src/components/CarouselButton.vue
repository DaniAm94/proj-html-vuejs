<!-- JS -->
<script>

export default {
    name: 'CarouselButton',
    props: {
        // CLASSE ICONA 
        icon: String,
        // COLORE 
        color: String,
        // COLORE SFONDO 
        backColor: String
    }
    
};

</script>

<!-- HTML -->
<template>
    <!-- BOTTONE CON ICONA A SINISTRA -->
    <button :class="[color, backColor]"><span :class="icon"></span></button>
    <!-- BOTTONE CON ICONA A DESTRA -->
    <button :class="[color, backColor]"><span :class="icon"></span></button>
</template>

<!-- CSS -->
<style scoped lang="scss">

button {
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 1px;
}

</style>