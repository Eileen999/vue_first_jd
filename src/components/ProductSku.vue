<template>
	<div class="sku mask" v-show="value" @click="$emit('input',false);">
		<transition name="slide">
			<div class="main" v-show="value" @click.stop>
				<div class="header"></div>
				<div class="body"></div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: {
			value: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
	.mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, .7);
		z-index: 999999;
	}
	
	.mask .main {
		width: 100%;
		height: 9.2rem;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	.sku .slide-enter {
		bottom: -9.2rem;
	}
	
	.sku .slide-enter-active {
		transition: bottom 0.3s;
	}
	
	.sku .slide-enter-to {
		bottom: 0;
	}
	
	.sku .slide-leave {}
	
	.sku .slide-leave-active {}
	
	.sku .slide-leave-to {}
</style>