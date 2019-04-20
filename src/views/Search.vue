<template>
	<div id="search">
		<top-bar :shortcut="shortcut">
			<!--搜索表单-->
			<div class="search-form">
				<i class="search-icon"></i>
				<input type="text" v-model="search" placeholder="请输入搜索内容" @input="searchTips" />
				<i class="close-icon" v-show="search.length>0" @click="search='';"></i>
			</div>

			<!--搜索按钮-->
			<template v-slot:right>
				<div class="search-btn" v-show="!shortcut">
					<span @click="$router.push({path:'/result',query:{search:search}});">搜索</span>
				</div>
			</template>
		</top-bar>

		<!--热门搜索-->
		<div class="hot-word">
			<p v-if="history.length>0">历史搜索<span class="garbage" @click="history=[];"></span> </p>
			<span class="tag" v-for="(item,index) in history" v-text="item" :key="index" @click="$router.push({path:'/result',query:{search:item}});"></span>
			<p>热门搜索</p>
			<span class="tag" v-for="(item,index) in hot" v-text="item" :key="item" @click="$router.push({path:'/result',query:{search:item}});"></span>
		</div>

		<div class="recommend-word" v-show="search.length>0">
			<!-- 推荐的词 -->
			<ul>
				<li class="clear" v-for="(item,index) in searchWord" @click="$router.push({path:'/result',query:{search:item.title}});">
					{{item.title}}
					<span class="tag right" v-for="(sub,j) in item.tag.split(',')">{{sub}}</span>
				</li>
			</ul>

		</div>

		<tab-bar></tab-bar>
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import TabBar from "@/components/TabBar.vue";
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				shortcut: false,
				search: '',
				searchWord: [],
				history: ['手机', '男装', '运动鞋'],
				hot: ['华为手机', '苹果手机', '男人的衣柜', '衣服']
			}
		},
		methods: {
			searchTips(str) {
				axios.post('http://api.niyinlong.com/api/product/searchHotWord', qs.stringify({
					keyword: this.search
				})).then(res => {
					console.log(res);
					this.searchWord = res.data;
				}).catch();
			}
		},
		components: {
			TabBar,
			TopBar
		},
		created() {
			this.search = this.$route.query.search ? this.$route.query.search : '';
		}
	}
</script>

