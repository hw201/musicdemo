<template>
  <div class="warp">
    <div class="bar">
      <div><span>悦听</span></div>
      <div class="search">
        <input
          type="text"
          placeholder="请输入歌曲"
          v-model="query"
          @keyup.enter="music"
        />
        <i class="el-icon-search"></i>
      </div>
    </div>
    <div class="content">
      <div class="musiclist">
        <ul>
          <li v-for="(item, index) in musiclist" :key="index">
            <i class="el-icon-video-play" @click="playmusic(item.id)"></i>
            {{ item.name }}
            <span v-if="item.mvid != 0" @click="mvvideo(item.mvid)"
              ><i class="el-icon-video-camera"></i
            ></span>
          </li>
        </ul>
      </div>
      <div class="musicmv">
        <!--:playing="{ playing: isplaying }" -->
        <img :src="musicpic" class="imgsize" />

        <div v-show="isshow" style="display: none">
          <video :src="mvurl" controls="controls"></video>
          <div class="mask" @click="hide"></div>
        </div>
      </div>

      <scroll class="scrollcontent" ref="scroll" :pull-up-load="true">
        <div class="musiccomment">
          <h3>热门留言</h3>

          <div v-for="(item, index) in commentlist" :key="index">
            <img
              :src="item.user.avatarUrl"
              style="hegith: 50px; width: 50px; border-radius: 50%"
            />
            <span class="span_1">{{ item.user.nickname }}</span>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </scroll>
    </div>

    <div class="foot">
      <audio :src="musicurl" controls autoplay loop class="audio"></audio>
      <!-- @play="play"
        @pause="pause" -->
    </div>
  </div>
</template>

<script>
import Scroll from "./scroll/Scroll.vue";
export default {
  components: { Scroll },
  data() {
    return {
      query: "周杰伦",
      musiclist: [],
      musicurl: "",
      musicpic: "",
      commentlist: "",
      mvurl: "",
      isshow: false,
      // isplaying: false,
    };
  },
  methods: {
    // play() {//播放
    //   this.isplaying = true;
    // },
    // pause() {//暂停
    //   this.isplaying = false;
    // },
    // keywords id ids 是请求参数
    music() {
      //搜索歌曲
      this.axios({
        method: "get",
        url: "https://autumnfish.cn/search?keywords=" + this.query,
      }).then((res) => {
        console.log(res.data.result.songs);
        this.musiclist = res.data.result.songs;
      });
    },
    playmusic(musicid) {
      //歌曲列表
      this.axios({
        method: "get",
        url: "https://autumnfish.cn/song/url?id=" + musicid,
      }).then((res) => {
        // console.log(res.data.data[0].url);
        // console.log(res);
        this.musicurl = res.data.data[0].url;
      });
      this.axios({
        //歌曲图片
        method: "get",
        url: "https://autumnfish.cn/song/detail?ids=" + musicid,
      }).then((res) => {
        // console.log(res);
        this.musicpic = res.data.songs[0].al.picUrl;
      });
      this.axios({
        //歌曲评论
        method: "get",
        url: "https://autumnfish.cn/comment/hot?type=0&id=" + musicid,
      }).then((res) => {
        console.log(res);
        this.commentlist = res.data.hotComments;
      });
    },
    mvvideo(mvid) {
      this.axios({
        method: "get",
        url: "https://autumnfish.cn/mv/url?id=" + mvid,
      }).then((res) => {
        console.log(res);
        this.isshow = true;
        this.mvurl = res.data.data.url;
      });
    },
    hide() {
      this.isshow = false;
    },
  },
};
</script>

<style>
.scrollcontent {
  height: 740px;
  width: 250px;
  overflow: hidden;
}
.span_1 {
  position: relative;
  top: -20px;
  left: 15px;
}
.warp {
  width: 1283px;
  height: 900px;
  background-color: black;
}
.bar {
  height: 70px;
  background-color: rgb(93, 146, 214);
}
.bar span {
  color: white;
  font-size: 20px;
  position: relative;
  top: 20px;
  left: 20px;
}
.search {
  float: right;
  position: relative;
  right: 20px;
  bottom: 10px;
}
.search input {
  height: 30px;
  width: 220px;
}
.el-icon-search {
  position: relative;
  right: 30px;
}
.content {
  height: 765px;
  /* width: 1000px; */
  background-color: rgb(185, 199, 189);
  display: flex;
}
.musiclist {
  width: 25%;
  border-right: 1px solid black;
  /* background-color: red; */
  /* height: 560px; */
  flex: 1;
}
.musiclist ul li {
  position: relative;
  top: -10px;
  right: 20px;
  list-style: none;
}
.musicmv {
  width: 50%;
  /* height: 560px;  */
  border-right: 1px solid black;
}

.musiccomment {
  width: 250px;
  /* height: 560px; */
  flex: 1;
}
.foot {
  height: 70px;
  background-color: rgba(255, 253, 253, 0.863);
}
.audio {
  width: 100%;
  height: 85%;
}
.imgsize {
  width: 50%;
  position: relative;
  transform: translate(50%, 50%);
}
</style>