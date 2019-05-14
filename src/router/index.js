import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/layout'
// import home from '@/pages/Home.vue'
import login from '@/layout/login'

import ywbl from '@/pages/ywbl'
import table from '@/pages/ywbl/gys/table.vue' // 业务办理3级路由
import tabltableItem from '@/pages/ywbl/gys/tableItem.vue' // 业务办理3级路由
import tableItemChild from '@/pages/ywbl/gys/tableItemChild.vue' // 业务办理3级路由
import input from '@/pages/ywbl/gys/input.vue' // 业务办理3级路由
import inputItem from '@/pages/ywbl/gys/inputItem.vue' // 业务办理3级路由
import inputItemChild from '@/pages/ywbl/gys/inputItemChild.vue' // 业务办理3级路由
import inputItemChild1 from '@/pages/ywbl/gys/inputItemChild1.vue' // 业务办理3级路由
import infor from '@/pages/ywbl/gys/infor.vue' // 业务办理3级路由

import glyMagessitem1 from '@/pages/ywbl/glyMagess/item1.vue' // 管理员业务
import glyMagessitem2 from '@/pages/ywbl/glyMagess/item2.vue' // 管理员业务
import glyMagessitem3 from '@/pages/ywbl/glyMagess/item3.vue' // 管理员业务
import glyMagessitem4 from '@/pages/ywbl/glyMagess/item4.vue' // 管理员业务
import glyMagessitem5 from '@/pages/ywbl/glyMagess/item5.vue' // 管理员业务

import user from '@/pages/user'  //业务审核
import item1 from '@/pages/user/item1.vue' // 业务审核2级路由
import item2 from '@/pages/user/item2.vue' // 业务审核

import pbgl from '@/pages/pbgl'  //评标管理
import pbglitem1 from '@/pages/pbgl/item1.vue' 
// import pbglitem2 from '@/pages/pbgl/item2.vue' 
// import pbglitem3 from '@/pages/pbgl/item3.vue' 
// import pbglitem4 from '@/pages/pbgl/item4.vue' 






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:"/ywbl"
    },
    {
      path: '/',
      redirect:"/login"
    },
    {
      path: '/ywbl',
      name: '业务办理',
      component: ywbl,
      redirect:"/input",
      children:[
        {path: '/infor',name: '个人信息',component: infor},
        {path: '/table',name: '查看公告',component: table},
        {path: '/tabltableItem',name: '查看中标公告',component: tabltableItem},
        {path: '/tableItemChild',name: '投标资格预审',component: tableItemChild},
        {path: '/input',name: '上传投标文件',component: input},
        {path: '/inputItem',name: '投标文件评审',component: inputItem},
        {path: '/inputItemChild',name: '招投标结果',component: inputItemChild},
        {path: '/inputItemChild1',name: '中标信息',component: inputItemChild1},
        {path: '/glyMagessitem1',name: '项目立项 ',component: glyMagessitem1},
        {path: '/glyMagessitem2',name: '发布招标公告 ',component: glyMagessitem2},
        {path: '/glyMagessitem3',name: '发售招标文件 ',component: glyMagessitem3},
        {path: '/glyMagessitem4',name: '发布中标公告 ',component: glyMagessitem4},
        {path: '/glyMagessitem5',name: '公告管理 ',component: glyMagessitem5},
      ]
    },
    {
      path: '/user',
      name: '业务审核',
      component: user,
      redirect:"/item1",
      children:[
        {path: '/item1',name: '项目审核',component: item1},
        {path: '/item2',name: '投标资格审核',component: item2},
      ]
    },
    {
      path: '/pbgl',
      name: '评标管理',
      component: pbgl,
      redirect:"/pbglitem1",
      children:[
        {path: '/pbglitem1',name: '评审专家',component:pbglitem1},
        {path: '/pbglitem2',name: '招标文件评审',component:inputItem},
        {path: '/pbglitem3',name: '招投标结果',component:inputItemChild},
        {path: '/pbglitem4',name: '中标信息',component:inputItemChild1},
      ]
    },
    {
      path: '/login',
      name: '登录页面',
      component: login,
    },
  ]
})
