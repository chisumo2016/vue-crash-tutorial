<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet architecto assumenda cum deleniti dignissimos
          earum eos excepturi facere fugit itaque mollitia nisi odio quis, sapiente similique tenetur veniam vitae!</p>
      </div>

   <!--  Display Spinner    -->
      <div v-if="loading">
        <Spinner />
      </div>
    </div>

    <!--  Handling Errors    -->
    <div v-if="errorMessage">
      <p class="fw-bold text-danger">{{ errorMessage }}</p>
    </div>
<!--     <pre>{{ errorMessage}}</pre>-->

    <div
        v-if="!loading && users.length > 0"
        class="row" >
      <div class="col">
        <table class="table table-hover text-center table-striped">
           <thead class="bg-success text-white">
             <tr>
               <th>Sno</th>
               <th>Name</th>
               <th>Email</th>
               <th>Company</th>
               <th>Website</th>
               <th>Location</th>
             </tr>
           </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td> {{ user.id }}</td>
                     <td>
                       <router-link
                           :to="'/users/' + user.id"
                           class="text-decoration-none fw-bold text-success">
                           {{ user.name }}
                       </router-link>
                     </td>
<!--                    <td> {{ user.name }}</td>-->
                    <td> {{ user.email }}</td>
                    <td> {{ user.company.name }}</td>
                    <td> {{ user.website }}</td>
                    <td> {{ user.address.city }}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {UserService} from "@/services/UserService";
import Spinner from "@/components/Spinner";

export default {
  name: "UserList",
  components: {Spinner},
  /** State Data**/
  data: function (){

    /** Return state Object*/
    return {
      /** Arrays of User Data*/
        loading : false, //display a spinner
        users: [],
        errorMessage : null

      
    };
  },
  created : async  function(){
    try {
      this.loading = true
      let response = await UserService.getAllUsers();
      this.loading = false;
      this.users = response.data;
      //console.log(response.data)
    }
    catch (e) {
      this.loading = false;
      this.errorMessage = e
      //console.log(e);
    }
  }
}
</script>

<style scoped>

</style>