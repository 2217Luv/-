<template>
	<div class="con">
		<div class="con1">
			<div class="con2">
				<div class="con2_2">学生考勤情况管理</div>
			</div>
			<!-- <div class="but">
				<el-button type="primary" @click="submitForm">提交</el-button>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {},
	}
</script>

<style scoped="scoped">
	.but {
		text-align: right;
	}

	.con {
		background-color: #336699;
	}

	.con1 {
		display: flex;
		height: 60px;
		width: 1350px;
		margin: 0px auto;
		align-items: center;
		color: #FFFFFF;
		justify-content: space-between;
		font-size: 20px;
		font-weight: 500;
	}

	.con2 {
		display: flex;
		align-items: center;
	}

	.con2_2 {
		margin-left: 10px;
	}

	.con3 img {
		width: 30px;
		border-radius: 50%;
	}

	.con3 {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		width: 50px;
	}

	.con3:hover {
		cursor: pointer;
		background-color: #42B983;
	}
</style>