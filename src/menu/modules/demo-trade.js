export default {
  path: '/demo/trade',
  title: '交易账户',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}tradeacc`, title: '账户', icon: 'home' }
    // {
    //   title: '表格',
    //   icon: 'table',
    //   children: [
    //     { path: `${pre}table/1`, title: '表格 1' }
    //   ]
    // },
  //   {
  //     title: 'ISSUES',
  //     icon: 'github',
  //     children: [
  //       { path: `${pre}issues/142`, title: '#142' }
  //     ]
  //   }
  ])('/demo/trade/')
}
