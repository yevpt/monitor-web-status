const {getArgs, eachList, checkUrl} = require('./utils')

const {timeoutSeconds} = require('./config')

const urlList = getArgs();
eachList(urlList, item => {
  checkUrl(item, timeoutSeconds || 10)
});
