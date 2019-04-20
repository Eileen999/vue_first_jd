<template>
	<div id="category">

		<top-bar shortcut>
			<!--搜索表单-->
			<div class="search-form">
				<i class="search-icon"></i>
				<input type="text" placeholder="请输入搜索内容" @focus="$router.push('/search')" />
			</div>
		</top-bar>

		<div class="container flex">
			<div class="aside" @touchstart="touchstartHandler" @touchmove="touchmoveHandler" @touchend="touchendHandler" ref="aside">

				<ul :class="{trans:flg}" :style="{top:topOffset+'px'}" ref="ul-scroll">
					<li :class="{active:categoryIndex==index}" v-for="(item,index) in category" :key="index" @click="gotoNow(index,$event)">{{item.title}}</li>
				</ul>

			</div>
			<div class="content flex-item">
				<category-product></category-product>
			</div>
		</div>

		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar";
	import TabBar from "@/components/TabBar.vue";
	import CategoryProduct from "@/components/CategoryProduct.vue";
	export default {
		data() {
			return {
				category: [{
						id: 1,
						title: '热门搜索'
					}, {
						id: 2,
						title: '数码电脑'
					}, {
						id: 3,
						title: '手机数码'
					}, {
						id: 4,
						title: '热门搜索'
					},
					{
						id: 5,
						title: '数码电脑'
					},
					{
						id: 6,
						title: '手机数码'
					}, {
						id: 7,
						title: '热门搜索'
					},
					{
						id: 8,
						title: '数码电脑'
					},
					{
						id: 9,
						title: '手机数码'
					}, {
						id: 10,
						title: '热门搜索'
					},
					{
						id: 11,
						title: '数码电脑'
					},
					{
						id: 12,
						title: '手机数码'
					}, {
						id: 1,
						title: '热门搜索'
					}, {
						id: 2,
						title: '数码电脑'
					}, {
						id: 3,
						title: '手机数码'
					}, {
						id: 4,
						title: '热门搜索'
					},
					{
						id: 5,
						title: '数码电脑'
					},
					{
						id: 6,
						title: '手机数码'
					}, {
						id: 7,
						title: '热门搜索'
					},
					{
						id: 8,
						title: '数码电脑'
					},
					{
						id: 9,
						title: '手机数码'
					}, {
						id: 10,
						title: '热门搜索'
					},
					{
						id: 11,
						title: '数码电脑'
					},
					{
						id: 12,
						title: '手机数码'
					}
				],
				start: 0,
				topOffset: 0,
				top: 0,
				//固定值，距离变化时，为0加上距离，而不是自加。
				limitTop: 0,
				flg: false,
				categoryIndex:0
			};
		},
		methods: {
			touchstartHandler(e) {
				//开始触摸点击的距离顶端的位置
				this.start = e.changedTouches[0].clientY;
				this.limitTop = this.$refs['aside'].offsetHeight - 150 - this.$refs['ul-scroll'].offsetHeight;
				this.flg = false;
			},
			touchmoveHandler(e) {
				//变化的数，移动过程中距离顶端的位置
				var y = e.changedTouches[0].clientY;
				//移动的距离加上原有的距离
				var tmp = this.top + y - this.start;
				//移动的距离与顶端不能超过150，超过就给150，否则给原值。
				tmp = tmp > 150 ? 150 : tmp;
				tmp = tmp < this.limitTop ? this.limitTop : tmp;
				//把这个动态距顶端距离赋值给变量topOffset
				this.topOffset = tmp;
			},
			touchendHandler(e) {
				//松手时，距离顶端的位置
				var y = e.changedTouches[0].clientY;
				//移动的距离加上原有的距离
				var tmp = this.top + y - this.start;
				//移动的距离与顶端不能超过0，超过就给0，否则给原值。
				tmp = tmp > 0 ? 0 : tmp;
				tmp = tmp < (this.limitTop + 150) ? (this.limitTop + 150) : tmp;
				this.top = tmp;
				this.topOffset = this.top;
				this.flg = true;
			},
			gotoNow(index,e){
				var tmp = e.target.offsetHeight*index*-1;
				tmp = tmp < (this.limitTop + 150) ? (this.limitTop + 150) : tmp;
				this.top = tmp;
				this.topOffset = this.top;
				this.transition = true;
				this.categoryIndex = index;
			}
		},
		components: {
			TopBar,
			TabBar,
			CategoryProduct
		}
	}
