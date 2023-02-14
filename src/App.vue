<template>
  <div class="layout">
    <div class="layout__sum">
      {{ sum }}
    </div>
    <div class="layout__counters">
      <TheCounter
          v-for="counter in counters"
          :key="counter.id"
          :counter-value="counter.counterValue"
          :enable-delete-icon="counter.enableDeleteIcon"
          :id="counter.id"
          @delete="counterDeleteHandler(counter.id)"
          @counter-value-changed="counterValueChangedHandler(counter.id, $event)"
      >
        <template #default="{ id }">
          <i>CounterID</i>&nbsp;<strong style="font-size: 20px;">{{ id }}</strong>
        </template>
      </TheCounter>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counters: Array.from({ length: 10 }, (v_, idx) => ({
        id: idx.toString(),
        enableDeleteIcon: !!(idx % 2),
        counterValue: idx
      }))
    }
  },
  computed: {
    sum() {
      return this.counters.reduce((acc, counter) => acc + counter.counterValue, 0);
    }
  },
  methods: {
    counterDeleteHandler(id) {
      this.counters = this.counters.filter(counter => counter.id !== id);
    },
    counterValueChangedHandler(id, value) {
      this.counters[id].counterValue = value;
    }
  }
}
</script>

<style>
.layout {
  padding: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__sum {
  text-align: center;
  font-size: 40px;
  padding-bottom: 5px;
}

.layout__counters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>