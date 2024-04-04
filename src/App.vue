<template>
  <TheNavigation />
  <div class="container">
    <router-view></router-view>
  </div>

  <main></main>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>
