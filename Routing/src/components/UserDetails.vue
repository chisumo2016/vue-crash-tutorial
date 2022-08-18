<template>
    <div class="container mmt-3">
      <div v-if="loading">
         <Spinner/>
      </div>
      <div class="row" v-if="!loading && Object.keys(user) . length > 0">
        <div class="col">
          <pre>{{user}}</pre>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <router-link to="/users" class="btn btn-success ms-3">Back</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import {UserService} from "@/services/UserService";
import Spinner from "@/components/Spinner";

export default {
  name: "UserDetails",
  components: {Spinner},
  data: function () {
    return {
       loading: false,
      user: {},
      errorMessage: null
    }
  },

  created: async function () {
    let userId = this.$route.params.userId;
    
    try {
      this.loading = true;

      let response = await UserService.getUser(userId);
      this.loading = false;
      this.user = response.data;
      //console.log(response.data)
    }catch (e) {
      this.loading = false;
      this.errorMessage = e
          //console.log(e);
    }
  }
}
</script>

<style scoped>

</style>