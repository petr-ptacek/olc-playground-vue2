import Vue     from 'vue';
import App     from './App.vue';

import './assets/main.css';
import Counter from '@/components/Counter.vue';

Vue.component('TheCounter', Counter);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
