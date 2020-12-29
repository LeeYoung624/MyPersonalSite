const path = require('path');
const serve = require('koa-static');
const Koa = require('koa');

const app = new Koa();
app.use(serve(path.resolve('docs/.vuepress/dist')))
 
app.listen(100);
