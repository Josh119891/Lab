## Secrets Manager

handle credentials in secret way

can easily rotate the secret for RDS and dynamodb regularly (system manager parameter store could not do that)



##  Aurora DB 

the fastest database for real time servers

## Dynamodb

### Read/Write Request Unit

One **read request unit** represents one strongly consistent read request, or two eventually consistent read requests, for an item up to 4 KB in size. Two read request units represent one transactional read for items up to 4 KB.

One **write request unit** represents one write for an item up to 1 KB in size. If you need to write an item that is larger than 1 KB, DynamoDB needs to consume additional write request units. Transactional write requests require 2 write request units to perform one write for items up to 1 KB. The total number of write request units required depends on the item size. 

providing fast access to items by specifying key values. (Partition key不行就弄secondary key)

## Layers

Users can configure an AWS Lambda function to pull in additional code and content in the form of layers. A layer is a .zip archive that contains libraries, a custom runtime, or other dependencies. With layers, users can use libraries in a function without needing to include the libraries in a deployment package.

## AppSync 

\- AWS AppSync simplifies application development by letting users create a flexible API to securely access, manipulate, and combine data from one or more data sources. AWS AppSync is a managed service that uses GraphQL to make it easy for applications to get the exact data they need. AWS AppSync allows users to build scalable applications, including those requiring real-time updates, on a range of data sources, including Amazon DynamoDB. In Amazon API Gateway, users can create a WebSocket API as a stateful frontend for an AWS service (such as AWS Lambda or DynamoDB) or for an HTTP endpoint. The WebSocket API invokes the backend based on the content of the messages it receives from client applications. Unlike a REST API, which receives and responds to reque

###  Amazon Cognito

Amazon Cognito adds user sign-up, sign-in, and access control to web and mobile applications quickly and easily.

### Cognito sync 不同终端的用户数据同步

### user pool 是Cognito 中的用户库，支持Oauth和第三登陆, MFA 和用户管理



## Resource policy

A resource policy can be used to grant API access to one AWS account to users in a different AWS account using Signature Version 4 (SigV4) protocols.



## AWS INSPECTOR

a automated security assessment service

### AWS step functions

a web service that enables you to coordinate the components of distributed applications and mircoservices using visual workflow.

## X-Ray daemon Xray 守护进程

默认监听UPD端口2000，并发送到X-RAY API上

###  使用条件

1. 需要安装并执行Xray daemon

2. 确保权限可以上传数据到X-ray

## AWS lambda

默认Timeout 3秒, 如果lambda function 需要执行更久，就需要改时间

## Key Management Service KMS



## AWS Elastic Beanstalk

**Deployment policy**

- **All at once** – Deploy the new version to all instances simultaneously. All instances in your environment are out of service for a short time while the deployment occurs.
- **Rolling** – Deploy the new version in batches. Each batch is taken out of service during the deployment phase, reducing your environment's capacity by the number of instances in a batch.
- **Rolling with additional batch** – Deploy the new version in batches, but first launch a new batch of instances to ensure full capacity during the deployment process.
- **Immutable** – Deploy the new version to a fresh group of instances by performing an [immutable update](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html).
- **Traffic splitting** – Deploy the new version to a fresh group of instances and temporarily split incoming client traffic between the existing application version and the new one.

### For full capacity 

use an immutable deployment policy

- well suited for updates in production environments where you want to minimize downtime and reduce the risk from failed deployments. It ensures that the impact of a failed deployment is limited to a single instance and allows your application to serve traffic at full capacity throughout the update.

- a rolling with additional batch policy. This policy ensures that the impact of a failed deployment is limited to a single batch of instances and allows your application to serve traffic at full capacity throughout the update.

##### 杂项

通过 Cache-Control: max-age=0 header, 确保个别请求越过缓存，获取最新数据 

On Premise server 不能放置在EC2上, 不能添加到 IAM group中

Cloudwatch alarm 不会被log stream触发，会被metric触发

CloudWatch event 会识别各种system events （例如EC2重启和state changes）

In-place 不跟 lambda和 ECS合作

Canary和Linear不是ECS的部署方式 how u shift ur traffic

Blue/green 是 ecs的部署方式

.config后缀的文件都是在.ebextensions 文件夹里

Cors header: Access-Control-Allow-Headers / Origin

403报错信息，可能是加密过后的，需要用 **decode-authorization-message**

TODO:

IAM ROLE VS USER VS GROUP

what is cloudTrail, ECS, CODEDPLOY , SWF, BATCH, STEP FUNCTIONS

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.requests 复习一遍

看到第20题

