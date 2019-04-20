<template>

	<div class="search-product flex" @click="$router.push({path:'/product',query:{id:id}})">

		<div class="product-image">
			<img :src="image" v-if="image!=''">
		</div>
		<!-- 商品信息 -->
		<div class="product-info flex-item">
			<div class="title" v-text="title"></div>
			<div class="price">
				￥<span>{{price1}}</span>.{{price2}}
			</div>
			<div class="comment" v-text="comment"></div>
			<div class="shop" v-text="shop"></div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				img:''
			};
		},
		props: {
			id: {
				type: Number,
				default: 0
			},
			image: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '商品标题'
			},
			price: {
				type: Number,
				default: 0,
			},
			comment: {
				type: String,
				default: '0条评论'
			},
			shop: {
				type: String,
				default: '京东商城'
			}
		},
		computed:{
			price1(){
				return Math.floor(this.price);
			},
			price2(){
				// 小数部分
				let n = Math.floor(this.price * 100 % 100);
				return n<10?'0'+n:n;
			}
		},
		mounted(){},
		
	}
	
	
</script>

<style lang="less">
	.search-product {
		.product-image {
			width: 2.4rem;
			height: 2.4rem;
			img {
				width: inherit;
				height: inherit;
			}
		}
		.product-info {
			padding: 0 0.2rem 0.16rem;
			.title {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				height: 0.76rem;
				font-size: 0.28rem;
				word-break: break-all;
				margin-top: 0.16rem;
				color: #333;
				line-height: 1.36;
			}
			.price {
				margin-top: 0.18rem;
				display: inline-block;
				height: 0.36rem;
				color: #e93b3d;
				min-width: 0.8rem;
				font-size: 0.24rem;
				span{
					font-weight: 400;
					font-size: 0.36rem;
				}
			}
			.comment {
				font-size: 0.24rem;
				height: 0.4rem;
				padding: 0.1rem 0.6rem 0.04rem 0;
				box-sizing: border-box;
				overflow: hidden;
				line-height: 1.2;
				color: #999;
			}
			.shop {
				position: relative;
				display: inline-block;
				padding-right: 0.28rem;
				line-height: 0.28rem;
				max-width: 100%;
				box-sizing: border-box;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #999;
			}
		}
	}
</style>