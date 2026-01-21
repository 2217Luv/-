<template>
	<div class="mid">
		<div class="mid1">
			<el-tabs type="border-card" class="border-card">
				<el-tab-pane label="周一">
					<div v-for="(kb1,index) in kb1" :key="index" class="text5">
						<div class="text1">
							<a href="/kb.pdf" style="text-decoration: none; color: black;">{{kb1.title}}</a>
						</div>
						<!-- <div class="text2">
							{{kb.date}}
						</div> -->
					</div>
				</el-tab-pane>
				<el-tab-pane label="周二">
					<div v-for="(kb2,index) in kb2" :key="index" class="text5">
						<div class="text1">
							<a href="" style="text-decoration: none; color: black;">{{kb2.title}}</a>
						</div>
						<!-- <div class="text2">
							{{kb.date}}
						</div> -->
					</div>
				</el-tab-pane>
				<el-tab-pane label="周三">
					<div v-for="(kb3,index) in kb3" :key="index" class="text5">
						<div class="text1">
							<a href="" style="text-decoration: none; color: black;">{{kb3.title}}</a>
						</div>
						<!-- <div class="text2">
							{{kb.date}}
						</div> -->
					</div>
				</el-tab-pane>
				<el-tab-pane label="周四">
					<div v-for="(kb4,index) in kb4" :key="index" class="text5">
						<div class="text1">
							<a href="" style="text-decoration: none; color: black;">{{kb4.title}}</a>
						</div>
						<!-- <div class="text2">
							{{kb.date}}
						</div> -->
					</div>
				</el-tab-pane>
				<el-tab-pane label="周五">
					<div v-for="(kb5,index) in kb5" :key="index" class="text5">
						<div class="text1">
							<a href="" style="text-decoration: none; color: black;">{{kb5.title}}</a>
						</div>
						<!-- <div class="text2">
							{{kb.date}}
						</div> -->
					</div>
				</el-tab-pane>
				<el-tab-pane label="周六"></el-tab-pane>
				<el-tab-pane label="周日"></el-tab-pane>
			</el-tabs>
		</div>
		<div class="mid2">
			<el-card class="box-card" style="overflow: auto;">
				<div slot="header" class="clearfix">
					<span>文件</span>
					<el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
				</div>
				<div v-for="(file,index) in file" :key="index" class="text" @click="gotDownLoadPage(index)">
					<div class="text1">
						<a href="" style="text-decoration: none; color: black;">{{file.title}}</a>
					</div>
					<div class="text2">
						{{file.piblishData}}
					</div>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				file: [],
				kb1: [{
					date: '2020-10-14',
					title: '软件测试(1-2节) - 上课地点：尚学楼509 - 教师：章万静',
				}, {
					date: '2020-08-27',
					title: 'Vue应用程序开发(5-6节) - 上课地点：立业楼1303 - 教师：周跃',
				}, ],

				kb2: [{
					date: '2020-10-14',
					title: '软件测试(1-2节) - 上课地点：尚学楼509 - 教师：章万静',
				}, {
					date: '2020-08-27',
					title: 'HTML5与CSS3响应式网页设计(1-2节) - 上课地点：图书馆308 - 教师：郑丽萍',
				}, {
					date: '2023-03-30',
					title: '形势与政策Ⅳ(3-4节)  -  上课地点：行学楼132 - 教师：刘春香',
				}, {
					date: '2023-03-06',
					title: 'Office高级应用(5-6节) -  上课地点：立业楼2411 - 教师：纪乐平',
				}],

				kb3: [{
					date: '2020-10-14',
					title: '软件测试(1-2节) - 上课地点：尚学楼509 - 教师：章万静',
				}, {
					date: '2020-08-27',
					title: '【通知】学生各类申请表下载',
				}, {
					date: '2023-03-30',
					title: '【通知】2023届秋季毕业生相关通知',
				}, {
					date: '2023-03-06',
					title: '【通知】关于2022-2023-2学期学生通识选修课网上选课的通知',
				}],

				kb4: [{
					date: '2020-10-14',
					title: '软件测试(1-2节) - 上课地点：尚学楼509 - 教师：章万静',
				}, {
					date: '2020-08-27',
					title: '【通知】学生各类申请表下载',
				}, {
					date: '2023-03-30',
					title: '【通知】2023届秋季毕业生相关通知',
				}, {
					date: '2023-03-06',
					title: '【通知】关于2022-2023-2学期学生通识选修课网上选课的通知',
				}],

				kb5: [{
					date: '2020-10-14',
					title: '软件测试(1-2节) - 上课地点：尚学楼509 - 教师：章万静',
				}, {
					date: '2020-08-27',
					title: '【通知】学生各类申请表下载',
				}, {
					date: '2023-03-30',
					title: '【通知】2023届秋季毕业生相关通知',
				}, {
					date: '2023-03-06',
					title: '【通知】关于2022-2023-2学期学生通识选修课网上选课的通知',
				}],
			}
		},
		created() {
			this.getfile()
		},
		methods: {
			getfile() {
				var that = this;
				this.$axios({
					url: this.$urls.FILE_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.file = res.data
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

<style scoped="scoped">
	.clearfix {
		height: 5px;
		/* background-color: #7a7a7a; */
	}

	.mid {
		display: flex;
	}

	.mid1 {
		margin: 10px 10px 10px 10px;
		height: 200px;
		width: 560px;
	}

	.box-card {
		height: 100%;
		width: 100%;
	}

	.mid2 {
		margin: 10px 10px 10px 10px;
		height: 200px;
		width: 560px;
	}

	.text {
		display: flex;
		/* margin: 1px 1px 15px 1px; */
		color: #71717;
		font-size: 14px;
	}

	.text5 {
		margin-top: 4px;
		display: flex;
		/* margin: 1px 1px 15px 1px; */
		color: #71717;
		font-size: 14px;
	}

	.text1 {
		width: 1200px;
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

	.text5:hover {
		background-color: #eee;
	}

	.border-card {
		background-color: #ffffff;
		height: 200px;
		width: 560px;
	}
</style>