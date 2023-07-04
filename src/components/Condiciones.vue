<template>
  <div class="container mt-2">
    {{ this.isLoggedIn }}
    <div class="row shadow-lg p-3 mt-1">
      <div class="col-md-6">
        <div class="card-body">
          <div v-if="isLoggedIn">
            <p class="h3 fw-bold text-success">
              Cambiando estados con metodos en verde
            </p>
            <p class="fst-italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
              recusandae? Maiores aut molestiae culpa amet sed ullam, officia
              illo quis earum quos a consequuntur dolores aliquam provident
              obcaecati necessitatibus quasi non velit blanditiis quas eius
              illum. Quas consequuntur odit voluptatem.
            </p>
          </div>
          <div v-if="!isLoggedIn">
            <p class="h3 fw-bold text-danger">Cambiando estados con metodos</p>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              mollitia, itaque numquam nihil temporibus sequi, ipsum harum minus
              labore, debitis tempora! Animi ab distinctio, eius ipsam pariatur
              amet. Consequuntur, nostrum.
            </p>
          </div>
          <div>
            <div v-if="!isLoggedIn">
              <button class="btn btn-success m-1" @click="login()">
                Setear estado a true
              </button>
            </div>
            <div v-if="isLoggedIn">
              <button class="btn btn-danger m-1" @click="logout()">
                Setear estado a false
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condiciones",
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    login: function () {
      this.isLoggedIn = true;
    },
    logout: function () {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style></style>
