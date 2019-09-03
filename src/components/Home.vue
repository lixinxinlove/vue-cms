<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <!-- v-for组件的时候需要给key,避免vue计算key，来提升性能 -->
      <!-- key就是位置的标识 -->
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.url" alt="item.who" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 下有九宫格 -->
    <div class="grid">
      <my-ul>
        <my-li v-for="(module,index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgs: [], // 轮播图数据
      modules: [
        {
          title: "新闻资讯",
          className: "back-news",
          route: { name: "NewsList" }
        },
        {
          title: "图文分享",
          className: "back-pic",
          route: { name: "PhotoList", query: { categoryId: 0 } }
        },
        {
          title: "商品展示",
          className: "back-goods",
          route: { name: "Home" }
        },
        {
          title: "留言反馈",
          className: "back-feed",
          route: { name: "Home" }
        },
        {
          title: "搜索咨询",
          className: "back-search",
          route: { name: "Home" }
        },
        {
          title: "联系我们",
          className: "back-callme",
          route: { name: "Home" }
        }
      ]
    };
  },

  components: {},

  created() {
    // 测试自己写的插件

    // this.$axios.get('getlunbo')
    // .then(res=>{
    //   this.imgs = res.data.message;
    // })
    // .catch(err=>console.log(err));

    this.imgs = [
      {
        _id: "5ccdbc219d212239df927a93",
        createdAt: "2019-05-04T16:21:53.523Z",
        desc: "2019-05-05",
        publishedAt: "2019-05-04T16:21:59.733Z",
        source: "web",
        type: "福利",
        url: "http://ww1.sinaimg.cn/large/0065oQSqly1g2pquqlp0nj30n00yiq8u.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5cc43919fc3326376038d233",
        createdAt: "2019-04-27T19:12:25.536Z",
        desc: "2019-04-27",
        publishedAt: "2019-04-27T19:12:51.865Z",
        source: "web",
        type: "福利",
        url:
          "https://ww1.sinaimg.cn/large/0065oQSqly1g2hekfwnd7j30sg0x4djy.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5c6a4ae99d212226776d3256",
        createdAt: "2019-02-18T06:04:25.571Z",
        desc: "2019-02-18",
        publishedAt: "2019-04-10T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqly1g0ajj4h6ndj30sg11xdmj.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5c2dabdb9d21226e068debf9",
        createdAt: "2019-01-03T06:29:47.895Z",
        desc: "2019-01-03",
        publishedAt: "2019-01-03T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqly1fytdr77urlj30sg10najf.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5c25db189d21221e8ada8664",
        createdAt: "2018-12-28T08:13:12.688Z",
        desc: "2018-12-28",
        publishedAt: "2018-12-28T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqly1fymj13tnjmj30r60zf79k.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5c12216d9d21223f5a2baea2",
        createdAt: "2018-12-13T09:07:57.2Z",
        desc: "2018-12-13",
        publishedAt: "2018-12-13T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqgy1fy58bi1wlgj30sg10hguu.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5bfe1a5b9d2122309624cbb7",
        createdAt: "2018-11-28T04:32:27.338Z",
        desc: "2018-11-28",
        publishedAt: "2018-11-28T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqgy1fxno2dvxusj30sf10nqcm.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5bf22fd69d21223ddba8ca25",
        createdAt: "2018-11-19T03:36:54.950Z",
        desc: "2018-11-19",
        publishedAt: "2018-11-19T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqgy1fxd7vcz86nj30qo0ybqc1.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5be14edb9d21223dd50660f8",
        createdAt: "2018-11-06T08:20:43.656Z",
        desc: "2018-11-06",
        publishedAt: "2018-11-06T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqgy1fwyf0wr8hhj30ie0nhq6p.jpg",
        used: true,
        who: "lijinshanmx"
      },
      {
        _id: "5bcd71979d21220315c663fc",
        createdAt: "2018-10-22T06:43:35.440Z",
        desc: "2018-10-22",
        publishedAt: "2018-10-22T00:00:00.0Z",
        source: "web",
        type: "福利",
        url:
          "https://ws1.sinaimg.cn/large/0065oQSqgy1fwgzx8n1syj30sg15h7ew.jpg",
        used: true,
        who: "lijinshanmx"
      }
    ];
  }
};
</script>

<style scoped>
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe img {
  width: 100%;
}

/*九宫格样式*/
.grid span {
  display: inline-block;
  margin: 10px 0;
  width: 50px;
  height: 50px;
  background-repeat: round;
}

.back-pic {
  background-image: url(../../static/img/picShare.png);
}
.back-goods {
  background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
  background-image: url(../../static/img/feedback.png);
}
.back-search {
  background-image: url(../../static/img/search.png);
}
.back-callme {
  background-image: url(../../static/img/callme.png);
}
.back-news {
  background-image: url(../../static/img/news.png);
}
</style>
