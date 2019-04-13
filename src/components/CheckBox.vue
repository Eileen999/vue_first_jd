<template>

	<div class="check-box" :class="{checked:check}" @click="onChange">

	</div>

</template>

<script>
	export default {
		data() {
			return {
				check: false,
				selected: [],
			}
		},
		// 可以改变v-model 接受的属性和传递参数出去的自定义事件
		model: {
			prop: 'arr',
			event: 'input'
		},
		props: {
			arr: {
				// 我既能接受 布尔值，也要接受数组
				type: [Boolean, Array],
				default: false
			},
			value: {
				default: '',
			}
		},
		watch: {
			arr(val) {
				if(typeof val == 'boolean') {
					this.check = val;
				} else if(typeof val == 'object') {
					this.selected = val;
					// 判断 value是否在数组中。
					let flag = false;
					this.selected.forEach(item => {
						if(item == this.value) {
							flag = true;
						}
					});
					this.check = flag;
				}
			}
		},
		created() {

			if(typeof this.arr == 'boolean') {
				this.check = this.arr;
			} else if(typeof this.arr == 'object') {
				this.selected = this.arr;
				// 判断 value是否在数组中。
				let flag = false;
				this.selected.forEach(item => {
					if(item == this.value) {
						flag = true;
					}
				});
				this.check = flag;
			}

		},
		methods: {
			onChange() {
				this.check = !this.check;
				
				if(this.check){
					this.selected.push(this.value);
				}else{
					// 删除这个value
					var index = 0;
					this.selected.forEach((item,inx)=>{
						if(item==this.value){
							index = inx;
						}
					});
					
					this.selected.splice(index,1);
				}
				
				if(typeof this.arr == 'boolean') {
					this.$emit('input', this.check);
				} else if(typeof this.arr == 'object') {
					this.$emit('input', this.selected);
				}
			}
		}
	}
</script>

<style>
	.check-box {
		display: inline-block;
		width: 0.4rem;
		height: 0.4rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTJqampmZmZmZmZubm5ubm6KiopeXl5mZmZmZmaKiopmZmVmXLrgAAAALdFJOUwBD8KiAagslwtYWexMYygAAAOVJREFUKM9jYICAUotJms3hDMiAy3M3GExZgBBjc9qtHFiWLmq0WyUBLii02xDCEN6tCBNj2d0IY0rsdoBqtt6KMCl6M8QA5k0CCEFGbQMw7a2O7JCiLWC53QLIghBu0lYUJzNEq4F0N6AKcgD1c2kLoAoyblrAwLKZAQ1YOzBwbkQXlJ7AUK2ALsi0nSHaAF2QeSuDdQC6IOtmhm4BdEHGHQyzC9AF2XcyaCegC7Jtwi6IVTtWi7A6CavjsXoTa4BgDTqsgYw1OrBHHNYoxpoYsCcbrAkMa1LEnmixJ2+sGQE9ywAARBBNCX4Tud8AAAAASUVORK5CYII=);
		background-size: contain;
	}
	
	.check-box.checked {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAANlBMVEUAAADpPD3tO0HrPD7qPD7qOz7qPD3pOz7qPD3qPD3pPD7rPD/pQkLzRkbqQEDpPUH/VVXpOz3Rbw31AAAAEXRSTlMA6iuA81DZ07+rpXIjFgw7CVCvuuwAAADZSURBVDjLjdVbrsMgDATQoThAeYTO/jd7fy6ioU7wfCXKEY4lMLimlpyCSEi5VNym+civRN9UdnrhEvHnrzsclbhjdZ438Rf2efM27w9mptOkUndT/eAm/x2dbgfdOQsbijfZQ2lzwf2S8eHf+ugzAvXBvdDHc0V5ci83XgqyyTEjmRwTgskxQEyOAjE5yix9dHfvGGYzfXzUHBPysozumFG4SNWxoC4t6I4ViFepuzi22ZSqo183rutdc9LMR8F+uOzH1T4A9iPFPqTsY88+SO2j2T7szdfHHy1xS+1j0wOxAAAAAElFTkSuQmCC);
	}
</style>