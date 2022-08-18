<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <p class="h3 display-2">Count {{ this.count}} </p>
              <button @click="this.increment"  class="btn btn-success m-1"> Increment</button>
              <button @click="this.decrement"  class="btn btn-warning m-1"> Decrement</button>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: `Counter`,
  /** State*/
  data: function () {
    return {
      /** State Object*/
      count: 0
    }
  },
  /** method object*/
  methods :{
    increment :function () {
      this.count = this.count + 1;
    },

    decrement :function () {
      this.count = this.count - 1;
    }
  }

}
</script>

<style scoped>

</style>