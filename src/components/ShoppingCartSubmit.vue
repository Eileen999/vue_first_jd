<template>

	<div class="submit-bar flex">

		<div class="select-all">
			<check-box :arr="value" @input="selectAll" ></check-box>
			<div>全选</div>
		</div>

		<div class="sum-price flex-item">
			总计：<span>￥{{sum}}</span>
		</div>

		<div class="pay-btn " :class="{disabled:count==0}">
			去结算<span>({{count}}件)</span>
		</div>

	</div>

</template>

<script>
	import CheckBox from "@/components/CheckBox";

	export default {
		data(){
			return {
				a:false,
			}
		},
		props:{
			value:{
				type:Boolean,
				default:false
			},
			count:{
				type:Number,
				default:0
			},
			sum:{
				type:Number,
				default:0
			}
		},
		methods:{
			selectAll(val){
				this.$emit('input',val);
			}
		},
		components: {
			CheckBox
		}
	}
</script>

<style lang="less">
	.submit-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1rem;
		&:before {
			content: "";
			position: absolute;
			z-index: 1;
			pointer-events: none;
			background-color: #ddd;
			height: 1px;
			left: 0;
			right: 0;
			top: 0;
		}
		.select-all {
			width: 0.8rem;
			padding-top: 0.64rem;
			font-size: 0.2rem;
			text-align: center;
			height: 0.3rem;
			line-height: 0.3rem;
			color: #999;
			.check-box {
				position: absolute;
				top: 0.15rem;
				left: 0.2rem;
			}
		}
		.sum-price {
			text-align: right;
			line-height: 1rem;
			padding-right: 0.2rem;
			font-weight: 700;
			font-size: 0.32rem;
			span {
				color: #e93b3d;
				font-family: arial;
			}
		}
		.pay-btn {
			width: 2.2rem;
			height: 1rem;
			line-height: 1rem;
			font-size: 0.32rem;
			text-align: center;
			font-weight: 700;
			background: #e4393c;
			color: #fff;
			span {
				font-size: 0.24rem;
				font-weight: 0.24rem;
			}
			&.disabled {
				background: #d7d7d7;
			}
		}
	}
</style>