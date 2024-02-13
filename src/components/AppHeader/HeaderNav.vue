<script>
export default {
    name: 'HeaderNav',
    props: {
        link: String
    }
}
</script>

<template>
    <li><a href="#">{{ link }}</a></li>
</template>


<style>
a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 1.1rem;
    margin: 0 20px;
}
</style>