<template>
	<div id="shopping-cart">
		<top-bar>
		<div class="m-header">购物车</div>
		</top-bar>
		<div style="height: 0.9rem;"></div>
		<div class="shopcart_empty_wrap" v-if="products.length==0">
			<img src="../assets/images/shoppingCartEmpty.png"/>
			<div class="empty_txt">
				登录后可同步购物车中商品
			</div>
		</div>
		
		<shopping-cart-product  
			v-for="(item,index) in products" 
			     :id="item.id"
				 :image="item.image"
				 :title="item.title"
				 :kind="item.kind"
				 :price="item.price"
				 :count="item.count"
				 :key="index"
				 v-model="select"
			>
		</shopping-cart-product>
		<shopping-cart-submit style="z-index:9999;"></shopping-cart-submit>
	</div>
</template>

<script>
	import CheckBox from "@/components/CheckBox.vue";
	import TopBar from "@/components/TopBar.vue";
	import ShoppingCartProduct from "@/components/ShoppingCartProduct.vue";
	import ShoppingCartSubmit from "@/components/ShoppingCartSubmit.vue";
	export default{
		data(){
			return{
				products:[{
					id:1,
					image:'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t20539/361/394220645/159275/ac48465e/5b0bfdbbN457fc338.jpg',
					title:'富安娜家纺 枕头芯颈椎枕决明子草本枕芯 成人枕头套装 决明子健康舒睡枕芯一对装 74*48cm 白色',
					price:'22.08',
					kind:'red 37',
					count:1
				},{
					id:2,
					image:'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg',
					title:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
					price:'20.08',
					kind:'',
					count:1
				},{
					id:3,
					image:'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t20539/361/394220645/159275/ac48465e/5b0bfdbbN457fc338.jpg',
					title:'ccccccccccccccccccccccccccccccccccccc',
					price:'12.08',
					kind:'可口可乐',
					count:1
				}		
				],
				select:[]
			}
		},
		
		components:{
			CheckBox,
			TopBar,
			ShoppingCartProduct,
			ShoppingCartSubmit
		},
		methods:{
			
		}
	}
</script>

<style>
.m-header{
	height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.36rem;
    color: #333;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.shopcart_empty_wrap {
    padding: 0.6rem 0 0.3rem;
    text-align: center;
}

.shopcart_empty_wrap img {
    border: 0 none;
    vertical-align: top;
    width: 1.8rem;
    height: 1.8rem;
}

.empty_txt {
    font-size: 16px;
    color: rgba(51,51,51,.66);
    line-height: 24px;
    margin: 11px 0;
}
</style>