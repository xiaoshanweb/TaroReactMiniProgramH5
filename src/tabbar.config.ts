const tabbarConfig = {
	custom: true,
	selectedColor: '#FF0000',
	list: [
		{
			pagePath: 'pages/index/index',
			text: '首页',
			iconPath: './assets/tabbar/home.png',
			selectedIconPath: './assets/tabbar/home_active.png',
		},
		{
			pagePath: 'pages/map/index',
			text: '地图',
			iconPath: './assets/tabbar/map.png',
			selectedIconPath: './assets/tabbar/map_active.png',
		},
		{
			pagePath: 'pages/warning/index',
			text: '异况',
			iconPath: './assets/tabbar/warning.png',
			selectedIconPath: './assets/tabbar/warning_active.png',
		},
	],
}
module.exports = tabbarConfig
