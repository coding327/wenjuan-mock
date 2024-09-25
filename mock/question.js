const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestion')

const Random = Mock.Random

module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response: config => {
      return {
        code: 0,
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
        code: 0,
        data: {
          id: Random.id()
          // ...
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          list: getQuestionList(10),
          total: 10
        }
      }
    }
  }
]