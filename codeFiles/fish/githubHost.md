
# github访问慢访问不了

## 1.进到host配置目录，打开文件编辑，无管理员可复制到桌面修改
```txt
C:\Windows\System32\drivers\etc
```

## 2.查询GitHub域名对应的ip地址,粘贴到host中
打开[IP查询](https://ip.tool.chinaz.com/github.com) 
```
github.com 20.205.243.166
```

## 3.刷新DNS
```bash
ipconfig /flushdns
```