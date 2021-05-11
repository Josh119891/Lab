# 复制集 Replica Set

## 基本概念

> mongoDB 的复制集是一组维护相同数据的mongod进程们, 提供了数据冗余和高可用性

在复制集中成分为

- 一个主节点 primary
- 一个仲裁节点 arbiter node
-  一个或多个从节点 secondary

仲裁节点只会是仲裁节点，但主从节点可以相互变化

**主节点** 负责接受所有写的操作, { w: "majority" }，并记录到数据变化到操作日志,也就是 **oplog**

**从节点** 会复制**主节点的oplog**，并异步执行于自身数据库上

PS: 若oplog中应用时间超过 **慢操作阈值** 的信息会被记录在**诊断日志**中

```shell
// 
mongod --port 8017 --dbpath /home/work/data/db1 --replSet rstest
mongod --port 8016 --dbpath /home/work/data/db2 --replSet rstest
mongod --port 8015 --dbpath /home/work/data/db2 --replSet rstest

//或者
    config = {
        _id : "my_replica_set", // replSet指定的名称，跟 --replSet 一个意思
        members : [
             {_id : 0, host : "rs1.example.net:27017"},
             {_id : 1, host : "rs2.example.net:27017"},
             {_id : 2, host : "rs3.example.net:27017"},
       ]
    }
    rs.initiate(config)

// 复制集的连接要指定多个host:port，用,连接,并在最后的option中支持replicaSet参数
mongodb://127.0.0.1:8017,127.0.0.1:8016,127.0.0.1:8015/books?replicaSet=rstest
```



## Primary选举

复制集通过`replSetInitiate`命令（或mongoshell的`rs.initiate()`）进行初始化，初始化后各个成员间开始发送心跳消息，并发起Primary选举操作，获得大多数成员投票支持的节点，会成为Primary，其余节点成为Secondary。



### “大多数”的定义

假设复制集内投票成员（后续介绍）数量为N，则大多数为N/2 + 1，当复制集内存活成员数量不足大多数时，整个复制集将无法选举出Primary，复制集将无法提供写服务，处于只读状态。**为了避免选举问题，复制集成员数量应设置为奇数 **

在副本集中,有两种数据同步方式:

1. initial sync(初始化):当创建一个新的或者重启一个数据库，默认设置中会从 最近的节点中复制oplog来同步，可以是主节点或从节点, 开销较大。
2. replication(复制):在初始化后这个操作会一直持续的进行着,以保持各个 secondary 节点之间的数据同步。



### 特殊的Secondary节点

正常情况下，复制集的Secondary会参与Primary选举（自身也可能会被选为Primary），并从Primary同步最新写入的数据，以保证与Primary存储相同的数据。

Secondary可以提供读服务，增加Secondary节点可以提供复制集的读服务能力，同时提升复制集的可用性。另外，MongoDB支持对复制集的Secondary节点进行灵活的配置，以适应多种场景的需求。

- **Arbiter**

  Arbiter节点只参与投票，不能被选为Primary，并且不从Primary同步数据。

  比如你部署了一个2个节点的复制集，1个Primary，1个Secondary，任意节点宕机，复制集将不能提供服务了（无法选出Primary），这时可以给复制集添加一个Arbiter节点，即使有节点宕机，仍能选出Primary。

  Arbiter本身不存储数据，是非常轻量级的服务，当复制集成员为偶数时，最好加入一个Arbiter节点，以提升复制集可用性。

- **Priority0**

  Priority0节点的选举优先级为0，不会被选举为Primary。

  比如你跨机房A、B部署了一个复制集，并且想指定Primary必须在A机房，这时可以将B机房的复制集成员Priority设置为0，这样Primary就一定会是A机房的成员。

  **说明** 如果这样部署，最好将大多数节点部署在A机房，否则网络分区时可能无法选出Primary。

- **Vote0**

  MongoDB 3.0里，复制集成员最多50个，参与Primary选举投票的成员最多7个，其他成员（Vote0）的vote属性必须设置为0，即不参与投票。

- **Hidden**

  Hidden节点不能被选为主（Priority为0），并且对Driver不可见。

  因Hidden节点不会接受Driver的请求，可使用Hidden节点做一些数据备份、离线计算的任务，不会影响复制集的服务。

