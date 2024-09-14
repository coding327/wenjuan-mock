const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          id: config.params.id,
          title: Random.ctitle(),
          // ...
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          id: Random.id()
          // ...
        }
      }
    }
  },
]