<!-- JS -->
<script>

export default {
    name: 'AppLogo',
    props: {
        // IMMAGINE 
        image: String,
        // TESTO ALTERNATIVO
        alter: String
    }
};

</script>

<!-- HTML -->
<template>
    <figure>
        <img :src="image" :alt="alter">
    </figure>
</template>

<!-- CSS -->
<style scoped lang="scss">

img {
    width: 200px;
}

</style>