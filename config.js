module.exports = {
  mailOption: {
    host: 'stmp.xxx.com', // stmp 例如 smtp.qq.com
    port: 465,
    secure: true,
    to: 'to@mail.com',
    auth: {
      user: 'yourmail@mail.com', // 邮件账号
      pass: 'token'  // stmp授权码
    },
  },
  timeoutSeconds: 10 // 请求页面多少秒超时，默认10秒
};
