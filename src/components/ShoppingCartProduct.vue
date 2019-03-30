<template>
	<div class="goods selected ">
		<span class="check-box-goods">
			<check-box  :arr="value" :value="id" @input="onSelect"></check-box>
		</span>
		<img :src="image">

		<div class="content">
			<div class="name">
				<span class="proNameJs">{{title}}</span>
			</div>
			<p class="sku-detail" v-text="kind">2.08kg/件，一对装-决明子健康枕，74*48CM</p>
			<div class="goods_line clear">
				<p class="price left"><span class="priceJs"><em class="int">￥{{price}}</em></span> </p>
				<p class="count right">
					<span class="minus disabled" @click="num<=0?0:--num;$emit('numchange',id,num);" style="font-size: 0.5rem">-</span>
					<span class="" v-text="num"></span>
					<span class="plus " @click="num++;$emit('numchange',id,num);" style="font-size: 0.4rem">+</span>
				</p>
			</div>
			<div class="m_action">
				<span class="m_action_item">移入关注</span>
				<span class="m_action_item">删除</span>
			</div>
		</div>

	</div>
</template>

<script>
	import CheckBox from "@/components/CheckBox.vue";
	export default {
		data() {
			return {
				num: 0,
				arr: []
			}
		},
		props: {
			id: {
				type: [Number, String],
				default: 0,
				required: true
			},
			title:{
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			},
			kind: {
				type: String,
				default: ''
			},
			price: {
				type: [Number,String],
				default: 0
			},
			count: {
				type: Number,
				default: 1
			},
			value: {
				type: Array,
				default:()=>{
					return [];
				}
			}
		},
		methods: {
			onSelect(val) {
				this.$emit('input', val);
			}
		},
		created() {
			this.num = this.count;
			this.arr = this.select;
		},
		components: {
			CheckBox
		}
	}
</script>

<style>
	.goods {
		z-index: 1;
		position: relative;
		min-height: 1.5rem;
		padding: 0.01rem 0 0.3rem 2.56rem;
		background: #fff;
		-webkit-overflow-scrolling: touch;
		border: 0.01rem solid gainsboro;
	}
	
	.goods .check-box-goods {
		position: absolute;
		top: 0.6rem;
		left: 0.1rem;
	}
	
	.goods img {
		position: absolute;
		left: 0.86rem;
		top: 0.1rem;
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}
	
	.goods .name {
		font-size: 14px;
		padding-right: 10px;
		margin-bottom: 5px;
		word-break: break-all;
		position: relative;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.goods .sku-detail {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		position: relative;
		background-color: #fff;
		font-size: 14px;
		color: #666;
		margin: 8px 10px 10px 0;
		padding: 1px 25px 1px 5px;
		border: 1px solid #e5e5e5;
		border-radius: 2px;
	}
	
	.goods .goods_line .price {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		line-height: 16px;
		color: #e93b3d;
		font-size: 10px;
		font-family: arial;
		font-size: 10px;
	}
	
	.goods .goods_line .price .int {
		font-size: 16px;
	}
	
	.goods .m_action {
		color: #999;
		font-size: 0;
		font-family: Helvetica;
		text-align: right;
	}
	
	.goods .m_action .m_action_item {
		position: relative;
		padding: 0 10px;
		line-height: 1em;
		font-size: 12px;
	}
	
	.num_wrap span {
		position: relative;
		float: left;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	.num_wrap .plus {
		float: right;
	}
	.goods_line .count{
		font-size: 0.28rem;
		color: #999999;
	}
	.count span{
		margin-right: 0.4rem;
		text-align: top;
	}
</style>