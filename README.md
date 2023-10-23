# Weather App Demo

使用 vite 和 react-ts 进行开发的天气应用小 Demo

实现功能：

- 载入默认当前地理定位的天气数据
- 支持通过城市名搜索，获取所需要的城市的天气数据
- 可通过点击定位按钮时刻获取所在地理定位的天气数据

## Features

- React 18
- TypeScript
- Vite
- Less
- ESLint
- Axios

- Data by open-meteo.com（Weather Forecast API/Geocoding API）
- Icons: Iconfont

## Quick Setup

```bash
# clone the project
git clone git@github.com:xiqe/weather.git

# enter the project directory
cd weather

# install dependency
npm install

# develop
npm run dev
```

## Directory Structure

```
├── src                                     Renderer source code
│   ├── api                                 Api source code
│   ├── assets                              Asset source code
│   ├── components                          Components source code
│   ├── router                              React-router source code
│   ├── store                               Redux source code
│   └── utils                               Tool function source code
└── public                                  Static assets
```

## 项目实现路径

1. 阅读 open-meteo.com 的 API 文档，整理所需要的接口
   - Weather Forecast API 获取天气数据
   - Geocoding API 通过城市名获取地理定位
2. 搭建项目，安装所需技术架包，完成初次 `npm run dev`
   - 安装 vite，选取 react-ts template
   - 安装需要使用的 react 全家桶内容
   - 安装 Less 作为样式预处理器
   - 安装 axios 作为网络请求库
3. 参考天气应用，规划布局
   - 借鉴 iphone 天气应用布局
   - iconfont 创建项目，作为项目 icon 管理
4. 通过 axios 封装 api
5. 把 Weather Forecast API 文档的`weathercode`JSON 化，并且从 iconfont 寻找相应的 icon 进行匹配
6. 进行页面的 UI 编写
7. 进行接口调用并完成交互行为编写
   - 工具函数的编写和调用
   - component 的抽离和组件化调用
8. 优化模块
   - 编写防抖函数对 input 进行防抖处理
