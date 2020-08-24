<template>
  <div class="message">
    <div class="content">
      <div class="title">
        <div class="titleBg"></div>
        <div class="titleInit">麦禾教育员工信息表</div>
        <img class="titleImg" src="../assets/title_1.jpg" />
      </div>
      <van-tabs v-model="activeName" animated swipeable>
        <van-tab title="基本信息1" name="1">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >基本信息</van-divider>
            <van-cell
              title="所在公司"
              required
              is-link
              :value="form.data0"
              @click="showActionSheet(0)"
            />
            <van-cell
              title="所在部门"
              required
              is-link
              :value="form.data1"
              @click="showActionSheet(1)"
            />
            <van-cell
              title="职位名称"
              required
              is-link
              :value="form.data2"
              @click="showActionSheet(2)"
            />
            <van-cell
              title="岗位性质"
              required
              is-link
              :value="form.data3"
              @click="showActionSheet(3)"
            />
            <van-cell
              title="所在校区"
              required
              is-link
              :value="form.data43"
              @click="showActionSheet(43)"
            />
            <van-cell
              title="入职日期"
              required
              is-link
              :value="form.data4"
              @click="showActionSheet(4)"
            />
            <van-field
              v-model="form.data5"
              label="中文姓名"
              placeholder="请输入中文姓名"
              required
              @input="write(form.data5,5)"
            />
            <van-field
              v-model="form.data6"
              label="英文姓名"
              placeholder="请输入英文姓名"
              @input="write(form.data6,6)"
            />
            <van-cell title="性别" required is-link :value="form.data7" @click="showActionSheet(7)" />
            <van-field
              v-model="form.data8"
              label="年龄"
              placeholder="请输入年龄"
              required
              @input="write(form.data8,8)"
            />

            <van-field
              v-model="form.data10"
              label="籍贯"
              placeholder="请输入籍贯"
              required
              @input="write(form.data10,10)"
            />
            <van-field
              v-model="form.data11"
              label="国籍"
              placeholder="请输入国籍"
              required
              @input="write(form.data11,11)"
            />
          </div>
          <div class="footer">
            <div class="next" @click="next('2')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="基本信息2" name="2">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >基本信息</van-divider>
            <van-field
              v-model="form.data12"
              label="微信号"
              placeholder="请输入微信号"
              required
              @input="write(form.data12,12)"
            />
            <van-field
              v-model="form.data13"
              label="联系方式"
              placeholder="请输入联系方式"
              required
              @input="write(form.data13,13)"
            />
            <van-cell
              title="出生日期"
              required
              is-link
              :value="form.data14"
              @click="showActionSheet(14)"
            />
            <van-field
              v-model="form.data15"
              label="身份证号码"
              placeholder="请输入身份证号码"
              required
              @input="write(form.data15,15)"
            />
            <van-field
              v-model="form.data16"
              label="身份证地址"
              placeholder="请输入身份证地址"
              required
              @input="write(form.data16,16)"
            />
            <van-field
              v-model="form.data17"
              label="邮编"
              placeholder="请输入身份证地址邮编"
              @input="write(form.data17,17)"
            />
            <van-field
              v-model="form.data18"
              label="现居住地址"
              placeholder="请输入现居住地址"
              required
              @input="write(form.data18,18)"
            />
            <van-field
              v-model="form.data19"
              label="邮编"
              placeholder="请输入现居住地址邮编"
              @input="write(form.data19,19)"
            />
            <van-cell title="户籍类型" is-link :value="form.data20" @click="showActionSheet(20)" />
            <van-field
              v-model="form.data21"
              label="政治面貌"
              placeholder="请输入政治面貌"
              required
              @input="write(form.data21,21)"
            />
            <van-field
              v-model="form.data22"
              label="学历"
              placeholder="请输入学历"
              required
              @input="write(form.data22,22)"
            />
            <van-cell
              title="是否婚育"
              required
              is-link
              :value="form.data23"
              @click="showActionSheet(23)"
            />
          </div>
          <div class="footer">
            <div class="next" @click="next('1')">上一页</div>
            <div class="next" @click="next('3')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="基本信息3" name="3">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >基本信息</van-divider>
            <van-field
              v-model="form.data9"
              label="民族"
              placeholder="请输入民族"
              required
              @input="write(form.data9,9)"
            />
            <van-field
              v-model="form.data24"
              label="专业"
              placeholder="请输入专业"
              required
              @input="write(form.data24,24)"
            />
            <van-field
              v-model="form.data25"
              label="毕业学校"
              placeholder="请输入毕业学校"
              required
              @input="write(form.data25,25)"
            />
            <van-field
              v-model="form.data26"
              label="学校地址"
              placeholder="请输入学校地址"
              @input="write(form.data26,26)"
            />
            <van-field
              v-model="form.data27"
              label="计算机水平"
              placeholder="请输入计算机水平"
              @input="write(form.data27,27)"
            />
            <van-field
              v-model="form.data28"
              label="外语水平"
              placeholder="请输入外语水平"
              required
              @input="write(form.data28,28)"
            />
            <van-field
              v-model="form.data29"
              label="邮箱"
              placeholder="请输入邮箱"
              required
              @input="write(form.data29,29)"
            />
            <van-field
              v-model="form.data30"
              label="紧急联系人"
              placeholder="请输入紧急联系人"
              required
              @input="write(form.data30,30)"
            />
            <van-field
              v-model="form.data31"
              label="联系人关系"
              placeholder="请输入紧急联系人关系"
              required
              @input="write(form.data31,31)"
            />
            <van-field
              v-model="form.data44"
              required
              label="联系人电话"
              placeholder="请输入紧急联系人电话"
              @input="write(form.data44,44)"
            />
            <van-cell title="员工状态" is-link :value="form.data32" @click="showActionSheet(32)" />
            <van-field
              v-model="form.data33"
              label="健康状况"
              required
              placeholder="请输入健康状况"
              @input="write(form.data33,33)"
            />
            <van-field
              v-model="form.data34"
              label="血型"
              placeholder="请输入血型"
              @input="write(form.data34,34)"
            />
            <van-cell
              title="星座"
              required
              is-link
              :value="form.data45"
              @click="showActionSheet(45)"
            />
          </div>
          <div class="footer">
            <div class="next" @click="next('2')">上一页</div>
            <div class="next" @click="next('4')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="基本信息4" name="4">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >基本信息</van-divider>

            <van-cell
              title="是否首次在北京参加社保"
              required
              is-link
              :value="form.data35"
              @click="showActionSheet(35)"
            />
            <van-cell
              title="是否与原单位存在当期竞业禁止"
              required
              is-link
              :value="form.data36"
              @click="showActionSheet(36)"
            />
            <van-field
              v-model="form.data37"
              required
              label="兴趣爱好"
              placeholder="请输入兴趣爱好"
              type="textarea"
              @input="write(form.data37,37)"
            />
            <van-field
              v-model="form.data38"
              label="曾获奖励"
              placeholder="请输入曾获奖励"
              type="textarea"
              @input="write(form.data38,38)"
            />
            <van-field
              v-model="form.data39"
              label="自我评价"
              placeholder="请输入自我评价"
              type="textarea"
              @input="write(form.data39,39)"
            />
            <van-field
              v-model="form.data40"
              required
              label="座右铭及感悟"
              placeholder="请输入座右铭及感悟"
              type="textarea"
              @input="write(form.data40,40)"
            />
            <van-field
              v-model="form.data41"
              required
              label="入司告白"
              placeholder="请输入入司告白"
              type="textarea"
              @input="write(form.data41,41)"
            />
            <!-- <van-field
              v-model="form.data42"
              required
              label="入职声明"
              placeholder="请输入入职声明"
              type="textarea"
              @input="write(form.data42,42)"
            />-->
          </div>
          <div class="footer">
            <div class="next" @click="next('3')">上一页</div>
            <div class="next" @click="next('5')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="教育经历" name="5">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >教育经历(由高自低填写)</van-divider>
            <div class="addBtn" @click="addeducation">添加</div>
            <div class="education">
              <template v-for="(item,index) in educationForm">
                <div class="educationItem">
                  <van-field
                    v-model="educationForm[index].data1"
                    required
                    label="学校"
                    placeholder="请输入学校"
                    @input="multistageWrite(educationForm[index].data1,index,1,'education')"
                  />
                  <van-cell
                    required
                    title="开始时间"
                    is-link
                    :value="educationForm[index].data2"
                    @click="multistageShowActionSheet(2,index,'education')"
                  />
                  <van-cell
                    required
                    title="结束时间"
                    is-link
                    :value="educationForm[index].data3"
                    @click="multistageShowActionSheet(3,index,'education',)"
                  />
                  <van-field
                    v-model="educationForm[index].data4"
                    required
                    label="专业"
                    placeholder="请输入专业"
                    @input="multistageWrite(educationForm[index].data4,index,4,'education')"
                  />
                  <van-field
                    v-model="educationForm[index].data5"
                    required
                    label="学历"
                    placeholder="请输入学历"
                    @input="multistageWrite(educationForm[index].data5,index,5,'education')"
                  />
                  <van-cell
                    required
                    title="取得方式"
                    is-link
                    :value="educationForm[index].data6"
                    @click="multistageShowActionSheet(6,index,'education')"
                  />
                  <!-- <van-field
                    v-model="educationForm[index].data7"
                    required
                    label="证明人/电话"
                    placeholder="请输入证明人/电话"
                    @input="multistageWrite(educationForm[index].data7,index,7,'education')"
                  />-->
                  <div class="rem" v-if="index != 0" @click="multistageRemove('education',index)">删除</div>
                </div>
              </template>
            </div>
          </div>
          <div class="footer">
            <div class="next" @click="next('4')">上一页</div>
            <div class="next" @click="next('6')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="工作经历" name="6">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >工作经历(由近至远填写)</van-divider>
            <div class="addBtn" @click="addWork">添加</div>
            <div class="education">
              <template v-for="(item,index) in workForm">
                <div class="educationItem">
                  <van-field
                    v-model="workForm[index].data1"
                    required
                    label="单位名称"
                    placeholder="请输入单位名称"
                    @input="multistageWrite(workForm[index].data1,index,1,'work')"
                  />
                  <van-cell
                    required
                    title="开始时间"
                    is-link
                    :value="workForm[index].data2"
                    @click="multistageShowActionSheet(2,index,'work')"
                  />
                  <van-cell
                    required
                    title="结束时间"
                    is-link
                    :value="workForm[index].data3"
                    @click="multistageShowActionSheet(3,index,'work')"
                  />
                  <van-field
                    v-model="workForm[index].data4"
                    label="职位"
                    placeholder="请输职位"
                    @input="multistageWrite(workForm[index].data4,index,4,'work')"
                  />
                  <van-field
                    v-model="workForm[index].data5"
                    required
                    label="薪资"
                    placeholder="请输入薪资"
                    @input="multistageWrite(workForm[index].data5,index,5,'work')"
                  />
                  <van-field
                    v-model="workForm[index].data6"
                    required
                    label="离职原因"
                    placeholder="请输入离职原因"
                    @input="multistageWrite(workForm[index].data6,index,6,'work')"
                  />
                  <van-field
                    v-model="workForm[index].data7"
                    required
                    label="证明人/电话"
                    placeholder="请输入证明人/电话"
                    @input="multistageWrite(workForm[index].data7,index,7,'work')"
                  />
                  <div class="rem" v-if="index != 0" @click="multistageRemove('work',index)">删除</div>
                </div>
              </template>
            </div>
          </div>
          <div class="footer">
            <div class="next" @click="next('5')">上一页</div>
            <div class="next" @click="next('7')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="家庭关系" name="7">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >家庭和社会关系状况(直系和旁系)</van-divider>
            <div class="addBtn" @click="addFamily">添加</div>
            <div class="education">
              <template v-for="(item,index) in familyForm">
                <div class="educationItem">
                  <van-field
                    v-model="familyForm[index].data1"
                    required
                    label="姓名"
                    placeholder="请输入姓名"
                    @input="multistageWrite(familyForm[index].data1,index,1,'family')"
                  />
                  <van-field
                    v-model="familyForm[index].data2"
                    required
                    label="关系"
                    placeholder="请输入关系"
                    @input="multistageWrite(familyForm[index].data2,index,2,'family')"
                  />
                  <van-field
                    v-model="familyForm[index].data3"
                    label="职业"
                    required
                    placeholder="请输入职业"
                    @input="multistageWrite(familyForm[index].data3,index,3,'family')"
                  />
                  <van-field
                    v-model="familyForm[index].data4"
                    required
                    label="联系电话"
                    placeholder="请输入联系电话"
                    @input="multistageWrite(familyForm[index].data4,index,4,'family')"
                  />
                  <van-field
                    v-model="familyForm[index].data5"
                    required
                    label="工作单位"
                    placeholder="请输入工作单位"
                    @input="multistageWrite(familyForm[index].data5,index,5,'family')"
                  />
                  <div class="rem" v-if="index != 0" @click="multistageRemove('family',index)">删除</div>
                </div>
              </template>
            </div>
          </div>
          <div class="footer">
            <div class="next" @click="next('6')">上一页</div>
            <div class="next" @click="next('8')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="培训经历" name="8">
          <div class="list">
            <van-divider
              dashed
              :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
            >培训经历</van-divider>
            <div class="addBtn" @click="addTrain">添加</div>
            <div class="education">
              <template v-for="(item,index) in trainForm">
                <div class="educationItem">
                  <van-field
                    v-model="trainForm[index].data1"
                    label="培训单位"
                    placeholder="请输入培训单位"
                    @input="multistageWrite(trainForm[index].data1,index,1,'train')"
                  />
                  <van-cell
                    title="开始时间"
                    is-link
                    :value="trainForm[index].data2"
                    @click="multistageShowActionSheet(2,index,'train')"
                  />
                  <van-cell
                    title="结束时间"
                    is-link
                    :value="trainForm[index].data3"
                    @click="multistageShowActionSheet(3,index,'train')"
                  />
                  <van-field
                    v-model="trainForm[index].data4"
                    label="培训内容"
                    placeholder="请输入培训内容"
                    @input="multistageWrite(trainForm[index].data4,index,4,'train')"
                  />
                  <van-field
                    v-model="trainForm[index].data5"
                    label="获得证书"
                    placeholder="请输入获得证书"
                    @input="multistageWrite(trainForm[index].data5,index,5,'train')"
                  />
                  <div class="rem" v-if="index != 0" @click="multistageRemove('train',index)">删除</div>
                </div>
              </template>
            </div>
          </div>
          <div class="footer">
            <div class="next" @click="next('7')">上一页</div>
            <div class="next" @click="next('9')">下一页</div>
          </div>
        </van-tab>
        <van-tab title="提交信息" name="9">
          <div class="list">
            <van-field name="uploader" label="头像上传">
              <template #input>
                <van-uploader
                  @delete="remImg"
                  :max-count="1"
                  v-model="uploader"
                  :after-read="afterRead"
                />
              </template>
            </van-field>
            <van-field name="uploader" label="签名" required></van-field>
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
            <div class="statement">
              <van-checkbox v-model="statementRadio" icon-size="28px" @change="check"></van-checkbox>
              <p>本人承诺：上述信息完全真实有效，如有虚假，愿接受公司处罚及承担因此所产生的一切后果；本人信息如有变动，将在变化后一周内到人力资源部办理变更，否则由此造成的损失由本人负责。</p>
            </div>
            <div class="loading" v-if="loading">
              <loading></loading>
            </div>
            <div class="submit" @click="btn">提交</div>
          </div>
        </van-tab>
      </van-tabs>

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
      <!-- 多级 -->

      <van-action-sheet
        v-model="multistageActionSheetShow"
        :actions="actions"
        @select="multistageOnSelect"
      />
      <van-action-sheet v-model="multistageDdateShow" title="选择日期">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm=" multistageconfirmDate"
          @cancel="cancelDate"
        />
      </van-action-sheet>
      <div class="loading" v-if="loading">
        <loading></loading>
      </div>
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
      activeName: "1",
      loading: false,
      statementRadio: false, //声明单选框
      uploader: [], //头像
      lineWidth: 6, //签名配置
      lineColor: "#000000", //签名配置
      bgColor: "#fff", //签名配置
      isCrop: false, //签名配置
      actionSheetShow: false,
      multistageDdateShow: false,
      multistageActionSheetShow: false,
      dateShow: false,
      option: {},
      text: "",
      form: {},
      educationForm: [],
      workForm: [],
      familyForm: [],
      trainForm: [],
      formData: {
        company_name: "",
        company_id: "",
        department_name: "",
        department_id: "",
        position_name: "",
        position_id: "",
        school_name: "",
        school_id: "",
        nature_name: "",
        nature_id: "",
        cn_name: "",
        en_name: "",
        sex: "",
        entry_date: "",
        nationality: "",
        nation: "",
        native_place: "",
        birth_date: "",
        age: "",
        marriage: "",
        degree: "",
        face: "",
        speciality: "",
        school: "",
        computer_level: "",
        language_level: "",
        IDcard: "",
        email: "",
        address: "",
        household_type: "",
        urgent_contact: "",
        contact_relation_phone: "",
        contact_phone: "",
        living_place: "",
        employee_status_name: "",
        health: "",
        wechat_code: "",
        hobby: "",
        constellation: "",
        is_beijing_social_insurance: "",
        business_strife: "",
        living_postal_code: "",
        postal_code: "",
        blood_type: "",
        phone: "",
        photo: "",
        reward: "",
        self_assessment: "",
        motto: "",
        confession: "",
        school_address: "",
        statement: "",
        autograph: "",
        contact_phone: "",
        education: [
          {
            school_name: "",
            start_date: "",
            end_date: "",
            speciality: "",
            degree: "",
            way: ""
            // contact_phone: ""
          }
        ],
        work: [
          {
            company_name: "",
            start_date: "",
            end_date: "",
            position_name: "",
            salary: "",
            leave_reason: "",
            contact_phone: ""
          }
        ],
        family: [
          {
            name: "",
            relation: "",
            work: "",
            tel: "",
            company: ""
          }
        ],
        train: [
          {
            train_date: "",
            end_date: "",
            company: "",
            position: "",
            certificate: ""
          }
        ]
      },
      sum: null,
      actions: null,
      minDate: new Date(1980, 1, 1),
      maxDate: new Date(2030, 1, 1),
      currentDate: new Date(),
      baseUrl: ""
    };
  },
  created() {
    localStorage.setItem("eleToken", "");
    let url = this.$axios.defaults.baseURL;
    let endlength = url.indexOf("/index");
    this.baseUrl = url.substring(0, endlength);
    this.getData();
  },

  methods: {
    getData() {
      this.$axios.post("/api/option/selectOptionList").then(res => {
        console.log(res);
        if (res.data.code == 0) {
          this.option = res.data.data;
          console.log(this.option);
        }
      });

      let data = {
        phone: this.$route.params.phone || ""
        // phone: 13079221320
      };
      this.$axios.post("/api/employee/findApplyEmployee", data).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          if (res.data.data.info.photo) {
            this.uploader.push({
              url: this.baseUrl + res.data.data.info.photo
            });
          }
          this.formData = res.data.data.info;
          this.autograph = "";
          let marriageMsg = "";
          switch (res.data.data.info.marriage) {
            case 1:
              marriageMsg = "未婚未育";
              break;
            case 2:
              marriageMsg = "已婚未育";
              break;
            case 3:
              marriageMsg = "已婚已育";
              break;
            case 4:
              marriageMsg = "离异";
              break;
          }
          let householdMsg = "";
          switch (res.data.data.info.household_type) {
            case 1:
              householdMsg = "本地城镇";
              break;
            case 2:
              householdMsg = "本地农村";
              break;
            case 3:
              householdMsg = "外地城镇";
              break;
            case 4:
              householdMsg = "外地农村";
              break;
          }
          let constellationMsg = "";
          switch (res.data.data.info.constellation) {
            case 0:
              constellationMsg = "保密";
              break;
            case 1:
              constellationMsg = "水瓶座";
              break;
            case 2:
              constellationMsg = "双鱼座";
              break;
            case 3:
              constellationMsg = "白羊座";
              break;
            case 4:
              constellationMsg = "金牛座";
              break;
            case 5:
              constellationMsg = "双子座";
              break;
            case 6:
              constellationMsg = "巨蟹座";
              break;
            case 7:
              constellationMsg = "狮子座";
              break;
            case 8:
              constellationMsg = "处女座";
              break;
            case 9:
              constellationMsg = "天平座";
              break;
            case 10:
              constellationMsg = "天蝎座";
              break;
            case 11:
              constellationMsg = "射手座";
              break;
            case 12:
              constellationMsg = "摩羯座";
              break;
          }
          if (res.data.data.info.education.length > 0) {
            let wayMsg = "";
            res.data.data.info.education.forEach(result => {
              switch (result.way) {
                case 1:
                  wayMsg = "统招";
                  break;
                case 2:
                  wayMsg = "自考";
                  break;
                case 3:
                  wayMsg = "成考";
                  break;
                case 4:
                  wayMsg = "其他";
                  break;
              }
              this.educationForm.push({
                data1: result.school_name || "",
                data2: result.start_date || "开始时间",
                data3: result.end_date || "结束时间",
                data4: result.speciality || "",
                data5: result.degree || "",
                data6: wayMsg || "请选择取得方式",
                data7: result.contact_phone || ""
              });
            });
          } else {
            this.educationForm.push({
              data1: "",
              data2: "开始时间",
              data3: "结束时间",
              data4: "",
              data5: "",
              data6: "请选择取得方式",
              data7: ""
            });
            this.formData.education = [
              {
                school_name: "",
                start_date: "",
                end_date: "",
                speciality: "",
                degree: "",
                way: ""
                // contact_phone: ""
              }
            ];
          }
          if (res.data.data.info.work.length > 0) {
            res.data.data.info.work.forEach(result => {
              this.workForm.push({
                data1: result.company_name || "",
                data2: result.start_date || "开始时间",
                data3: result.end_date || "结束时间",
                data4: result.position_name || "",
                data5: result.salary || "",
                data6: result.leave_reason || "",
                data7: result.contact_phone || ""
              });
            });
          } else {
            this.workForm.push({
              data1: "",
              data2: "开始时间",
              data3: "结束时间",
              data4: "",
              data5: "",
              data6: "",
              data7: ""
            });
            this.formData.work = [
              {
                company_name: "",
                start_date: "",
                end_date: "",
                position_name: "",
                salary: "",
                leave_reason: "",
                contact_phone: ""
              }
            ];
          }
          if (res.data.data.info.family.length > 0) {
            res.data.data.info.family.forEach(result => {
              this.familyForm.push({
                data1: result.name || "",
                data2: result.relation || "",
                data4: result.tel || "",
                data3: result.work || "",
                data5: result.company || ""
              });
            });
          } else {
            this.familyForm.push({
              data1: "",
              data2: "",
              data3: "",
              data4: "",
              data5: ""
            });
            this.formData.family = [
              {
                name: "",
                relation: "",
                work: "",
                tel: "",
                company: ""
              }
            ];
          }
          if (res.data.data.info.train.length > 0) {
            res.data.data.info.train.forEach(result => {
              this.trainForm.push({
                data1: result.company || "",
                data2: result.train_date || "开始时间",
                data3: result.end_date || "结束时间",
                data4: result.position || "",
                data5: result.certificate || ""
              });
            });
          } else {
            this.trainForm.push({
              data1: "",
              data2: "开始时间",
              data3: "结束时间",
              data4: "",
              data5: ""
            });
            this.formData.train = [
              {
                train_date: "",
                end_date: "",
                company: "",
                position: "",
                certificate: ""
              }
            ];
          }
          this.form = {
            data0: res.data.data.info.company_name || "请选择公司",
            data1: res.data.data.info.department_name || "请选择部门",
            data2: res.data.data.info.position_name || "请选择职位",
            data3: res.data.data.info.nature_name || "请选岗位性质",
            data4: res.data.data.info.entry_date || "请选择入职日期",
            data5: res.data.data.info.cn_name || "",
            data6: res.data.data.info.en_name || "",
            data7: res.data.data.info.sex == 1 ? "男" : "女" || "请选择性别",
            data8: res.data.data.info.age || "",
            data9: res.data.data.info.nation || "",
            data10: res.data.data.info.native_place || "",
            data11: res.data.data.info.nationality || "",
            data12: res.data.data.info.wechat_code || "",
            data13: res.data.data.info.phone || "",
            data14: res.data.data.info.birth_date || "",
            data15: res.data.data.info.IDcard || "",
            data16: res.data.data.info.address || "",
            data17: res.data.data.info.postal_code || "",
            data18: res.data.data.info.living_place || "",
            data19: res.data.data.info.living_postal_code || "",
            data20: householdMsg || "请选择户籍类型",
            data21: res.data.data.info.face || "",
            data22: res.data.data.info.degree || "",
            data23: marriageMsg || "请选择是否婚育",
            data24: res.data.data.info.speciality || "",
            data25: res.data.data.info.school || "",
            data26: res.data.data.info.school_address || "",
            data27: res.data.data.info.computer_level || "",
            data28: res.data.data.info.language_level || "",
            data29: res.data.data.info.email || "",
            data30: res.data.data.info.urgent_contact || "",
            data31: res.data.data.info.contact_relation_phone || "",
            data32: res.data.data.info.employee_status_name || "请选择员工状态",
            data33: res.data.data.info.health || "",
            data34: res.data.data.info.blood_type || "",
            data35:
              res.data.data.info.is_beijing_social_insurance == 1 ? "是" : "否",
            data36: res.data.data.info.business_strife == 1 ? "是" : "否",
            data37: res.data.data.info.hobby || "",
            data38: res.data.data.info.reward || "",
            data39: res.data.data.info.self_assessment || "",
            data40: res.data.data.info.motto || "",
            data41: res.data.data.info.confession || "",
            data42: res.data.data.info.statement || "",
            data43: res.data.data.info.school_name || "请选择所在校区",
            data44: res.data.data.info.contact_phone || "",
            data45: constellationMsg || "请选择星座"
          };
          // if (this.formData.education.length == 0) {
          //   this.formData.education = [
          //     {
          //       school_name: "",
          //       start_date: "",
          //       end_date: "",
          //       speciality: "",
          //       degree: "",
          //       way: ""
          //       // contact_phone: ""
          //     }
          //   ];
          // }
          // if (this.formData.lenght == 0) {
          //   this.formData.work = [
          //     {
          //       company_name: "",
          //       start_date: "",
          //       end_date: "",
          //       position_name: "",
          //       salary: "",
          //       leave_reason: "",
          //       contact_phone: ""
          //     }
          //   ];
          // }
          // if (this.formData.family.lenght == 0) {
          //   this.formData.family = [
          //     {
          //       name: "",
          //       relation: "",
          //       work: "",
          //       tel: "",
          //       company: ""
          //     }
          //   ];
          // }
          // if (this.formData.train === "[]") {
          //   this.formData.train = [
          //     {
          //       train_date: "",
          //       end_date: "",
          //       company: "",
          //       position: "",
          //       certificate: ""
          //     }
          //   ];
          // }
          console.log(this.formData, 1111);
          console.log(this.trainForm, 2222);
        } else {
          this.educationForm.push({
            data1: "",
            data2: "开始时间",
            data3: "结束时间",
            data4: "",
            data5: "",
            data6: "请选择取得方式"
            // data7: ""
          });
          this.workForm.push({
            data1: "",
            data2: "开始时间",
            data3: "结束时间",
            data4: "",
            data5: "",
            data6: "",
            data7: ""
          });
          this.familyForm.push({
            data1: "",
            data2: "",
            data3: "",
            data4: "",
            data5: ""
          });
          this.trainForm.push({
            data1: "",
            data2: "开始时间",
            data3: "结束时间",
            data4: "",
            data5: ""
          });
        }
      });
    },
    //下一页
    next(id) {
      this.activeName = id;
    },
    onChange(index) {
      this.current = index;
    },
    showActionSheet(e) {
      switch (e) {
        case 0:
          this.actions = this.option[3];
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
        case 3:
          this.actions = this.option[7];
          this.actionSheetShow = true;
          break;
        case 4:
          this.dateShow = true;
          break;
        case 7:
          this.actions = [
            { name: "男", id: 1 },
            { name: "女", id: 2 }
          ];
          this.actionSheetShow = true;
          break;
        case 14:
          this.dateShow = true;
          break;
        case 20:
          this.actions = [
            { name: "本地城镇", id: 1 },
            { name: "本地农村", id: 2 },
            { name: "外地城镇", id: 3 },
            { name: "外地农村", id: 4 }
          ];
          this.actionSheetShow = true;
          break;
        case 23:
          this.actions = [
            { name: "未婚未育", id: 1 },
            { name: "已婚未育", id: 2 },
            { name: "已婚已育", id: 3 },
            { name: "离异", id: 4 }
          ];
          this.actionSheetShow = true;
          break;
        case 32:
          this.actions = this.option[8];
          this.actionSheetShow = true;
          break;
        case 35:
          this.actions = [
            { name: "是", id: 1 },
            { name: "否", id: 2 }
          ];
          this.actionSheetShow = true;
          break;
        case 36:
          this.actions = [
            { name: "是", id: 1 },
            { name: "否", id: 2 }
          ];
          this.actionSheetShow = true;
          break;
        case 43:
          this.actions = this.option[4];
          this.actionSheetShow = true;
          break;
        case 45:
          this.actions = [
            { name: "保密", id: 0 },
            { name: "水瓶座", id: 1 },
            { name: "双鱼座", id: 2 },
            { name: "白羊座", id: 3 },
            { name: "金牛座", id: 4 },
            { name: "双子座", id: 5 },
            { name: "巨蟹座", id: 6 },
            { name: "狮子座", id: 7 },
            { name: "处女座", id: 8 },
            { name: "天平座", id: 9 },
            { name: "天蝎座", id: 10 },
            { name: "射手座", id: 11 },
            { name: "摩羯座", id: 12 }
          ];
          this.actionSheetShow = true;
          break;
      }
      this.currentDate = new Date();
      this.sum = e;
    },
    write(val, id) {
      switch (id) {
        case 5:
          this.formData.cn_name = val;
          break;
        case 6:
          this.formData.en_name = val;
          break;
        case 8:
          this.formData.age = val;
          break;
        case 9:
          this.formData.nation = val;
          break;
        case 10:
          this.formData.native_place = val;
          break;
        case 11:
          this.formData.nationality = val;
          break;
        case 12:
          this.formData.wechat_code = val;
          break;
        case 13:
          this.formData.phone = val;
          break;
        case 15:
          this.formData.IDcard = val;
          break;
        case 16:
          this.formData.address = val;
          break;
        case 17:
          this.formData.postal_code = val;
          break;
        case 18:
          this.formData.living_place = val;
          break;
        case 19:
          this.formData.living_postal_code = val;
          break;
        case 21:
          this.formData.face = val;
          break;
        case 22:
          this.formData.degree = val;
          break;
        case 24:
          this.formData.speciality = val;
          break;
        case 25:
          this.formData.school = val;
          break;
        case 26:
          this.formData.school_address = val;
          break;
        case 27:
          this.formData.computer_level = val;
          break;
        case 28:
          this.formData.language_level = val;
          break;
        case 29:
          this.formData.email = val;
          break;
        case 30:
          this.formData.urgent_contact = val;
          break;
        case 31:
          this.formData.contact_relation_phone = val;
          break;
        case 33:
          this.formData.health = val;
          break;
        case 34:
          this.formData.blood_type = val;
          break;
        case 37:
          this.formData.hobby = val;
          break;
        case 38:
          this.formData.reward = val;
          break;
        case 39:
          this.formData.self_assessment = val;
          break;
        case 40:
          this.formData.motto = val;
          break;
        case 41:
          this.formData.confession = val;
          break;
        case 42:
          this.formData.statement = val;
          break;
        case 44:
          this.formData.contact_phone = val;
          break;
      }
    },
    onSelect(item) {
      switch (this.sum) {
        case 0:
          this.form.data0 = item.name;
          this.formData.company_name = item.name;
          this.formData.company_id = item.id;
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
        case 3:
          this.form.data3 = item.name;
          this.formData.nature_name = item.name;
          this.formData.nature_id = item.id;
          break;
        case 4:
          this.form.data4 = item.name;
          this.formData.dataId3 = item.id;
          break;
        case 7:
          this.form.data7 = item.name;
          this.formData.sex = item.id;
          break;
        case 20:
          this.form.data20 = item.name;
          this.formData.household_type = item.id;
          break;
        case 23:
          this.form.data23 = item.name;
          this.formData.marriage = item.id;
          break;
        case 32:
          this.form.data32 = item.name;
          this.formData.employee_status_name = item.name;
          this.formData.employee_status_id = item.id;
          break;
        case 35:
          this.form.data35 = item.name;
          this.formData.is_beijing_social_insurance = item.id;
          break;
        case 36:
          this.form.data36 = item.name;
          this.formData.business_strife = item.id;
          break;
        case 43:
          this.form.data43 = item.name;
          this.formData.school_name = item.name;
          this.formData.school_id = item.id;
          break;
        case 45:
          this.form.data45 = item.name;
          this.formData.constellation = item.name;
          break;
      }
      this.actionSheetShow = false;
    },
    confirmDate(type) {
      const date = parseTime(type).split(" ")[0];
      switch (this.sum) {
        case 4:
          this.form.data4 = date;
          this.formData.entry_date = date;
          break;
        case 14:
          this.form.data14 = date;
          this.formData.birth_date = date;
          break;
      }
      this.dateShow = false;
    },
    // 多级删除
    multistageRemove(name, index) {
      if (name == "education") {
        this.educationForm.splice(index, 1);
        this.formData.education.splice(index, 1);
      } else if (name == "work") {
        this.workForm.splice(index, 1);
        this.formData.work.splice(index, 1);
      } else if (name == "family") {
        this.familyForm.splice(index, 1);
        this.formData.family.splice(index, 1);
      } else if (name == "train") {
        this.trainForm.splice(index, 1);
        this.formData.train.splice(index, 1);
      }
    },
    // 上传图片
    afterRead(param) {
      // 此时可以自行将文件上传至服务器
      let data = new window.FormData();
      data.append("images", param.file);
      data.append("type", "photo");
      this.$axios.post("/api/uploads/upload", data).then(res => {
        if (res.data.code == 0) {
          this.formData.photo = res.data.data.file_url;
          this.$notify({ type: "success", message: res.data.msg });
        } else {
          this.$notify({ type: "warning", message: res.data.msg });
        }
      });
    },
    //图片删除
    remImg() {
      this.formData.photo = "";
    },
    //手写板清空
    handleReset() {
      this.$refs.esign.reset();
    },

    //多级教育背景添加
    addeducation() {
      this.educationForm.push({
        data1: "",
        data2: "开始时间",
        data3: "结束时间",
        data4: "",
        data5: "",
        data6: "请选择取得方式",
        data7: ""
      });
      this.formData.education.push({
        school_name: "",
        start_date: "",
        end_date: "",
        speciality: "",
        degree: "",
        way: ""
        // contact_phone: ""
      });
    },
    // 多级工作经历添加
    addWork() {
      this.workForm.push({
        data1: "",
        data2: "开始时间",
        data3: "结束时间",
        data4: "",
        data5: "",
        data6: "",
        data7: ""
      });
      this.formData.work.push({
        company_name: "",
        start_date: "",
        end_date: "",
        position_name: "",
        salary: "",
        leave_reason: "",
        contact_phone: ""
      });
    },
    // 多级工作经历添加
    addFamily() {
      this.familyForm.push({
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: ""
      });
      this.formData.family.push({
        name: "",
        relation: "",
        work: "",
        tel: "",
        company: ""
      });
    },
    // 多级培训添加
    addTrain() {
      this.trainForm.push({
        data1: "",
        data2: "开始时间",
        data3: "结束时间",
        data4: "",
        data5: ""
      });
      this.formData.train.push({
        train_date: "",
        end_date: "",
        company: "",
        position: "",
        certificate: ""
      });
    },
    //多级输入
    multistageWrite(data, index, sum, name) {
      if (name == "education") {
        switch (sum) {
          case 1:
            this.formData.education[index].school_name = data;
            break;
          case 4:
            this.formData.education[index].speciality = data;
            break;
          case 5:
            this.formData.education[index].degree = data;
            break;
          // case 7:
          //   this.formData.education[index].contact_phone = data;
          //   break;
        }
      } else if (name == "work") {
        switch (sum) {
          case 1:
            this.formData.work[index].company_name = data;
            break;
          case 4:
            this.formData.work[index].position_name = data;
            break;
          case 5:
            this.formData.work[index].salary = data;
            break;
          case 6:
            this.formData.work[index].leave_reason = data;
            break;
          case 7:
            this.formData.work[index].contact_phone = data;
            break;
        }
      } else if (name == "family") {
        switch (sum) {
          case 1:
            this.formData.family[index].name = data;
            break;
          case 2:
            this.formData.family[index].relation = data;
            break;
          case 3:
            this.formData.family[index].work = data;
            break;
          case 4:
            this.formData.family[index].tel = data;
            break;
          case 5:
            this.formData.family[index].company = data;
            break;
        }
      } else if (name == "train") {
        switch (sum) {
          case 1:
            this.formData.train[index].company = data;
            break;
          case 4:
            this.formData.train[index].position = data;
            break;
          case 5:
            this.formData.train[index].certificate = data;
            break;
        }
      }
    },
    // 多级弹窗
    multistageShowActionSheet(sum, index, name) {
      if (name == "education") {
        switch (sum) {
          case 2:
            this.multistageDdateShow = true;
            break;
          case 3:
            this.multistageDdateShow = true;
            break;
          case 6:
            this.actions = [
              { name: "统招", id: 1 },
              { name: "自考", id: 2 },
              { name: "成考", id: 3 },
              { name: "其他", id: 4 }
            ];
            this.multistageActionSheetShow = true;
            break;
        }
      } else if (name == "work") {
        switch (sum) {
          case 2:
            this.multistageDdateShow = true;
            break;
          case 3:
            this.multistageDdateShow = true;
            break;
        }
      } else if (name == "train") {
        switch (sum) {
          case 2:
            this.multistageDdateShow = true;
            break;
          case 3:
            this.multistageDdateShow = true;
            break;
        }
      }

      this.multistageSum = sum;
      this.multistageName = name;
      this.index = index;
    },
    //多级选择时间
    multistageconfirmDate(type) {
      const date = parseTime(type).split(" ")[0];
      if (this.multistageName == "education") {
        switch (this.multistageSum) {
          case 2:
            this.educationForm[this.index].data2 = date;
            this.formData.education[this.index].start_date = date;
            break;
          case 3:
            this.educationForm[this.index].data3 = date;
            this.formData.education[this.index].end_date = date;
            break;
        }
      } else if (this.multistageName == "work") {
        switch (this.multistageSum) {
          case 2:
            this.workForm[this.index].data2 = date;
            this.formData.work[this.index].start_date = date;
            break;
          case 3:
            this.workForm[this.index].data3 = date;
            this.formData.work[this.index].end_date = date;
            break;
        }
      } else if (this.multistageName == "train") {
        switch (this.multistageSum) {
          case 2:
            this.trainForm[this.index].data2 = date;
            this.formData.train[this.index].train_date = date;
            break;
          case 3:
            this.trainForm[this.index].data3 = date;
            this.formData.train[this.index].end_date = date;
            break;
        }
      }
      this.cancelDate();
    },
    multistageOnSelect(item) {
      console.log(item);
      if (this.multistageName == "education") {
        switch (this.multistageSum) {
          case 6:
            this.educationForm[this.index].data6 = item.name;
            this.formData.education[this.index].way = item.id;
            break;
        }
        this.multistageActionSheetShow = false;
      }
    },
    check(val) {
      if (val) {
        this.formData.statement =
          "本人承诺：上述信息完全真实有效，如有虚假，愿接受公司处罚及承担因此所产生的一切后果；本人信息如有变动，将在变化后一周内到人力资源部办理变更，否则由此造成的损失由本人负责。";
      } else {
        this.formData.statement = "";
      }
    },
    btn() {
      console.log(this.formData);
      let education = [];
      let work = [];
      let family = [];
      let train = [];
      this.formData.education.forEach(result => {
        education.push({
          school_name: result.school_name,
          start_date: result.start_date,
          end_date: result.end_date,
          speciality: result.speciality,
          degree: result.degree,
          way: result.way
          // contact_phone: result.contact_phone
        });
      });
      this.formData.work.forEach(result => {
        work.push({
          company_name: result.company_name,
          start_date: result.start_date,
          end_date: result.end_date,
          position_name: result.position_name,
          salary: result.salary,
          leave_reason: result.leave_reason,
          contact_phone: result.contact_phone
        });
      });
      this.formData.family.forEach(result => {
        family.push({
          name: result.name,
          relation: result.relation,
          work: result.work,
          tel: result.tel,
          company: result.company
        });
      });
      this.formData.train.forEach(result => {
        train.push({
          train_date: result.train_date,
          end_date: result.end_date,
          company: result.company,
          position: result.position,
          certificate: result.certificate
        });
      });
      if (this.formData.company_name == "") {
        this.$notify({ type: "warning", message: "请选择所在公司名称" });
      } else if (this.formData.company_id == "") {
        this.$notify({ type: "warning", message: "请选择所在公司ID" });
      } else if (this.formData.department_name == "") {
        this.$notify({ type: "warning", message: "请选择所在部门名称" });
      } else if (this.formData.department_id == "") {
        this.$notify({ type: "warning", message: "请选择所在部门ID" });
      } else if (this.formData.position_name == "") {
        this.$notify({ type: "warning", message: "请选择职位名称" });
      } else if (this.formData.position_id == "") {
        this.$notify({ type: "warning", message: "请选择职位ID" });
      } else if (this.formData.nature_name == "") {
        this.$notify({ type: "warning", message: "请选择岗位性质名称" });
      } else if (this.formData.nature_id == "") {
        this.$notify({ type: "warning", message: "请选择岗位性质ID" });
      } else if (this.formData.school_name == "") {
        this.$notify({ type: "warning", message: "请选择所在学校名称" });
      } else if (this.formData.school_id == "") {
        this.$notify({ type: "warning", message: "请选择所在学校ID" });
      } else if (this.formData.entry_date == "") {
        this.$notify({ type: "warning", message: "请选择入职日期" });
      } else if (this.formData.cn_name == "") {
        this.$notify({ type: "warning", message: "请填写中文名" });
      }
      // else if (this.formData.en_name == "") {
      //   this.$toast("请填写英文名");
      // }
      else if (this.formData.sex == "") {
        this.$notify({ type: "warning", message: "请填写性别" });
      }
      // else if (this.formData.school_address == "") {
      //   this.$toast("请填写毕业学校地址");
      // }
      else if (this.formData.nationality == "") {
        this.$notify({ type: "warning", message: "请填写国籍" });
      } else if (this.formData.nation == "") {
        this.$notify({ type: "warning", message: "请填写民族" });
      } else if (this.formData.native_place == "") {
        this.$notify({ type: "warning", message: "请填写籍贯" });
      } else if (this.formData.birth_date == "") {
        this.$notify({ type: "warning", message: "请填写生日" });
      } else if (this.formData.age == "") {
        this.$notify({ type: "warning", message: "请填写年龄" });
      } else if (this.formData.marriage == "") {
        this.$notify({ type: "warning", message: "请选择是否婚育" });
      } else if (this.formData.degree == "") {
        this.$notify({ type: "warning", message: "请填写学历" });
      } else if (this.formData.face == "") {
        this.$notify({ type: "warning", message: "请填写政治面貌" });
      } else if (this.formData.speciality == "") {
        this.$notify({ type: "warning", message: "请填写专业" });
      } else if (this.formData.school == "") {
        this.$notify({ type: "warning", message: "请填写毕业院校" });
      }
      // else if (this.formData.computer_level == "") {
      //   this.$toast("请填写计算机水平");
      // }
      else if (this.formData.language_level == "") {
        this.$notify({ type: "warning", message: "请填写语言水平" });
      } else if (this.formData.IDcard == "") {
        this.$notify({ type: "warning", message: "请填写身份证号码" });
      } else if (this.formData.email == "") {
        this.$notify({ type: "warning", message: "请填写邮箱" });
      } else if (this.formData.address == "") {
        this.$notify({ type: "warning", message: "请填写身份证地址" });
      }
      // else if (this.formData.household_type == "") {
      //   this.$toast("请选择户籍类型");
      // }
      else if (this.formData.urgent_contact == "") {
        this.$notify({ type: "warning", message: "请填写紧急联系人" });
      } else if (this.formData.contact_relation_phone == "") {
        this.$notify({ type: "warning", message: "请输入紧急联系人关系" });
      } else if (this.formData.contact_phone == "") {
        this.$notify({ type: "warning", message: "请输入紧急联系人电话" });
      } else if (this.formData.living_place == "") {
        this.$notify({ type: "warning", message: "请填写现居地" });
      } else if (this.formData.health == "") {
        this.$notify({ type: "warning", message: "请填写健康状况" });
      } else if (this.formData.wechat_code == "") {
        this.$notify({ type: "warning", message: "请填写微信号" });
      } else if (this.formData.hobby == "") {
        this.$notify({ type: "warning", message: "请填写爱好" });
      } else if (this.formData.constellation === "") {
        console.log(this.formData.constellation, 6666);
        this.$notify({ type: "warning", message: "请选择星座" });
      } else if (this.formData.is_beijing_social_insurance == "") {
        this.$notify({
          type: "warning",
          message: "  请选择是否首次在北京参加社保"
        });
      } else if (this.formData.business_strife == "") {
        this.$notify({
          type: "warning",
          message: "请选择是否与原单位存在当期竞业禁止"
        });
      }
      //  else if (this.formData.postal_code == "") {
      //   this.$toast("请填写邮编");
      // }
      //  else if (this.formData.living_postal_code == "") {
      //   this.$toast("请填写邮编");
      // }
      // else if (this.formData.blood_type == "") {
      //   this.$toast("请填写血型");
      // }
      else if (this.formData.phone == "") {
        this.$notify({ type: "warning", message: "请填写电话号码" });
      } else if (this.formData.photo == "") {
        this.$notify({ type: "warning", message: "请上传头像" });
      }
      //  else if (this.formData.reward == "") {
      //   this.$toast("请填写曾获奖励");
      // }
      //  else if (this.formData.self_assessment == "") {
      //   this.$toast("请填写自我评价");
      // }
      else if (this.formData.motto == "") {
        this.$notify({ type: "warning", message: "请填写座右铭及感悟" });
      } else if (this.formData.confession == "") {
        this.$notify({ type: "warning", message: "请填写入司告白" });
      }
      // else if (this.formData.employee_status_name == "") {
      //   this.$toast("请填写员工状态");
      // }
      else if (this.education == []) {
        this.$notify({ type: "warning", message: "请填写教育经历信息" });
      } else if (this.work == []) {
        this.$notify({ type: "warning", message: "请填写工作经历信息" });
      } else if (this.family === []) {
        this.$notify({
          type: "warning",
          message: "请填写家庭和社会关系状况信息"
        });
      } else if (this.train === []) {
        this.$notify({ type: "warning", message: "请填写培训经历信息" });
      } else if (!this.statementRadio) {
        this.$notify({ type: "warning", message: "请勾选入职声明" });
      } else {
        let noStop = true;
        education.forEach(result => {
          if (result.school_name == "") {
            this.$notify({
              type: "warning",
              message: "请填写教育经历信息-学校名称"
            });
            noStop = false;
          } else if (result.start_date == "") {
            this.$notify({
              type: "warning",
              message: "请填写教育经历信息-开始时间"
            });
            noStop = false;
          } else if (result.end_date == "") {
            this.$notify({
              type: "warning",
              message: "请填写教育经历信息-结束时间"
            });
            noStop = false;
          } else if (result.speciality == "") {
            this.$notify({
              type: "warning",
              message: "请填写教育经历信息-学历"
            });
            noStop = false;
          } else if (result.way == "") {
            this.$notify({
              type: "warning",
              message: "请填写教育经历信息-取得方式"
            });
            noStop = false;
          }
          //  else if (result.contact_phone == "") {
          //   this.$notify({
          //     type: "warning",
          //     message: "请填写教育经历信息-证明人/电话"
          //   });
          //   noStop = false;
          // }
        });
        work.forEach(result => {
          if (result.company_name == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-公司名称"
            });
            noStop = false;
          } else if (result.start_date == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-开始时间"
            });
            noStop = false;
          } else if (result.end_date == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-结束时间"
            });
            noStop = false;
          }
          // else if (result.position_name == "") {
          //   this.$notify({
          //     type: "warning",
          //     message: "请填写工作经历信息-职位"
          //   });
          //   noStop = false;
          // }
          else if (result.salary == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-薪资"
            });
            noStop = false;
          } else if (result.leave_reason == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-离职原因"
            });
            noStop = false;
          } else if (result.contact_phone == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-证明人及电话"
            });
            noStop = false;
          }
        });
        family.forEach(result => {
          if (result.name == "") {
            this.$notify({
              type: "warning",
              message: "请填写家庭关系信息-姓名"
            });
            noStop = false;
          } else if (result.relation == "") {
            this.$notify({
              type: "warning",
              message: "请填写家庭关系信息-关系"
            });
            noStop = false;
          } else if (result.tel == "") {
            this.$notify({
              type: "warning",
              message: "请填写家庭关系信息-电话"
            });
            noStop = false;
          } else if (result.work == "") {
            this.$notify({
              type: "warning",
              message: "请填写家庭关系信息-职位"
            });
            noStop = false;
          } else if (result.company == "") {
            this.$notify({
              type: "warning",
              message: "请填写家庭关系信息-单位"
            });
            noStop = false;
          }
        });
        // train.forEach(result => {
        //   if (result.train_date == "") {
        //     this.$toast("请填写培训经历信息-开始时间");
        //     noStop = false;
        //   } else if (result.company == "") {
        //     this.$toast("请填写培训经历信息-培训单位");
        //     noStop = false;
        //   } else if (result.position == "") {
        //     this.$toast("请填写培训经历信息-职位");
        //     noStop = false;
        //   } else if (result.certificate == "") {
        //     this.$toast("请填写培训经历信息-获得证书");
        //     noStop = false;
        //   } else if (result.end_date == "") {
        //     this.$toast("请填写培训经历信息-结束时间");
        //     noStop = false;
        //   }
        // });
        if (noStop) {
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
                    company_name: this.formData.company_name,
                    company_id: this.formData.company_id,
                    department_name: this.formData.department_name,
                    department_id: this.formData.department_id,
                    position_name: this.formData.position_name,
                    position_id: this.formData.position_id,
                    nature_name: this.formData.nature_name,
                    nature_id: this.formData.nature_id,
                    school_name: this.formData.school_name,
                    school_id: this.formData.school_id,
                    entry_date: this.formData.entry_date,
                    cn_name: this.formData.cn_name,
                    en_name: this.formData.en_name,
                    sex: this.formData.sex,
                    school_address: this.formData.school_address,
                    nationality: this.formData.nationality,
                    nation: this.formData.nation,
                    native_place: this.formData.native_place,
                    birth_date: this.formData.birth_date,
                    age: this.formData.age,
                    marriage: this.formData.marriage,
                    degree: this.formData.degree,
                    face: this.formData.face,
                    speciality: this.formData.speciality,
                    school: this.formData.school,
                    computer_level: this.formData.computer_level,
                    language_level: this.formData.language_level,
                    IDcard: this.formData.IDcard,
                    email: this.formData.email,
                    address: this.formData.address,
                    household_type: this.formData.household_type,
                    urgent_contact: this.formData.urgent_contact,
                    contact_relation_phone: this.formData
                      .contact_relation_phone,
                    contact_phone: this.formData.contact_phone,
                    living_place: this.formData.living_place,
                    health: this.formData.health,
                    wechat_code: this.formData.wechat_code,
                    hobby: this.formData.hobby,
                    is_beijing_social_insurance: this.formData
                      .is_beijing_social_insurance,
                    business_strife: this.formData.business_strife,
                    postal_code: this.formData.postal_code,
                    living_postal_code: this.formData.living_postal_code,
                    blood_type: this.formData.blood_type,
                    phone: this.formData.phone,
                    photo: this.formData.photo,
                    reward: this.formData.reward,
                    self_assessment: this.formData.self_assessment,
                    motto: this.formData.motto,
                    confession: this.formData.confession,
                    statement: this.formData.statement,
                    employee_status_name: this.formData.employee_status_name,
                    autograph: this.formData.autograph,
                    constellation: this.formData.constellation,
                    education: JSON.stringify(education),
                    family: JSON.stringify(family),
                    work: JSON.stringify(work),
                    train: JSON.stringify(train)
                  };
                  this.$axios
                    .post("/api/employee/applyEmployee", data)
                    .then(result => {
                      this.loading = false;
                      if (result.data.code == 0) {
                        this.$dialog
                          .alert({
                            message: result.data.msg
                          })
                          .then(() => {
                            this.$router.push("/login");
                            // this.educationForm = [
                            //   {
                            //     data1: "",
                            //     data2: "开始时间",
                            //     data3: "结束时间",
                            //     data4: "",
                            //     data5: "",
                            //     data6: "请选择取得方式",
                            //     data7: ""
                            //   }
                            // ];
                            // this.workForm = [
                            //   {
                            //     data1: "",
                            //     data2: "开始时间",
                            //     data3: "结束时间",
                            //     data4: "",
                            //     data5: "",
                            //     data6: "",
                            //     data7: ""
                            //   }
                            // ];
                            // this.familyForm = [
                            //   {
                            //     data1: "",
                            //     data2: "",
                            //     data3: "",
                            //     data4: "",
                            //     data5: ""
                            //   }
                            // ];
                            // this.trainForm = [
                            //   {
                            //     data1: "",
                            //     data2: "开始时间",
                            //     data3: "结束时间",
                            //     data4: "",
                            //     data5: ""
                            //   }
                            // ];
                            // this.formData = {
                            //   company_name: "",
                            //   company_id: "",
                            //   department_name: "",
                            //   department_id: "",
                            //   position_name: "",
                            //   position_id: "",
                            //   school_name: "",
                            //   school_id: "",
                            //   nature_name: "",
                            //   nature_id: "",
                            //   cn_name: "",
                            //   en_name: "",
                            //   sex: "",
                            //   entry_date: "",
                            //   nationality: "",
                            //   nation: "",
                            //   native_place: "",
                            //   birth_date: "",
                            //   age: "",
                            //   marriage: "",
                            //   degree: "",
                            //   face: "",
                            //   speciality: "",
                            //   school: "",
                            //   computer_level: "",
                            //   language_level: "",
                            //   IDcard: "",
                            //   email: "",
                            //   address: "",
                            //   household_type: "",
                            //   urgent_contact: "",
                            //   contact_relation_phone: "",
                            //   living_place: "",
                            //   employee_status_name: "",
                            //   health: "",
                            //   wechat_code: "",
                            //   hobby: "",
                            //   is_beijing_social_insurance: "",
                            //   business_strife: "",
                            //   living_postal_code: "",
                            //   postal_code: "",
                            //   blood_type: "",
                            //   phone: "",
                            //   photo: "",
                            //   reward: "",
                            //   self_assessment: "",
                            //   motto: "",
                            //   confession: "",
                            //   school_address: "",
                            //   statement: "",
                            //   autograph: "",
                            //   education: [
                            //     {
                            //       school_name: "",
                            //       start_date: "",
                            //       end_date: "",
                            //       speciality: "",
                            //       degree: "",
                            //       way: "",
                            //       contact_phone: ""
                            //     }
                            //   ],
                            //   work: [
                            //     {
                            //       company_name: "",
                            //       start_date: "",
                            //       end_date: "",
                            //       position_name: "",
                            //       salary: "",
                            //       leave_reason: "",
                            //       contact_phone: ""
                            //     }
                            //   ],
                            //   family: [
                            //     {
                            //       name: "",
                            //       relation: "",
                            //       work: "",
                            //       tel: "",
                            //       company: ""
                            //     }
                            //   ],
                            //   train: [
                            //     {
                            //       train_date: "",
                            //       end_date: "",
                            //       company: "",
                            //       position: "",
                            //       certificate: ""
                            //     }
                            //   ]
                            // };
                          });
                      } else {
                        this.$notify({
                          type: "warning",
                          message: result.data.msg
                        });
                      }
                    });
                });
            })
            .catch(err => {
              this.$notify({ type: "warning", message: "请写入签名" });
            });
        }
      }
    },
    cancelDate() {
      this.dateShow = false;
      this.multistageDdateShow = false;
    }
  }
};
</script>
<style scoped>
.content {
  overflow: hidden;
  /* background: #ededed; */
  padding-bottom: 20px;
}
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
.educationItem {
  border-bottom: 2px dashed #999;
}
.educationItem:last-child {
  border: 0;
}
.sudoku .item .sum {
  width: 20px;
  text-align: center;
  height: 100%;
  line-height: 1;
}
.sudoku .item .center {
  width: 175px;
  font-size: 14px;
}
.sudoku .item .btnList {
  width: 105px;
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
.statement {
  display: flex;
  width: 330px;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: space-between;
}
.statement p {
  width: 280px;
  color: #999;
  padding-right: 10px;
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
.custom-indicator {
  text-align: center;
  font-size: 20px;
  color: #666;
  margin-right: 20px;
  position: absolute;
  top: 5px;
  left: 30px;
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
.photo {
  width: 80px;
  height: 80px;
}
.loading {
  position: fixed;
  z-index: 10000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.next {
  width: 60px;
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
}
.footer {
  display: flex;
  justify-content: center;
}
.footer .next:last-child {
  margin-left: 15px;
}
</style>