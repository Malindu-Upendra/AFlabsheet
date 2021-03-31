const Koa = require('koa');

const HomeRouter = require('./router/home.router')

const app = new Koa();

app.use(HomeRouter.routes()).use(HomeRouter.allowedMethods());

app.use(ctx => {
    ctx.body='Hello'
});

app.listen(3000, err => {
    if(err){
        console.log(err);
    }
});

console.log('Application is running on port 3000');