<template>
  <div id="app">
    <!-- Call the Header component -->
    <Header />
    <!-- Your main content goes here -->
    <Footer />
    <router-view />
  </div>
</template>

<script>
// Import the Header component
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header, // Register the Header component
    Footer,
  },
};
</script>

<style>
/* Add any global styles here */
</style>
