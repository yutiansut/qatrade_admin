export default {
  path: '/demo/community',
  title: '社区应用',
  icon: 'globe',
  children: (pre => [
    { path: `${pre}club`, title: '论坛', icon: 'code' },
    { path: `${pre}document`, title: '文档', icon: 'home' }
  ])('/demo/community/')
}
