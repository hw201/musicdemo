<template>
  <div></div>
</template>

<script>
var str = "441823199009096442";
var pat = /(\d{3})\d*(\d{3})/; /* 匹配3位数字 匹配数字0个或者多个，匹配3位数字*/
var b = str.replace(pat, "$1****$2");
console.log(b);
// export default {
//   data() {
//     return {};
//   },

// };
</script>

<style>
</style>