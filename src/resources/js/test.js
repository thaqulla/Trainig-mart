
const app = Vue.createApp({
  data() {
    return {
      pos: {x: 0,y: 0},
      radius: 20
    };
  },
  methods: {
    move(x, y) {
      this.pox.x += x;
      this.pox.y += y;
    }
  },
});
const ball = app.mount("#app");

