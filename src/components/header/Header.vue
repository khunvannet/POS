<template lang="html">
  <header class="sticky top-0 z-10">
    <nav class="h-16 w-auto bg-slate-100 shadow-lg flex items-center px-6">
      <span class="text-blue-300 text-lg">
        <font-awesome-icon
          icon="fa-solid fa-shopping-cart"
          class="text-blue-300"
        />
        SHOPPING
      </span>
      <div class="relative flex mx-32">
        <input
          class="h-10 w-72 -mx-6 px-3 z-10 rounded-s-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="search"
          placeholder="Search..."
        />
        <button
          class="ml-2 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:outline-none"
        >
          <font-awesome-icon icon="fa-solid fa-search" class="text-white" />
        </button>
      </div>
      <!-- <div class="flex items-center">
        <a
          href="#"
          class="mr-4 text-gray-600 hover:text-blue-500 transition-colors"
          >Home</a
        >
        <a
          href="#"
          class="mr-4 text-gray-600 hover:text-blue-500 transition-colors"
          >Products</a
        >
        <a
          href="#"
          class="mr-4 text-gray-600 hover:text-blue-500 transition-colors"
          >About</a
        >
       
      </div> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
  components: {},
};
</script>

<style scoped>
/* Add any scoped styles for your header here */
</style>
