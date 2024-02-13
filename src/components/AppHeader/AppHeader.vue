<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HeaderNav from './HeaderNav.vue';
export default {
    name: 'AppHeader',
    components: { HeaderNav }
}
</script>

<template>
    <header>
        <div class="container border">
            <nav class="d-flex justify-content-between px-5 align-items-center h-100">
                <div>logo</div>
                <HeaderNav />
                <div class="d-flex">
                    <p>icon</p>
                    <p>btn</p>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    height: 80px;
    border-bottom: 1px solid;
}
</style>