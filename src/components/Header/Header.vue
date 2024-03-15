<template>
  <header class="header">
    <i class="pi pi-globe" style="font-size: 1.4rem"></i>
    <nav class="menu">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import "primeicons/primeicons.css";
export default {
  name: "Header",
  // Add any necessary data, methods, or lifecycle hooks here
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  background-color: #242424;
  color: #fff;
  border-bottom: 1px solid #424242;
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
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
</style>
