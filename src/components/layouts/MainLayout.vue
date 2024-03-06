<template>
  <Header />
  <slot></slot>
  <Footer />
</template>

<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
export default {
  name: "MainVue",
  components: { Header, Footer },
};
</script>
