/*
 * @Author: josh119891
 * @Date: 2021-01-19 17:06:04
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-19 17:10:41
 * @Description: file content
 */
const reversePrint = (head) => {
  const result = []

  while (head !== null) {
    result.unshift(head.val)
    head = head.next
  }

  return result
}
