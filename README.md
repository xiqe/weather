# Weather App Demo

使用 vite 和 react-ts template 进行开发的应用小Demo

通过获取当前地理位置以及搜索城市来获取所需地区的天气情况

## Features
- React 18
- TypeScript
- Vite
- Less
- ESLint
- Axios

- Data by open-meteo.com（Weather Forecast API/Geocoding API）
- Icons:  Iconfont

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
│   └── utils                               Preload-scripts source code
└── public                                  Static assets
```