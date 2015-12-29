# chrome-env

[![dependencies Status](https://img.shields.io/david/lmk123/chrome-env.svg?style=flat-square)](https://david-dm.org/lmk123/chrome-env)
[![devDependencies Status](https://img.shields.io/david/dev/lmk123/chrome-env.io.svg?style=flat-square)](https://david-dm.org/lmk123/chrome-env#info=devDependencies)
[![NPM Version](https://img.shields.io/npm/v/chrome-env.svg?style=flat-square)](https://www.npmjs.com/package/chrome-env)

chrome-env 的目标是给单元测试环境（例如 Karma）提供一个在 Chrome 应用/扩展程序中才有的 `chrome` 对象。

在使用之前，你需要注意以下几点：

 + chrome-env 并不包含所有 chrome API。创建它的初衷是因为我写了一些 Chrome 扩展/应用，而这些程序都需要单元测试。所以，目前 chrome.js 包含的 API 都仅仅是我自己用得到的 API。当然，欢迎你提交 PR 添加更多 API。
 + chrome-env 里的所有函数都仅仅只是一个空函数，它不会执行任何逻辑，仅仅会返回正确的值：大部分情况下是 `undefined`，因为大部分 chrome API 的值都在回调函数里；或者如果它是一个同步方法，则返回正确的类型。

这意味着，你需要自己定义函数的逻辑，以 Jasmine 为例：

```js
spyOn(chrome.browserAction,'setBadgeText').and.callFake(()=>{ ... });
```

## 安装

```
npm i -D chrome-env
```

## 许可

MIT
