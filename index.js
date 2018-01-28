const Koa = require('koa');

const app = new Koa();

// 在此可塞入各種 Middleware
// ...

app.use(async function(ctx) {
    ctx.body = 'Hello Koa2';
});

app.listen(8080);
