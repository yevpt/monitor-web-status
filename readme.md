# 网站运行监控脚本

本脚本用来监控指定的HTTP(S)服务的运行状态，并且当某个链接运行故障时发送通知邮件。

### 安装依赖
``` 
npm install
```
### 配置参数

``` js
module.exports = {
  mailOption: {
    host: '', // 例如 smtp.qq.com
    port: 465,
    secure: true,
    to: '',  // 接收邮箱
    auth: {
      user: '', // 发送邮件账号
      pass: ''  // stmp的授权码
    },
  },
  timeoutSeconds: 10 // 请求页面多少秒超时，默认10秒
};
```

### 使用方法
```
命令格式：node ./main url url ...
例如： node ./main  http://baidu.com https://xxxx.com
```


