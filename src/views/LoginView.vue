<template>
	<div class="con">
		<div class="header">
			<div class="imgcon"><img src="../assets/1.png" /></div>
			<div class="titlecon">江苏电子信息职业学院 教务系统</div>
		</div>
		<div class="main">
			<div class="mainimgcon">
				<!-- <img src="../assets/2.png" /> -->
				<el-carousel :interval="5000" height="29rem" style="width: 790px; margin: 0 auto;" indicator-position="outside">
					<el-carousel-item v-for="(item,index) in images" :key="index">
						<el-image :class="className" style="width:100%; height:100%" :src="item.idView"
							fit="fit"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="logincon_1">
				<LoginComponent />
			</div>

		</div>
		<div class="footer"></div>
	</div>
</template>

<script>
	import LoginComponent from "../components/LoginComponent.vue"
	export default {
		data() {
			return {
				images: [{
						id: 0,
						idView: require('../assets/backg1.jpg')
					},
					{
						id: 1,
						idView: require('../assets/backg2.jpg')
					},
					{
						id: 2,
						idView: require('../assets/backg3.jpg')
					},
				],
				className: "",
			}
		},
		components: {
			LoginComponent,
		}
	}
</script>

<style scoped="scoped">
	.con {
		width: 1205px;
		margin: 20px auto;
		padding: 0px;
	}

	.header {
		display: flex;
		align-items: center;

	}

	.imgcon {
		margin-left: 5px;

		padding-top: 3px;
	}

	.titlecon {
		margin-left: 10px;
		font-size: 22px;
		color: #336699;
		font-weight: 500;

	}

	.main {
		margin-top: 40px;
		border: solid 3px gainsboro;
		background-color: #F5F5F5;
		display: flex;
		justify-content: space-around;
	}

	.mainimgcon {
		margin: 0 auto;
		margin-top: 5px;
		/* margin: 0px 7px; */
	}

	.footer {
		text-align: center;
		font-size: 10px;
		margin-top: 20px;
		color: gainsboro;
	}
</style>