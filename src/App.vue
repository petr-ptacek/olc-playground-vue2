<template>
  <div class="layout">
    <TheCounter v-for="i in 10" :key="i"/>
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
  padding: 10px;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>