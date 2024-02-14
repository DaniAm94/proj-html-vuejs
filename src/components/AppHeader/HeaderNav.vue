<script>
export default {
    name: 'HeaderNav',
    props: {
        link: Object,
    }
}
</script>

<template>
    <li><a href="#">{{ link.title }}
            <ul v-if="link.subList" class="dropdown-links list-unstyled px-2 py-3 rounded">
                <li class="mb-2" v-for="link in link.subList">{{ link }}</li>
            </ul>
        </a></li>
</template>


<style lang="scss" scoped>
li {
    position: relative;

    &:hover .dropdown-links {
        display: block;
        transition-duration: 1s;
    }
}


.dropdown-links {
    position: absolute;
    top: 110%;
    left: 50%;
    translate: -40% 0;
    background-color: white;
    white-space: nowrap;
    box-shadow: 0 0 5px gray;
    display: none;
}
</style>