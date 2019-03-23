<template>

	<div class="product">

		<top-bar>
		<ul class="flex top-nav">
			<li class="flex-item"
				:class="{active:indexNav==index}"
				v-for="(item,index) in nav" 
				:key="index"
				@click="navIndex=index"
				><span v-text="item.title">
					
				</span></li>
		</ul>
		
		
		</top-bar>

	<product-btn></product-btn>


	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import ProductBtn from "@/components/ProductBtn.vue";
	export default {
		data() {
			return {
				indexNav:0,
				nav:[{title:'商品'},{title:'评价'},{title:'详情'},{title:'推荐'}]
			};
		},
		components: {
			TopBar,
			ProductBtn
		}
	}
</script>

<style>
	.top-nav {
		line-height: 0.9rem;
		text-align: center;
		font-size: 0.28rem;
	}
	
	.top-nav .active {
		color: #e4393c;
	}
	
	.top-nav .active span {
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
</style>