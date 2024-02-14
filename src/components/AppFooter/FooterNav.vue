<script>
import { footerLinks } from '../../assets/data';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: "FooterNav",
    data: () => ({
        footerLinks
    }),
    components: { FontAwesomeIcon }
}
</script>

<template>
    <ul>
        <h5>Trainings</h5>
        <li><a href="#">{{ link }}</a></li>
    </ul>
    <ul>
        <h5>Quick Links</h5>
        <li><a href="#">{{ link }}</a></li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;

    h5 {
        font-size: 1.7rem;
        position: relative;
        right: 20px;
        font-weight: bold;
    }

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