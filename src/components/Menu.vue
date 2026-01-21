<template>
	<div class="menu">
		<el-dropdown @command="handleCommand" trigger="click">
			<span class="el-dropdown-link">
				报名申请<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="1">学籍异动申请</el-dropdown-item>
				<el-dropdown-item command="2">重修报名</el-dropdown-item>
				<el-dropdown-item command="3">考级项目报名</el-dropdown-item>
				<el-dropdown-item command="4">教学项目报名</el-dropdown-item>
				<el-dropdown-item command="5">毕业补考报名</el-dropdown-item>
				<el-dropdown-item command="6">结业换证报名</el-dropdown-item>
				<el-dropdown-item command="7">学生资格证书申请</el-dropdown-item>
				<el-dropdown-item command="8">校外成绩认定为校内学分</el-dropdown-item>
				<el-dropdown-item command="9">学分兑换</el-dropdown-item>
				<!-- <el-dropdown-item command="d" disabled>教学项目报名</el-dropdown-item> -->
				<!-- <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown @command="handleCommand" trigger="click">
			<span class="el-dropdown-link">
				信息维护<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="10">学生个人信息维护</el-dropdown-item>
				<!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item> -->
				<!-- <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown @command="handleCommand" trigger="click">
			<span class="el-dropdown-link">
				选课<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="11">自主选课</el-dropdown-item>
				<el-dropdown-item command="12">筛除结果查询</el-dropdown-item>
				<!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item> -->
				<!-- <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown @command="handleCommand" trigger="click">
			<span class="el-dropdown-link">
				信息查询<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="13">查询个人信息</el-dropdown-item>
				<el-dropdown-item command="14">学籍预警查询</el-dropdown-item>
				<el-dropdown-item command="15">毕业审核结果查询</el-dropdown-item>
				<el-dropdown-item command="16">班级课表查询打印</el-dropdown-item>
				<el-dropdown-item command="17">学生课表查询</el-dropdown-item>
				<el-dropdown-item command="18">学生选课情况确认</el-dropdown-item>
				<el-dropdown-item command="19">教学点名情况查询</el-dropdown-item>
				<el-dropdown-item command="20">选课名单查询</el-dropdown-item>
				<el-dropdown-item command="21">学生成绩查询</el-dropdown-item>
				<el-dropdown-item command="22">考试信息查询</el-dropdown-item>
				<el-dropdown-item command="23">结业换证考试查询</el-dropdown-item>
				<el-dropdown-item command="24">教材明细查询</el-dropdown-item>
				<el-dropdown-item command="25">学生学业情况查询</el-dropdown-item>
				<el-dropdown-item command="26">学生成绩总表打印</el-dropdown-item>
				<el-dropdown-item command="27">学生课表查询 (按周次)</el-dropdown-item>
				<!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item> -->
				<!-- <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown @command="handleCommand" trigger="click">
			<span class="el-dropdown-link">
				教学评价<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="28">学生评价</el-dropdown-item>
				<el-dropdown-item command="29">问卷调查</el-dropdown-item>
				<el-dropdown-item command="30">教学信息反馈</el-dropdown-item>
				<!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item> -->
				<!-- <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown @command="handleCommand" trigger="click">
			<span class="el-dropdown-link">
				毕业设计(论文)<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="31">学生选题</el-dropdown-item>
				<el-dropdown-item command="32">题目修改申请</el-dropdown-item>
				<el-dropdown-item command="33">学生过程资料</el-dropdown-item>
				<el-dropdown-item command="34">答辩信息查看</el-dropdown-item>
				<el-dropdown-item command="35">成绩查看</el-dropdown-item>
				<el-dropdown-item command="36">毕业设计文件资料</el-dropdown-item>
				<!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item> -->
				<!-- <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		methods: {
			handleCommand(command) {
				if (command == "13") {
					this.$router.push({
						path: "/information"
					})
				}
			}
		},
	}
</script>

<style scoped="scoped">
	.menu {
		background-color: #ffffff;
		margin: 0 auto;
	}

	.el-dropdown:hover {
		background-color: #eee;
	}

	.el-dropdown {
		padding: 10px 30px;
	}

	.el-dropdown-link {
		cursor: pointer;
		font-size: 14px;
	}

	.el-icon-arrow-down {
		font-size: 14px;
	}
</style>