<style lang="less">
	#search {
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
			/* 输入框关闭按钮 */
			.close-icon {
				display: block;
				position: absolute;
				width: 0.3rem;
				height: 0.3rem;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjE2MDNFMDY1RDkwMTFFOUE1REVFRkMzNkI0RkNFNjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjE2MDNFMDc1RDkwMTFFOUE1REVFRkMzNkI0RkNFNjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMTYwM0UwNDVEOTAxMUU5QTVERUVGQzM2QjRGQ0U2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMTYwM0UwNTVEOTAxMUU5QTVERUVGQzM2QjRGQ0U2OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pok380EAAALWSURBVHjavJfLa9RQFMZPbiaZV2IUcaVoO4/WhcuCaxe6UVzoTvCNItgi2m4rCC59oCCooLa6VkQUQRH/AKsrcTOjbUER0RGn82qTyY3n1mQcw53kJp164MeQycn9vuTek3MjvX33HgRCadRrB2xqn1AUdZuiKLosJwg7YWNYlllvW9YHiZBpTdOn8O8lkUGlEHHdNM3zsiyPIimRASm1TfRzC01ewMNKUC4JOLePUjqvquqEqPDygERWUXjMcegsHh6MKs7+u4I8JISsg5ghSUTHn/vIHUQVEWfH95Cz0L84xm6EZ8Avfhk5BP2PPcjtIPG9yBlYvTiMHOGJZ5EbbKpgdeMSssEvPops4mUbazRIJGTh0bEywDB0XHDc+1iPjHeLM8a4Ra5nIZ/fAsNDOVCURKgwM1ksDkA+txnWGnqvtFNI2hPfgWzkZTUbLWg2FyGZVGGoOBhogAkXCgOQSadgcWkJavVGr1QD2e2J7+yVZVMK5fIcNFvBBvzCpdIctNt20EPa5YmPBGW1bRvKpb8G2GPtNsATtqx22AyNeOKDYZndBlLJZMdATGEWuWXj7goEUQOF4h8xZoBSJ46wN+8SiVKk/icQU/ifl0wlWsfoy8umijhMfFb0Cv8c+9dAhPjk3flMHGH2qHmLUDBmPPGXcYTZHPeqAoF44Ym/Rr5EFQ4rw5D5fuaJU+Q6t0kQIlTHPAMBzegm0uruaqydfvZnZbJp4XLyG9C1LC+t4m5YwHvJsGBd4DTyuLuYarUGlD/OY3Nphb2rOwaYSU3LwMJCnZcygXzn7WSeINf82WwQEeFOM0ID1WoNHMfxn5pGpoL2cOPujrPf8RQ5GbaBZIvvKHK1j8J3kf2IKbJvZwbOuRd8XYHoD3cnfJwnHPbF8ggZRiaRbxFEfyIXka3Ig5V8q3U+FN0dD9uBbHf7seFWxi+3P7xBXiHPhT8UOavyv8VvAQYAUQdVO3oKFvgAAAAASUVORK5CYII=);
				background-repeat: no-repeat;
				background-size: contain;
				top: 0.3rem;
				right: 0.4rem;
			}
		}
		/* 搜索按钮 */
		.search-btn {
			width: 1.1rem;
			span {
				position: static;
				padding: 0.1rem;
				line-height: 1em;
				box-sizing: border-box;
				background-color: #e93b3d;
				color: #fff;
				border-radius: 0.08rem;
				font-size: 0.26rem;
				line-height: 0.88rem;
			}
		}
		/* 搜索推荐词  */
		.recommend-word {
			width: 100%;
			background-color: #FFFFFF;
			position: fixed;
			top: 0.9rem;
			left: 0;
			ul {
				padding: 0 0.24rem;
			}
			li {
				line-height: 0.84rem;
				font-size: 0.26rem;
				color: #232326;
			}
			.tag {
				color: #686868;
				font-size: 0.24rem;
				display: block;
				height: 0.46rem;
				padding-left: 0.2rem;
				padding-right: 0.2rem;
				background-color: #f0f2f5;
				border-radius: 0.06rem;
				line-height: 0.46rem;
				margin-left: 0.2rem;
				margin-top: 0.18rem;
			}
		}
		.hot-word {
			padding: 1rem 0.24rem 0;
			p {
				font-size: 0.3rem;
				line-height: 0.3rem;
				color: #232326;
				width: 100%;
				margin: 0.3rem 0 0.2rem;
			}
			.garbage {
				float: right;
				display: block;
				width: 0.3rem;
				height: 0.3rem;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTc0MTUzQTA1RDkyMTFFOUFCRTY4NTg4RDFBRkZFN0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTc0MTUzQTE1RDkyMTFFOUFCRTY4NTg4RDFBRkZFN0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzNGMDlCOTVEOTIxMUU5QUJFNjg1ODhEMUFGRkU3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NzQxNTM5RjVEOTIxMUU5QUJFNjg1ODhEMUFGRkU3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXXx1gAAAEXSURBVHjaYvz//z/DQAEmhgEELJmZmcSoUwXiDiB2AWI+POo+AfEeIK4A4tsELSfCYnUgPgHEAkSoBTksCIidgNgCiG9SGuxtUIu3A7EUEDPiwVJQdQJQfRTHuQuUTgbi5wTUPoeqAwE3algOi+NXRKajt1CahxjLDwPxfzwYBv4QUAfDP5H04FN3eCCzGiMotduOyEJmUFl+GIpxAXzyJOvFVsIx4jHAhkw5rGazkGEAucBmNMGNWj5q+QhsQJKo/gieEvAIgdKRYsttyZQbjfPBa/knKC1JZXskoPQXfJbvgdJzkDRQCqSBeC6UvQtfaq+GdnW8iOggkAo+QM3H6fMb0D7WOiD+TCVLP0PNs4CaDwcAAQYAN/lEguxv/y4AAAAASUVORK5CYII=);
				background-size: contain;
			}
			.tag {
				height: 0.46rem;
				line-height: 0.46rem;
				border-radius: 0.06rem;
				display: inline-block;
				color: #686868;
				white-space: nowrap;
				text-overflow: ellipsis;
				background-color: #f0f2f5;
				padding-left: 0.26rem;
				padding-right: 0.26rem;
				overflow: hidden;
				box-sizing: border-box;
				margin: 0 0.2rem 0.2rem 0;
			}
		}
	}
</style>