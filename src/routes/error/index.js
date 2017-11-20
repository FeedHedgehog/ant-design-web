import { Button, notification } from 'antd';

const Error = (type) => {
  notification[type]({
    message: '提示',
    description: '登录失败，请输入正确的用户名和密码！',
  });
};


export default Error('error')
