# stop iis
net stop was /y
# start iis
net start w3svc
# lookup port
telnet host_ip host_port
tracert domain_name
# zip
zip -r file.zip /path/to
# unzip
unzip -o /path/to/file.zip -d /path/to
# upload
scp -i ~/.ssh/id_rsa -P port /path/to/file.zip user_name@host:/path/to
# download
scp -i ~/.ssh/id_rsa -P port user_name@host:/path/to/file.zip /path/to

# 查看占用端口的进程状态
lsof -i:[port]
# 查看所有信号名称
lsof -l
# 强制终止某个进程
kill -9 [pid]
kill -KILL [pid]

# 切换模式：graphical.target: 图形界面模式，multi-user.target：命令行模式
# 查看配置
cat /etc/inittab
# 设置默认模式为命令行模式
systemctl set-default multi-user.target
# 重启系统
shutdown -r now