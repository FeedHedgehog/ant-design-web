import { message } from 'antd'
import dva from 'dva'
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import 'babel-polyfill'
import { Button, notification } from 'antd';


const openNotificationWithIcon = (type) => {
  notification[type]({
    message: '系统提示：',
    description: '登录失败，请输入正确的用户名和密码！',
  });
};

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHistory(),
  onError (error) {
    // message.error(error.message)
    openNotificationWithIcon('error')
  },
})

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
