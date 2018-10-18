# styled-px2vw ✨
[![Travis (.org)](https://img.shields.io/travis/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://travis-ci.com/hnzycfcfed/styled-px2vw)
[![npm](https://img.shields.io/npm/v/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![npm](https://img.shields.io/npm/dw/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![David](https://img.shields.io/david/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![David](https://img.shields.io/david/dev/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://www.npmjs.com/package/styled-px2vw)
[![GitHub stars](https://img.shields.io/github/stars/hnzycfcfed/styled-px2vw.svg?style=flat-square)](https://github.com/hnzycfcfed/styled-px2vw/stargazers)

Extension of [styled-components](https://www.styled-components.com/) with features for convert px to vw units. <br>
See the documentation at [styled-components.com/docs](https://www.styled-components.com/docs) for more information about using styled-components!

Quicklinks to some of the most-visited pages:

- [Important](#important)
- [Motivation](#motivation)
- [Features](#features)
- [Installation](#installation)
- <strong>[Example](#example)</strong>
- [Migrate](#migrate)

## Important
Based on <font color=#0e59d8>750px</font> design draft.

## Motivation
Styled-px2vw mainly solves the problem of screen adaptation of multiple device sizes on mobile, The size of mobile devices is various, The current popular solution is to use vw units, Unfortunately, styled-components does not support this feature, so we developed the styled-px2vw component to solve the adaptation problem, Of course, there may be many problems in this, I hope that developers join together to optimize styled-px2vw, together to create a better front-end ecosystem.

## Features
- Suitable for mobile phones
- Supports [Adapting based on props](https://www.styled-components.com/docs/basics#adapting-based-on-props)
- Supports [Extending Styles](https://www.styled-components.com/docs/basics#extending-styles)
- Supports [.attrs constructor](https://www.styled-components.com/docs/api#attrs)

## Installation
yarn:
```
yarn add styled-px2vw
```
npm:
```
npm i --save styled-px2vw
```

## Example
![style](/docs/images/style.png)

Output

![converted](/docs/images/converted.png)

Screenshot

![screenshot](/docs/screenshot/screenshot.png)

## Migrate
Just change styled-components to styled-px2vw

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
import styled, { createGlobalStyle,... } from 'styled-px2vw';

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
