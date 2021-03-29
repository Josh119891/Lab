/*
 * @Author: josh119891
 * @Date: 2021-03-12 16:32:51
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-12 16:38:42
 * @Description: file content
 */
function exchange(nums) {
  return nums.reduce((pre, cur) => {
    cur % 2 === 0 ? pre.push(cur) : pre.unshift(cur)
    return pre;
  }, [])
  return nums.filter(item => item % 2 !== 0).concat(nums.filter(item => item % 2 === 0))
};