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
    <div class="container">
        <FooterInfo class="info" />
        <FooterForm class="form" />
        <FooterNav class="nav" />
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    background-color: black;
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