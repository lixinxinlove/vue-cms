<template>
    <div class="tmpl">
        <nav-bar :title="title" />

        <div class="demo">
            <ul>
                 <li v-for="news in newsList" :key="news">
                     <router-link :to="{ name:'NewsDetail',params:{id:news.id} }">
                       <img class="leftImg" :src="news.url">
                      <div>
                        <span>{{news.who}}</span>
                        <div class="news-desc">
                            <p>点击数:{{news.desc}}</p>
                            <p>发表时间:{{news.desc}}</p>
                        </div>
                    </div>
                    </router-link>
                    <hr/>
               </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NewsList',
  data () {
    return {
        title:'新闻列表',
        newsList:[
                {
                "_id": "5ccdbc219d212239df927a93",
                "createdAt": "2019-05-04T16:21:53.523Z",
                "desc": "0",
                "publishedAt": "2019-05-04T16:21:59.733Z",
                "source": "web",
                "type": "福利",
                "url": "http://ww1.sinaimg.cn/large/0065oQSqly1g2pquqlp0nj30n00yiq8u.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5cc43919fc3326376038d233",
                "createdAt": "2019-04-27T19:12:25.536Z",
                "desc": "2",
                "publishedAt": "2019-04-27T19:12:51.865Z",
                "source": "web",
                "type": "福利",
                "url": "https://ww1.sinaimg.cn/large/0065oQSqly1g2hekfwnd7j30sg0x4djy.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5c6a4ae99d212226776d3256",
                "createdAt": "2019-02-18T06:04:25.571Z",
                "desc": "20",
                "publishedAt": "2019-04-10T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqly1g0ajj4h6ndj30sg11xdmj.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5c2dabdb9d21226e068debf9",
                "createdAt": "2019-01-03T06:29:47.895Z",
                "desc": "3",
                "publishedAt": "2019-01-03T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fytdr77urlj30sg10najf.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5c25db189d21221e8ada8664",
                "createdAt": "2018-12-28T08:13:12.688Z",
                "desc": "8",
                "publishedAt": "2018-12-28T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqly1fymj13tnjmj30r60zf79k.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5c12216d9d21223f5a2baea2",
                "createdAt": "2018-12-13T09:07:57.2Z",
                "desc": "3",
                "publishedAt": "2018-12-13T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fy58bi1wlgj30sg10hguu.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5bfe1a5b9d2122309624cbb7",
                "createdAt": "2018-11-28T04:32:27.338Z",
                "desc": "8",
                "publishedAt": "2018-11-28T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fxno2dvxusj30sf10nqcm.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5bf22fd69d21223ddba8ca25",
                "createdAt": "2018-11-19T03:36:54.950Z",
                "desc": "19",
                "publishedAt": "2018-11-19T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fxd7vcz86nj30qo0ybqc1.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5be14edb9d21223dd50660f8",
                "createdAt": "2018-11-06T08:20:43.656Z",
                "desc": "6",
                "publishedAt": "2018-11-06T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fwyf0wr8hhj30ie0nhq6p.jpg",
                "used": true,
                "who": "lijinshanmx"
                },
                {
                "_id": "5bcd71979d21220315c663fc",
                "createdAt": "2018-10-22T06:43:35.440Z",
                "desc": "22",
                "publishedAt": "2018-10-22T00:00:00.0Z",
                "source": "web",
                "type": "福利",
                "url": "https://ws1.sinaimg.cn/large/0065oQSqgy1fwgzx8n1syj30sg15h7ew.jpg",
                "used": true,
                "who": "lijinshanmx"
                }],// 新闻列表数据
    }
  }

}
</script>
<style scoped>
.demo{
    margin-bottom: 40px;
}

.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding-left:15px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin: 5px auto;;

}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}

.demo ul {
    padding: 0;
}

.demo hr{
    margin:5px 5px;
    width: 100%;
    height: 1px;
    color: #999;
}

.demo ul li{
    list-style: none;
}
.news-desc {
    height: 35px;
}


</style>