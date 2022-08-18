<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-li to="/" class="navbar-brand">Vue Router</router-li>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link px-3">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link px-3">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link px-3">About</router-link>
          </li>
        </ul>
      </div>

    </div>

  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>