# styled-px2vw ✨
[![Build Status](https://travis-ci.com/hnzycfcfed/styled-px2vw.svg?branch=master)](https://travis-ci.com/hnzycfcfed/styled-px2vw)
[![npm Version](https://flat.badgen.net/npm/v/styled-px2vw)](https://www.npmjs.com/package/styled-px2vw)
[![NPM Downloads](https://flat.badgen.net/npm/dw/styled-px2vw)](https://www.npmjs.com/package/styled-px2vw)
[![dependencies Status](https://flat.badgen.net/david/dep/hnzycfcfed/styled-px2vw)](https://www.npmjs.com/package/styled-px2vw)
[![devDependencies Status](https://flat.badgen.net/david/dep/hnzycfcfed/styled-px2vw)](https://www.npmjs.com/package/styled-px2vw)
[![Github stars](https://flat.badgen.net/github/stars/hnzycfcfed/styled-px2vw)](https://github.com/hnzycfcfed/styled-px2vw)

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
Based on <font color=#0e59d8>750px</font> design draft. <br>
Currently incompatible with the official babel-plugin-styled-components plugin.

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
import styled from 'styled-components';

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
import styled from 'styled-px2vw';

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
