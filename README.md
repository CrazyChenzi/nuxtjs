# nuxtjs

nuxtjs ts 配套模板

**server层支持ts** 通过`nodemon`启动`server`下面单独的`tsconfig.json`已达到支持`server`层ts的效果

为什么要用`nodemon`去单独启动`server`下面的`tsconfig.json`？

当然是为了去除恶心的警告...

> Nuxt export 'default' (imported as 'mod') was not found

[nuxtjs issues 5508](https://github.com/nuxt/nuxt.js/issues/5508)

当项目中只有一个`tsconfig.json`, 为了让`server`支持ts...  我们需要把`tsconfig.json`的`module`配置为`commonjs`规范，这个时候就产生了...那个警告*Nuxt export 'default' (imported as 'mod') was not found*
