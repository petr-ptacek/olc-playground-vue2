<template>
  <div class="counter" :class="classDefs" :style="styleDefs">
    <div v-html="msg"></div>
    <input v-model="counter" class="counter__value" />
    <h1>Doubled</h1>
    <div class="counter__value">{{ doubled }}</div>
    <div class="counter__actions">
      <button v-show="counter < 10" @click="increment">Increment</button>
      <button v-if="counter > -10" @click="decrement">Decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCounter",
  data() {
    return {
      counter: 0,
      msg: "<h1>Counter</h1>"
    }
  },
  computed: {
    doubled() {
      return this.counter * 2;
    },
    classDefs() {
      return {
        'counter--danger': this.counter < 0
      }
    },
    styleDefs() {
      return this.counter > 5 ?
          {
            backgroundColor: "lightgreen"
          } :
          {}

    }
  },
  watch: {
    counter(value, oldValue) {
      console.log(`counter value changed from ${oldValue} to ${value}`);
    }
  },
  beforeCreate() {
    console.log("hook:beforeCreate");
  },
  created() {
    console.log("hook:created");
  },
  mounted() {
    console.log("hook:mounted");
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
h1 {
  font-size: 16px;
}

.counter {
  color: black;
  background: lightblue;
  padding: 20px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
}

.counter--danger {
  background-color: indianred;
}

.counter__value {
  font-size: 25px;
  width: 50%;
  text-align: center;
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