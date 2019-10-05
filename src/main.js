import Vue from 'vue'
import App from './App.vue'
// import Vant from 'vant';
// Vue.use(Vant);
import {
  Button,
  NavBar,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Sticky,
  Search,
  Tag,
  Card,
  Field,
  Cell,
  CellGroup,
  RadioGroup,
  Radio
} from 'vant'
Vue.use(Button).use(NavBar).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Sticky).use(Search).use(Tag).use(Card).use(Field).use(Cell).use(CellGroup).use(RadioGroup).use(Radio)
import 'vant/lib/index.css';
import router from './router'
import axios from 'axios';
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')