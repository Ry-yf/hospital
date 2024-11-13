<template>
	<view style="background-color: #fefefe;">
		<my-navbar></my-navbar>
		<view>
			<view class="u-text-center m-avatar">
				<view class="m-avatar-img u-text-center">
					<u-avatar :src="nameicon" size="150" bg-color="#fefefe"> </u-avatar>
				</view>
				<view class="u-text-center u-font-18" style="margin-top: 18rpx;">
					<text style="color: #fefefe;">欢迎您：云翳云菲</text>
				</view>
			</view>

			<view class="m-cell" style="margin-top: -40rpx;">
				<u-cell-group>
					<u-cell-item @click="getOrder()" title="所有订单"></u-cell-item>
					<u-grid :col="3">
						<u-grid-item>
							<u-icon :size="60"
								:name="doing">
							</u-icon>
							<view class="grid-text">进行中</view>
						</u-grid-item>
						<u-grid-item>
							<u-icon :size="60"
								:name="WC">
							</u-icon>
							<view class="grid-text">已完成</view>
						</u-grid-item>
						<u-grid-item>
							<u-icon :size="60"
								:name="shut">
							</u-icon>
							<view class="grid-text">已取消</view>
						</u-grid-item>
					</u-grid>
				</u-cell-group>
			</view>
			<view class="m-cell">
				<u-cell-group>
					<u-cell-item title="最新消息"></u-cell-item>
					<u-cell-item title="我的订阅"></u-cell-item>
					<u-cell-item title="我的表单"></u-cell-item>
				</u-cell-group>
			</view>
			<view class="m-cell">
				<u-cell-group>
					<u-cell-item title="广东省广州市xx县xx号"></u-cell-item>
					<u-cell-item title="电话:1999999999"></u-cell-item>
					<u-cell-item title="工作时间:周一至周五 09:00—18:00"></u-cell-item>
					<u-cell-item title="码农口腔医院"></u-cell-item>
				</u-cell-group>
			</view>
		</view>
		<!-- <view style="margin-top: 20rpx ;"></view> -->
		<my-tabbar></my-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shut: require("../../static/已取消.png"),
				WC: require("../../static/已完成.png"),
				doing: require("../../static/进行中.png"),
				nameicon:require("../../static/我的.jpg"),
				userInfo:{},
				name:'用户'
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync("userInfo")
			this.avatar = this.userInfo.avatarUrl
			this.name = this.userInfo.nickName
		},
		methods: {
			getOrder(){
				this.$u.route('/pages/order/order')
			}
		}
	}
</script>

<style>
	.m-avatar-img {
		height: 150rpx;
		width: 150rpx;
		position: relative;
		left: 40%;
		border-radius: 50px;
		box-shadow: 0rpx 2rpx 10rpx #000000;
	}

	.m-cell {
		margin-top: 20rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
		background-color: #159FDE;
		/* border: 1rpx solid #878787; */
		/* border-radius: 20rpx; */
		box-shadow: 0rpx 0rpx 10rpx #878787;
	}

	.m-avatar {
		z-index: -1;
		height: 350rpx;
		padding: 40rpx 0rpx;
		padding-top: 50rpx;
		background-color: #159FDE;
	}
</style>
