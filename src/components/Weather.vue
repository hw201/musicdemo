<template>
  <div>
    <div><span>天知道</span></div>
    <div>
      <input
        type="text"
        v-model="query"
        placeholder="请输入城市"
        @keyup.enter="weather"
      /><button>搜索</button>
    </div>
    <div>
      <span>北京</span>
      <span>上海</span>
      <span>广州</span>
      <span>深圳</span>
    </div>
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "周杰伦",
    };
  },
  methods: {
    weather() {
      this.axios({
        method: "get",
        url: "https://autumnfish.cn/search?keywords=" + this.query,
      }).then((res) => {
        console.log(res.data.result.songs);
      });
    },
  },
};
</script>

<style>
</style>