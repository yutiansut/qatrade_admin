import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/frame',
  name: 'demo-frame',
  meta,
  redirect: { name: 'demo-frame-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'html', name: `${pre}html`, component: _import('demo/frame/html'), meta: { ...meta, title: '研究Lab' } },
    { path: 'qadeskpro', name: `${pre}qadeskpro`, component: _import('demo/frame/qadeskpro'), meta: { ...meta, title: 'qadeskpro' } },
    { path: 'index', name: `${pre}index`, component: _import('demo/frame/index'), meta: { ...meta, title: 'airflow计划任务' } }
  ])('demo-frame-')
}
