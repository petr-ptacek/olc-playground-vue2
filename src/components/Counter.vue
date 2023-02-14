<template>
  <div class="counter">
    <div class="counter__value">{{ counter }}</div>
    <div class="counter__actions">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCounter",
  data() {
    return {
      counter: 0
    }
  },
  beforeCreate() {
    console.log("hook:beforeCreate");
  },
  created() {
    console.log("hook:created");
  },
  beforeUpdate() {
    console.log("hook:beforeUpdate");
  },
  updated() {
    console.log("hook:updated");
  },
  beforeDestroy() {
    console.log("hook:beforeDestroy");
  },
  destroyed() {
    console.log("hook:destroyed");
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
}
</script>

<style scoped>
.counter {
  color: black;
  background: lightblue;
  padding: 20px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
}

.counter__value {
  font-size: 25px;
  font-weight: 700;
}

.counter__actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 4px;
  min-width: 100px;
}
</style>