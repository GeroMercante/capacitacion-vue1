<template>
  <div class="container mt-2">
    <div class="row">
      <prev>
        {{ this.user }}
      </prev>
      <div class="col-md-3">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h4">Prueba v-model & methods</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="register()">
              <div class="mb-2">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="nombre"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  placeholder="email"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="contraseña"
                />
              </div>
              <div class="m-2">
                <input
                  type="submit"
                  class="btn btn-success"
                  value="registrarse"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: function () {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register: function () {
      console.log(this.user);
    },
  },
};
</script>

<style></style>
