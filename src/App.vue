<template>
  <MainLayout>
    <HomeView />
  </MainLayout>
</template>
<script>
import MainLayout from "./components/layouts/MainLayout";
import HomeView from "./views/HomeView.vue";

export default {
  name: "AppVue",
  components: { MainLayout, HomeView },
};
</script>
<style>
body {
  background-color: rgb(181, 186, 186);
}
</style>
