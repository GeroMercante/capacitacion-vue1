<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <p class="h3 fw-bold text-success">Listado de usuarios API.</p>
          <p class="fst-italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            quibusdam magni dolore iure delectus nihil ratione ex? Eum, quo
            quas?
          </p>
        </div>
        <div v-if="loading">
          <Loader />
        </div>
        <div v-if="errorMensaje">
          <p class="fw-bold text-danger">{{ errorMensaje }}</p>
        </div>
        <div v-if="!loading && usuarios.length > 0" class="row">
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
                <tr v-for="usuario in usuarios" :key="usuario.id">
                  <td>{{ usuario.id }}</td>
                  <td>
                    <router-link
                      class="text-decoration-none fw-bold text-success"
                      :to="'/users/' + usuario.id"
                      >{{ usuario.name }}</router-link
                    >
                  </td>
                  <td>{{ usuario.email }}</td>
                  <td>{{ usuario.company.name }}</td>
                  <td>{{ usuario.website }}</td>
                  <td>{{ usuario.address.city }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <p class="h3 fw-bold text-success">Listado de usuarios JSON local.</p>
          <p class="fst-italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            quibusdam magni dolore iure delectus nihil ratione ex? Eum, quo
            quas?
          </p>
        </div>
        <div class="row">
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
                <tr v-for="user in users" :key="user.id">
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
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import { UserServiceAPI } from "@/services/UserServiceAPI";
import Loader from "@/components/Loader";

export default {
  name: "UserList",
  components: { Loader },
  data: function () {
    return {
      // local JSON
      users: UserService.getAllUsers(),
      // consumiendo api
      usuarios: [],
      // loader
      loading: false,
      // error
      errorMensaje: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UserServiceAPI.getUsersAPI();
      this.loading = false;
      this.usuarios = response.data;
    } catch (err) {
      console.log(err);
      this.loading = false;
      this.errorMensaje = err;
    }
  },
};
</script>

<style></style>
