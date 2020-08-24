<template>
  <div class="message">
    <div class="content">
      <div class="title">
        <div class="titleBg"></div>
        <div class="titleInit">麦禾教育应聘登记表</div>
        <img class="titleImg" src="../assets/title_3.jpg" />
      </div>
      <div class="main" v-if="showMain">
        <van-tabs v-model="activeName" animated swipeable>
          <van-tab title="基本信息1" name="1">
            <div class="list">
              <van-divider
                dashed
                :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
              >基本信息</van-divider>
                <van-cell
                required
                title="面试邀约人"
                is-link
                :value="form.data41"
                @click="showActionSheet(41)"
              />
              <van-cell
                required
                title="应聘职位"
                is-link
                :value="form.data0"
                @click="showActionSheet(0)"
              />
              <van-cell
                required
                title="意向工作地点"
                is-link
                :value="form.data1"
                @click="showActionSheet(1)"
              />

              <van-field
                v-model="form.data2"
                required
                label="中文姓名"
                placeholder="请输入中文姓名"
                @input="write(form.data2,2)"
              />
              <van-field
                v-model="form.data3"
                label="英文姓名"
                placeholder="请输入英文姓名"
                @input="write(form.data3,3)"
              />
              <van-cell
                required
                title="性别"
                is-link
                :value="form.data4"
                @click="showActionSheet(4)"
              />
              <van-field
                v-model="form.data5"
                required
                label="民族"
                placeholder="请输入民族"
                @input="write(form.data5,5)"
              />
              <van-field
                v-model="form.data6"
                required
                label="籍贯"
                placeholder="请输入籍贯"
                @input="write(form.data6,6)"
              />
              <van-field
                v-model="form.data7"
                label="身高/体重"
                placeholder="请输入身高和体重(cm/kg)"
                @input="write(form.data7,7)"
              />
              <van-cell
                required
                title="出生日期"
                is-link
                :value="form.data8"
                @click="showActionSheet(8)"
              />
              <van-cell
                required
                title="入司渠道"
                is-link
                :value="form.data27"
                @click="showActionSheet(27)"
              />
              <template v-if="isChannel">
                <van-field
                  v-model="form.data38"
                  required
                  label="推荐人"
                  placeholder="请输入推荐人"
                  @input="write(form.data38,38)"
                />
                <van-field
                  v-model="form.data39"
                  required
                  label="部门"
                  placeholder="请输入推荐人部门"
                  @input="write(form.data39,39)"
                />
                <van-field
                  v-model="form.data40"
                  required
                  label="联系方式"
                  placeholder="请输入推荐人联系方式"
                  @input="write(form.data40,40)"
                />
              </template>
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
                v-model="form.data9"
                required
                label="身份证号码"
                placeholder="请输入身份证号码"
                @input="write(form.data9,9)"
              />
              <van-field
                v-model="form.data10"
                required
                label="年龄"
                placeholder="请输入年龄"
                @input="write(form.data10,10)"
              />
              <van-field
                v-model="form.data11"
                label="政治面貌"
                placeholder="请输入政治面貌"
                @input="write(form.data11,11)"
              />
              <van-field
                v-model="form.data12"
                required
                label="学历"
                placeholder="请输入学历"
                @input="write(form.data12,12)"
              />
              <van-cell
                required
                title="是否婚育"
                is-link
                :value="form.data13"
                @click="showActionSheet(13)"
              />
              <van-field
                v-model="form.data14"
                required
                label="专业"
                placeholder="请输入专业"
                @input="write(form.data14,14)"
              />
              <van-field
                v-model="form.data15"
                required
                label="毕业学校"
                placeholder="请输入毕业学校"
                @input="write(form.data15,15)"
              />

              <van-cell title="毕业时间" is-link :value="form.data16" @click="showActionSheet(16)" />
              <van-field
                v-model="form.data17"
                label="计算机水平"
                placeholder="请输入计算机水平"
                @input="write(form.data17,17)"
              />
              <van-field
                v-model="form.data18"
                label="外语水平"
                placeholder="请输入外语水平"
                @input="write(form.data18,18)"
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
                v-model="form.data19"
                required
                label="联系电话"
                placeholder="请输入联系电话"
                @input="write(form.data19,19)"
              />
              <van-field
                v-model="form.data20"
                required
                label="邮箱"
                placeholder="请输入邮箱"
                @input="write(form.data20,20)"
              />
              <van-field
                v-model="form.data21"
                label="身份证地址"
                placeholder="请输入身份证地址"
                @input="write(form.data21,21)"
              />
              <van-cell title="户籍类型" is-link :value="form.data22" @click="showActionSheet(22)" />
              <van-field
                v-model="form.data35"
                required
                label="现居地址"
                placeholder="请输入现居地址"
                @input="write(form.data35,35)"
              />
              <van-cell
                required
                title="现居住性质"
                is-link
                :value="form.data36"
                @click="showActionSheet(36)"
              />
              <van-field
                v-model="form.data23"
                required
                label="紧急联系人"
                placeholder="请输入紧急联系人"
                @input="write(form.data23,23)"
              />
              <van-field
                v-model="form.data24"
                required
                label="联系人关系"
                placeholder="请输入紧急联系人关系"
                @input="write(form.data24,24)"
              />
              <van-field
                v-model="form.data25"
                required
                label="联系人电话"
                placeholder="请输入紧急联系人电话"
                @input="write(form.data25,25)"
              />
              <!-- <van-field
                v-model="form.data25"
                label="本司任职亲友"
                placeholder="请输入本司任职亲友"
                @input="write(form.data25,25)"
              />-->
              <!-- <van-field
                v-model="form.data26"
                label="关系/电话"
                placeholder="请输入本司任职亲友关系/电话"
                @input="write(form.data26,26)"
              />-->
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

              <van-cell title="最近体检时间" is-link :value="form.data28" @click="showActionSheet(28)" />
              <van-field
                v-model="form.data29"
                label="曾患何种疾病"
                placeholder="请输入曾患何种疾病"
                @input="write(form.data29,29)"
              />
              <van-field
                v-model="form.data30"
                required
                label="健康状况"
                placeholder="请输入健康状况"
                @input="write(form.data30,30)"
              />
              <van-field
                required
                v-model="form.data31"
                label="期望薪资"
                placeholder="请输入期望薪资"
                @input="write(form.data31,31)"
              />
              <van-cell
                required
                title="最快到岗时间"
                is-link
                :value="form.data32"
                @click="showActionSheet(32)"
              />
              <van-field
                v-model="form.data37"
                type="textarea"
                label="曾获证书"
                placeholder="请输入曾获证书"
                @input="write(form.data37,37)"
              />
              <van-field
                v-model="form.data33"
                required
                type="textarea"
                label="自我评价"
                placeholder="请输入自我评价"
                @input="write(form.data33,33)"
              />
              <van-field
                v-model="form.data34"
                required
                type="textarea"
                label="你最看重"
                placeholder="加入公司你最看重？请按重要程度将数字排序"
                @input="write(form.data34,34)"
              />
              <div class="answerList">
                <div class="item">1、企业规模及品牌</div>
                <div class="item">2、成长记发展平台</div>
                <div class="item">3、福利待遇</div>
                <div class="item">4、企业文化</div>
                <div class="item">5、团队氛围</div>
                <div class="item">6、领导风格</div>
              </div>
            </div>
            <div class="footer">
              <div class="next" @click="next('3')">上一页</div>
              <div class="next" @click="next('5')">下一页</div>
            </div>
          </van-tab>
          <van-tab title="教育培训" name="5">
            <div class="list">
              <van-divider
                dashed
                :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
              >教育培训经历(由高自低填写)</van-divider>
              <div class="addBtn" @click="addeducation">添加</div>
              <div class="education">
                <template v-for="(item,index) in educationForm">
                  <div class="educationItem">
                    <van-field
                      v-model="educationForm[index].data1"
                      required
                      label="学校/机构"
                      placeholder="请输入学校/培训机构"
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
                    <div
                      class="rem"
                      v-if="index != 0"
                      @click="multistageRemove('education',index)"
                    >删除</div>
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

          <!-- <van-tab title="家庭关系" name="7">
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
                      required
                      label="职业"
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
                    <div class="rem" @click="multistageRemove('family',index)">删除</div>
                  </div>
                </template>
              </div>
            </div>
            <div class="footer">
              <div class="next" @click="next('6')">上一页</div>
              <div class="next" @click="next('8')">下一页</div>
            </div>
          </van-tab>-->
          <!-- <van-tab title="面试测评" name="8">
            <div class="list sudoku">
              <van-divider
                dashed
                :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
              >面试测评</van-divider>
              <div class="evaluatingList">
                <div class="evaluatingListItem">
                  <div
                    class="evaluatingTitle"
                  >1、为了有人能分担你的房租，你不得不与人合租，可以跟你合租的人有三个，你最终会选择跟谁合租一间房呢?按照接受程度，给他们依次排序分别是_________（排序）</div>
                  <div class="evaluatingCenter">
                    <van-field
                      v-model="evaluating.item1"
                      rows="2"
                      autosize
                      type="textarea"
                      show-word-limit
                      placeholder="请给他们依次排序"
                      style="border: 1px solid #e8e8e8;"
                    />
                    <div class="oneList">
                      <div class="oneItem">A：不爱讲话，个性闭塞的</div>
                      <div class="oneItem">B：热情过度，大大咧咧的</div>
                      <div class="oneItem">C：很有礼貌，但同时也非常有原则的</div>
                    </div>
                  </div>
                </div>
                <div class="evaluatingListItem">
                  <div class="evaluatingTitle">2、如果你是电台广播行业的从业人员，你最想担任的会是哪项职务?（单选）</div>
                  <div class="evaluatingCenter">
                    <van-radio-group v-model="evaluating.item2">
                      <van-radio class="radio" name="1" icon-size="24px">A：主持人</van-radio>
                      <van-radio class="radio" name="2" icon-size="24px">B：音控人员</van-radio>
                      <van-radio class="radio" name="3" icon-size="24px">C：企划制作人员</van-radio>
                      <van-radio class="radio" name="4" icon-size="24px">D：特别来宾或受访人员</van-radio>
                    </van-radio-group>
                  </div>
                </div>
                <div class="evaluatingListItem">
                  <div class="evaluatingTitle">3、遇到下列情况，你会选择哪个？（单选）</div>
                  <div class="evaluatingCenter">
                    <van-radio-group v-model="evaluating.item3">
                      <van-radio class="radio" name="1" icon-size="24px">A：1000万现金</van-radio>
                      <van-radio class="radio" name="2" icon-size="24px">B：10万月薪工作</van-radio>
                    </van-radio-group>
                  </div>
                </div>
                <div class="evaluatingListItem">
                  <div
                    class="evaluatingTitle"
                  >4、有一天你在回家路上遇到一个需要急救的亿万富翁，你救了他，他会给你2000万，这时你父亲打来电话说，你妈要见你最后一面，快不行。（单选）</div>
                  <div class="evaluatingCenter">
                    <van-radio-group v-model="evaluating.item4">
                      <van-radio class="radio" name="1" icon-size="24px">A：如果你现在回去可以见她最后一面</van-radio>
                      <van-radio
                        class="radio"
                        name="2"
                        icon-size="24px"
                      >B：如果你救亿万富翁你将见不到她最后一面，而且是永远见不到了</van-radio>
                    </van-radio-group>
                  </div>
                </div>
                <div class="evaluatingListItem">
                  <div
                    class="evaluatingTitle"
                  >5、带一群4岁的孩子去公园玩，其中一个孩子由于别人都不和他玩而大哭起来，这个时候，您该怎么办呢?（问答、多行文本输入，限200字）</div>
                  <div class="evaluatingCenter" style="border: 1px solid #e8e8e8;">
                    <van-field
                      v-model="evaluating.item5"
                      rows="3"
                      autosize
                      type="textarea"
                      maxlength="200"
                      show-word-limit
                    />
                  </div>
                </div>
                <div class="evaluatingListItem">
                  <div
                    class="evaluatingTitle"
                  >6、您的朋友开车时别人的车突然危险地抢到你们前面，您的朋友勃然大怒，而您试图让他平静下来。您会怎么做呢? （问答、多行文本输入，限200字）</div>
                  <div class="evaluatingCenter" style="border: 1px solid #e8e8e8;">
                    <van-field
                      v-model="evaluating.item6"
                      rows="3"
                      autosize
                      type="textarea"
                      maxlength="200"
                      show-word-limit
                    />
                  </div>
                </div>
                <div class="evaluatingListItem">
                  <div
                    class="evaluatingTitle"
                  >7、假如说，你去菜市场买菜，在菜市场中看到一个推车卖香蕉的老人家，香蕉2.3一斤，买5斤就按2元一斤算，你觉的很划算，便决定买了，买完后，你在公平秤上一称3.7斤，比实际少1.3斤，之后你会怎么做？（问答、多行文本输入，限200字）</div>
                  <div class="evaluatingCenter" style="border: 1px solid #e8e8e8;">
                    <van-field
                      v-model="evaluating.item7"
                      rows="3"
                      autosize
                      type="textarea"
                      maxlength="200"
                      show-word-limit
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="next" @click="next('6')">上一页</div>
              <div class="next" @click="next('9')">下一页</div>
            </div>
          </van-tab> -->
          <van-tab title="提交申请" name="7">
            <div class="list">
              <!-- <van-divider
                dashed
                :style="{ color: '#555',fontSize:'16px', borderColor: '#222',padding:'0 15px'}"
              >提交</van-divider>-->
              <!-- <van-field name="uploader" label="头像上传">
                <template #input>
                  <van-uploader :max-count="1" v-model="uploader" :after-read="afterRead" />
                </template>
              </van-field>-->
              <van-field name="uploader" label="签名" required>
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
              <div class="statement">
                <van-checkbox @change="check" v-model="statementRadio" icon-size="28px"></van-checkbox>
                <p>申明：本人对以上资料的真实性负责，如有虚假，本人自愿承担任何后果！本人谨此授权公司查询有关事项！</p>
              </div>
              <div class="submit" @click="btn">提交</div>
            </div>
            <div class="footer">
              <div class="next" @click="next('6')">上一页</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div v-else class="mainMsg">申请已提交</div>
      <van-action-sheet
        :duration="0.3"
        v-model="actionSheetShow"
        :actions="actions"
        @select="onSelect"
      />
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
    </div>
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
      showMain: true,
      activeName: "1",
      loading: false,
      statementRadio: false, //声明单选框
      uploader: [], //头像
      lineWidth: 6, //签名配置
      lineColor: "#000000", //签名配置
      bgColor: "#fff", //签名配置
      resultImg: "", //签名配置
      isCrop: false, //签名配置
      actionSheetShow: false,
      dateShow: false,
      multistageDdateShow: false,
      multistageActionSheetShow: false,
      option: {},
      text: "",
      isChannel: "", //入司渠道-内部推荐
      // evaluating: {
      //   item1: "",
      //   item2: "",
      //   item3: "",
      //   item4: "",
      //   item5: "",
      //   item6: "",
      //   item7: ""
      // },
      form: {
        data0: "请选择应聘职位",
        data1: "请选择意向工作地点",
        data2: "",
        data3: "",
        data4: "请选择性别",
        data5: "",
        data6: "",
        data7: "",
        data8: "请选择出生日期",
        data9: "",
        data10: "",
        data11: "",
        data12: "",
        data13: "请选择是否婚育",
        data14: "",
        data15: "",
        data16: "请选择毕业时间",
        data17: "",
        data18: "",
        data19: "",
        data20: "",
        data21: "",
        data22: "",
        data23: "",
        data24: "",
        data25: "",
        data26: "",
        data27: "请选择入司渠道",
        data28: "请选择最近体检时间",
        data29: "",
        data30: "",
        data31: "",
        data32: "请选择最快到岗时间",
        data33: "",
        data34: "",
        data35: "",
        data36: "请选择现住所性质",
        data37: "",
        data38: "",
        data39: "",
        data40: "",
        data41: "请选择面试邀约人"

      },
      educationForm: [
        {
          data1: "",
          data2: "开始时间",
          data3: "结束时间",
          data4: "",
          data5: "",
          data6: "请选择取得方式",
          data7: ""
        }
      ],
      workForm: [
        {
          data1: "",
          data2: "开始时间",
          data3: "结束时间",
          data4: "",
          data5: "",
          data6: "",
          data7: ""
        }
      ],
      familyForm: [
        {
          data1: "",
          data2: "",
          data3: "",
          data4: "",
          data5: ""
        }
      ],
      formData: {
        audition_invitation_id:'',
        offer_name: "",
        intended_name: "",
        cn_name: "",
        en_name: "",
        sex: "",
        nation: "",
        native_place: "",
        height_weight: "",
        birth_date: "",
        age: "",
        marriage: "",
        degree: "",
        face: "",
        speciality: "",
        school: "",
        finish_date: "",
        computer_level: "",
        language_level: "",
        IDcard: "",
        email: "",
        address: "",
        household_type: "",
        urgent_contact: "",
        contact_relation_phone: "",
        contact_phone: "",
        // friend: "",
        // friend_relation_phone: "",
        channel_name: "",
        certificate: "",
        tj_date: "",
        history_health: "",
        health: "",
        hope_salary: "",
        duty_date: "",
        self_assessment: "",
        phone: "",
        photo: "",
        autograph: "",
        living_place: "",
        abode_nature: "",
        statement: "",
        answer_soft: "",
        answers: [],
        recommender: "",
        recommender_depart: "",
        recommender_phone: "",
        education: [
          {
            school_name: "",
            start_date: "",
            end_date: "",
            speciality: "",
            degree: "",
            way: "",
            contact_phone: ""
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
        ]
      },
      sum: null,
      multistageSum: null,
      index: null,
      multistageName: null,
      actions: null,
      minDate: new Date(1980, 1, 1),
      maxDate: new Date(2030, 1, 1),
      currentDate: new Date()
    };
  },
  created() {
    // localStorage.setItem("eleToken", "");
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
    },

    showActionSheet(e) {
      switch (e) {
        case 0:
          this.actions = this.option[0];
          this.actionSheetShow = true;
          break;
        case 1:
          this.actions = this.option[1];
          this.actionSheetShow = true;
          break;
        case 4:
          this.actions = [
            { name: "男", id: 1 },
            { name: "女", id: 2 }
          ];
          this.actionSheetShow = true;
          break;

        case 8:
          this.dateShow = true;
          break;
        case 13:
          this.actions = [
            { name: "未婚未育", id: 1 },
            { name: "已婚未育", id: 2 },
            { name: "已婚已育", id: 3 },
            { name: "离异", id: 4 }
          ];
          this.actionSheetShow = true;
          break;
        case 16:
          this.dateShow = true;
          break;
        case 22:
          this.actions = [
            { name: "本地城镇", id: 1 },
            { name: "本地农村", id: 2 },
            { name: "外地城镇", id: 3 },
            { name: "外地农村", id: 4 }
          ];
          this.actionSheetShow = true;
          break;
        case 27:
          this.actions = this.option[2];
          this.actionSheetShow = true;
          break;
        case 28:
          this.dateShow = true;
          break;
        case 32:
          this.dateShow = true;
          break;
        case 36:
          this.actions = [
            { name: "自购", id: 1 },
            { name: "租赁", id: 2 },
            { name: "亲友", id: 3 }
          ];
          this.actionSheetShow = true;
           case 41:
         this.actions = this.option[17];
          this.actionSheetShow = true;
      }
      this.currentDate = new Date();
      this.sum = e;
    },
    write(val, id) {
      switch (id) {
        case 2:
          this.formData.cn_name = val;
          break;
        case 3:
          this.formData.en_name = val;
          break;
        case 5:
          this.formData.nation = val;
          break;
        case 6:
          this.formData.native_place = val;
          break;
        case 7:
          this.formData.height_weight = val;
          break;
        case 9:
          this.formData.IDcard = val;
          break;
        case 10:
          this.formData.age = val;
          break;
        case 11:
          this.formData.face = val;
          break;
        case 12:
          this.formData.degree = val;
          break;
        case 14:
          this.formData.speciality = val;
          break;
        case 15:
          this.formData.school = val;
          break;
        case 17:
          this.formData.computer_level = val;
          break;
        case 18:
          this.formData.language_level = val;
          break;
          break;
        case 19:
          this.formData.phone = val;
          break;
        case 20:
          this.formData.email = val;
          break;
        case 21:
          this.formData.address = val;
          break;
        case 23:
          this.formData.urgent_contact = val;
          break;
        case 24:
          this.formData.contact_relation_phone = val;
          break;
        case 25:
          this.formData.contact_phone = val;
          break;
        // case 26:
        //   this.formData.friend_relation_phone = val;
        //   break;
        case 29:
          this.formData.history_health = val;
          break;
        case 30:
          this.formData.health = val;
          break;
        case 31:
          this.formData.hope_salary = val;
          break;
        case 33:
          this.formData.self_assessment = val;
          break;
        case 34:
          this.formData.answer_soft = val;
          break;
        case 35:
          this.formData.living_place = val;
          break;
        case 37:
          this.formData.certificate = val;
          break;
        case 38:
          this.formData.recommender = val;
          break;
        case 39:
          this.formData.recommender_depart = val;
          break;
        case 40:
          this.formData.recommender_phone = val;
          break;
      }
    },
    onSelect(item) {
      switch (this.sum) {
        case 0:
          this.form.data0 = item.name;
          this.formData.offer_name = item.name;

          break;
        case 1:
          this.form.data1 = item.name;
          this.formData.intended_name = item.name;
          break;
        case 4:
          this.form.data4 = item.name;
          this.formData.sex = item.id;
          break;
        case 13:
          this.form.data13 = item.name;
          this.formData.marriage = item.id;
          break;
        case 22:
          this.form.data22 = item.name;
          this.formData.household_type = item.id;
          break;
        case 27:
          this.form.data27 = item.name;
          this.formData.channel_name = item.name;
          if (item.name == "内部推荐") {
            this.isChannel = true;
          } else {
            this.isChannel = false;
            this.form.data38 = "";
            this.form.data39 = "";
            this.form.data40 = "";
            this.formData.recommender = "";
            this.formData.recommender_depart = "";
            this.formData.recommender_phone = "";
          }
          break;
        case 36:
          this.form.data36 = item.name;
          this.formData.abode_nature = item.id;
          break;
          case 41:
          this.form.data41 = item.name;
          this.formData.audition_invitation_id = item.id;
          break;
      }
      this.actionSheetShow = false;
    },
    confirmDate(type) {
      const date = parseTime(type).split(" ")[0];
      switch (this.sum) {
        case 8:
          this.form.data8 = date;
          this.formData.birth_date = date;
          break;
        case 16:
          this.form.data16 = date;
          this.formData.finish_date = date;
          break;
        case 28:
          this.form.data28 = date;
          this.formData.tj_date = date;
          break;
        case 32:
          this.form.data32 = date;
          this.formData.duty_date = date;
          break;
      }
      this.cancelDate();
    },
    cancelDate() {
      this.dateShow = false;
      this.multistageDdateShow = false;
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
        data6: "请选择入司渠道",
        data7: ""
      });
      this.formData.education.push({
        school_name: "",
        start_date: "",
        end_date: "",
        speciality: "",
        degree: "",
        way: "",
        contact_phone: ""
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
          case 7:
            this.formData.education[index].contact_phone = data;
            break;
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
          "申明：本人对以上资料的真实性负责，如有虚假，本人自愿承担任何后果！本人谨此授权公司查询有关事项！";
      } else {
        this.formData.statement = "";
      }
    },
    //下一页
    next(id) {
      this.activeName = id;
    },
    //提交
    btn() {
      const that = this;
       if (this.formData.audition_invitation_id == "") {
        this.$notify({ type: "warning", message: "请选择应聘职位邀约人" });
      } else if (this.formData.offer_name == "") {
        this.$notify({ type: "warning", message: "请选择应聘职位名称" });
      } else if (this.formData.intended_name == "") {
        this.$notify({ type: "warning", message: "请选择意向工作地点" });
      } else if (this.formData.cn_name == "") {
        this.$notify({ type: "warning", message: "请输入中文姓名" });
      }
      // else if (this.formData.en_name == "") {
      //   this.$toast("请输入英文姓名");
      // }
      else if (this.formData.sex == "") {
        this.$notify({ type: "warning", message: "请选择性别" });
      } else if (this.formData.phone == "") {
        this.$notify({ type: "warning", message: "请输入联系电话" });
      } else if (this.formData.nation == "") {
        this.$notify({ type: "warning", message: "请输入民族" });
      } else if (this.formData.native_place == "") {
        this.$notify({ type: "warning", message: "请输入籍贯" });
      }
      // else if (this.formData.height_weight == "") {
      //   this.$toast("请输入身高和体重");
      // }
      else if (this.formData.birth_date == "") {
        this.$notify({ type: "warning", message: "请选择出生时间" });
      } else if (this.formData.age == "") {
        this.$notify({ type: "warning", message: "请输入年龄" });
      } else if (this.formData.marriage == "") {
        this.$notify({ type: "warning", message: "请选择是否婚育" });
      } else if (this.formData.degree == "") {
        this.$notify({ type: "warning", message: "请输入学历" });
      }
      //  else if (this.formData.face == "") {
      //   this.$toast("请输入政治面貌");
      // }
      else if (this.formData.speciality == "") {
        this.$notify({ type: "warning", message: "请输入专业" });
      } else if (this.formData.school == "") {
        this.$notify({ type: "warning", message: "请输入毕业学校" });
      }
      //  else if (this.formData.computer_level == "") {
      //   this.$toast("请输入计算机水平");
      // }
      //  else if (this.formData.language_level == "") {
      //   this.$toast("请输入外语水平");
      // }
      else if (this.formData.IDcard == "") {
        this.$notify({ type: "warning", message: "请输入身份证号码" });
      } else if (this.formData.email == "") {
        this.$notify({ type: "warning", message: "请输入邮箱" });
      }
      //  else if (this.formData.address == "") {
      //   this.$toast("请输入身份证地址");
      // }
      //  else if (this.formData.household_type == "") {
      //   this.$toast("请选择户籍类型");
      // }
      else if (this.formData.living_place == "") {
        this.$notify({ type: "warning", message: "请输入现居地" });
      } else if (this.formData.abode_nature == "") {
        this.$notify({ type: "warning", message: "请选择现住所性质" });
      } else if (this.formData.urgent_contact == "") {
        this.$notify({ type: "warning", message: "请输入紧急联系人" });
      } else if (this.formData.contact_relation_phone == "") {
        this.$notify({ type: "warning", message: "请输入紧急联系人关系" });
      } else if (this.formData.contact_phone == "") {
        this.$toast("请输入紧急联系人电话");
      }
      //else if (this.formData.friend_relation_phone == "") {
      //   this.$toast("请输入本司任职亲友关系/电话");
      // }
      else if (this.formData.channel_name == "") {
        this.$notify({ type: "warning", message: "请选择入司渠道" });
      }
      //  else if (this.formData.tj_date == "") {
      //   this.$toast("请选择最近体检时间");
      // } else if (this.formData.history_health == "") {
      //   this.$toast("请输入曾患何种疾病");
      // }
      else if (this.formData.health == "") {
        this.$notify({ type: "warning", message: "请输入健康状况" });
      } else if (this.formData.hope_salary == "") {
        this.$notify({ type: "warning", message: "请输入期望薪资" });
      }
      // else if (this.formData.certificate == "") {
      //   this.$toast("请输入获得证书");
      // }
      else if (this.formData.duty_date == "") {
        this.$notify({ type: "warning", message: "请选择最快到岗时间" });
      } else if (this.formData.self_assessment == "") {
        this.$notify({ type: "warning", message: "请输入自我评价" });
      } else if (this.formData.answer_soft == "") {
        this.$notify({ type: "warning", message: "请输入你最看重排序" });
      } else if (this.formData.education == []) {
        this.$notify({ type: "warning", message: "请填写教育经历信息" });
      } else if (this.formData.work == []) {
        this.$notify({ type: "warning", message: "请填写工作经历信息" });
      } else if (this.formData.family == []) {
        this.$notify({
          type: "warning",
          message: "请填写家庭和社会关系状况信息"
        });
      }
      // else if (this.formData.photo == "") {
      //   this.$toast("请上传图片");
      // }
      else if (!this.statementRadio) {
        this.$notify({ type: "warning", message: "请勾选责任声明" });
      } else {
        let noStop = true;
        this.formData.education.forEach(result => {
          if (result.school_name == "") {
            this.$notify({
              type: "warning",
              message: "教育经历信息-请填写学校名称"
            });
            noStop = false;
          } else if (result.start_date == "") {
            this.$notify({
              type: "warning",
              message: "教育经历信息-请选择开始时间"
            });
            noStop = false;
          } else if (result.end_date == "") {
            this.$notify({
              type: "warning",
              message: "教育经历信息-请选择结束时间"
            });
            noStop = false;
          } else if (result.speciality == "") {
            this.$notify({
              type: "warning",
              message: "教育经历信息-请填写学历"
            });
            noStop = false;
          } else if (result.way == "") {
            this.$notify({
              type: "warning",
              message: "教育经历信息-请选择取得方式"
            });
            noStop = false;
          }
          // else if (result.contact_phone == "") {
          //   this.$notify({
          //     type: "warning",
          //     message: "请填写教育经历信息-证明人/电话"
          //   });
          //   noStop = false;
          // }
        });
        this.formData.work.forEach(result => {
          if (result.company_name == "") {
            this.$notify({
              type: "warning",
              message: "请填写工作经历信息-请填写公司名称"
            });
            noStop = false;
          } else if (result.start_date == "") {
            this.$notify({
              type: "warning",
              message: "工作经历信息-请选择开始时间"
            });
            noStop = false;
          } else if (result.end_date == "") {
            this.$notify({
              type: "warning",
              message: "工作经历信息-请选择结束时间"
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
              message: "工作经历信息-请填写薪资"
            });
            noStop = false;
          } else if (result.leave_reason == "") {
            this.$notify({
              type: "warning",
              message: "工作经历信息-请填写离职原因"
            });
            noStop = false;
          } else if (result.contact_phone == "") {
            this.$notify({
              type: "warning",
              message: "工作经历信息-请填写证明人及电话"
            });
            noStop = false;
          }
        });
        // this.formData.family.forEach(result => {
        //   if (result.name == "") {
        //     this.$notify({
        //       type: "warning",
        //       message: "请填写家庭关系信息-姓名"
        //     });
        //     noStop = false;
        //   } else if (result.relation == "") {
        //     this.$notify({
        //       type: "warning",
        //       message: "请填写家庭关系信息-关系"
        //     });
        //     noStop = false;
        //   } else if (result.tel == "") {
        //     this.$notify({
        //       type: "warning",
        //       message: "请填写家庭关系信息-电话"
        //     });
        //     noStop = false;
        //   } else if (result.work == "") {
        //     this.$notify({
        //       type: "warning",
        //       message: "请填写家庭关系信息-职业"
        //     });
        //     noStop = false;
        //   } else if (result.company == "") {
        //     this.$notify({
        //       type: "warning",
        //       message: "请填写家庭关系信息-单位"
        //     });
        //     noStop = false;
        //   }
        // });
        if (this.isChannel) {
          if (this.formData.recommender == "") {
            this.$notify({
              type: "warning",
              message: "请输入推荐人"
            });
            noStop = false;
          } else if (this.formData.recommender_depart == "") {
            this.$notify({
              type: "warning",
              message: "请输入推荐人部门"
            });
            noStop = false;
          } else if (this.formData.recommender_phone == "") {
            this.$notify({
              type: "warning",
              message: "请输入推荐人联系方式"
            });
            noStop = false;
          }
        }
        if (noStop) {
          this.$refs.esign
            .generate()
            .then(res => {
              let bool = true;
              // if (this.evaluating.item1 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请输入面试测评第一题"
              //   });
              //   bool = false;
              // }else if (this.evaluating.item2 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请选择面试测评第二题"
              //   });
              //   bool = false;
              // }else if (this.evaluating.item3 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请选择面试测评第三题"
              //   });
              //   bool = false;
              // }else if (this.evaluating.item4 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请选择面试测评第四题"
              //   });
              //   bool = false;
              // }else if (this.evaluating.item5 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请填写面试测评第五题"
              //   });
              //   bool = false;
              // }else if (this.evaluating.item6 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请填写面试测评第六题"
              //   });
              //   bool = false;
              // }else if (this.evaluating.item7 == "") {
              //   this.$notify({
              //     type: "warning",
              //     message: "请填写面试测评第七题"
              //   });
              //   bool = false;
              // }
              if (bool) {
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
                      audition_invitation:this.form.data41,
                      audition_invitation_id:this.formData.audition_invitation_id,
                      offer_name: this.formData.offer_name,
                      intended_name: this.formData.intended_name,
                      cn_name: this.formData.cn_name,
                      en_name: this.formData.en_name,
                      sex: this.formData.sex,
                      phone: this.formData.phone,
                      nation: this.formData.nation,
                      native_place: this.formData.native_place,
                      height_weight: this.formData.height_weight,
                      birth_date: this.formData.birth_date,
                      age: this.formData.age,
                      marriage: this.formData.marriage,
                      degree: this.formData.degree,
                      face: this.formData.face,
                      speciality: this.formData.speciality,
                      school: this.formData.school,
                      finish_date: this.formData.finish_date,
                      computer_level: this.formData.computer_level,
                      language_level: this.formData.language_level,
                      IDcard: this.formData.IDcard,
                      email: this.formData.email,
                      answers: JSON.stringify(this.formData.answers),
                      address: this.formData.address,
                      photo: this.formData.photo,
                      household_type: this.formData.household_type,
                      urgent_contact: this.formData.urgent_contact,
                      contact_relation_phone: this.formData
                        .contact_relation_phone,
                      contact_phone: this.formData.contact_phone,
                      // friend: this.formData.friend,
                      living_place: this.formData.living_place,
                      abode_nature: this.formData.abode_nature,
                      autograph: this.formData.autograph,
                      // friend_relation_phone: this.formData
                      //   .friend_relation_phone,
                      //  face_answers:JSON.stringify(this.evaluating),
                      channel_name: this.formData.channel_name,
                      certificate: this.formData.certificate,
                      tj_date: this.formData.tj_date,
                      history_health: this.formData.history_health,
                      health: this.formData.health,
                      hope_salary: this.formData.hope_salary,
                      duty_date: this.formData.duty_date,
                      answer_soft: this.formData.answer_soft,
                      self_assessment: this.formData.self_assessment,
                      statement: this.formData.statement,
                      education: JSON.stringify(this.formData.education),
                      family: JSON.stringify(this.formData.family),
                      work: JSON.stringify(this.formData.work)
                    };
                    //判断是否
                    if (this.isChannel) {
                      data.recommender = this.formData.recommender;
                      data.recommender_depart = this.formData.recommender_depart;
                      data.recommender_phone = this.formData.recommender_phone;
                    }
                    this.$axios
                      .post("/api/interview/applyInterviewInfo", data)
                      .then(result => {
                        this.loading = false;
                        if (result.data.code == 0) {
                          this.$dialog
                            .alert({
                              message: result.data.msg
                            })
                            .then(() => {
                              // that.$router.push("login");
                              this.showMain = false;
                              // this.$dialog
                              //   .alert({
                              //     message: result.data.msg
                              //   })
                              //   .then(() => {
                              // this.$router.push("/login");
                              educationForm = [
                                {
                                  data1: "",
                                  data2: "开始时间",
                                  data3: "结束时间",
                                  data4: "",
                                  data5: "",
                                  data6: "请选择入司渠道",
                                  data7: ""
                                }
                              ];
                              workForm = [
                                {
                                  data1: "",
                                  data2: "开始时间",
                                  data3: "结束时间",
                                  data4: "",
                                  data5: "",
                                  data6: "",
                                  data7: ""
                                }
                              ];
                              familyForm = [
                                {
                                  data1: "",
                                  data2: "",
                                  data3: "",
                                  data4: "",
                                  data5: ""
                                }
                              ];
                              this.formData = {
                                offer_name: "",
                                intended_name: "",
                                cn_name: "",
                                en_name: "",
                                sex: "",
                                nation: "",
                                native_place: "",
                                height_weight: "",
                                birth_date: "",
                                age: "",
                                marriage: "",
                                degree: "",
                                face: "",
                                speciality: "",
                                school: "",
                                finish_date: "",
                                computer_level: "",
                                language_level: "",
                                IDcard: "",
                                email: "",
                                address: "",
                                household_type: "",
                                urgent_contact: "",
                                contact_relation_phone: "",
                                // friend: "",
                                // friend_relation_phone: "",
                                channel_name: "",
                                certificate: "",
                                tj_date: "",
                                history_health: "",
                                health: "",
                                hope_salary: "",
                                duty_date: "",
                                self_assessment: "",
                                phone: "",
                                photo: "",
                                autograph: "",
                                living_place: "",
                                abode_nature: "",
                                statement: "",
                                answer_soft: "",
                                answers: [],
                                education: [
                                  {
                                    school_name: "",
                                    start_date: "",
                                    end_date: "",
                                    speciality: "",
                                    degree: "",
                                    way: "",
                                    contact_phone: ""
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
                                ]
                              };
                            });
                          // });
                        } else {
                          this.$notify({
                            type: "warning",
                            message: result.data.msg
                          });
                        }
                      });
                  });
              }
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
  /* background: #ededed; */
  padding-bottom: 20px;
}
.title {
  width: 100%;
  height: 100%;
  position: relative;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 100; */
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
  margin-bottom: 10px;
  /* margin-top: 250px; */
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
.answerList {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
}
.answerList .item {
  width: 33.333%;
  height: 20px;
  line-height: 25px;
  color: #999;
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
.tab {
  display: flex;
  height: 40px;
  background: #fff;
  /* position: fixed;
  top: 195px;
  left: 0;
  z-index: 100; */
  width: 100%;
}
.tab .item {
  width: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: #666;
}
.tab .item.active {
  background: #409eff;
  color: #fff;
  font-weight: bold;
}
.sudoku .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid #ebedf0;
}
.sudoku .item:last-child {
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
  width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: space-between;
}
.statement p {
  width: 270px;
  margin-right: 10px;
  color: #999;
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
.mainMsg {
  text-align: center;
  margin-top: 100px;
  font-size: 20px;
  color: #999;
}
.van-tabs__track {
  margin-bottom: 10px;
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
.evaluatingTitle {
  line-height: 25px;
  margin-top: 10px;
  font-weight: bold;
}
.evaluatingCenter .radio {
  margin-top: 10px;
}
.oneList .oneItem {
  margin-left: 30px;
  line-height: 30px;
}
</style>