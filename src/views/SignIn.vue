<template>
  <div class="container">
    <div class="row shadow-lg mt-4 p-4">
      <form @submit.prevent="handleSubmit">
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
          <button class="btn btn-success mt-2">Iniciar sesión</button>
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
  setup() {
    const email = ref("");
    const password = ref("");

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/users");
      } catch (err) {
        console.log(err);
      }
    };

    return { handleSubmit, email, password };
  },
};
</script>

<style></style>
