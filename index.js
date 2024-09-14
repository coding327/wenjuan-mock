const koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock')

const app = new koa()
const router = new Router()

async function getRes(fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn())
    }, 1000)
  })
}

// 注册路由
mockList.forEach(item => {
  // router.get('/api/question/:id', (ctx, next) =>
  //   ctx.body = {
  //     code: 200,
  //     data: {
  //       id: ctx.params.id,
  //       title: Random.ctitle(),
  //       // ...
  //     }
  //   }
  const {method, url, response } = item
  router[method](url, async (ctx, next) => {
    // ctx.body = response(ctx)

    const res = await getRes(() => response(ctx))
    ctx.body = res
  })
})

app.use(router.routes())

app.listen(3001, () => {
  console.log('Mock server is running at http://localhost:3001')
})