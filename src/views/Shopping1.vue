<template>
	<div id="user">
		
		
		<check-box v-model="agree"></check-box>
{{agree}}
		<div>

			<div>爱好：{{hobby}}</div>

			<label><check-box v-model="hobby" value="钓鱼" ></check-box>  钓鱼</label>
			<label> <check-box v-model="hobby" value="跑步" ></check-box> 跑步</label>
			<label><check-box v-model="hobby" value="看电影" ></check-box> 看电影</label>
			<label><check-box v-model="hobby" value="听音乐" ></check-box> 听音乐</label>
			<label><check-box v-model="hobby" value="看书" ></check-box> 看书</label>
			<label> <check-box v-model="hobby" value="打游戏" ></check-box>打游戏</label>

		</div>
		
		
		<h1>用户中心</h1>
		
	</div>
</template>

<script>
	import CheckBox from "@/components/CheckBox.vue";
	export default{
		data(){
			return{
				hobby:[],
				agree:true,
			}
		},
		
		components:{
			CheckBox
		},
		methods:{
			
		}
	}
</script>

<style>
</style>