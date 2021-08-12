<template>
  <div id="app">
    <!-- <weather />
    <HelloWorld />
    <demo /> -->
    <music />
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Music from "./components/Music.vue";
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Demo,
    Weather,
    Music,
  },
};
</script>

<style>
</style>
