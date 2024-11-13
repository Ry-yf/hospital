import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from '@/config/config.js'
import {
	saveStateKeys,
	appTabbar
} from './config.js'
Vue.use(Vuex)

let lifeData = {}

try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData')
} catch (e) {

}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
// const saveStateKeys = ['vuex_user', 'vuex_token']

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
	// 判断变量名是否在需要存储的数组中
	if (saveStateKeys.indexOf(key) !== -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData')
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp || {}
		tmp[key] = value
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp)
	}
}

const store = new Vuex.Store({
	state: {
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {
			nickName: '游客'
		},
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : '',
		// 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
		vuex_name: appConfig.name,
		vuex_version: appConfig.version,
		// 自定义tabbar数据
		vuex_tabbar: appTabbar,
		order: [{
				status: '已完成',
				img: require('../static/3dci.jpg'),
				orderId: 10001,
				projectName: "拔牙服务",
				price: 100,
				number: 1
			},
			{
				status: '已取消',
				img: require('../static/3dci.jpg'),
				orderId: 10000,
				projectName: "拔牙服务",
				price: 100,
				number: 5
			},
			{
				status: '进行中',
				img: require('../static/3dci.jpg'),
				orderId: 10002,
				projectName: "3d陶瓷补牙",
				price: 500,
				number: 2
			},
			{
				status: '待支付',
				img: require('../static/3dci.jpg'),
				orderId: 10003,
				projectName: "种牙",
				price: 3000,
				number: 2
			},
		],
		orderId: 10004,
		orderIndex: 4,
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			const nameArr = payload.name.split('.')
			let saveKey = ''
			const len = nameArr.length
			if (len >= 2) {
				let obj = state[nameArr[0]]
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]]
				}
				obj[nameArr[len - 1]] = payload.value
				saveKey = nameArr[0]
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value
				saveKey = payload.name
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		},
		addorder(state, payload) {
			state.order[state.orderIndex] = payload
			state.orderId = state.orderId + 1
			state.orderIndex = state.orderIndex + 1
		}
	},
	getters: {
		getOrderId: state => {
			return state.orderId
		},
		getorder: state => {
			return state.order
		}
	}
})

export default store