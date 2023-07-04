<template>
  <div class="container mt-4">
    <div class="row shadow-lg">
      <h3>Prueba de Vuex.</h3>
      <div>
        puntos: <span class="fw-bold text-dark">{{ puntos }}</span>
      </div>
      <button class="btn btn-success mt-1" @click="sumarPuntos(1)">
        sumar punto con vuex
      </button>
      <button class="btn btn-success mt-1" @click="restarPuntos(1)">
        restar punto con vuex
      </button>
      <h1 class="text-success m-2">Home page</h1>
      <p class="h3 fst-italic m-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        nostrum maiores optio nemo dolorum aspernatur repellendus rerum? Officia
        facilis totam quidem illum tenetur magnam.
      </p>
      <Registration />
      <Condiciones />
    </div>
  </div>
</template>

<script>
import Registration from "../components/Registration.vue";
import Condiciones from "../components/Condiciones.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: { Registration, Condiciones },
  setup() {
    const store = useStore();

    console.log(store.state.user);
    store.commit("setUser", "geronimo");

    // Prueba vuex
    const puntos = computed(() => store.state.puntos);
    const sumarPuntos = (p) => {
      store.commit("sumarPuntos", p);
    };
    const restarPuntos = (p) => {
      store.commit("restarPuntos", p);
    };

    return {
      puntos,
      sumarPuntos,
      restarPuntos,
    };
  },
  // Esto tendríamos que hacer en caso de no usar composition API, lo mismo sucede arriba, pero de una forma mas abreviada y ordenada ->
  // methods: {
  //   sumarPuntos(puntos) {
  //     this.$store.commit("sumarPuntos", puntos);
  //   },
  //   restarPuntos(puntos) {
  //     this.$store.commit("restarPuntos", puntos);
  //   },
  // },
  // computed: {
  //   puntos() {
  //     return this.$store.state.puntos;
  //   },
  // },
};
</script>
