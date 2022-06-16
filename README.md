# 朗国iot移动端RN应用脚手架

## 使用

> 将脚手架模板下载到本地并运行以下指令下载依赖包

```shell
yarn install
```

## 项目包结构

```text
├─src
│    │  App.js //RN主文件
│    │  
│    ├─assets //资源文件夹
│    ├─components //RN组件
│    ├─pages //RN页面
│    │  ├─about
│    │  │      About.js
│    │  │      
│    │  └─home
│    │          Home.js
│    │          
│    ├─redux // 状态管理 详见redux配置
│    │  │  actionType.js 
│    │  │  store.js 
│    │  │  
│    │  ├─actions
│    │  │      index.js
│    │  │      uiActions.js
│    │  │      
│    │  └─reducers 
│    │          index.js
│    │          uiReducer.js
│    │          
│    └─router //路由配置
│            AppRouter.js //路由组件
│            routerMap.js //路由配置文件
│            
├─.gitignore //git过滤配置文件
├─index.js //入口文件
├─metro.config.js //metro服务配置文件
├─pack.js //打包脚本
├─package-lock.json
├─package.json
├─README.md
├─yarn.lock
```

## 运行

> 运行下面命令后打开朗国iot APP开启调试模式，填写当前电脑IP，与metro.config.js文件中配置端口，然后点击产品打开对于RN应用即可进行实时预览

```shell
yarn start
```

## 打包

> 完成代码编写后运行下面命令即可将应用打包，命令运行完毕后再项目根目录下会生成一个dist的文件夹，里面存放的则是打包后的文件，同时还会生成一个以rnApp_时间.zip的压缩包，将该压缩包上传到iot平台即可

```shell
yarn build
```
