<template>
	<div class="b1">
		<div class="head">
			<Head2></Head2>
		</div>
		<div class="b2">
			<div class="info">
				<div class="id">
					学号: 2021131856
				</div>
				<div class="xm">
					姓名: 张昊天
				</div>
				<div class="img">
					学号二维码:
					<div class="idtitle"><img class="showimg" :src="this.url+this.userID+'&amp'" /></div>
				</div>
			</div>
			<div class="b3">
				<el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
					<el-tab-pane label="基本信息" name="1" style="margin-top: 15px; display: flex;">
						<myinfo></myinfo>
					</el-tab-pane>
					<el-tab-pane label="学籍信息" name="2" lazy>学籍信息</el-tab-pane>
					<el-tab-pane label="其他信息" name="3" lazy>其他信息</el-tab-pane>
					<el-tab-pane label="联系方式" name="4" lazy>联系方式</el-tab-pane>
					<el-tab-pane label="家庭成员" name="5" lazy>家庭成员</el-tab-pane>
					<el-tab-pane label="奖惩信息" name="6" lazy>奖惩信息</el-tab-pane>
					<el-tab-pane label="成绩信息" name="7" lazy>
						<cj></cj>
					</el-tab-pane>
					<el-tab-pane label="选课信息" name="8">
						<el-table :data="tableData1" height="400" border style="width: 100%">
							<el-table-column prop="title" label="学年"></el-table-column>
							<el-table-column prop="xq" label="学期"></el-table-column>
							<el-table-column prop="courseid" label="课程名称"></el-table-column>
							<el-table-column prop="course" label="开课学院">
							</el-table-column>
							<el-table-column prop="xf" label="课程类别">
							</el-table-column>
							<el-table-column prop="score" label="学分">
							</el-table-column>
							<el-table-column prop="exam" label="教学班名称">
							</el-table-column>
							<el-table-column prop="jd" label="教师">
							</el-table-column>
							<el-table-column prop="kcxz" label="上课时间">
							</el-table-column>
							<el-table-column prop="" label="上课地点">
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="培养方案" name="9" lazy>培养方案</el-tab-pane>
					<el-tab-pane label="学籍异动" name="10" lazy>学籍异动</el-tab-pane>
					<el-tab-pane label="学习简历" name="11" lazy>学习简历</el-tab-pane>
				</el-tabs>
			</div>

		</div>
	</div>
</template>

<script>
	import Head2 from "../components/Head2.vue"
	import myinfo from "../components/myinfo.vue"
	import cj from "../components/cj.vue"
	export default {
		data() {
			return {
				cj: [],
				url: "http://api.qrserver.com/v1/create-qr-code/?data=",
				activeName: '1',
				userID: "2021131856",
				tableData1: [{
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "2",
					"courseid": "新青年-学党史",
					"course": "素质教育部",
					"xf": "公共课",
					"score": "1.0",
					"exam": "新青年-学党史-0001",
					"jd": "杨晔	",
					"kcxz": "公共必修课"
				}]
			}
		},
		methods: {
			handleClick(tab, event) {
				// console.log(tab, event);
			}
		},
		components: {
			Head2,
			myinfo,
			cj
		},
	}
</script>

<style scoped="scoped">
	.b1 {
		height: 840px;
		background-color: #eee;
	}

	.showimg {
		padding-left: 5px;
		margin: 0 auto;
		width: 100px;
		height: 100px;
	}

	.tab {
		margin: 0 auto;
		width: 95%;
		height: 500px;
	}

	.b2 {
		height: 720px;
		width: 90%;
		/* border: 1px solid black; */
		background-color: #ffffff;
		margin: 0 auto;
		margin-top: 30px;
	}

	.info {
		width: 100%;
		display: flex;
	}

	.id {
		padding-top: 40px;
		font-size: 20px;
		margin: 0 auto;
	}

	.xm {
		padding-top: 40px;
		font-size: 20px;
		margin: 0 auto;
	}

	.img {
		display: flex;
		padding-top: 40px;
		font-size: 20px;
		margin: 0 auto;
	}

	.b3 {
		margin: 0 auto;
		margin-top: 55px;
	}

	.title1 {
		margin: 0 auto;
		height: 100%;
		width: 400px;
		/* border: 1px solid black; */
	}

	.title1-1 {
		margin-bottom: 25px;
		/* height: 70px; */
		/* border: 1px solid red; */
	}

	.title1-2 {
		width: 140px;
		/* padding-left: 15px; */
		text-align: right;
	}

	.title1-2 P {
		font-weight: 600;
	}

	.title1-3 {
		padding-left: 32px;
		text-align: left;
	}
</style>