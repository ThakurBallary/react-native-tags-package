# React Native Tags Package
A complete package for all types of tags for react native apps

![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/react-native-tags-package.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-tags-package/)

## Getting Started

### Installation

```
npm i react-native-tags-package --save
```

### Usage

###### App.js
```
import React from 'react';
import { View } from 'react-native';

import { Tag, TagX } from './index';

const App = () => 
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Tag />
    <TagX />
  </View>

export default App;
```

### Props
###### Tag
Key | Type | Default | Value
--- | --- | --- | --- 
name | String | tag | any string
color | String | white | react native color formats
backgroundColor | String | black | react native color formats
borderRadius | Number | 0 | intergers
###### TagX
Key | Type | Default | Value
--- | --- | --- | --- 
name | String | tag | valid strings
icon | String | close-circle | icon name
color | String | white | react native color formats
backgroundColor | String | black | react native color formats
borderRadius | Number | 0 | intergers
onPress | Function | ()=>alert('Tag Pressed') | valid functions

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License](https://github.com/ThakurBallary/react-native-radio-buttons-group/blob/master/LICENSE)
