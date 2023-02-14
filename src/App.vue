<template>
  <div class="layout">
    <TheCounter />
  </div>
</template>

<script>
import TheCounter from "@/components/Counter.vue";

export default {
  name: "App",
  components: {
    TheCounter
  }
}
</script>

<style>
.layout {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
</style>