const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/test',
    method: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          name: Mock.Random.cname(),
          age: Mock.Random.integer(18, 60),
        }
      }
    }
  }
]