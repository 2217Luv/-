<template>
	<div class="top">
		<div class="top1">
			<el-card class="box-card1" body-style="display: flex">
				<div class="topimg">
					<img src="../assets/user.png" alt="">
				</div>
				<div class="top2">
					<h4>欢迎你 {{userID.xm}} {{userID.xh_id}}</h4>
					<p>{{userID.jgmc}} {{userID.bjmc}}</p>
				</div>
			</el-card>
		</div>
		<div class="top3">
			<div class="top3-2">
				<el-card class="box-card" style="overflow: auto;">
					<div slot="header" class="clearfix">
						<span>通知</span>
						<el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
					</div>
					<!-- <div v-for="(tableData,index) in tableData" :key="index" class="text">
						<div class="text1">
							{{tableData.title}}
						</div>
						<div class="text2">
							{{tableData.date}}
						</div>
					</div> -->
					<div v-for="(notices,index) in notices" :key="index" class="text" @click="gotnot(index)">
						<div class="text1">
							<a href="" style="text-decoration: none; color: black;">{{notices.title}}</a>
						</div>
						<div class="text2">
							{{notices.piblishData}}
						</div>
					</div>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				xm: {},
				userID: {},
				notices: [],
				// tableData: [{
				// 	date: '2020-10-14',
				// 	title: '【通知】网络课程平台实名认证方法（超星、智慧树、中国大学MOOC）',
				// }, {
				// 	date: '2020-08-27',
				// 	title: '【通知】学生各类申请表下载',
				// }, {
				// 	date: '2023-03-30',
				// 	title: '【通知】2023届秋季毕业生相关通知',
				// }, {
				// 	date: '2023-03-06',
				// 	title: '【通知】关于2022-2023-2学期学生通识选修课网上选课的通知',
				// }]
			}
		},
		created() {
			this.getnotices()
		},
		methods: {
			gotnot(index){
				this.$router.push({
					path: '/notices',
					query:this.notices[index]
				})
			},
			create() {
				console.log(uid);
			},
			getnotices() {
				var that = this;
				this.$axios({
					url: this.$urls.NOTICE_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.notices = res.data
				})
			},
		},
		mounted() {
			this.userID = JSON.parse(this.$route.query.uid);
		},
	}
</script>

<style scoped="scoped">
	.top {
		display: flex;
	}

	.top1 {
		display: flex;
		margin: 10px 10px 10px 10px;
		height: 200px;
		width: 560px;
	}
	
	.top1 img {
		padding-left: 15px;
		padding-top: 10px;
		width: 150px;
	}
	
	.box-card1{
		display: flex;
		height: 200px;
		width: 560px;
	}

	.top2 {
		padding-top: 60px;
		padding-left: 25px;
	}
	
	.top2 h4{
		margin: 0 auto;
		font-size: 20px;
	}

	.top2 p {
		margin: 7px;
		padding-left: 10px;
		color: #7a7a7a;
	}

	.top3 {
		display: block;
		margin: 10px 10px 10px 10px;
		height: 200px;
		width: 560px;
		/* background-color: #ffffff; */
	}

	.clearfix {
		height: 5px;
		/* background-color: #7a7a7a; */
	}

	.box-card {
		height: 200px;
		width: 560px;
	}

	.text {
		display: flex;
		/* margin: 1px 1px 15px 1px; */
		color: #71717;
		font-size: 14px;
	}

	.text1 {
		width: 1200px;/* 容器宽度 */
		white-space: nowrap;/* 不换行 */
		overflow: hidden;/* 隐藏超出部分 */
		text-overflow: ellipsis;/* 超出部分以省略号显示 */
		padding-top: 6px;
		align-items: center;
		height: 27px;
	}

	.text2 {
		padding-left: 60px;
		padding-top: 6px;
		float: right;
		width: 260px;
		align-items: center;
		height: 27px;
	}

	.text:hover {
		background-color: #eee;
	}
</style>