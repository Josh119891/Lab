# VSCODE go环境配置错误问题

如果是 timeout无法链接远端地址的话

先到terminal,输入

```sh
go env -w GOPROXY=https://goproxy.cn,direct 
```

更改完后， 可更改为原配置

```shell
go env -w GOPROXY=https://proxy.golang.org,direct
```



ROOT和PATH的默认配置

```shell
GOPATH="/Users/{your username}/go"
GOROOT="/usr/local/go"
```

