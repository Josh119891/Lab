## 复制集 Replica Set



mongoDB 的复制集是一组维护相同数据的mongod进程, 提供了数据冗余和高可用性

在复制集中成分为

- 一个主节点 primary
- 一个仲裁节点 arbiter node
-  一个或多个从节点 secondary

仲裁节点只会是仲裁节点，但主从节点可以相互变化

**主节点** 接受所有写的操作, { w: "majority" }

**主节点** 会记录所有数据变化到操作日志,也就是 **oplog**

**从节点** 会复制**主节点的oplog**，并异步执行于自身数据库上

除了操作日志外，若oplog中应用时间超过慢操作阈值的信息会被记录在诊断日志中



**关于 oplog:**
1. oplog 只记录改变数据库状态的操作
2. 存储在 oplog 中的操作并不是和主节点执行的操作完全一样,例如"$inc"操作就会转化为"$set"操作
3. oplog 存储在固定集合中(capped collection),当 oplog 的数量超过 oplogSize,新的操作就会覆盖就的操作



**数据同步**
在副本集中,有两种数据同步方式:

1. initial sync(初始化):当创建一个新的或者重启一个数据库，默认设置中会从 最近的节点中复制oplog来同步，可以是主节点或从节点, 开销较大。
2. replication(复制):在初始化后这个操作会一直持续的进行着,以保持各个 secondary 节点之间的数据同步。



**replication log 复制延迟**： 指主节点的数据复制到从节点上所需的时间

**Automatic Failover自动故障转移**: 主节点于其他节点通信超时(electionTimeoutMillis),在从节点中选举出一个新的主节点来

```shell
// 
mongod --port 8017 --dbpath /home/work/data/db1 --replSet rstest
mongod --port 8016 --dbpath /home/work/data/db2 --replSet rstest
mongod --port 8015 --dbpath /home/work/data/db2 --replSet rstest

rs.initiate({
  _id:"rstest", // replSet指定的名称，跟 --replSet 一个意思
  members:[{_id:0, host:"127.0.0.1:8017" }] // 主节点ip与端口
})
// 两个从节点加入复制集中
rs.add("127.0.0.1:8016")
rs.add("127.0.0.1:8015")


//或者
rsconf = {
     _id: "rs0",
     members: [
         {_id: 0,host: "localhost:27018" },
         {_id: 1, host: "localhost:27019"},
         {_id: 2, host: "localhost:27020"}
     ]
}

rs.initiate( rsconf )

// 复制集的连接要指定多个host:port，用,连接,并在最后的option中支持replicaSet参数
mongodb://127.0.0.1:8017,127.0.0.1:8016,127.0.0.1:8015/books?replicaSet=rstest


```



### Write Concern 写关注

指写入一条数据，主节点处理完成后，需要其他承载数据的副本节点也确认写成功后，才能给客户端返回写入数据成功

主要解决 异步复制中，主节点关机导致数据缺失的问题

```javascript
 配置为 { w: writeParams}
 writeParams默认为1， 写入主节点即可
 “w” 配置为2，则表示除了主节点，还需要收到其中一个副本节点返回写入成功
 “w” 还可以配置为 "majority"，表示需要集群中大多数承载数据且有选举权限的节点返回写入成功。
```

![write-concern](/Users/josh/WorkStation/Lab/notes/assets/write-concern.png)



```javascript
两种方式
1. 特别指定该命令
db.products.insert(
    { item: "envelopes", qty : 100, type: "Clasp" },
    { writeConcern: { w: "majority" , wtimeout: 5000 } }
)
2.修改副本集 getLastErrorDefaults 配置
cfg = rs.conf()
cfg.settings.getLastErrorDefaults = { w: "majority", wtimeout: 5000 }
rs.reconfig(cfg)
```





### Read Readference 读偏好

默认，读写都在主节点。 但写只能在主节点，读可以在主节点或从节点

主节点最新，从节点可能因同步问题而延迟

但从 从节点上读取可以减轻主集点的压力

读偏好包含 **5种模式 && 三种条件 （模式符合后再考虑条件**

| 模式               | 特点                                                         |
| ------------------ | :----------------------------------------------------------- |
| primary            | 所有读请求都从主节点读取                                     |
| primaryPreferred   | 主节点正常，则所有读请求都从主节点读取，如果主节点挂掉，则从符合条件的副本节点读取 |
| secondary          | 所有读请求都从副本节点读取                                   |
| secondaryPreferred | 所有读请求都从副本节点读取，但如果副本节点都挂掉了，那就从主节点读取 |
| nearest            | 主要看网络延迟，选取延迟最小的节点，主节点跟副本节点均可     |

**三种条件**

1. Tag sets 标签

   读取数据的时候，根据对应标签来查找对应节点. 通过mongo shell的rs.config来修改节点的标签信息

   ```javascript
   cfg.members[n].tags = { "region": "South", "datacenter": "A" }
   ```

2. maxStalenessSeconds （可容忍的最大同步延迟）

   ​	***该从节点同步主节点的写入时间***和***主节点最新写入时间***相比较。如果主节点挂掉了，那就跟副本集中最新写入的时间做对比。

3. Hedged Read （对冲读取）

   mongos 实例路由读取请求时会同时发给两个符合条件的副本集节点，然后那个先返回结果就返回这个结果给客户端。



**如何在实际环境中使用读偏好**

1. 在代码中连接数据库，使用 connection string uri 时，可以加上下面的这三个参数

   | **参数**            | **说明**                                                     |
   | ------------------- | ------------------------------------------------------------ |
   | readPreference      | 模式，枚举值有：primary（默认值）、 primaryPreferred、secondary、secondaryPreferred、nearest |
   | maxStalenessSeconds | 最大同步延时秒数，取值0 - 90 会报错， -1 表示没有最大值      |
   | readPreferenceTags  | 标签，如果标签是 { "dc": "ny", "rack": "r1" }, 则在uri 为 readPreferenceTags=dc:ny,rack:r1 |

   例如下面：

   `mongodb://db0.example.com,db1.example.com,db2.example.com/?replicaSet=myRepl&readPreference=secondary&maxStalenessSeconds=120&readPreferenceTags=dc:ny,rack:r1`

2. 在mogo shell 中，可以使用 [cursor.readPref() ](https://docs.mongodb.com/manual/reference/method/cursor.readPref/#cursor.readPref)或者 [Mongo.setReadPref()](https://docs.mongodb.com/manual/reference/method/Mongo.setReadPref/#Mongo.setReadPref)

   cursor.readPref() 参数分别为： mode、tag set、hedge options, 具体请求例如下面这样

   ```
   db.collection.find({ }).readPref(
       "secondary",                      // mode
       [ { "datacenter": "B" },  { } ],  // tag set
       { enabled: true }                 // hedge options
   )
   ```

   Mongo.setReadPref() 类似，只是预先设置请求条件，这样就不用每个请求后面带上 readPref 条件。