- **Delayed**

  Delayed节点必须是Hidden节点，并且其数据落后于Primary一段时间（可配置，比如1个小时）。

  因Delayed节点的数据比Primary落后一段时间，当错误或者无效的数据写入Primary时，可通过Delayed节点的数据来恢复到之前的时间点。

  

  Primary选举除了在复制集初始化时发生，还有如下场景：

  - 复制集被reconfig

    Secondary节点检测到Primary宕机时，会触发新Primary的选举，当有Primary节点主动StepDown（主动降级为Secondary）时，也会触发新的Primary选举。Primary的选举受节点间心跳、优先级、最新的oplog时间等多种因素影响。

    - 节点优先级

      每个节点都倾向于投票给优先级最高的节点。优先级为0的节点不会主动发起Primary选举。当Primary发现有优先级更高Secondary，并且该Secondary的数据落后在10秒内，则Primary会主动降级，让优先级更高的Secondary有成为Primary的机会。

    - Optime

      拥有最新optime（最近一条oplog的时间戳）的节点才能被选为Primary。

  - 网络分区

    只有在大多数投票节点间保持网络连通，才有机会被选Primary；如果Primary与大多数的节点断开连接，Primary会主动降级为Secondary。当发生网络分区时，可能在短时间内出现多个Primary，所以Driver在写入时，最好设置大多数成功的策略，这样即使出现多个Primary，也只有一个Primary能成功写入大多数

**关于 oplog:**

1. oplog 只记录改变数据库状态的操作
2. 存储在 oplog 中的操作并不是和主节点执行的操作完全一致,例如"$inc"操作就会转化为"$set"操作
3. oplog 存储在固定集合中(capped collection),当 oplog 的数量超过 oplogSize,新的操作就会覆盖就的操作



2. 



**replication log 复制延迟**： 指主节点的数据复制到从节点上所需的时间

**Automatic Failover自动故障转移**: 主节点于其他节点通信超时(electionTimeoutMillis),在从节点中选举出一个新的主节点来





因出现了

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



#### Read Concern



# **复制集的好处**

（1）可靠性
 引入复制集最开始的初衷是通过数据冗余来解决故障中断，提供不间断的数据库服务，提高产品可靠性。当主节点挂掉时，复制集剩余成员可以很快地重新选出主节点，继续提供服务。所以复制集有着与生俱来的可靠性特点。

（2）读写分离
 为了防止复制集内主节点的压力过大，可以将业务中对时效性要求不高的查询业务放在备节点上执行。特别是比较复杂的聚合操作和报表统计操作，这些操作往往很耗时，放在备节点操作是个很好的选择。

（3）功能隔离
 MongoDB的备份（不管采用dump方式还是拷贝原始数据文件的方式），我们可以在备节点上执行，减少主节点的压力（cpu、内存、磁盘IO等）；

复制集可以让我们很方便的对生产环境进行运维。比如说将对一个非常大的表建立索引，若以阻塞方式建立索引，那势必会阻塞正常业务；若以非阻塞方式建立索引，那建立完索引可能需要持续很长的时间。有了复制集我们就可以这样做：①将一个备节点从复制集中移除；②以单节点模式启动该节点，然后以阻塞方式快速建立完索引；③将该节点再以复制集方式启动，加入到原复制集中；④依次对所有备节点都执行这样的操作；⑤对主节点进行降备，然后再执行同样的操作。

（4）跨地区分发
 复制集可以将数据分布在不同的地区，这为异地容灾提供了很便捷的方法。比如说两地三中心容灾架构，我们就可以将复制集内两个节点放在一个地区，将另一个节点放到另一个地区中。

这样部署方式要注意网络带宽，并且需考虑两地实际距离。因为一次请求往返一次，那么每增加150公里就会多1毫秒的延迟。

（5）oplog便于运维
 复制集内的oplog存储了数据库最近时间段内的所有写操作，当业务出现数据异常时，通过分析oplog很可能就得到了答案，并且根据oplog也可以修复一定的数据。



Reference:

https://help.aliyun.com/document_detail/52344.html

https://database.51cto.com/art/202006/617867.htm

https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/