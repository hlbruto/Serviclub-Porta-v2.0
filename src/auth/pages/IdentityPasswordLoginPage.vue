<script setup>
import AuthLoginCard from 'src/auth/components/LoginCard.vue'
</script>

<template>
  <q-page
    class="row justify-center my-class"
    style="min-height: 100vh"
    padding
  >
    <div class="text-center col-4">
      <h5 class="q-mb-md">
        Autenticarse
      </h5>
      <AuthLoginCard />
    </div>
  </q-page>
</template>

<style scoped>
.my-class{
background: linear-gradient(rgba(125, 140, 165, 0.562),rgba(186, 202, 229, 0.418) ), url(Onda.jpeg);
background-size: cover;
}
</style>
