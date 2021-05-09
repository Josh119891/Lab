# git



**git command **

```shell
初始化
git init

添加文件
git add .

远端文件更新，出现push不成功
git fetch origin master

fetch后有冲突,查看冲突文件，然后再add和commit一遍即可上传
git diff / git status
```



**setup ssh**

```shell
去到ssh文件夹 
cd ~/.ssh

生成public key 和private key
ssh-keygen -t rsa  rsa -C  "the thing u add"

复制粘贴public key的内容到github的

eval ssh-agent

ssh-add private-key-file-name

```



