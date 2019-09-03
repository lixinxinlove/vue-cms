// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Mint-ui
import MintUI from 'mint-ui';
// 安装插件
Vue.use(MintUI);   // 里面其实做的就是注册所有的全局组件，和给Vue.prototype挂载一些对象，方便你使用   组件内的this.xxx就能用了
// 引入css
import 'mint-ui/lib/style.css'
// mint-ui 结束

// 全局组件 开始
import MyUl from './components/common/MyUl';
import MyLi from './components/common/MyLi';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
import NavBar from './components/common/NavBar';
Vue.component(NavBar.name,NavBar);
// 全局组件 结束



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
