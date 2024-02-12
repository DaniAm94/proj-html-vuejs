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
    <FooterInfo />
    <FooterForm />
    <FooterNav />
</template>