# styled-px2vw ✨
[![Travis (.org)](https://img.shields.io/travis/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://travis-ci.org/hnzycfcfed/styled-px2vw)
[![npm](https://img.shields.io/npm/v/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![npm](https://img.shields.io/npm/dm/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![David](https://img.shields.io/david/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![David](https://img.shields.io/david/dev/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![GitHub stars](https://img.shields.io/github/stars/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://github.com/hnzycfcfed/styled-px2vw/stargazers)

在 [styled-components](https://www.styled-components.com/) 基础上实现了 px -> vw 单位转换的功能 <br>
详细文档请参考： [styled-components.com/docs](https://www.styled-components.com/docs)

快速访问:

- [styled-px2vw ✨](#styled-px2vw-%E2%9C%A8)
  - [重要提示](#%E9%87%8D%E8%A6%81%E6%8F%90%E7%A4%BA)
  - [动机](#%E5%8A%A8%E6%9C%BA)
  - [特性](#%E7%89%B9%E6%80%A7)
  - [安装](#%E5%AE%89%E8%A3%85)
  - [示例](#%E7%A4%BA%E4%BE%8B)
  - [迁移](#%E8%BF%81%E7%A7%BB)
  - [License](#license)

## 重要提示
以 <font color=#0e59d8>750px</font> 设计稿为基准.

## 动机
styled-px2vw 主要为解决移动设备上多种屏幕尺寸的适配问题，移动设备的尺寸各不相同，目前流行的解决方案是使用 vw 单位，但是目前 styled-components 不支持这个功能，所以我们开发了 styled-px2vw 组件来解决适配问题，当然，这可能还存在很多问题，希望开发人员一起来优化 styled-px2vw，共同创造更好的前端生态系统。

## 特性
- 适用于移动端
- 支持 [props 属性](https://www.styled-components.com/docs/basics#adapting-based-on-props)
- 支持 [继承样式](https://www.styled-components.com/docs/basics#extending-styles)
- 支持 [.attrs 构造](https://www.styled-components.com/docs/api#attrs)

## 安装
yarn:
```
yarn add styled-px2vw
```
npm:
```
npm i --save styled-px2vw
```

## 示例
![style](/docs/images/style.png)

Output

![converted](/docs/images/converted.png)

Screenshot

![screenshot](/docs/screenshot/screenshot.png)

## 迁移
只需要修改 styled-components -> @zycfc/styled-px2vw 的导入即可

```javascript
import styled, { createGlobalStyle,... } from 'styled-components';

const Button = styled.button`
  color: white;
  font-size: 36px;
  margin: 10px;
  height: 85px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
```
to
```javascript
import styled, { createGlobalStyle,... } from '@zycfc/styled-px2vw';

const Button = styled.button`
  color: white;
  font-size: 36px;
  margin: 10px;
  height: 85px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
```

## License

Licensed under the MIT License, Copyright © 2018-present hnzycfc.com, https://www.hnzycfc.com/

See [LICENSE](./LICENSE) for more information.
