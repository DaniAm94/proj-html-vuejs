<script>
export default {
    name: 'HeaderNav',
    props: {
        link: Object,
    }
}
</script>

<template>
    <li class="header-link"><a href="#">{{ link.title }}
            <ul v-if="link.subList" class="dropdown-links list-unstyled px-2 py-3 rounded">
                <li v-for="link in link.subList">
                    <a href="#">
                        {{ link }}
                    </a>
                </li>
            </ul>
        </a></li>
</template>


<style lang="scss" scoped>
a {
    color: black;
    font-weight: 600;
}

.header-link {
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
}

li {

    &:hover .dropdown-links {
        display: flex;
        flex-direction: column;
        row-gap: 14px;
        transition-duration: 1s;
    }

    a {

        // ---- Animated Underline------
        &:after {
            display: block;
            content: '';
            border-bottom: solid 3px black;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin: 0% 50%;
        }

    }

    &:hover>a::after {
        transform: scaleX(1);
    }

    //-----------------------------------
}


.dropdown-links {
    position: absolute;
    top: 90%;
    left: 50%;
    translate: -40% 0;
    background-color: white;
    white-space: nowrap;
    box-shadow: 0 0 5px rgb(0 0 0 / 15%);
    display: none;
}
</style>