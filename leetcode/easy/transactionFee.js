/*
 * @Author: josh119891
 * @Date: 2021-03-17 23:21:56
 * @LastEditors: josh119891
 * @LastEditTime: 2021-03-18 09:35:30
 * @Description: file content
 */




const periods = [5, 20, 50, 100, 150, 200, 300, 450, 600, 800, 1000]
const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function getTransactionFee(num) {
  let fee = 0;
  let temp = num;
  for (let i = 0; i < periods.length; i++) {
    let times = i === 0 ? 5 : periods[i] - periods[i - 1];
    if (temp - times < 0) {
      fee += rates[i] * temp;
      return fee;
    }

    fee += times * rates[i]
    temp -= times;
  }
}
