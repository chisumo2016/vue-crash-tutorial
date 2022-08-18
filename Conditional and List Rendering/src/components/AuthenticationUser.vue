<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div v-if="isLoggedIn">
            <p class="h3 fw-bold text-success">Welcome User</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur cum doloremque dolores eligendi eos eveniet ipsa laborum libero maxime minima nobis odit officiis quae qui repellat, repellendus totam vero.
            </p>
          </div>

          <div v-if="!isLoggedIn">
            <p class="h3 fw-bold text-danger">Thank You</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur cum doloremque dolores eligendi eos eveniet ipsa laborum libero maxime minima nobis odit officiis quae qui repellat, repellendus totam vero.
            </p>
          </div>
          <div>
            <button class="btn btn-success btn-sm m-1" @click="login"  v-if="!isLoggedIn">Login</button>
            <button class="btn btn-danger btn-sm m-1"  @click="logout" v-if="isLoggedIn">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AuthenticationUser",

  data: function () {
     return {
       isLoggedIn : false
     }
  },

  methods:{
    login: function () {
      this.isLoggedIn = true
    },

    logout: function () {
      this.isLoggedIn = false
    },
  }
}
</script>

<style scoped>

</style>