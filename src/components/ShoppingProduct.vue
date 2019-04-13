<template>

	<div class="shopping-cart-product flex">
		<div class="select">
			<check-box :arr="value" :value="id" @input="onSelect"></check-box>
		</div>
		<div class="product-image">
			<img :src="image" />
		</div>
		<div class="product-info flex-item">
			<div class="product-title" v-text="title"></div>
			<div class="product-sku" v-text="kind"></div>
			<div class="clear">
				<div class="product-price left">￥{{price}}</div>
				<div class="product-count right">
					<span class="minus" @click="n=n<2?1:--n;$emit('countChange',id,n);">-</span>
					<span class="count" v-text="n"></span>
					<span class="plus" @click="n+=1;$emit('countChange',id,n);">+</span>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import CheckBox from "@/components/CheckBox";

	export default {
		data() {
			return {
				n: 0,
				arr: []
			}
		},
		props: {
			id: {
				type: [Number, String],
				default: 0,
				required: true
			},
			title: {
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
				type: Number,
				default: 0
			},
			count: {
				type: Number,
				default: 1
			},
			value: {
				type: Array,
				default: () => {
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
			this.n = this.count;
			this.arr = this.value;
		},
		components: {
			CheckBox
		}
	}
</script>

<style lang="less">
	/*
	 *  cnpm install less less-loader --save
	 * 
	 * */
	
	.shopping-cart-product {
		padding: 0.1rem 0 0.3rem;
		.select {
			width: 0.8rem;
			box-sizing: border-box;
			padding: 0.7rem 0.2rem 0;
		}
		.product-image {
			width: 1.5rem;
			height: 1.5rem;
			width: 1.7rem;
			padding-right: 0.2rem;
			box-sizing: border-box;
			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
		.product-info {
			overflow: hidden;
			.product-title {
				font-size: 0.28rem;
				padding-right: 0.2rem;
				margin-bottom: 0.1rem;
				word-break: break-all;
				position: relative;
			}
			.product-sku {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				position: relative;
				background-color: #fff;
				font-size: 0.28rem;
				color: #666;
				margin: 0.16rem 0.2rem 0.2rem 0;
				padding: 0.02rem 0.5rem 0.02rem 0.1rem;
				border: 1px solid #e5e5e5;
				border-radius: 0.04rem;
				&:after {
					content: "";
					display: inline-block;
					vertical-align: middle;
					margin-top: -2px;
					width: 6px;
					height: 10px;
					background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 20%22%3E%3Cpath fill=%22#CCCCCC%22 fill-rule=%22evenodd%22 d=%22M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z%22/%3E%3C/svg%3E");
					background-repeat: no-repeat;
					background-size: 100%;
					-webkit-transform: rotate(90deg);
					transform: rotate(90deg);
					position: absolute;
					top: 50%;
					right: 6px;
					margin-top: -5px;
				}
			}
			.clear {
				margin: 0.1rem 0.2rem 0 0;
				.product-price {
					line-height: 0.32rem;
					color: #e93b3d;
					font-size: 0.2rem;
				}
				.product-count {
					display: block;
					width: 1.8rem;
					border-radius: 0.08rem;
					overflow: hidden;
					background-color: #f7f7f7;
					span {
						display: block;
						float: left;
						width: 0.6rem;
						height: 0.6rem;
						line-height: 0.6rem;
						text-align: center;
						font-size: 0.4rem;
						&.count {
							font-size: 0.28rem;
						}
					}
				}
			}
		}
	}
</style>