export default {
  path: '/demo/frame',
  title: 'QACommunity',
  icon: 'globe',
  children: (pre => [
    { path: `${pre}qadeskpro`, title: 'qadeskpro', iconSvg: 'd2-admin' },
    { path: `${pre}html`, title: '研究Lab', icon: 'code' },
    { path: `${pre}index`, title: 'airflow管理 ', icon: 'home' }
  ])('/demo/frame/')
}
