const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'laptop',
    name: '首页',
    route: '/dashboard',
  },
  {
    id: '2',
    bpid: '1',
    name: '用户',
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    bpid: '1',
    name: '商店',
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    id: '21',
    mpid: '-1',
    bpid: '2',
    name: '用户信息',
    route: '/user/:id',
  },
  {
    id: '3',
    bpid: '1',
    name: '请求',
    icon: 'api',
    route: '/request',
  },
  {
    id: '4',
    bpid: '1',
    name: '界面元素',
    icon: 'camera-o',
  },
  {
    id: '41',
    bpid: '4',
    mpid: '4',
    name: '图标',
    icon: 'heart-o',
    route: '/UIElement/iconfont',
  },
  {
    id: '42',
    bpid: '4',
    mpid: '4',
    name: '数据表格',
    icon: 'database',
    route: '/UIElement/dataTable',
  },
  {
    id: '43',
    bpid: '4',
    mpid: '4',
    name: '选项',
    icon: 'bars',
    route: '/UIElement/dropOption',
  },
  {
    id: '44',
    bpid: '4',
    mpid: '4',
    name: '搜索',
    icon: 'search',
    route: '/UIElement/search',
  },
  {
    id: '45',
    bpid: '4',
    mpid: '4',
    name: '编辑',
    icon: 'edit',
    route: '/UIElement/editor',
  },
  {
    id: '46',
    bpid: '4',
    mpid: '4',
    name: '图层',
    icon: 'credit-card',
    route: '/UIElement/layer',
  },
  {
    id: '5',
    bpid: '1',
    name: '图表',
    icon: 'code-o',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: 'ECharts',
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '52',
    bpid: '5',
    mpid: '5',
    name: 'highCharts',
    icon: 'bar-chart',
    route: '/chart/highCharts',
  },
  {
    id: '53',
    bpid: '5',
    mpid: '5',
    name: 'Rechartst',
    icon: 'area-chart',
    route: '/chart/Recharts',
  },
  {
    id: '6',
    bpid: '1',
    name: '导航',
    icon: 'setting',
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: '测试导航1',
    route: '/navigation/navigation1',
  },
  {
    id: '62',
    bpid: '6',
    mpid: '6',
    name: '测试导航2',
    route: '/navigation/navigation2',
  },
  {
    id: '621',
    bpid: '62',
    mpid: '62',
    name: '测试导航21',
    route: '/navigation/navigation2/navigation1',
  },
  {
    id: '622',
    bpid: '62',
    mpid: '62',
    name: '测试导航22',
    route: '/navigation/navigation2/navigation2',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
