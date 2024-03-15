<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted">Copyright © 2024. NID </span>
    </div>
  </footer>
</template>

<script>
import useHost from "host/useHost";
console.log("vue useHost s", useHost.getState());

export default {
  name: "Footer",
  components: {
    useHost,
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #242424;
  padding: 12px 0;
  text-align: center;
  border-top: 1px solid #424242;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-muted {
  color: #fff;
  font-size: 14px;
}
</style>
