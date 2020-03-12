import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/trade',
  name: 'demo-trade',
  meta,
  redirect: { name: 'demo-trade-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'tradeacc',
      name: `${pre}tradeacc`,
      component: _import('demo/trade/tradeacc'),
      meta: {
        ...meta,
        title: '交易账户'
      }
    },
    {
      path: 'table/1',
      name: `${pre}table-1`,
      component: _import('demo/business/table/1'),
      meta: {
        ...meta,
        title: '表格 1'
      }
    },
  ])('demo-trade-')
}
