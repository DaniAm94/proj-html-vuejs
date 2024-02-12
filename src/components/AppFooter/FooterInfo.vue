<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: "FooterInfo",
    components: { FontAwesomeIcon }
}
</script>

<template>
    <div class="info-container">
        <img src="../../assets/img/logo-footer-gobike.png" alt="footer logo">
        <ul>
            <li>
                <FontAwesomeIcon class="icon" icon="location-dot" />
                New Jersey, USA
            </li>
            <li>
                <FontAwesomeIcon class="icon" icon="phone-volume" />
                +1(234) 567 89 10
            </li>
            <li>
                <FontAwesomeIcon class="icon" icon="fa-regular fa-envelope" />
                example@example.com
            </li>
        </ul>
        <div class="socials">
            <FontAwesomeIcon class="social icon" icon="fa-brands fa-facebook-f" />
            <FontAwesomeIcon class="social icon" icon="fa-brands fa-square-instagram" />
            <FontAwesomeIcon class="social icon" icon="fa-brands fa-twitter" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.info-container {
    flex-direction: column;

    ul {
        list-style-type: none;
        padding: 0;

        li {
            padding-top: 20px;
        }
    }

    img {
        height: auto;
        width: 200px;
    }

    .social {
        padding: 5px 20px;
        border: 1px solid white;
    }

    .icon {
        font-size: 1.5rem;
    }
}
</style>