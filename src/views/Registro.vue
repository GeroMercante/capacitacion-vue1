<template>
  <div class="container">
    <div class="row shadow-lg mt-4 p-4">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          class="form-control mt-2"
          placeholder="Nombre"
          v-model="displayName"
          required
        />
        <input
          type="email"
          class="form-control mt-2"
          placeholder="Correo electrónico"
          v-model="email"
          required
        />
        <input
          type="password"
          class="form-control mt-2"
          placeholder="Contraseña"
          v-model="password"
          required
        />
        <p>
          <button @click="handleRegister" class="btn btn-success mt-2">
            Registrarse
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  // composition api
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          displayName: displayName.value,
          email: email.value,
          password: password.value,
        });
        router.push("/users");
      } catch (err) {
        console.error(err.messagge);
      }
    };
    return { handleSubmit, displayName, email, password };
  },
};
</script>

<style></style>
