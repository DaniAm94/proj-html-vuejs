<script>
import { footerLinks } from '../../assets/data';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: "FooterNav",
    data: () => ({
        footerLinks
    }),
    components: {
        FontAwesomeIcon,

    }
}
</script>

<template>
    <div v-for="linkGroup in footerLinks">
        <h5>{{ linkGroup.title }}</h5>
        <ul>
            <li v-for="link in linkGroup.links">{{ link }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
div {
    padding: 10px;
}

h5 {
    font-size: 1.7rem;
    position: relative;
    left: 10px;
    font-weight: bold;
}

ul {
    list-style-type: none;


    li {
        padding-top: 10px;
    }

    li::before {

        content: "";
        background-color: white;
        width: 10px;
        height: 4px;
        display: block;
        position: relative;
        right: 15px;
        top: 15px;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }
}
</style>