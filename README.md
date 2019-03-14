# koa-symphony

## start
基于 koa2的框架。
采用三层架构，mvc思想，分离视图层和业务处。
集成了twig.js，webpack4，sequelize等组件。
方便了数据库查询，以及模版渲染

请使用 https://www.npmjs.com/package/cli-koa 生成项目
```
yarn global add cli-koa
cli-koa init <projectName>
```


## 目录及参数说明
```
config: 配置文件目录
config/db.json: 数据库配置文件
config/parameters.js：项目配置文件
```


## 中间件的优先级
优先级越小，越早执行
```
    LestenerMiddleware: 用户权限鉴权 优先级10
    BodyParserMiddleware: 前台查询参数处理 优先级 0
    RouterMiddleware: 路由处理 优先级50
    StaticMiddleware: 静态资源文件处理 优先级0
```

## 安装 ImageMagick
```
安装说明： http://www.imagemagick.org/script/install-source.php
wget -c https://imagemagick.org/download/ImageMagick.tar.gz
tar xvzf ImageMagick.tar.gz
cd 解压目录
./configure
make
sudo make install
sudo ldconfig /usr/local/lib
/usr/local/bin/convert logo: logo.gif
```

## ImageMagick 依赖
```
wget http://www.imagemagick.org/download/delegates/zlib-1.2.11.tar.gz
tar zvxf zlib-1.2.11.tar.gz
cd zlib-1.2.11
./configure
make
make install

wget http://www.imagemagick.org/download/delegates/libpng-1.6.31.tar.gz
tar zvxf libpng-1.6.31.tar.gz
cd libpng-1.6.31/
./configure
make
make install

convert -list format
查看当前支持文件类型
```
