<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeadingNavbar from "./components/layout/TheHeadingNavbar.vue";
</script>

<template>
  <div class="application">
    <TheHeadingNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
.application {
  font-family: "NanumBarunGothic", sans-serif !important;
}
@font-face {
  font-family: "NanumBarunGothic";
  src: url("assets/fonts/NanumBarunGothic.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "NanumBarunGothicLight";
  src: url("assets/fonts/NanumBarunGothicLight.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "NanumBarunGothicBold";
  src: url("assets/fonts/NanumBarunGothicBold.ttf") format("truetype");
  font-weight: 700;
}
</style>
