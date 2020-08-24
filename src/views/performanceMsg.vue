<template>
  <div class="container">
    <div class="title">
      <div class="titleBg"></div>
      <div class="titleInit">麦禾教育员工绩效面谈记录表</div>
      <img class="titleImg" src="../assets/title_2.jpg" />
    </div>
    <div class="main">
      <div class="list">
        <van-divider
          dashed
          :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
        >基本信息</van-divider>
        <van-field v-model="form.data1" label="所在部门：" placeholder="请输入所在部门" readonly />
        <van-field v-model="form.data2" label="职位名称：" placeholder="请输入职位名称" readonly />
        <van-field v-model="form.data3" label="姓名：" placeholder="请输入姓名" readonly />
        <van-field v-model="form.data4" label="考核周期：" placeholder="请输入姓名" readonly />

        <!-- <van-cell title="开始时间：" is-link :value="form.data4" />
        <van-cell title="结束时间：" is-link :value="form.data5" />-->
        <van-divider
          dashed
          :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
        >考核指标</van-divider>

        <template v-for="(item,index) in tableEducation">
          <div class="educationItem">
            <van-field readonly v-model="item.project_name" type="textarea" label="考核项目" />
            <van-field readonly v-model="item.target" type="textarea" label="目标完成" />
            <van-field readonly v-model="item.real_complete" type="textarea" label="实际完成" />
            <van-field readonly v-model="item.grade" type="textarea" label="得分" />
          </div>
        </template>
        <van-divider
          dashed
          :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px',marginTop:'-2px',background:'#fff'}"
        >考核人谈话要点</van-divider>
        <van-field readonly v-model="form.data6" type="textarea" label="业绩与优点：" />
        <van-field readonly v-model="form.data7" type="textarea" label="存在的不足：" />
        <van-field readonly v-model="form.data8" type="textarea" label="备注：" />

        <van-field name="uploader" label="主管签名：">
          <template #input>
            <van-image width="100" height="50" :src="baseUrl+form.data9" />
          </template>
        </van-field>
        <van-field v-model="form.data10" label="签名时间：" readonly />
        <div class="explainTitle">说明：</div>
        <div class="explainText">1、绩效改进计划由主管与员工在进行绩效面谈时共同沟通确认，作为员工工作改进依据。</div>
        <div class="explainText">2、绩效改进计划由上级主管与员工双方确认后签字生效，HR留存备案。</div>
      </div>
    </div>

    <div v-if="showMain">
      <van-field name="uploader" label="本人签名" required>
        <template #input></template>
      </van-field>
      <div class="esign">
        <vue-esign
          ref="esign"
          :width="800"
          :height="500"
          :isCrop="isCrop"
          :lineWidth="lineWidth"
          :lineColor="lineColor"
          :bgColor.sync="bgColor"
        />
        <van-icon @click="handleReset" class="remove" name="clear" color="#e6e6e6" />
      </div>
      <div class="submit" @click="btn">提交</div>
    </div>
    <div v-else class="mainMsg">提交已完成</div>
    <div class="loading" v-if="loading">
      <loading></loading>
    </div>
  </div>
