<script>
export default {
  name: 'Header'
}
</script>

<template>
  <nav class="py-2 border-bottom navbar-dark bg-dark">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link link-light px-2 active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link link-light px-2">About</router-link></li>
        <li class="nav-item"><router-link to="/customers" class="nav-link link-light px-2">Customers</router-link></li>
        <li class="nav-item"><router-link to="/products" class="nav-link link-light px-2">Products</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="nav-link link-light px-2">Contact</router-link></li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><router-link to="/login" class="nav-link link-light px-2">Login</router-link></li>
        <li class="nav-item"><a href="/register" class="nav-link link-light px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Here it goes the name of your company</span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
      </form>
    </div>
  </header>
</template>

<style scoped>

</style>