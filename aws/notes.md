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

Amazon DynamoDB **global tables** provide a fully managed solution for deploying a multi-region, multi-master database, without having to build and maintain your own replication solution. When you create a global table, you specify the AWS regions where you want the table to be available. DynamoDB performs all of the necessary tasks to create identical tables in these regions, and propagate ongoing data changes to all of them.

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

use an immutable deployment policy -well suited for updates in production environments where you want to minimize downtime and reduce the risk from failed deployments. It ensures that the impact of a failed deployment is limited to a single instance and allows your application to serve traffic at full capacity throughout the update.

a rolling with additional batch policy. This policy ensures that the impact of a failed deployment is limited to a single batch of instances and allows your application to serve traffic at full capacity throughout the update.

使用 AWS Elastic Beanstalk 控制台部署新应用程序或应用程序版本时，需要上传源包。源包必须符合以下要求：

- 由单个 `ZIP` 文件或 `WAR` 文件组成 (您可以在 `WAR` 文件中包含多个 `ZIP` 文件)
- 不超过 512 MB
- 不包含父文件夹或顶级目录 (可包含子目录)

如果您要部署处理定期后台任务的工作线程应用程序，您的应用程序源包还必须包括一个 `cron.yaml` 文件。

## AWS Kinesis

 AWS Kinesis data FireHose

A full managed service for delivering real-time streaming data to destinations such as Amazon s3, Redshift, ElasticSearch Service, and Splunk.

**Server-side encryption** is a feature in Amazon Kinesis Data Streams that automatically encrypts data before it’s at rest by using an AWS KMS customer master key (CMK) you specify. Data is encrypted before it’s written to the Kinesis stream storage layer, and decrypted after it’s retrieved from storage. As a result, your data is encrypted at rest within the Kinesis Data Streams service. This allows you to meet strict regulatory requirements and enhance the security of your data.

## AWS SQS
standard type
1. support a nearly unlimited number of API calls per second
2. at-least-once message delivery
3. out of order

FIFO type

1. exactly-once processing / non-duplicated
2. ordered message

## IAM

Policy simulator commands typically require calling API operations to do two things:                                               Evaluate the policies and return the list of context keys that they reference. You need to know what context keys are referenced so that you can supply values for them in the next step.Simulate the policies, providing a list of actions, resources, and context keys that are used during the simulation.

SDK access keys 权限比IAM高

## Simple storage service S3

optimizing performance - sequential date-based naming for your prefixes

## AWS CODEDEPLOY

| 错误代码                            | 描述                                                         |
| :---------------------------------- | :----------------------------------------------------------- |
| `AGENT_ISSUE`                       | 由于 CodeDeploy 代理出现问题，因此部署失败。确保此代理已安装并在该部署组中的所有实例上运行 |
| `AUTO_SCALING_IAM_ROLE_PERMISSIONS` | 与您的部署组关联的服务角色不具备在以下AWS服务                |
| `HEALTH_CONSTRAINTS`                | 总体部署因以下原因而失败：过多的独立实例部署遭失败、可供部署的正常实例太少或您的部署组中的一些实例遇到问题 |
| `HEALTH_CONSTRAINTS_INVALID`        | 由于部署配置所定义的最小数目的正常运行的实例不可用，因此部署无法开始。您可通过更新部署配置来减少所需的正常运行的实例数或增加此部署组中的实例数 |
| `IAM_ROLE_MISSING`                  | 由于不存在具有为部署组指定的服务角色名称的服务角色，因此部署失败。确保您使用的是正确的服务角色名称。 |
| `IAM_ROLE_PERMISSIONS`              | CodeDeploy 不具备代入角色所需的权限，或者您正在使用的 IAM 角色未为您提供在AWS服务。 |
| `NO_INSTANCES`                      | 这可能是由于下列原因之一导致的。对于 EC2/ 本地蓝/绿部署，如果您使用 Amazon EC2 标签，可能会不正确地配置它们。在您的 CodeDeploy 部署组中，请确保它们包括在您的蓝色实例和绿色实例中。您可以使用 Amazon EC2 控制台确认您的实例已正确标记。如果您使用 Amazon EC2 Auto Scaling 组，则您的自动扩展组可能容量不足。请确保您的 Auto Scaling 组具有足够的容量用于部署。您可以通过使用 Amazon EC2 控制台查看运行正常的实例数，查看您的 Amazon EC2 Auto Scaling 组的容量。对于 EC2/ 本地蓝/绿部署，蓝色和绿色机群的大小可能不同。请确保两个机群大小相同 |
| `OVER_MAX_INSTANCES`                | 由于为部署定向的实例数超出您的账户允许的数量，因此部署失败。要减少为此部署定向的实例数，请更新此部署组的标签设置或删除一些定向实例。或者，您也可以联系AWS Support来请求提高限制。 |
| `THROTTLED`                         | 由于 IAM 角色发出的请求的数目超出 AWS CodeDeploy 允许的数目，因此部署失败。尝试减少请求数。 |
| `UNABLE_TO_SEND_ASG`                | 由于部署组未与其 Amazon EC2 Auto Scaling 组正确配置，因此部署失败。在 CodeDeploy 控制台中，从部署组中删除 Amazon EC2 Auto Scaling 组，然后重新添加此组 |

##### 杂项

![image-20211120130210822](/Users/josh/Library/Application Support/typora-user-images/image-20211120130210822.png)

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

Serverless Aplication model 简称 SAM,有自己的SAM CLI负责打包和部署

当accountA管理资源,accountB管理管道，需要KMS和IAM的授权才能处理好

ElasticBeanstalk needs a lifecyle policy to avoid  hitting the version limit

SQS queue default visibility timeout is 30 seconds.

Lambda functions failed asynchronously, could use dead letter queue to check the reason

TODO:

IAM ROLE VS USER VS GROUP

what is cloudTrail, ECS, CODEDPLOY , SWF, BATCH, STEP FUNCTIONS

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.requests 复习一遍

https://docs.aws.amazon.com/zh_cn/cognito/latest/developerguide/cognito-events.html

https://docs.aws.amazon.com/zh_cn/lambda/latest/dg/best-practices.html

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html

https://docs.aws.amazon.com/zh_cn/amazondynamodb/latest/developerguide/Streams.html



https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html

https://docs.aws.amazon.com/kms/latest/developerguide/programming-top.html

https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/userguide/cors.html

