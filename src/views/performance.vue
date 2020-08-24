<template>
  <div class="container">
    <div class="title">
      <div class="titleBg"></div>
      <div class="titleInit">麦禾教育员工绩效面谈记录表</div>
      <img class="titleImg" src="../assets/title_2.jpg" />
    </div>
    <!-- <div v-if="showMain" class="main"> -->
    <div class="main">
      <!-- <van-tabs v-model="activeName" animated swipeable>
      <van-tab title="基本信息1" name="a">-->
      <div class="bg" v-if="!type"></div>
      <div class="login" v-if="!type">
        <div class="cener">
          <van-cell title="员工姓名" required is-link :value="form.data0" @click="showActionSheet(0)" />
        </div>
      </div>
      <div class="list">
        <van-divider
          dashed
          :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
        >基本信息</van-divider>
        <!-- <van-cell title="所在部门" required is-link :value="form.data1" @click="showActionSheet(1)" />
        <van-cell title="职位名称" required is-link :value="form.data2" @click="showActionSheet(2)" />-->
        <van-field v-model="form.data" label="入职时间" placeholder="请输入职时间" required readonly />
        <van-field v-model="form.data1" label="所在部门" placeholder="请输入所在部门" required readonly />
        <van-field v-model="form.data2" label="职位名称" placeholder="请输入职位名称" required readonly />
        <van-field v-model="form.data3" label="姓名" placeholder="请输入姓名" required readonly />
        <van-field label="考核周期" required readonly  v-model="form.data4"  />
        <!-- <van-cell title="考核结束时间" required is-link :value="form.data5" @click="showActionSheet(5)" /> -->
        <div class="list">
          <div class="addBtn" @click="addFamily">添加</div>
          <div class="education">
            <template v-for="(item,index) in familyForm">
              <div class="educationItem">
                <van-field
                  v-model="familyForm[index].data1"
                  required
                  label="考核项目"
                  placeholder="请输入考核项目"
                  @input="multistageWrite(familyForm[index].data1,index,1)"
                />
                <van-field
                  v-model="familyForm[index].data2"
                  required
                  label="目标完成"
                  placeholder="请输入目标完成"
                  @input="multistageWrite(familyForm[index].data2,index,2)"
                />
                <van-field
                  v-model="familyForm[index].data3"
                  label="实际完成"
                  required
                  placeholder="请输入实际完成"
                  @input="multistageWrite(familyForm[index].data3,index,3)"
                />
                <van-field
                  v-model="familyForm[index].data4"
                  required
                  label="得分"
                  placeholder="请输入得分"
                  @input="multistageWrite(familyForm[index].data4,index,4)"
                />
                <div class="rem" v-if="index != 0" @click="multistageRemove('family',index)">删除</div>
              </div>
            </template>
          </div>
        </div>
        <van-divider
          dashed
          :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
        >考核人谈话要点</van-divider>
        <van-field
          v-model="form.data6"
          required
          type="textarea"
          label="业绩与优点"
          placeholder="请输入业绩与优点"
          @input="write(form.data6,6)"
        />
        <van-field
          v-model="form.data7"
          required
          type="textarea"
          label="存在的不足"
          placeholder="请输入存在的不足"
          @input="write(form.data7,7)"
        />
        <van-field
          v-model="form.data8"
          required
          type="textarea"
          label="备注"
          placeholder="请输入备注"
          @input="write(form.data8,8)"
        />
        <van-field name="uploader" label="主管签名" required>
          <template #input>
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
          </template>
        </van-field>
        <div class="explainTitle">说明：</div>
        <div class="explainText">1、绩效改进计划由主管与员工在进行绩效面谈时共同沟通确认，作为员工工作改进依据。</div>
        <div class="explainText">2、绩效改进计划由上级主管与员工双方确认后签字生效，HR留存备案。</div>
        <div class="submit" @click="btn">提交</div>
      </div>
    </div>
    <!-- <div v-else class="mainMsg">提交已完成</div> -->
    <van-action-sheet v-model="actionSheetShow" :actions="actions" @select="onSelect" />
    <van-action-sheet v-model="dateShow" title="选择日期">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmDate"
        @cancel="cancelDate"
      />
    </van-action-sheet>
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
      baseUrl: "",
      id: "",
      showMain: true,
      lineWidth: 6, //签名配置
      lineColor: "#000000", //签名配置
      bgColor: "#fff", //签名配置
      resultImg: "", //签名配置
      isCrop: false, //签名配置
      activeName: "a",
      loading: false,
      actionSheetShow: false,
      sum: null,
      actions: null,
      minDate: new Date(1980, 1, 1),
      maxDate: new Date(2030, 1, 1),
      currentDate: new Date(),
      dateShow: false,
      type: true,
      status: true,
      option: {},
      staff: null,
      form: {
        data: "",
        data0: "请选择员工",
        data1: "",
        data2: "",
        data3: "",
        data4: "考核开始时间",
        data5: "考核结束时间",
        data6: "",
        data7: "",
        data8: ""
      },
      formData: {
        employee_id: "",
        start_date: "",
        end_date: "",
        merit: "",
        defect: "",
        improvement_plan: "",
        autograph: ""
      },
      familyForm: [
        {
          data1: "",
          data2: "",
          data3: "",
          data4: ""
        }
      ],
      family: [
        {
          project_name: "",
          target: "",
          real_complete: "",
          grade: ""
        }
      ],
      familyBool:false
    };
  },
  created() {
    // let url = this.$axios.defaults.baseURL;
    // let endlength = url.indexOf("/index");
    // this.baseUrl = url.substring(0, endlength);
    this.baseUrl = this.$axios.defaults.baseDns;
    let id = this.$route.query.id;
    this.id = id;
    if (id) {
      this.getData(id);
      this.status = true;
    } else {
      this.type = false;
      this.status = false;
      this.$axios.post("/api/employee/getEmployees").then(res => {
        if (res.data.code == 0) {
          this.staff = res.data.data.data;

          console.log(this.staff);
        }
      });
    }
    var is_mobi =
      navigator.userAgent
        .toLowerCase()
        .match(
          /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i
        ) != null;
    console.log(this.baseUrl);
    if (!is_mobi) {
      window.location.href = `${this.baseUrl}/#/performancePc?id=${id}`;
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
            if (res.data.data.info.status != 0) {
              this.showMain = false;
            } else {
              this.showMain = true;
            }
            this.formData = {
              entry_date: res.data.data.info.entry_date,
              employee_id: res.data.data.info.employee_id,
              start_date: res.data.data.info.start_date,
              end_date: res.data.data.info.end_date,
              merit: res.data.data.info.merit,
              defect: res.data.data.info.defect,
              improvement_plan: res.data.data.info.improvement_plan,
              autograph: ""
            };
            this.form = {
              data: res.data.data.info.entry_date,
              data1: res.data.data.info.employee.department_name,
              data2: res.data.data.info.employee.position_name,
              data3: res.data.data.info.employee.cn_name,
              data4: res.data.data.info.start_date+'至'+res.data.data.info.end_date,
              // data5: res.data.data.info.end_date,
              data6: res.data.data.info.merit,
              data7: res.data.data.info.defect,
              data8: res.data.data.info.improvement_plan
            };
          } else {
            this.$notify({ type: "warning", message: res.data.msg });
          }
        });
    },
    // 多级工作经历添加
    addFamily() {
      this.familyForm.push({
        data1: "",
        data2: "",
        data3: "",
        data4: ""
      });
      this.family.push({
        project_name: "",
        target: "",
        real_complete: "",
        grade: ""
      });
    },
    //多级输入
    multistageWrite(data, index, sum, name) {
      switch (sum) {
        case 1:
          this.family[index].project_name = data;
          break;
        case 2:
          this.family[index].target = data;
          break;
        case 3:
          this.family[index].real_complete = data;
          break;
        case 4:
          this.family[index].grade = data;
          break;
      }
    },
    onChange(index) {
      this.current = index;
    },
    showActionSheet(e) {
      // if (!this.type) {
      switch (e) {
        case 0:
          this.actions = this.staff;
          this.actionSheetShow = true;
          break;
        case 1:
          this.actions = this.option[5];
          this.actionSheetShow = true;
          break;
        case 2:
          this.actions = this.option[6];
          this.actionSheetShow = true;
          break;
        case 4:
          if (!this.status) {
            this.dateShow = true;
            break;
          }
        case 5:
          if (!this.status) {
            this.dateShow = true;
            break;
          }
      }
      this.currentDate = new Date();
      this.sum = e;
      // }
    },
    onSelect(item) {
      switch (this.sum) {
        case 0:
          console.log(this.type, 11111);
          this.type = true;

          this.form.data1 = item.department_name;
          this.form.data2 = item.position_name;
          this.form.data3 = item.name;
          this.formData.employee_id = item.id;
          break;
        case 1:
          this.form.data1 = item.name;
          this.formData.department_name = item.name;
          this.formData.department_id = item.id;
          break;
        case 2:
          this.form.data2 = item.name;
          this.formData.position_name = item.name;
          this.formData.position_id = item.id;
          break;
      }
      this.actionSheetShow = false;
    },
    //手写板清空
    handleReset() {
      this.$refs.esign.reset();
      this.formData.autograph = "";
    },
    confirmDate(type) {
      const date = parseTime(type).split(" ")[0];
      switch (this.sum) {
        case 4:
          this.form.data4 = date;
          this.formData.start_date = date;
          break;
        case 5:
          this.form.data5 = date;
          this.formData.end_date = date;
          break;
      }
      this.dateShow = false;
    },
    write(val, id) {
      switch (id) {
        case 3:
          this.formData.cn_name = val;
          break;
        case 6:
          this.formData.merit = val;
          break;
        case 7:
          this.formData.defect = val;
          break;
        case 8:
          this.formData.improvement_plan = val;
          break;
      }
    },
    cancelDate() {
      this.dateShow = false;
      this.multistageDdateShow = false;
    },
    // 多级删除
    multistageRemove(name, index) {
      this.familyForm.splice(index, 1);
      this.family.splice(index, 1);
    },
    bool() {
      this.family.forEach(res => {
        if (res.project_name == "") {
          this.$notify({ type: "warning", message: "请输入考核项目" });
          this.familyBool = false;
        } else if (res.target == "") {
          this.$notify({ type: "warning", message: "请输入目标完成" });
          this.familyBool = false;
        } else if (res.real_complete == "") {
          this.$notify({ type: "warning", message: "请输入实际完成" });
          this.familyBool = false;
        } else if (res.grade == "") {
          this.$notify({ type: "warning", message: "请输入得分" });
          this.familyBool = false;
        } else {
          this.familyBool = true;
        }
      });
    },
    btn() {
      this.bool();
      if (this.formData.start_date == "") {
        this.$notify({ type: "warning", message: "请选择开始时间" });
      } else if (this.formData.end_date == "") {
        this.$notify({ type: "warning", message: "请选择结束时间" });
      } else if (this.formData.merit == "") {
        this.$notify({ type: "warning", message: "请填写业绩与优点" });
      } else if (this.formData.defect == "") {
        this.$notify({ type: "warning", message: "请填写存在的不足" });
      } else if (this.formData.improvement_plan == "") {
        this.$notify({ type: "warning", message: "请填写改进计划内容" });
      } else {
        if (this.familyBool) {
          this.$refs.esign
            .generate()
            .then(res => {
              let data = {
                image: res
              };
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
                    entry_date: this.formData.entry_date,
                    employee_id: this.formData.employee_id,
                    start_date: this.formData.start_date,
                    end_date: this.formData.end_date,
                    merit: this.formData.merit,
                    defect: this.formData.defect,
                    improvement_plan: this.formData.improvement_plan,
                    autograph: this.formData.autograph,
                    project: JSON.stringify(this.family)
                  };
                  if (this.status) {
                    data.id = this.id;

                    this.$axios
                      .post("/api/achievement/editApplyAchievement", data)
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
                  } else {
                    this.$axios
                      .post("/api/achievement/applyAchievement", data)
                      .then(res => {
                        this.loading = false;
                        if (res.data.code == 0) {
                          this.$notify({
                            type: "success",
                            message: res.data.msg
                          });
                          // this.type = false;
                          this.showMain = false;
                        } else {
                          this.$notify({
                            type: "warning",
                            message: res.data.msg
                          });
                        }
                      });
                  }
                });
            })
            .catch(err => {
              this.$notify({ type: "warning", message: "请写入签名" });
            });
        }
      }
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
.login {
  position: absolute;
  height: 80px;
  z-index: 10;
  top: 50%;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 10px;
  background: #fff;
  margin: 0 auto;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  padding-top: 20px;
}
.bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
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
  margin-top: 100px;
  font-size: 20px;
  color: #999;
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
  margin-bottom: 10px;
  
}
.addBtn {
  width: 50px;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  border: 1px solid #409eff;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  margin-left: auto;
}
.rem {
  width: 50px;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  border: 1px solid #f56c6c;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: #f56c6c;
  margin: 5px auto;
}
.educationItem {
  border-bottom: 2px dashed #999;
}
.educationItem:last-child {
  border: 0;
}
</style>