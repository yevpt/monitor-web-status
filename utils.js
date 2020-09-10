const http = require('http')
const https = require('https')
const minimist = require('minimist')
const mail = require('./mail')

function checkUrl(url, trySeconds) {
  _checkUrlStatus(url, trySeconds).then(res => {
    console.log(`${url}请求正常！`)
  }).catch(e => {
    console.log(`${url}似乎出了问题，请及时检查！`)
    mail('你的网站可能出了点问题！', `${url}似乎出了问题，请及时检查！`);
  });
}

function getArgs() {
  return minimist(process.argv.slice(2))._;
}

function eachList(list, callback) {
  if (list && list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  }
}

function get(url, callback) {
  const protocol = url.startsWith('https') ? https : http;
  return protocol.get(url, callback)
}

function _checkUrlStatus(url, trySeconds) {
  return new Promise((resolve, reject) => {
    get(url, res => {
      res.on('data', function (data) {
      });
      res.on("end", _ => {
        resolve();
      });
    }).on('error', (e) => {
      reject(`请求网站失败:${e.message}`);
    });

    const timeCount = seconds => {
      if (seconds > 0) {
        setTimeout(() => {
          timeCount(--seconds)
        }, 1000);
      } else {
        reject('请求超时！');
      }
    }

    setTimeout(() => {
      timeCount(trySeconds)
    }, 1000);
  })
}

module.exports = {
  get,
  eachList,
  getArgs,
  checkUrl
}
