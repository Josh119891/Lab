# Hash

> A **hash function** is any function that can be used to map data of arbitrary size to fixed-size values. 

hash 即 把输入 按照一定规则映射出 对应长度的数字

常见场景: token 和 密码加密/验证



**哈希碰撞 hash collision**

哈希值的取值空间都是有限的，可能出现输入值不同，哈希值相同的情况

例如： 哈希规则为%10



**如何防止哈希碰撞**

1. 取值空间的大小（即哈希值的长度）
2. 整个生命周期中，哈希值的计算次数



**生日攻击**: 制造出相同哈希结果



通常有两类方法处理碰撞：

开放寻址法 (Open Addressing): 将所有结点均存放在散列表T[0..m-1]中

链接法 (Chaining): 是把散列到同一槽中的所有元素放在一个链表中，而将此链表的头指针放在散列表T[0..m-1]中。

```javascript
// 计算哈希碰撞出现的可能性
const calculate = (d, n) => {
  const exponent = (-n * (n - 1)) / (2 * d)
  return 1 - Math.E ** exponent;
}
// 62为哈希值取值范围（数字加大小字母共62个），5为长度，10000为哈希次数
calculate(62 ** 5, 10000) // 0.05310946204730993

```



