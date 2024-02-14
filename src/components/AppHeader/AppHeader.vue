<script>
import { headerLinks } from '../../assets/data/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HeaderNav from './HeaderNav.vue';
import BaseButton from '../BaseButton.vue';

export default {
    name: 'AppHeader',
    data: () => ({
        headerLinks,
        isOffCanvasOn: false
    }),
    props: {
        text: String,
        hasArrow: Boolean
    },
    methods: {
        offCanvasToggle() {
            this.isOffCanvasOn = !this.isOffCanvasOn;
        }
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
                    <font-awesome-icon @click="offCanvasToggle" icon="bars" class="me-4 h2 align-self-center" />
                    <BaseButton text="Upcoming Events" :hasArrow="true" :hasHelmet="true" />
                </div>
            </nav>
        </div>
    </header>

    <!-- OffCanvas -->
    <div class="offcanvas offcanvas-start show" :class="{ 'show ': isOffCanvasOn }" data-bs-scroll="true"
        data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
        <div class="overflow-auto">
            <div class="offcanvas-header w-100">
                <img class="mx-auto" src="../../assets/img/loader-gobike.png" alt="">
            </div>

            <div class="offcanvas-body d-flex align-items-center flex-column ">
                <h2 class="mb-3">Contact Information</h2>
                <div>
                    <div class="black-square">
                        <FontAwesomeIcon icon="phone-volume" />
                    </div>
                    <p>+1 (234) 567 89 10</p>
                </div>
                <div>
                    <div class="black-square">
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                    </div>
                    <p>example@example.com</p>
                </div>
                <div>
                    <div class="black-square">
                        <FontAwesomeIcon icon="location-dot" />
                    </div>
                    <p>New Jersey, USA</p>
                </div>
            </div>
            <div class="offcanvas-footer">
                <div class="socials text-center h2">
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    <FontAwesomeIcon class="mx-3" icon="fa-brands fa-square-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
header {
    height: 100px;
    background-color: white;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    z-index: 1;

    li {
        margin: 0 20px;

        // Animated Underline

        &:after {
            display: block;
            content: '';
            border-bottom: solid 3px black;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }

        &:hover:after {
            transform: scaleX(1.15);
        }

        &:after {
            transform-origin: 0% 50%;
        }

        a {
            text-decoration: none;
            color: black;
            font-weight: 600;
            font-size: 1.1rem;
        }
    }
}

.offcanvas-header {
    img {
        width: 160px;
    }
}

.offcanvas-body {
    font-size: 60px;

    .black-square {
        width: 80px;
        background-color: black;
        color: white;
        text-align: center;
        margin: 10px auto;
        border-radius: 5px;
    }

    p {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 30px;
    }
}
</style>