export function allowedMethods() {
    const Router = require("@koa/router");
    const router = new Router({
        prefix: '/home'
    });

    router.get('/',ctx => {
        ctx.body = 'Hello GET';
    });

    router.post('/', ctx => {
        ctx.body = 'Hello POST';
    });
}

export function routes() {

}


