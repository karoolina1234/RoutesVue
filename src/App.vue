<template>
  <TheNavigation />
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>

  <main></main>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>
