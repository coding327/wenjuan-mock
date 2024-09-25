/**
 * @description 生成问卷列表
 * @author
 */

const Mock = require('mockjs')
const Random = Mock.Random

const getQuestionList = (length = 10, isDeleted = false) => {
  const list = []
  for (let i = 0; i < 10; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: Random.boolean(),
      answerCount: Random.integer(0, 100),
      createdAt: Random.datetime(),
      isDeleted,
    })
  }
  return list
}

module.exports = getQuestionList