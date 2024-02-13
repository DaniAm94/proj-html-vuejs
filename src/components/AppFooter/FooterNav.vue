<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: "FooterNav",
    components: { FontAwesomeIcon }
}
</script>

<template>
    <ul>
        <h5>Trainings</h5>
        <li><a href="#">Riding Lesson</a></li>
        <li><a href="#">Safe Driving</a></li>
        <li><a href="#">Mountain Bike</a></li>
        <li><a href="#">Trail Drive</a></li>
        <li><a href="#">Pedaling</a></li>
    </ul>
    <ul>
        <h5>Quick Links</h5>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a> </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Pakages</a></li>
        <li><a href="#">Contact</a></li>
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