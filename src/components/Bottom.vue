<template>
	<div class="but">
		<div class="but1">
			<el-card class="box-card" style="overflow: auto;">
				<div slot="header" class="clearfix">
					<span>消息</span>
					<el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
				</div>
				<div v-for="(message,index) in message" :key="index" class="text" @click="showDetails(message)">
					<div class="text3">
						{{message.title}}
					</div>
					<div class="text4">
						{{message.piblishData}}
					</div>
				</div>
			</el-card>
		</div>
		<div class="but2">
			<!-- <el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span>成绩</span>
			    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
			  </div>
			  <div v-for="o in 4" :key="o" class="text item">
			    {{'列表内容 ' + o }}
			  </div>
			</el-card> -->
			<el-tabs type="border-card" class="border-card">
				<el-tab-pane label="成绩">
					<div v-for="(tableData,index) in tableData" :key="index" class="text">
						<div class="text1">
							{{tableData.course}}
						</div>
						<div class="text2">
							{{tableData.score}}
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="考试">考试</el-tab-pane>
			</el-tabs>
		</div>

		<el-dialog :visible.sync="mess" class="dialog">
			<div v-if="selectedMessage" class="popup">
				<div class="popup-title">{{ selectedMessage.title }}</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		Message
	} from 'element-ui';
	export default {
		data() {
			return {
				mess: false,
				selectedMessage: null,
				message: [],
				tableData: [{
					score: '90',
					course: '2022-2023-1-公共必修课-人文基础',
				}, {
					score: '90',
					course: '2022-2023-1-公共选修课-创新中国',
				}, {
					score: '80',
					course: '2022-2023-1-公共选修课-应用数学A3',
				}, {
					score: '70',
					course: '2022-2023-1-公共必修课-形势与政策Ⅲ',
				}]
			}
		},
		created() {
			this.getmessage()
		},
		methods: {
			showDetails(message) {
				this.selectedMessage = message;
				this.mess = true
			},
			getmessage() {
				var that = this;
				this.$axios({
					url: this.$urls.MESSAGE_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.message = res.data
				})
			},
		},
	}
</script>

<style scoped="scoped">
	.but {
		display: flex;
	}
	
	.dialog{
		margin-top: 100px;
	}
	
	.popup-title{
		font-size: 20px;
	}

	.text {
		display: flex;
		/* margin: 1px 1px 15px 1px; */
		color: #71717;
		font-size: 14px;
	}

	.text1 {
		width: 2900px;
		/* 容器宽度 */
		text-overflow: ellipsis;
		/* 超出部分以省略号显示 */
		padding-top: 6px;
		align-items: center;
		height: 27px;
	}

	.text2 {
		padding-left: 200px;
		padding-top: 6px;
		float: right;
		width: 260px;
		align-items: center;
		height: 27px;
	}

	.text3 {
		width: 700px;
		/* 容器宽度 */
		white-space: nowrap;
		/* 不换行 */
		overflow: hidden;
		/* 隐藏超出部分 */
		text-overflow: ellipsis;
		/* 超出部分以省略号显示 */
		padding-top: 6px;
		align-items: center;
		height: 27px;
	}

	.text4 {
		text-align: right;
		padding-top: 6px;
		float: right;
		width: 360px;
		align-items: center;
		height: 27px;
	}

	.text:hover {
		background-color: #eee;
	}

	.clearfix {
		height: 5px;
		/* background-color: #7a7a7a; */
	}

	.box-card {
		height: 200px;
		width: 560px;
	}

	.border-card {
		height: 200px;
		width: 560px;
	}

	.but1 {
		margin: 10px 10px 10px 10px;
		height: 200px;
		width: 560px;
	}

	.but2 {
		margin: 10px 10px 10px 10px;
		height: 200px;
		width: 560px;
	}
</style>