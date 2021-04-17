# Mongo分片

Sharding is a kind of *Horizontal Scaling* that partitions data by key ranges and distributes the data among two or more database instances. 



分片 是在不同机器上分布数据的一种方法

A database architecture that partitions data by key ranges and distributes the data among two or more database instances. Sharding enables horizontal scaling.

1. 分片：保存数据子集的mongo实例
2. config-server: mongo 实例保存相关配置
3. 路由器： 一个mongo实例负责重定向

![image-20210416223244755](/Users/josh/Library/Application Support/typora-user-images/image-20210416223244755.png)

