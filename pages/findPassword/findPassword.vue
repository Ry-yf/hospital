<template>
	<view>
		<my-navbar :mTitle="mTitle"></my-navbar>
		<view style="margin-left: 288rpx;margin-top: 80rpx;">
			<!-- <u-image height="160" width="160" src="../../static/登录.png" shape="circle"></u-image> -->
			<image src="/static/DL.jpg" style="height: 160rpx; width: 160rpx; border-radius: 50px;margin-left: 15rpx;">
			</image>
		</view>
		<view style="margin: 40rpx 80rpx">
			<u-form :model="form" ref="uForm">
				<u-form-item>
					<wInput v-model="form.username" type="number" maxlength="11" placeholder="手机号" focus></wInput>
				</u-form-item>
			</u-form>
			<view style="margin-top: 40rpx;">
				<u-button @click="submit()" plain="false" type="info" shape="circle" hair-line="false">查询</u-button>
			</view>

			<view class="u-text-center u-line-1 u-font-14" style="margin-top: 20rpx;color: #24292E;">
				<text @click="register()">返回登录</text>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			register() {
				uni.navigateBack()
			},
		}
	}
</script>

<style>

</style>
