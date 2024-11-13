<template>		
	<view style="background-color:#f4f4f4 ;">
		<my-navbar></my-navbar>
		<my-swiper></my-swiper>
		<u-line color="#f4f4f4" />
		<view>
			
			<!-- 宫格区域 -->
			<view style="margin: 20rpx 0;">
				<my-grid></my-grid>				
			</view>
			<!-- 中间区域 -->
			<view class="" style="background-color:#f4f4f4 ;">
				<u-image style="z-index: 2;" width="100%" height="120rpx" :src="src"></u-image>
			</view>
			<!-- 四个插画区域 -->
			<view>
				<my-layout></my-layout>
			</view>
		</view>	
		<my-tabbar></my-tabbar>
	</view>		
</template>

<script>
	
	export default {
		data() {
			return {
			  title: 'Hello',
			  src: ''
			}
		},
		onLoad() {
			this.src = require("../../static/ddd.jpg")
		},
		onShow() {
			
		},
		created() {
			
		},
		onReady() {
			
		},
		methods: {
			clickButton() {
				this.$dy_tool.openURL('http://www.baidu.com')
			}
		}
	}
</script>

<style lang="scss" scoped>
	view{
		background-color:#f4f4f4 ;
	}

</style>
