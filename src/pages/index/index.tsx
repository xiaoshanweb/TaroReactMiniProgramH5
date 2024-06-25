import React, { useEffect } from 'react'
import PageContainer from '@/components/page_container'
import { Button, View } from '@tarojs/components'
import Router from '@/utils/route'

import './index.scss'

const Index = (): JSX.Element => {
	useEffect(() => {
		console.log('process.env', process.env.TARO_ENV)
		console.log('TARO_API_BASE', process.env.TARO_API_BASE)
	}, [])

	/**
	 * 跳转demo页面
	 */
	const jumpToDemo = (demoType: 'router' | 'form') => {
		switch (demoType) {
			case 'router':
				Router.navigateTo({
					url: '/demo/router/router',
				})
				break
			case 'form':
				Router.navigateTo({
					url: '/demo/form/form',
				})

				break
		}
	}

	return (
		<PageContainer
			title="首页"
			containerClass="index"
		>
			<View
				className="btn-style"
				onClick={() => jumpToDemo('router')}
			>
				路由跳转
			</View>
			<View
				className="btn-style"
				onClick={() => jumpToDemo('form')}
			>
				表单验证
			</View>
			<Button type="primary">测试按钮</Button>
		</PageContainer>
	)
}

export default Index
