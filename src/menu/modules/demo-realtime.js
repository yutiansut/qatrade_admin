export default {
  path: '/demo/realtime',
  title: '实时大屏',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}futuremonitor`, title: '实时期货大屏', icon: 'home' },
    { path: `${pre}stockmonitor`, title: '实时股票大屏', icon: 'home' },
    { path: `${pre}trademonitor`, title: '实时交易大屏', icon: 'home' },
    { path: `${pre}riskmonitor`, title: '实时风控大屏', icon: 'home' }
  //   {
  //     title: 'ISSUES',
  //     icon: 'github',
  //     children: [
  //       { path: `${pre}issues/142`, title: '#142' }
  //     ]
  //   }
  ])('/demo/realtime/')
}
