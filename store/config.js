
// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
export const saveStateKeys = ['vuex_user', 'vuex_token']

export const appTabbar = [{
		'pagePath':'/pages/index/index',
		'iconPath': require("../static/icon-index.png"),
		'selectedIconPath': require("../static/icon-index-sel.png"),
		'text': '首页'
	},
	{
		'pagePath': '/pages/physician/physician',
		'iconPath': require("../static/icon-dot.png"),
		'selectedIconPath': require("../static/icon-dot-sel.png"),
		'text': '医师',
	},
	{
		'pagePath': '/pages/appointment/appointment',
		'iconPath': require("../static/icon-pre.png"),
		'selectedIconPath': require("../static/icon-pre-sel.png"),
		'text': '预约'
	},
	{
		'pagePath': '/pages/mine/mine',
		'iconPath': require("../static/icon-me.png"),
		'selectedIconPath': require("../static/icon-me-sel.png"),
		'text': '我的'
	}
]
