<template>
	<div class="logincon">
		<div class="titlecon">用户登录</div>
		<div class="content">
			<div class="content_input">
				<div>
					<el-input placeholder="请输入学号" v-model="userID" prefix-icon="el-icon-user"></el-input>
				</div>
			</div>
			<div class="content_input">
				<div>
					<el-input type="password" placeholder="密码" v-model="passwordID" prefix-icon="el-icon-lock">
					</el-input>
				</div>
			</div>
		</div>
		<div class="findpassword">
			<router-link to="/findPassword">忘记密码?</router-link>
		</div>
		<div>
			<el-button type="primary" @click="checkIslogin(userID)">登录</el-button>
		</div>
		<div class="info">
			<span>
				1、用户名为工号，初始密码为111111！<br />
				2、因未登记邮箱信息无法找回密码的请与管理员联系补充邮箱信息！
			</span>
		</div>
		<div class="warning">
			<el-alert :closable="false" :title="infoTitle" :type="info"></el-alert>
		</div>
		<router-link to="/home"></router-link>
	</div>
</template>

<script>
	import eventBus from '../EventBus.js'
	export default {
		data() {
			return {
				xm: "",
				userID: "", //输入框UID
				find_userID: "", //需要找回密码的用户名=
				passwordID: "", //输入框psword
				info: "success", //标志提示框类型
				infoTitle: "登录成功!", //提示框的标题
				stus: [{
					"xh_id": "2019130665",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC8F7FB5E055F8163EA42B0D",
					"xh": "2019130665",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "陈加沐",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2019130903",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC907FB5E055F8163EA42B0D",
					"xh": "2019130903",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "韦明宏",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130032",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC917FB5E055F8163EA42B0D",
					"xh": "2021130032",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张艺凡",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130079",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC927FB5E055F8163EA42B0D",
					"xh": "2021130079",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "王志豪",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130157",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC937FB5E055F8163EA42B0D",
					"xh": "2021130157",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张楷雨",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130217",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC947FB5E055F8163EA42B0D",
					"xh": "2021130217",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "厉建阳",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130261",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC957FB5E055F8163EA42B0D",
					"xh": "2021130261",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "孙瑜",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130538",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC967FB5E055F8163EA42B0D",
					"xh": "2021130538",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "刘超振",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130668",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC977FB5E055F8163EA42B0D",
					"xh": "2021130668",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "涂学华",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130680",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC987FB5E055F8163EA42B0D",
					"xh": "2021130680",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "赖运泽",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130690",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC997FB5E055F8163EA42B0D",
					"xh": "2021130690",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "李思孟",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130702",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC9A7FB5E055F8163EA42B0D",
					"xh": "2021130702",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "史飞",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021130721",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC9B7FB5E055F8163EA42B0D",
					"xh": "2021130721",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "何文新",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131485",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC9C7FB5E055F8163EA42B0D",
					"xh": "2021131485",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "杜飞祥",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131532",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC9D7FB5E055F8163EA42B0D",
					"xh": "2021131532",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张旭彤",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131666",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC9E7FB5E055F8163EA42B0D",
					"xh": "2021131666",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "谭小贤",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131829",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DAC9F7FB5E055F8163EA42B0D",
					"xh": "2021131829",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "王天驹",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131834",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA07FB5E055F8163EA42B0D",
					"xh": "2021131834",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "王斌",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "02",
					"password": "111111"
				}, {
					"xh_id": "2021131842",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA17FB5E055F8163EA42B0D",
					"xh": "2021131842",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "吕瑞江",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131843",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA27FB5E055F8163EA42B0D",
					"xh": "2021131843",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "任博文",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "02",
					"password": "111111"
				}, {
					"xh_id": "2021131844",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA37FB5E055F8163EA42B0D",
					"xh": "2021131844",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "刘晏宁",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131847",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA47FB5E055F8163EA42B0D",
					"xh": "2021131847",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "李慧",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131855",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA57FB5E055F8163EA42B0D",
					"xh": "2021131855",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张宇鑫",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131856",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA67FB5E055F8163EA42B0D",
					"xh": "2021131856",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张昊天",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131889",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA77FB5E055F8163EA42B0D",
					"xh": "2021131889",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "马志强",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131896",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA87FB5E055F8163EA42B0D",
					"xh": "2021131896",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "吴振江",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131898",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACA97FB5E055F8163EA42B0D",
					"xh": "2021131898",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "范胜杰",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131903",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACAA7FB5E055F8163EA42B0D",
					"xh": "2021131903",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "徐杰",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131942",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACAB7FB5E055F8163EA42B0D",
					"xh": "2021131942",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "安正宇含",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131945",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACAC7FB5E055F8163EA42B0D",
					"xh": "2021131945",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "于浩添",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131953",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACAD7FB5E055F8163EA42B0D",
					"xh": "2021131953",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "王焕钊",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131957",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACAE7FB5E055F8163EA42B0D",
					"xh": "2021131957",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "刘勇涛",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131960",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACAF7FB5E055F8163EA42B0D",
					"xh": "2021131960",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "孙凯",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131964",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB07FB5E055F8163EA42B0D",
					"xh": "2021131964",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "杜忠阳",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131967",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB17FB5E055F8163EA42B0D",
					"xh": "2021131967",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "李佳钰",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131975",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB27FB5E055F8163EA42B0D",
					"xh": "2021131975",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张坤",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131979",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB37FB5E055F8163EA42B0D",
					"xh": "2021131979",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "金鑫恒",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021131983",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB47FB5E055F8163EA42B0D",
					"xh": "2021131983",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "席震远",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210007",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB57FB5E055F8163EA42B0D",
					"xh": "2021210007",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "王娜",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210028",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB67FB5E055F8163EA42B0D",
					"xh": "2021210028",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "李晓晓",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210057",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "2",
					"jgmc": "计算机与通信学院",
					"xb": "女",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB77FB5E055F8163EA42B0D",
					"xh": "2021210057",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "蒋文",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210068",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB87FB5E055F8163EA42B0D",
					"xh": "2021210068",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "王伟",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210127",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACB97FB5E055F8163EA42B0D",
					"xh": "2021210127",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "谷从伟",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210135",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACBA7FB5E055F8163EA42B0D",
					"xh": "2021210135",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "张宝",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}, {
					"xh_id": "2021210197",
					"bh_id": "CA70D9BF6A87EAADE055F8163EA42B0D",
					"njmc": "2021",
					"xbm": "1",
					"jgmc": "计算机与通信学院",
					"xb": "男",
					"zymc": "软件技术（WEB前端）",
					"jxdm_id": "F5CC935DACBB7FB5E055F8163EA42B0D",
					"xh": "2021210197",
					"bjmc": "319211",
					"qdfs": "教师录入",
					"xm": "薛大卫",
					"njdm_id": "2021",
					"zyh_id": "0319",
					"jg_id": "03",
					"dmlbm": "01",
					"password": "111111"
				}]
			}
		},
		methods: {
			checkIslogin(userID) {
				var vue_this = this;
				var warn = document.getElementsByClassName("warning");
				//如果为空,提示输入账号密码
				if (this.userID == "" || this.passwordID == "") {
					this.info = "error";
					this.infoTitle = "请输入账号和密码!"
					warn[0].style.display = "block"
				} else {
					var user = this.stus.find((stu) => stu.xh_id === this.userID);
					if (user == undefined) {
						this.info = "error";
						this.infoTitle = "账号不存在!"
						warn[0].style.display = "block"
					} else {
						var pswd = this.stus.find((stu) => stu.password === this.passwordID && stu.xh_id === this.userID);
						console.log(pswd);
						if (pswd == undefined) {
							this.info = "error";
							this.infoTitle = "密码错误!"
							warn[0].style.display = "block"
						} else {
							localStorage.setItem("userinfo",JSON.stringify({
								userID: this.userID,
								passwordID: this.passwordID,
							}))
							var second = 3;
							setInterval(function() {
								vue_this.infoTitle = "登录成功!" + second + "秒后跳转";
								second--;
							}, 1000)
							// this.infoTitle = "登录成功! 3秒后跳转";
							this.info = "success";
							warn[0].style.display = "block"
							setTimeout(function() {
								// window.location.href="/index.html#/myblog?Uid="+userID;
								// vue_this.$router.push('/myblog')
								vue_this.$router.push({
									path: '/home',
									query: {
										uid: JSON.stringify(pswd)
									}
								});
								localStorage.setItem("uid", pswd);
							}, 4000)
						}
					}
				}
			},
			//查找用户名所对应的对象
			//查找成功返回密码,否则返回-1
			FindPassword2() {
				var user_Object = this.stus.find((stu) => stu.xh_id === this.find_userID);
				if (user_Object == undefined) {
					return -1;
				} else {
					return user_Object
				}
			},
		},
		created() {
			//接收事件（消息）的组件。$on 监听事件
			eventBus.$on('sendUser', (user) => {
				this.find_userID = user;
				var password = this.FindPassword2();
				//发送事件（消息）
				eventBus.$emit('sendPassword', password)
				console.log(password);
			})
		}
	}
</script>

<style scoped="scoped">
	.logincon {
		/* margin-top: 5px; */
		margin: 5px auto;
		margin-right: 10px;
		height: 464px;
		background-color: #FFFFFF;
	}

	.titlecon {
		padding: 25px 20px;
		font-weight: 600;
		margin-top: 3px;
	}

	.con1 {
		display: flex;
		align-items: center;
		margin-top: 20px;
	}

	.content {
		margin: 0px 40px;
	}

	.el-input {
		width: 300px;
	}

	.el-button {
		width: 300px;
		margin: 0px 40px;
	}

	.findpassword {
		text-align: right;
		margin: 10px 0px;
		margin-right: 40px;
	}

	.findpassword>a {
		text-decoration: none;
		color: #336699;
	}

	.info {
		width: 280px;
		color: #a94442;
		background-color: #f2dede;
		border-color: #ebccd1;
		border-radius: 2px;
		font-size: 13px;
		padding: 20px 10px;
		margin: 0px 40px;
		margin-top: 10px;
	}

	.warning {
		display: none;
		width: 280px;
		margin: 0px 40px;
		margin-top: 10px;
	}

	.el-icon-user {
		width: 100px;
	}
</style>