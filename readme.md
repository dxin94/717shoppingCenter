                            717项目总结
对于这个项目，首先看项目的构图结构，从而了解项目的功能以及项目所需的知识点；然后理清思路，入手项目。

  页面：
      首页
      分类列表页
      搜索页
          详情页
      分类页
      购物车
      我的
          登录
          注册
      邮寄地址管理
          添加
          邮寄地址列表
      订单管理页
  common组件封装
      弹出框
      轮播图模块
      商品模块
      筛选模块
      购物车模块
      邮寄地址模块
  技术应用:
      react redux react-router react-redux redux-saga
      mobile端自适应
      fetch封装
      用node搭建一个简单的静态服务器，准备一定的模拟接口
      脚手架：webpack 自行搭建可以切换不同环境的脚手架

      react-redux开发遇到的问题 数据获取不到   解决办法 服务问题获取数据接口问题  

  主页
      http.request实现跨域请求在线数据
      用redux实现数据的获取


  搜索页
      展示商品历史搜索
      分类页    模拟mock数据
                  实现商品分类切换
      用redux实现了数据管理
  购物车页
      判断当前账号是否登录
      用redux实现了数据管理
      实现商品数量的加减并计算总价
      实现商品的删除功能
      识别账号信息，将当前账号购买的商品添加进购物车
      没有数据时显示购物车为空
  我的页
      显示当前账号
      判断是否登录如果没有登录回立即调到登录页面