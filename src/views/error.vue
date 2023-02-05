<template>
  <v-container class="text-center" fluid="">
    <v-row>
      <v-col cols="12">
        <h1 class="mt-10">404 page not found</h1>
        <img class="image-404" src="@/assets/images/404.png" />
        <br />
        <v-btn variant="text" to="/"> return </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "error-view",
};
</script>
<style>
.image-404 {
  width: 250px;
  margin-left: 50px;
}
</style>
