<template>
	<view class="wrap">
		<u-swiper :list="list" 
		:effect3d="true"
		title="true" 
		height="300" 
		border-radius="0"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: require("../../static/Lbt1.jpg"),
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: require("../../static/Lbt2.jpg"),
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: require("../../static/Lbt3.jpg"),
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						image: require("../../static/Lbt4.jpg"),
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0rpx;
	}
</style>