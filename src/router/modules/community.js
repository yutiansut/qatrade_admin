import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/community',
  name: 'demo-community',
  meta,
  redirect: { name: 'demo-community-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'club', name: `${pre}club`, component: _import('demo/community/club'), meta: { ...meta, title: '论坛' } },
    { path: 'document', name: `${pre}document`, component: _import('demo/community/document'), meta: { ...meta, title: '文档' } }
  ])('demo-community-')
}
