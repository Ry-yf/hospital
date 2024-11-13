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
				<u-form-item>
					<wInput v-model="form.password" type="password" placeholder="注册密码"></wInput>
				</u-form-item>
			</u-form>
			<view style="margin-top: 40rpx;">
				<u-button @click="submit()" plain="false" type="info" shape="circle" hair-line="false">注册</u-button>
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
				mTitle: '注册',
				form: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			register() {
				uni.navigateBack()
			},
			showToast() {
				this.$refs.uToast.show({
					title: '注册失败',
					type: 'error'
				})
			},
			submit(params) {
				const phoneReg = /^1[3456789]\d{9}$/
				const regax = /^[0-9]{6,18}$/
				if (phoneReg.test(this.form.username)) {
					if (regax.test(this.form.password)) {
						uni.showToast({
							title: '注册成功',
							duration: 2000,
						})
						setTimeout(() =>{
							console.log('test')
							this.$u.route({
								url:'/pages/index/index',
								type:'tab'
							})
						}, 2000);
					}
				} else {
					console.log("输入账号密码不规范,请重新输入")
					uni.showToast({
						title: '注册失败',
						icon: none,
						duration: 2000
					})
				}
			},
		}
	}
</script>

<style>

</style>