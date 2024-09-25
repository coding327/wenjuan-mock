/**
 * @description 生成问卷列表
 * @author
 */

const Mock = require('mockjs')
const Random = Mock.Random

const getQuestionList = ({
  length = 10,
  isStar = false,
  isDeleted = false
}) => {
  const list = []
  for (let i = 0; i < length; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.integer(0, 100),
      createdAt: Random.datetime(),
      isDeleted,
    })
  }
  return list
}

module.exports = getQuestionList