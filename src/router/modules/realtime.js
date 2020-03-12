import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/realtime',
  name: 'demo-realtime',
  meta,
  redirect: { name: 'demo-realtime-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'futuremonitor',
      name: `${pre}futuremonitor`,
      component: _import('demo/realtime/futuremonitor'),
      meta: {
        ...meta,
        title: '期货大屏'
      }
    },
    {
      path: 'stockmonitor',
      name: `${pre}stockmonitor`,
      component: _import('demo/realtime/stockmonitor'),
      meta: {
        ...meta,
        title: '股票大屏'
      }
    },
    {
      path: 'trademonitor',
      name: `${pre}trademonitor`,
      component: _import('demo/realtime/trademonitor'),
      meta: {
        ...meta,
        title: '交易大屏'
      }
    },
    {
      path: 'riskmonitor',
      name: `${pre}riskmonitor`,
      component: _import('demo/realtime/riskmonitor'),
      meta: {
        ...meta,
        title: '风控大屏'
      }
    }
  ])('demo-trade-')
}
