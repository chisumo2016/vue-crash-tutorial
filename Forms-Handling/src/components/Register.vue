<template>
  <pre>{{ this.user}}</pre>
  <div class="container">
    <div class="row">
      <div class="col-md-3 shadow-lg">
         <div class="card">
           <div class="card-header bg-success text-white">
             <p class="h3">Register Here</p>
           </div>
           <div class="card-body bg-light">

             <form @submit.prevent="register()">
               <div class="mb-2">
                 <input
                     v-model="user.name"
                     type="text"
                     class="form-control"
                     placeholder="Enter Your Name">
               </div>
               <div class="mb-2">
                 <input
                     v-model="user.email"
                     type="email"
                     class="form-control"
                     placeholder="Enter Your Email">
               </div>
               <div class="mb-2">
                 <input
                     v-model="user.password"
                     type="password"
                     class="form-control"
                     placeholder="Enter Your Password">
               </div>
               <div class="mb-2">
                 <input
                     type="submit"
                     class="btn btn-success"
                     value="register">
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
  name: `Register`,
  /** State */
  data: function () {
    return {
      /** user object */
      user:{
          name: "",
          email: "",
          password: "",
      }
    }
  },
  methods:{
    register: function (){
      console.log(this.user);
    }
  }
}
</script>

<style scoped>

</style>