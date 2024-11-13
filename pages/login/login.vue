<template>
	<view >
		<my-navbar :mTitle = "mTitle"></my-navbar>
		<view style="margin-left: 288rpx;margin-top: 80rpx;">
			<!-- <u-image height="160" width="160" src="../../static/登录.png" shape="circle"></u-image> -->
			<image src="/static/DL.jpg" style="height: 160rpx; width: 160rpx; border-radius: 50px;margin-left: 15rpx;"></image>
		</view>
		<view style="margin: 40rpx 80rpx">
			<u-form :model="form" ref="uForm">
				<u-form-item>
					<wInput v-model="form.username" 
					type="number" maxlength="11" 
					placeholder="手机号" focus></wInput>
				</u-form-item>
				<u-form-item>
					<wInput v-model="form.password"
					type="password"  
					placeholder="登录密码"></wInput>
				</u-form-item>
			</u-form>
			<view style="margin-top: 40rpx;">
				<u-button 
				@click="submit()"
				plain="false" 
				type="info" 
				shape="circle" 
				hair-line="false">登录</u-button>
			</view>
			
			<view class="u-line-1 u-text-center" style="margin-top: 100rpx;">
				<u-icon @click="weixinLogin" name="weixin-circle-fill" size="60"></u-icon>
				<u-icon name="weibo-circle-fill" size="60" style="margin: 0rpx 60rpx;"></u-icon>
				<u-icon name="github-circle-fill" size="60"></u-icon>
			</view>
			<view class="u-text-center u-line-1 u-font-14" 
			style="margin-top: 20rpx;color: #24292E;">
				<text @click="findPassword">找回密码</text>
				<text style="margin: 0rpx 10rpx;">|</text>
				<text @click="register">注册账号</text>
			</view>
		</view>
	</view>
</template>
<script>

	export default {
		
	    data() {
	      return {
			mTitle:'登 录',
			form:{
				username:'',
				password:'',
				user:'',
				pwd:''
			}
			}
		},
		onLoad:function(option) {
			this.$data.form.user = option.username
			this.$data.form.pwd = option.password
			console.log(option)
			console.log(this)
		},
		onShow() {
			
		},
	    methods: {
			submit(){
				if(this.form.username == this.form.user){
					// console.log('1')
					if(this.form.password == this.form.pwd){
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
				}
				else{
					// console.log(this.form.username)
					// console.log(this.form.user)
					// console.log(this.form.password)
					// console.log(this.form.pwd)
					// console.log(this.form.username == this.form.user)
					// console.log(this.form.password == this.form.pwd)
					uni.showToast({
						title: '账号密码不正确',
						icon: 'error',
						duration: 2000
					})
				}
			},
			weixinLogin(){
				console.log('微信')
				this.$u.route('/pages/authorize/authorize')
			},
			register(){
				console.log('register')
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			findPassword(){
				uni.navigateTo({
					url: '/pages/findPassword/findPassword'
				})
			}
		}
	}
</script>

<style lang="scss">
</style>