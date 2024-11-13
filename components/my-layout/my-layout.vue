<template>
	<view class="wrap">
		<u-row class=""  gutter="10" >
			<u-col span="6">
				<view class="u-rela">			
					<view class="u-abso u-text-left left-text"
					style="color: #0038aa;">
						<view class="u-font-40">
							<text>关注健康</text>					
						</view>
						<view class="u-font-16">
							<text>Attention Health</text>	
						</view>						
					</view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill" 
					:src = "healthy" />
				</view>
			</u-col>
			<u-col span="6">
				<view class="u-rela">			
					<view class="u-abso u-text-right right-text"
					style="color: #FFFFFF;">
						<view class="u-font-40">
							<text>医者仁心</text>					
						</view>
						<view class="u-font-16">
							<text>Healer Kung</text>	
						</view>						
					</view>
					<view class="u-abso lay-image"></view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill" 
					:src = "heart" />
				</view>
			</u-col>
			<u-col span="6">
				<view class="u-rela" >			
					<view class="u-abso u-text-left left-text"
					style="color: #FFFFFF;">
						<view class="u-font-40">
							<text>自信笑容</text>					
						</view>
						<view class="u-font-16">
							<text>Confident Smile</text>	
						</view>						
					</view>
					<view class="u-abso lay-image" >
						
					</view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill" 
					:src = "smile"/>
				</view>
			</u-col>
			<u-col span="6">
				<view class="u-rela u-padding-0 ">			
					<view class="u-abso u-text-right right-text "
					style="color: #0038aa;">
						<view class="u-font-40">
							<text>品质生活</text>					
						</view>
						<view class="u-font-16">
							<text>Quality Life</text>	
						</view>						
					</view>
					<u-image 
					border-radius="5" 
					width="375" 
					height="375" 
					mode="aspectFill"  
					:src = "life"/>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		
		data(){
			return{
				healthy: require("../../static/healthy.jpg"),
				heart: require("../../static/heart.png"),
				smile: require("../../static/smile.jpg"),
				life: require("../../static/life.jpg"),
			}
		},
		methods : {
			
		}
		
	}
	
</script>

<style scoped lang="scss">
	.wrap {
		padding: 0rpx;
	}
	.left-text{
		top: 70%; 
		left: 30rpx;
		z-index: 10;
	}
	.right-text{
		top: 70%; 
		right: 30rpx;
		z-index: 10;
	}
	.lay-image{
		padding: 0rpx;
		width: 374rpx;
		height: 374rpx; 
		background-color: #0096e160;
		z-index: 9;
	}
</style>

