<template>
  <div class="login">
    <div class="content">
       <div class="title">
        <div class="titleBg"></div>
        <div class="titleInit">麦禾教育员工信息表</div>
        <img class="titleImg" src="../assets/title_1.jpg" />
      </div>
      <div class="form">
        <van-field v-model="phone" type="tel" center clearable label="手机号码" placeholder="请输入手机号码">
          <div class="date" v-if="countDown.status"></div>
          <van-button v-if="countDown.status" slot="button" size="small">{{countDown.date}}s</van-button>
          <van-button v-else @click="getVerify" slot="button" type="primary" size="small">获取验证码</van-button>
        </van-field>
        <van-field v-model="verify" type="tel" label="验证码" placeholder="请输入验证码" />
        <!-- </div> -->
        <!-- <div class="item">
          <div class="formName">验证码</div>
          <input
            @blur="onBlurInput()"
            v-model="verify"
            type="tel"
            maxlength="4"
            placeholder="请输入验证码"
          />
        </div>-->
      </div>
      <div class="btn" @click="login">登&nbsp;录</div>
      <div class="footer">@麦禾教育</div>
    </div>
    <div class="loading" v-if="loading">
      <loading></loading>
    </div>
  </div>
</template>
<script>
import Loading from "../components/loading";
export default {
  name: "login",
  components: {
    loading: Loading
  },
  data() {
    return {
      phoneNumber: null,
      loading: false,
      phone: "",
      verify: "",
      countDown: {
        date: 60,
        status: false
      },
      qr:''
    };
  },
  created() {
    const that = this;
    // this.qr = this.GetQueryString("type");
  },
  methods: {
    //获取验证码
    getVerify() {
      const that = this;
      that.loading = true;
      let phone = that.phone;
      let checkPhone = that.checkPhone(phone);
      if (!checkPhone) {
        this.$toast("请输入正确的手机号");
        that.loading = false;
      } else {
        let data = {
          phone
        };
        that.$axios
          .post("/api/Employee/sendSms", data)
          .then(res => {
            console.log(res);
            that.loading = false;
            if (res.data.code == 0) {
              that.countDowns();
              this.$toast(res.data.msg);
            } else {
              this.$toast(res.data.msg);
            }
          })
          .catch(err => {
            console.log(err);
            that.loading = false;
          });
      }
    },
    //输入键盘顶起页面解决方案
    onBlurInput() {
      window.scroll(0, 0);
    },
    //登录
    login() {
      const that = this;
      that.loading = true;
      let phone = that.phone;
      let checkPhone = that.checkPhone(phone);
      let verify = that.verify;
      if (!checkPhone) {
        this.$toast("请输入正确的手机号");
        that.loading = false;
      } else if (verify.length == 0) {
        this.$toast("请输入验证码");
        that.loading = false;
      } else {
        let data = {
          phone,
          code: verify
        };
        that.$axios
          .post("/api/Employee/verifyCode", data)
          .then(res => {
            that.loading = false;
            if (res.data.code == 0) {
              localStorage.setItem("eleToken", "1");
              this.$router.push({
                name: "staff",
                params: {
                  phone: that.phone
                }
              });
            } else {
              this.$toast(res.data.msg);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 手机号验证
    checkPhone(phone) {
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        return false;
      } else {
        return true;
      }
    },
    //从地址获取参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    },
    // 倒计时
    countDowns() {
      const that = this;
      that.countDown.status = true;
      if (that.countDown.date == 0) {
        that.countDown.status = false;
        that.countDown.date = 60;
      } else {
        setTimeout(() => {
          that.countDown.date--;
          that.countDowns();
        }, 1000);
      }
    }
  }
};
</script>
<style scoped >
.title {
  width: 100%;
  position: relative;
}
.title .titleInit {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  z-index: 10;
  font-weight: bold;
}
.title .titleBg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 5;
}
.title .titleImg {
  display: block;
  width: 100%;
  height: auto;
}
.form {
  margin-top: 50px;
}
.btn {
  background: #409EFF;
  font-size: 0.42rem;
  width: 7rem;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-top: 1rem;
}
.footer {
  font-size: 0.32rem;
  color: #409EFF;
  text-align: center;
  margin-top: 1.8rem;
  text-align: center;
}
.loading {
  position: fixed;
  z-index: 10000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>