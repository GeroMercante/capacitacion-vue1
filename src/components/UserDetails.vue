<template>
  <div class="container mt-3">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-if="errorMessage">
      <p class="text-danger fw-bold">{{ errorMessage }}</p>
    </div>
    <div class="row" v-if="!loading && Object.keys(user).length > 0">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-success text-white">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Empresa</th>
              <th>Website</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/users" class="btn btn-success my-2"
          >Volver a los usuarios</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { UserServiceAPI } from "@/services/UserServiceAPI";
import Loading from "./Loader.vue";

export default {
  name: "UserDetails",
  components: { Loading },
  data: function () {
    return {
      loading: false,
      user: {},
      errorMessage: null,
    };
  },
  created: async function () {
    let userId = this.$route.params.userId;
    try {
      this.loading = true;
      let response = await UserServiceAPI.getUser(userId);
      this.loading = false;
      this.user = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>

<style></style>
