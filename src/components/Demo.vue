<template>
  <div>
    <input v-model="msg" placeholder="请输入文字" @keyup.enter="btn" />
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ index + 1 }}---{{ item }} <a @click="remove(index)">×</a>
      </li>
    </ul>
    <span v-show="list.length != 0">总共{{ this.list.length }}条</span>
    <br />
    <span @click="del" v-show="list != ''">全部清除</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["苹果", "香蕉", "葡萄", "榴莲"],
      msg: "",
    };
  },
  methods: {
    btn() {
      this.list.push(this.msg);
    },
    remove(index) {
      this.list.splice(index, 1);
    },
    del() {
      this.list = [];
    },
  },
};
</script>

<style>
</style>