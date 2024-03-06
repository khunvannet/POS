<template>
  <div class="flex">
    <div class="w-2/3 grid grid-cols-4 gap-8 mt-10 mx-6">
      <!-- Repeat this div for each product card -->
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md p-6"
      >
        <div class="relative flex-auto">
          <img
            class="w-32 h-32 mx-auto mb-4"
            :src="product.image"
            :alt="product.name + ' Image'"
          />
          <h3 class="text-xl font-bold float-left">{{ product.name }}</h3>
          <h3 class="text-lg font-semibold px-36 my-2 text-gray-400">
            {{ product.price }}
          </h3>
          <span class="text-gray-400">{{ product.category }}</span>
        </div>
        <button
          class="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300"
        >
          <font-awesome-icon
            icon="fa-solid fa-shopping-cart"
            class="text-white"
          />
          ADD ITEM
        </button>
      </div>
      <!-- End of product card div -->
    </div>

    <aside
      class="h-96 w-1/3 bg-white rounded-lg shadow-md p-6 mt-10 sticky top-0 hidden md:block"
    ></aside>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 2,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 3,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 4,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 5,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 6,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 7,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 8,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 9,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 10,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 11,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 12,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 13,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        {
          id: 14,
          name: "Coca",
          price: "$15",
          category: "Fast Food",
          image: require("../assets/fruits.png"),
        },
        // Add more product objects here
      ],
    };
  },
};
</script>
