<template>
	<div>
		<el-table :data="tableData" height="400" border style="width: 100%">
			<el-table-column prop="title" label="学年"></el-table-column>
			<el-table-column prop="xq" label="学期"></el-table-column>
			<el-table-column prop="courseid" label="课程代码"></el-table-column>
			<el-table-column prop="course" label="课程名称"></el-table-column>
			<el-table-column prop="xf" label="学分"></el-table-column>
			<el-table-column prop="score" label="成绩"></el-table-column>
			<el-table-column prop="exam" label="考试性质"></el-table-column>
			<el-table-column prop="jd" label="绩点"></el-table-column>
			<el-table-column prop="kcxz" label="课程性质"></el-table-column>
			<el-table-column prop="" label="成绩备注"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cj: [],								
				tableData: [{
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}, {
					"title": "2021-2022",
					"xq": "1",
					"courseid": "000103Z1",
					"course": "大学生心理健康教育(上)",
					"xf": "1.0",
					"score": "89",
					"exam": "正常考试",
					"jd": "3.80	",
					"kcxz": "公共必修课"
				}]
			}
		},
		created() {
			this.getcj()
		},
		methods: {
			getcj() {
				var that = this;
				this.$axios({
					url: this.$urls.CJ_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.cj = res.data
				})
			},
			// tokb(index) {
			// 	this.$router.push({
			// 		// path: '/download',
			// 		let path = window.location.protocol + '//' + url,
			// 		window.location.href = path,
			// 	})
			// },
			gotDownLoadPage(index) {
				this.$router.push({
					path: '/download',
					query: this.file[index]
				})
			}
		},
	}
</script>

<style>
</style>