export default {
  path: '/demo/realtime',
  title: '实时大屏',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}futuremonitor`, title: '实时期货大屏', iconSvg: 'cluster' },
    { path: `${pre}stockmonitor`, title: '实时股票大屏', iconSvg: 'center' },
    { path: `${pre}trademonitor`, title: '实时交易大屏', iconSvg: 'tradepanel' },
    { path: `${pre}riskmonitor`, title: '实时风控大屏', iconSvg: 'riskpanel' }
  //   {
  //     title: 'ISSUES',
  //     icon: 'github',
  //     children: [
  //       { path: `${pre}issues/142`, title: '#142' }
  //     ]
  //   }
  ])('/demo/realtime/')
}
