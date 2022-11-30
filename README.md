#### Nuxtjs接入qiankun需要主要的事项：
1. qiankun只能在客户端运行，所以需要将qiankun的逻辑放到一个只在客户端执行的plugin中：
```js
//nuxt.config.js
  plugins: [
  '@/plugins/element-ui',
  {
    src: '@/plugins/qiankun',
    ssr: false
  }
],
```

2. 可以通过自定义路由的方式添加子应用的路由：
```js
//nuxt.config.js
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/vueSubApp',
        component: resolve(__dirname, 'components/pages/VueSubApp.vue'),
        children: [
          {
            path: '*',
            component: resolve(__dirname, 'components/pages/VueSubApp.vue')
          }
        ]
      })
    }
  },
```
3. nuxtjs中的路由组件<nuxt/>是对vue-router中<router-view/>的封装：(最大的坑点)
```js
//packages/vue-app/template/components/nuxt-child.js
<% if (features.transitions) { %>
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView])
    <% } else { %>
    return routerView
    <% } %>
```
可以看到nuxt支持配置来给路由加载过渡效果，切默认mode为out-in，但是这个动画模式会导致子应用激活时无法获取子应用加载的容器dom：
[Application died in status NOT_MOUNTED: Target container with #container not existed while xxx mounting!](https://qiankun.umijs.org/zh/faq#application-died-in-status-not_mounted-target-container-with-container-not-existed-while-xxx-mounting)

所以这里我们需要修改nuxt中的默认配置：
```js
//nuxt.config.js
 transition: {
    name: 'page',
    // in-out也可以
    mode: ''
  },
  layoutTransition: {
    name: 'layout',
    // in-out也可以
    mode: ''
  },

```
