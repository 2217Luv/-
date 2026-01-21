<template>
	<div class="b1">
		<div class="head">
			<Head3></Head3>
		</div>
		<div class="table">
			<el-table :data="stus" height="730" border style="width: 100%" :row-style="{height: '5px'}">
				<el-table-column prop="xh_id" label="学号" width="180"></el-table-column>
				<el-table-column prop="xm" label="姓名" width="180"></el-table-column>
				<el-table-column prop="" label="操作" width="300">
					<template slot-scope="scope">
						<el-radio v-model="scope.row.radio" label="1">正常</el-radio>
						<el-radio v-model="scope.row.radio" label="2">请假</el-radio>
						<el-radio v-model="scope.row.radio" label="3">旷课</el-radio>
					</template>
				</el-table-column>
				<el-table-column prop="jgmc" label="学院" width="180"></el-table-column>
				<el-table-column prop="bjmc" label="班级" width="180"></el-table-column>
				<el-table-column prop="" label="备注"></el-table-column>
			</el-table>
		</div>
		<div class="but">
			<button type="primary" @click="submitForm">提交</button>
		</div>
	</div>
</template>

<script>
	import Head3 from "../components/Head3.vue";
	export default {
		data() {
			return {
				stus: [],
			};
		},
		created() {
			this.getstus();
		},
		methods: {
			getstus() {
				var that = this;
				this.$axios({
					url: this.$urls.STUS_URL,
					method: "get",
				}).then(function(res) {
					console.log(res);
					that.stus = res.data.map((student) => ({
						...student,
						radio: "1", // 添加radio属性并设置初始值为1
					}));
				});
			},
			submitForm() {
				// 提取学号、姓名和操作情况
				// submitForm 方法通过使用 map 方法遍历 this.stus 数组，并创建一个新的数组 dataToPrint
				// 其中包含每个学生的学号、姓名和操作情况。然后，使用 console.log() 函数将 dataToPrint 
				// 打印到浏览器的开发者工具控制台中。
				const dataToPrint = this.stus.map(item => {
					return {
						xh_id: item.xh_id,
						xm: item.xm,
						radio: item.radio
					};
				});

				// 打印数据
				console.log(dataToPrint);
				// 在这里编写提交操作的逻辑
				// 可以将数据发送到服务器或执行其他操作
				const h = this.$createElement;

				this.$notify({
					title: '',
					message: h('i', {
						style: 'color: teal'
					}, '提交成功')
				});
			}
		},
		components: {
			Head3,
		},
	};
</script>

<style scoped="scoped">
	.but {
		margin-top: 10px;
		text-align: center;
		width: 100%;
	}

	.but button {
		border-radius: 10px;
		height: 40px;
		color: #ffffff;
		border: 2px solid #eee;
		background-color: #336699;
		width: 100px;
		font-size: 20px;
	}
</style>