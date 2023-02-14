<template>
  <div class="layout">
    <TheCounter :counter-value="i" v-for="i in 10" :key="i"/>
  </div>
</template>

<script>

export default {
  name: "App"
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