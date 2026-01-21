<template>
	<div class="left">
		<div class="myapp">
			<div class="title">我的应用</div>
			<div class="el-icon-s-tools" @click="setMyapp"></div>
			<el-dialog width="1000px" title="管理我的应用" :visible.sync="dialogFormVisible">
				<el-form>
					<div class="dialog_main">
						<div class="dialog_left">
							<div class="left_title">教学综合信息服务平台</div>
							<el-tree class="hoverColor" :data="data" :props="defaultProps" @node-click="handleNodeClick"
								style="background-color: #eee;"></el-tree>
						</div>
						<div class="right">
							<div class="dialog_right">
								<div class="right_title1">我的应用</div>
								<div class="icon_main" v-for="(item,index) in myapps" :key="index">
									<div><img :src="item.pic_path"><img class="pic_icon" @click="deleteApp(index)"
											src="../../public/pictures/ico_90.gif" />
									</div>
									<div class="name">{{item.name}}</div>
								</div>
							</div>
							<div class="dialog_right nobom">
								<div class="right_title2">全部应用</div>
								<div class="icon_main" v-for="(item,index) in allapps" :key="index">
									<div><img :src="item.pic_path"><img class="pic_icon" @click="addApp(index)"
											src="../../public/pictures/ico_91.gif" /></div>
									<div class="name">{{item.name}}</div>
								</div>
							</div>
						</div>
					</div>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">关闭</el-button>
				</div>
			</el-dialog>
		</div>
		<div class="showapp">
			<div class="icon_main" v-for="(item,index) in myapps" :key="index">
				<div @click="toinfo(item)"><img :src="item.pic_path"></div>
				<div>{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				myapps: [],
				allapps: [],
				dialogTableVisible: false,
				dialogFormVisible: false,
				data: [{
					label: '学生应用',
					children: [{
							label: '报名申请'
						}, {
							label: '信息维护',
						},
						{
							label: '选课'
						}, {
							label: '信息查询'
						},
					],

				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},

		created() {
			this.getMyapps()
			this.getAllapps()
		},

		methods: {
			toinfo(item){
				if(item.name=="查询个人信息"){
					this.$router.push("/information")
				}
			},
			setMyapp() {
				this.dialogFormVisible = true
			},
			getMyapps() {
				var that = this;
				this.$axios({
					url: this.$urls.MY_APPS_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.myapps = res.data
				})
			},
			getAllapps() {
				var that = this;
				this.$axios({
					url: this.$urls.ALL_APPS_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.allapps = res.data
				})
			},
			deleteApp(index) {
				//向allapp数组添加当前myapp所指的位置
				this.allapps.push(this.myapps[index])
				this.myapps.splice(index, 1)
				var MyAppTitle = document.querySelector(".right_title1")
				if (this.myapps.length == 0) {
					MyAppTitle.innerHTML = ""
				}
			},
			addApp(index) {
				this.myapps.push(this.allapps[index])
				this.allapps.splice(index, 1)
				var MyAppTitle = document.querySelector(".right_title1")
				if (this.myapps.length != 0) {
					MyAppTitle.innerHTML = "我的应用"
				}
			},
			handleNodeClick(data) {
				console.log(data);
			}
		},
	}
</script>

<style scoped="scoped">
	.bg_color {
		background-color: #ececec;
		/* padding: 10px; */
	}

	.main {
		/* margin: 0 auto; */
		/* width: 1300px; */
		display: flex;
	}

	.left {
		border-radius: 3px;
		border: 1px solid #EBEEF5;
		margin-top: 10px;
		margin-left: 16px;
		margin-right: 5px;
		width: 340px;
		height: 641px;
		background-color: #ffffff;
	}


	.myapp {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		font-weight: 550;
		border-bottom: 0.5px solid #cccccc;

	}

	.title {
		margin: 8px 0px 0px 10px;
	}

	.el-icon-s-tools {
		font-size: 25px;
		margin: 8px 15px 10px 0px;
	}

	.el-icon-s-tools:hover {
		cursor: pointer;
	}

	.dialog_main {
		display: flex;
		height: 400px;
		align-items: flex-start
	}

	.dialog_left {
		width: 400px;
		height: 400px;
		background-color: #ececec;
	}

	.dialog_right {
		width: 750px;
		display: flex;
		flex-wrap: wrap;
		padding-left: 20px;
		position: relative;
	}

	.icon_main {
		text-align: center;
		width: 120px;
		height: 90px;
		margin-top: 35px;
		/* margin-bottom: 10px; */
		/* margin-right: 5px; */
		position: relative;
	}

	.pic_icon {
		margin: 0 auto;
		position: absolute;
		/* right: 18px; */
	}

	.pic_icon:hover {
		cursor: pointer;
	}

	.name {
		text-align: center;
		font-size: 5px;
	}

	.nobom {
		border-bottom: 0px;
	}

	.right_title1 {
		padding-left: 10px;
		position: absolute;
		top: 1px;
		left: 0px;
		width: 755px;
		line-height: 25px;
		text-align: left;
		background-color: #ececec;
	}

	.right_title2 {
		padding-left: 10px;
		position: absolute;
		top: 1px;
		left: 0px;
		width: 755px;
		line-height: 25px;
		text-align: left;
		background-color: #ececec;
	}

	.dialog_right .nobom {
		position: relative;
	}

	.left_title {
		padding-left: 15px;
		margin-top: 10px;
		margin-bottom: 5px;
		font-size: 15px;
	}

	.showapp {
		display: flex;
		flex-wrap: wrap;
	}

	.showapp>.icon_main {
		width: 100px;
		height: 100px;
		font-size: 13px;
		margin-top: 10px;
		margin-left: 5px;
	}
</style>