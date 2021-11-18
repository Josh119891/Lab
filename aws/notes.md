### Secrets Manager

handle credentials in secret way

can easily rotate the secret for RDS and dynamodb regularly (system manager parameter store could not do that)



###  Aurora DB 

the fastest database for real time servers



#### Layers

Users can configure an AWS Lambda function to pull in additional code and content in the form of layers. A layer is a .zip archive that contains libraries, a custom runtime, or other dependencies. With layers, users can use libraries in a function without needing to include the libraries in a deployment package.

### AppSync 

\- AWS AppSync simplifies application development by letting users create a flexible API to securely access, manipulate, and combine data from one or more data sources. AWS AppSync is a managed service that uses GraphQL to make it easy for applications to get the exact data they need. AWS AppSync allows users to build scalable applications, including those requiring real-time updates, on a range of data sources, including Amazon DynamoDB. In Amazon API Gateway, users can create a WebSocket API as a stateful frontend for an AWS service (such as AWS Lambda or DynamoDB) or for an HTTP endpoint. The WebSocket API invokes the backend based on the content of the messages it receives from client applications. Unlike a REST API, which receives and responds to reque

####  \- Amazon Cognito

Amazon Cognito adds user sign-up, sign-in, and access control to web and mobile applications quickly and easily.

##### Cognito sync 不同终端的用户数据同步

##### user pool 是Cognito 中的用户库，支持Oauth和第三登陆, MFA 和用户管理



#### Resource policy

A resource policy can be used to grant API access to one AWS account to users in a different AWS account using Signature Version 4 (SigV4) protocols.



#### AWS INSPECTOR

a automated security assessment service

##### AWS step functions

a web service that enables you to coordinate the components of distributed applications and mircoservices using visual workflow.





###### 杂项

通过 Cache-Control: max-age=0 header, 确保个别请求越过缓存，获取最新数据 

On Premise server 不能放置在EC2上, 不能添加到 IAM group中

Cloudwatch alarm 不会被log stream触发，会被metric触发

CloudWatch event 会识别各种system events （例如EC2重启和state changes）

In-place 不跟 lambda和 ECS合作

Canary和Linear不是ECS的部署方式 how u shift ur traffic

Blue/green 是 ecs的部署方式

.config后缀的文件都是在.ebextensions 文件夹里

TODO:

IAM ROLE VS USER VS GROUP

what is cloudTrail, ECS, CODEDPLOY , SWF, BATCH, STEP FUNCTIONS

