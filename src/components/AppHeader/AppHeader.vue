<script>
import { headerLinks } from '../../assets/data/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HeaderNav from './HeaderNav.vue';
import BaseButton from '../BaseButton.vue';

export default {
    name: 'AppHeader',
    data: () => ({
        headerLinks
    }),
    props: {
        text: String,
        hasArrow: Boolean
    },
    components: { HeaderNav, BaseButton }
}
</script>

<template>
    <header>
        <div class="container p-0 h-100">
            <nav class="row align-items-center h-100">
                <div class="col-2 p-0 py-2"><img class="img-fluid" src="../../assets/img/logo-gobike.png" alt="logo">
                </div>
                <ul class="col d-flex justify-content-center mb-0 list-unstyled pe-0">
                    <HeaderNav v-for="link in headerLinks" :link="link" />
                </ul>
                <div class="col-3 d-flex justify-content-end p-0">
                    <font-awesome-icon icon="bars" class="me-4 h2 align-self-center" />
                    <BaseButton text="Upcoming Events" :hasArrow="true" />
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
header {
    height: 100px;
    background-color: white;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    z-index: 1;
}
</style>