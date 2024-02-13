<script>
import FooterNav from './FooterNav.vue';
import FooterForm from './FooterForm.vue';
import FooterInfo from './FooterInfo.vue';
export default {
    name: "AppFooter",
    components: {
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
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: black;
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