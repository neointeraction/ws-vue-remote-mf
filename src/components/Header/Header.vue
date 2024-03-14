<template>
  <header class="header">
    <img class="logo" src="logo.png" alt="Logo" />
    <nav class="menu">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">User</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  // Add any necessary data, methods, or lifecycle hooks here
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

.logo {
  width: 100px; /* Adjust as needed */
  height: auto; /* Ensure aspect ratio is maintained */
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu ul li {
  display: inline;
  margin-right: 1rem;
}

.menu ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
