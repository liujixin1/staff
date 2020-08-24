import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'lib-flexible'
import '../utils/flex'
import { Notify, Image, Sticky, Tab, Tabs, DatetimePicker, ActionSheet, Field, Cell, CellGroup, Divider, Button, RadioGroup, Radio, Uploader, Icon, Toast, Checkbox, CheckboxGroup, Loading, Dialog, Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
import vueEsign from 'vue-esign'
Vue.use(vueEsign)
Vue.use(DatetimePicker);
Vue.use(ActionSheet);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Uploader);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);
Vue.use(Image);
Vue.use(Notify);
Vue.config.productionTip = false;
// axios.defaults.baseDns = 'http://employee.sys.admin.hihill.cn'; //测试域名
axios.defaults.baseDns = 'http://hr.mhsys.cn'; //正式域名
// axios.defaults.baseURL = 'http://employee.sys.api.hihill.cn/index.php/' //测试接口
axios.defaults.baseURL = 'http://hrapi.mhsys.cn/index.php' //正式接口
Vue.prototype.$axios = axios;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')