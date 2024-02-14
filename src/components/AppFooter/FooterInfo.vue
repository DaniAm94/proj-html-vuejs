<script>

export default {
    name: "FooterInfo",
}
</script>

<template>
    <div class="info-container">
        <img src="../../assets/img/logo-footer-gobike.png" alt="footer logo">
        <ul>
            <li>
                <FontAwesomeIcon class="icon" icon="location-dot" />
                <span class="m-3">New Jersey, USA</span>
            </li>
            <li>
                <FontAwesomeIcon class="icon" icon="phone-volume" />
                <span>+1(234) 567 89 10</span>
            </li>
            <li>
                <FontAwesomeIcon class="icon" icon="fa-regular fa-envelope" />
                <span>example@example.com</span>
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

        span {
            margin-left: 10px;
        }
    }

    img {
        height: auto;
        width: 200px;
    }

    .social {
        padding: 5px 20px;
        border: 1px solid rgba(255, 255, 255, 0.266);
        margin-right: 10px;
    }

    .icon {
        font-size: 1.5rem;
    }
}
</style>