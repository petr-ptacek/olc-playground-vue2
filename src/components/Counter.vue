<template>
  <div class="counter" :class="classDefs" :style="styleDefs">
    <div class="counter__id">
      <slot :id="id">
        counterId {{ id }}
      </slot>
    </div>
    <div v-html="msg"></div>
    <input v-model="counter" class="counter__value"/>
    <h1>Doubled</h1>
    <div class="counter__value">{{ doubled }}</div>
    <div class="counter__actions">
      <button v-show="counter < 10" @click="increment">Increment</button>
      <button v-if="counter > -10" @click="decrement">Decrement</button>
    </div>
    <div v-if="enableDeleteIcon" @click="deleteHandler" class="counter__deleteIcon">&cross;</div>
  </div>
</template>

<script>
export default {
  name: "TheCounter",
  props: {
    id: {
      type: String,
      required: true
    },
    enableDeleteIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    counterValue: {
      type: Number,
      required: true,
      default: 0,
      validator(val) {
        return val >= 0;
      }
    }
  },
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
      this.$emit("counter-value-changed", value);
    }
  },
  beforeCreate() {
    console.log(`${this.id}: hook:beforeCreate`);
  },
  created() {
    console.log(`${this.id}: hook:created`);
    this.counter = this.counterValue;
  },
  mounted() {
    console.log(`${this.id}: hook:mounted`);
  },
  beforeUpdate() {
    console.log(`${this.id}: hook:beforeUpdate`);
  },
  updated() {
    console.log(`${this.id}: hook:updated`);
  },
  beforeDestroy() {
    console.log(`${this.id}: hook:beforeDestroy`);
  },
  destroyed() {
    console.log(`${this.id}: hook:destroyed`);
  },
  methods: {
    deleteHandler() {
      this.$emit("delete");
    },
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
  position: relative;
}

.counter__deleteIcon {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: coral;
  color: black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
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