</template>
<script>
import Loading from "../components/loading";
import { parseTime } from "../../utils/index";
export default {
  name: "message",
  components: {
    loading: Loading
  },
  data() {
    return {
      id: "",
      baseUrl: "",
      loading: false,
      minDate: new Date(1980, 1, 1),
      maxDate: new Date(2030, 1, 1),
      form: {
        data0: "请选择员工",
        data1: "",
        data2: "",
        data3: "",
        data4: "考核开始时间",
        data5: "考核结束时间",
        data6: "",
        data7: "",
        data8: "",
        data9: "",
        data10: ""
      },
      showMain: true,
      lineWidth: 6, //签名配置
      lineColor: "#000000", //签名配置
      bgColor: "#fff", //签名配置
      resultImg: "", //签名配置
      isCrop: false, //签名配置
      formData: {
        id: "",
        autograph: ""
      },
      tableEducation: []
    };
  },
  created() {
    this.baseUrl = this.$axios.defaults.baseDns;
    let id = this.$route.query.id;
    this.id = id;
    this.formData.id = id;
    this.getData(id);
    var is_mobi =
      navigator.userAgent
        .toLowerCase()
        .match(
          /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i
        ) != null;
    console.log(this.baseUrl);
    if (!is_mobi) {
      window.location.href = `${this.baseUrl}/#/performanceMsg?id=${id}`;
    }
  },
  methods: {
    getData(id) {
      let data = {
        id
      };
      this.$axios
        .post("/api/achievement/findApplyAchievement", data)
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            if (res.data.data.info.status == 1) {
              this.showMain = false;
            } else {
              this.showMain = true;
            }
            this.form = {
              data1: res.data.data.info.employee.department_name,
              data2: res.data.data.info.employee.position_name,
              data3: res.data.data.info.employee.cn_name,
              data4:
                res.data.data.info.start_date +
                "至" +
                res.data.data.info.end_date,
              data5: res.data.data.info.end_date,
              data6: res.data.data.info.merit,
              data7: res.data.data.info.defect,
              data8: res.data.data.info.improvement_plan,
              data9: res.data.data.info.autograph,
              data10: res.data.data.info.autograph_date
            };
            this.tableEducation = res.data.data.info.achievenment_project;
          } else {
            this.$notify({ type: "warning", message: res.data.msg });
          }
        });
    },
    //手写板清空
    handleReset() {
      this.$refs.esign.reset();
      this.formData.autograph = "";
    },
    btn() {
      this.$refs.esign
        .generate()
        .then(res => {
          let data = {
            image: res
          };
          console.log("asdadasda");

          this.$axios
            .post("/api/uploads/base64Uploads", data)
            .then(result => {
              if (result.data.code == 0) {
                this.formData.autograph = result.data.data.url;
              }
            })
            .then(() => {
              this.loading = true;
              let data = {
                id: this.formData.id,
                emp_autograph: this.formData.autograph
              };
              this.$axios
                .post("/api/achievement/confirmAchievement", data)
                .then(res => {
                  this.loading = false;
                  if (res.data.code == 0) {
                    this.$notify({
                      type: "success",
                      message: res.data.msg
                    });
                    this.showMain = false;
                  } else {
                    this.$notify({
                      type: "warning",
                      message: res.data.msg
                    });
                  }
                });
            })
            .catch(err => {
              this.$notify({ type: "warning", message: "请写入签名" });
            });
        })
        .catch(err => {
          this.$notify({ type: "warning", message: "请写入签名" });
        });
    }
  }
};
</script>
<style scoped>
.content {
  overflow: hidden;
  padding-bottom: 20px;
}
.title {
  width: 100%;
  height: 100%;
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
  z-index: 200;
  font-weight: bold;
}
.title .titleBg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;
  background: rgba(0, 0, 0, 0.2);
}
.title .titleImg {
  display: block;
  width: 100%;
  height: auto;
}
.list {
  width: 90%;
  padding: 10px;
  background: #fff;
  margin: 0 auto;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}
.esign {
  width: 90%;
  margin: 0 auto;
  border: 1px dashed #ebedf0;
  position: relative;
}
.remove {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 100;
  font-size: 30px;
}
.explainTitle {
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
}
.explainText {
  font-size: 12px;
  line-height: 20px;
}
.submit {
  width: 100px;
  line-height: 1;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin: 0 auto;
  margin-top: 15px;
}

.loading {
  position: fixed;
  z-index: 10000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.btnName {
  width: 100px;
  line-height: 1;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin: 0 auto;
  margin-top: 15px;
}
.mainMsg {
  text-align: center;
  margin-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  color: #999;
}
.educationItem {
  border-bottom: 1px dashed #999;
}
.educationItem:last-child {
    border-bottom: 1px dashed red;

}
</style>