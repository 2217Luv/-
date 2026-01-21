<template>
	<div class="con1">
		<div class="con2">
			<Head></Head>
			<Menu></Menu>
		</div>
		<div class="con3">
			<App></App>
			<div class="con4">
				<Top></Top>
				<Middle></Middle>
				<Bottom></Bottom>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "../components/Head.vue"
	import Menu from "../components/Menu.vue"
	import App from "../components/App.vue"
	import Top from "../components/Top.vue"
	import Middle from "../components/Middle.vue"
	import Bottom from "../components/Bottom.vue"

	export default {
		components: {
			Head,
			Menu,
			App,
			Top,
			Middle,
			Bottom,
		}
	}
</script>

<style scoped="scoped">
	.con1 {
		height: 840px;
		/* width: 1500px; */
		margin: 0;
		padding: 0;
		/* border: 1px solid black; */
		background-color: #eee;
	}

	.con2 {
		background-color: #eee;
	}

	.con3 {
		margin-top: 15px;
		width: 100%;
		height: 600px;
		display: flex;
	}
	
	.con4{
		/* border: 1px solid black; */
		width: 1200px;
		display: block;
	}
</style>