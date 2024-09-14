const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/test',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          name: Mock.Random.cname(),
          age: Mock.Random.integer(18, 60),
        }
      }
    }
  }
]