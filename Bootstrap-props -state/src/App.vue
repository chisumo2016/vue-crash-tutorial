<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <h3 class="text-success fw-bold">App Component</h3>
          <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias animi, aspernatur assumenda atque culpa cupiditate eos exercitationem illo ipsa necessitatibus nesciunt officia perspiciatis qui rem sunt voluptatibus! Perferendis, veniam.</p>
        </div>
      </div>
    </div>

   <!--Customer-->
   <Customer name="Bernard" age="60" designation="Software Developer"/>

   <!-- Employee-->

    <Employee />
  </div>

</template>

<script>
import Customer from "@/components/Customer";
import Employee from "@/components/Employee";
export default {
  components: {Employee, Customer}
}
</script>

<style>
 @import "./styles.css";
</style>
