<template>
  <section v-if="destination" class="destination">
    <h2>{{ destination.name }}</h2>

    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />

      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      destination: null,
    };
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
  },

  methods: {
    async iniData() {
      if (this.$route.params.slug) {
        const response = await fetch(
          `https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`
        );
        this.destination = await response.json();
      }
    },
  },
  async created() {
    this.iniData();
  },
};
</script>
