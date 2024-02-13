<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FooterNav from './FooterNav.vue';
import FooterForm from './FooterForm.vue';
import FooterInfo from './FooterInfo.vue';
export default {
    name: "AppFooter",
    components: {
        FontAwesomeIcon,
        FooterForm,
        FooterNav,
        FooterInfo
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <FooterInfo class="info" />
            <FooterForm class="form" />
            <FooterNav class="nav" />
        </div>
        <div class="copyright">
            <FontAwesomeIcon class="icon" icon="fa-regular fa-copyright" />
            2022 Gobike - All Righits Reserved.
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: black;
    padding-top: 50px;

    .copyright {
        color: white;
        display: flex;
        justify-content: center;
        margin-top: 60px;
        padding-bottom: 20px;

        .icon {
            position: relative;
            right: 5px;
            top: 4px;
        }
    }
}

div {
    display: flex;
    color: white;


    .info {
        flex-basis: 20%;
    }

    .form {
        flex-basis: 50%;
        padding: 0px 100px;
    }

    .nav {
        flex-basis: 20%;
    }
}
</style>