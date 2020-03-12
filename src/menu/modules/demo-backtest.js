export default {
  path: '/demo/backtest',
  title: '回测管理',
  icon: 'flask',
  children: (pre => [
    // { path: `${pre}tradeacc`, title: '账户', icon: 'home' },
    {
      title: '股票回测',
      icon: 'table',
      children: [
        { path: `${pre}backtest`, title: 'backtest' }
      ]
    },
    {
      title: '期货回测',
      icon: 'table',
      children: [
        { path: `${pre}backtest`, title: 'backtest' }
      ]
    },
    {
      title: 'ETF回测',
      icon: 'table',
      children: [
        { path: `${pre}backtest`, title: 'backtest' }
      ]
    },
    {
      title: 'T0模式回测',
      icon: 'table',
      children: [
        { path: `${pre}backtest`, title: 'backtest' }
      ]
    },
  //   {
  //     title: 'ISSUES',
  //     icon: 'github',
  //     children: [
  //       { path: `${pre}issues/142`, title: '#142' }
  //     ]
  //   }
  ])('/demo/backtest/')
}
