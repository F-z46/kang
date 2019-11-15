### 初始化 pakeage.json
>npm init 或者 npm init -y      -y表示默认

### 安装webpack webpack-cli

>npm i webpack webpack-cli -D

### 创建webpack配置文件
>touch webpack.config.js

### 在package.json文件script写入打包命令
```javascript
"scripts": {
    "build": "webpac --config=webpack.config.js"
  }
```

### loader处理css
>npm i style-loader css-loader -D


### loader处理less
>npm i stylr-loader css-loader less-loader less -D

### 分离css
>npm i mini-css-exetract-plugin -D