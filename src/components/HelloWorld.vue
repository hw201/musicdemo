<template>
  <div class="hello">
    <button @click="add">添加</button>
    <button @click="sub">删除</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ index }}--{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: ["hw", "www", "wyq", "ma"],
    };
  },
  methods: {
    add() {
      this.arr.push("wzy");
    },
    sub() {
      this.arr.shift();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
