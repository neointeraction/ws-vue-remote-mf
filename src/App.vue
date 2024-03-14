<template>
  <div id="app">
    <!-- Call the Header component -->
    <Header />

    <!-- Your main content goes here -->
    <router-view />
  </div>
</template>

<script>
// Import the Header component
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header, // Register the Header component
  },
};
</script>

<style>
/* Add any global styles here */
</style>
