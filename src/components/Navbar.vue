<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue Routing</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/users"
              >Usuarios</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/about"
              >Sobre nosotros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/register"
              >Registrarse</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/signin"
              >Iniciar sesión</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
