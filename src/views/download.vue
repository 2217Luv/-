<template>
	<div class="a1">
		<Head1></Head1>
		<div class="a2">
			<div class="head">
				<p>{{file.title}}</p>
				<el-divider></el-divider>
			</div>
			<div class="a3">
				<p>附件:</p>
				<a :href="$urls.BASE_URL + file.file_path">{{file.title}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Head1 from "../components/Head1.vue"
	export default {
		data() {
			return{
				file :null,
			}
		},
		components: {
			Head1,
		},
		created() {
			console.log(this.$route.query);
			this.file = this.$route.query;
		}
	}
</script>

<style scoped="scoped">
	.a1{
		width: 100%;
		height: 840px;
		background-color: #eee;
	}
	.a2{
		background-color: #ffffff;
		margin: 0 auto;
		margin-top: 30px;
		width: 1400px;
		height: 500px;
		/* border: 1px solid black; */
	}
	.head{
		font-size: 30px;
		text-align: center;
	}
	.head p{
		padding-top: 20px;
	}
	.a3{
		margin-left: 30px;
	}
	.a3 a{
		text-decoration:none;
	}
</style>