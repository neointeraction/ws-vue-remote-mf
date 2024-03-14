<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted">This is the footer.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #242424;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #424242;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-muted {
  color: #fff;
}
</style>
