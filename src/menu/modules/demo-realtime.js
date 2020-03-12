export default {
    path: '/demo/realtime',
    title: '实时大屏',
    icon: 'flask',
    children: (pre => [
      { path: `${pre}tradeacc`, title: '实时期货大屏', icon: 'home' },
      {
        title: '表格',
        icon: 'table',
        children: [
          { path: `${pre}table/1`, title: '表格 1' }
        ]
      },
    //   {
    //     title: 'ISSUES',
    //     icon: 'github',
    //     children: [
    //       { path: `${pre}issues/142`, title: '#142' }
    //     ]
    //   }
    ])('/demo/realtime/')
  }
  