</script>

<style lang="less">
	#category {
		.search-form {
			position: relative;
			padding: 0.15rem 0.2rem 0 0.2rem;
			/* 搜索图标 */
			.search-icon {
				display: block;
				position: absolute;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFNjQ1RDY1RDhGMTFFOUI3NTA4MzFDQzdFNURCRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFNjQ1RDc1RDhGMTFFOUI3NTA4MzFDQzdFNURCRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NEU2NDVENDVEOEYxMUU5Qjc1MDgzMUNDN0U1REJENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NEU2NDVENTVEOEYxMUU5Qjc1MDgzMUNDN0U1REJENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pku4YgYAAAJ4SURBVHjavJa/axRREMdfTokaSJOrRBtB/AmmUAhCNGqh13nGX2Ab0IAWSREUNeRCAmIQf3bmDxBM1FgYTougJNioRRo9JYWFQUGuiyhCOD8DszKu7273bpcMfLi3w3vvu3Nv9s00VSoVVywWXYRtgTwchh2QVX8Z3sMLmMrlcp9cTGuKEO6CEdgXc79ZGOQFXjUqvBZuw1mZ4+qzCtyHPl7gV7VJGY+vDWbgnBH9DQ/hDGyCNdAK29U3oXOcrpG1MwTUFle4BaZhr/E9gZ1wGh7AZxVZgpL4iOyUznls1ske04i3xBG+Ax06XoaL0A0LUf8v4gtwXNcsq7tD96wpLInUY54vw1id5ysvMKZrA+sh6q5awqPmTCcbEQ2JT5ozH60m3A6dJpH6XXLrMwnXSdTtPuFu45MM/ZJUlagX9UtwHo2/wvaCmHLpmd1rv094m/G9SVH4rRlv9Qlnje9bisJfzTgbdXM1uxWwjKkyga1PcX+7V9knXDK+XSkK7zHjjz7hWePLpyicD5XM/4Tt5X4SNiZV5MLYoHsF9sgnPA9zJrluphDtLS2fYnNcKPPVsvqqFvEg6oEE0Q6YaGXPwVpFQtqVcfN8DS40IHpe1wY2TrQvw/NWh577tWBIHV0F9+AAXIqqyQhuVsETxi13/ve4PZfcMM9MQxBUrAntRt7BovolgXbDMf1rm0OiQZIWiHo4TrO3TpMjSbNXDjUE/4hnqiz+Cb1wEF7XISpzDyHQC1cY2ygLBDgUt692pnodhSPaWdqG/gM8h6eIlTxnX+BnyBzZDXmpuMJRRT8q0wv6uUrCLjG/NbMSlQghEb4OP+Cu+P4IMADW+r7MRJXyTAAAAABJRU5ErkJggg==);
				background-repeat: no-repeat;
				background-size: contain;
				width: 0.3rem;
				height: 0.28rem;
				top: 0.3rem;
				left: 0.5rem;
			}
			/* 搜索框 */
			input {
				border-radius: 0.3rem;
				height: 0.6rem;
				padding-left: 0.9rem;
				font-size: 0.24rem;
				color: #232326;
				background: #f7f7f7;
				outline: none;
				border: none;
				width: 100%;
				box-sizing: border-box;
			}
		}
		.container {
			width: 100%;
			height: 100vh;
			padding: 0.9rem 0 1rem;
			box-sizing: border-box;
		}
		.aside {
			width: 1.7rem;
			line-height: 0.92rem;
			background: #f8f8f8;
			text-align: center;
			font-size: 0.28rem;
			overflow: hidden;
			position: relative;
			ul {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				li.active {
					color: #e93b3d;
					background-color: #FFFFFF;
				}
			}
			.trans {
				transition: top 0.4s linear;
				-webkit-transition: top 0.4s linear;
			}
		}
	}
</style>