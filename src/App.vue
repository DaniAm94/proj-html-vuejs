<script>
import '@fontsource/poppins';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';

import AppHeader from './components/AppHeader/AppHeader.vue';
import AppMain from './components/AppMain/AppMain.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';

export default {
  name: 'Mountain Bike App',
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background-color: black;
}
</style>
