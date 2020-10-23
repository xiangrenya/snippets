# 本地创建公私密钥
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub

# 登录远程主机配置
# 修改sshd_config 配置文件
vi /etc/ssh/sshd_config
# 通过配置以下属性，允许SSH登录
# RSAAuthentication yes
# PubkeyAuthentication yes
# AuthorizedKeysFile .ssh/authorized_keys
# 把本地公钥追加到authorized_keys中
vi ~/.ssh/authorized_keys
# 重启SSH服务
systemctl restart sshd

# SSH 登录远程主机
ssh user_name@host_ip
ssh -i ~/.ssh/id_rsa user_name@host_ip

# 问题：对于非root，新建的用户，用私钥登录，也会提示输入密集
# 查看文件尾部20行内容
tail /var/log/secure -n 20
# Authentication refused: bad ownership or modes for file
chmod g-w /home/allen
chmod 700 /home/allen/.ssh
chmod 600 /home/allen/.ssh/authorized_keys