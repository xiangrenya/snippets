# 创建本地库
git init
# 从远程库克隆，使用原生git协议速度最快
git clone
# 查看当前工作现场的状态
git status
# 把工作区的某个文件的修改放入暂存区
git add filename.txt
# 把工作区的所有文件的修改放入暂存区
git add .
# 撤销文件在工作区的修改或删除
git checkout -- filename.txt
# 从已跟踪清单中移除文件，同时从当前工作目录中删除
git rm filename.txt
# 从已跟踪清单中移除文件，但是当前工作目录依然保留
git rm --cache filename.txt
# 把暂存区的修改回退到工作区
git rest HEAD filename.txt
# 回退到上个版本或指定commitId
git rest --hard HEAD^
git rest --hard 3628164
# 把暂存区的所有修改提交到分支
git commit -m 'message'
# 把本地的所有修改提交到分支
git commit -a -m 'message'

# 创建分支
git branch branchName
# 切换分支
git checkout branchName
# 创建并切换分支
git checkout -b branchName
# 创建一个release分支
git checkout -b release-1.0.1 develop
# 查看本地库分支列表
git branch
# 查看远程库分支列表
git branch -r
# 查看所有分支列表
git branch -a
# 删除分支
git branch -d branchName
# 合并分支（把branchName分支合并到当前分支）
# --no-ff合并操作会创建一个新commit对象，避免丢失branchName分支存在的历史信息
git merge --no-ff branchName

# 新建标签（默认是HEAD，也可以指定commitId）
git tag v1.0.0 6224937
# 新建指定标签信息
git tag -a v1.0.0 -m 'version 1.0.0 released'
# 显示标签列表
git tag
# 查看标签信息
git show v1.0.0
# 删除标签
git tag -d v1.0.0

# 从远程抓取指定分支,再与本地的指定分支合并
git pull origin branchName:branchName
# 将本地分支的更新，推送到远程库。如果指定的branchName不存在，会自动创建（--set-upstream用来指定远程库，如只有一个远程库，可以省略）
git push --set-upstream origin branchName
# 删除远程分支
git push origin :branchName
# 推送本地标签至远程库
git push origin v1.0.0
# 推送本地所有标签至远程库
git push origin --tags
# 删除远程库中的某个标签
git push origin :refs/tags/v1.0.0

# 把当前工作现场储藏起来
git stash
# 恢复之前的工作现场
git stash apply
# 删除stash内容
git stash drop
# 恢复之前的工作现场同时把stash内容也删了
git stash pop
# 查看所有stash列表
git stash list

# 显示远程仓库列表
git remote -v
# 查看远程特定仓库详情
git remote show origin

# 查看日志
git log [--graph] [--pretty=oneline] [--abbrev-commit]
# 查看命令历史
git reflog

# 将本地新建的库关联至github远程库
git init
git add .
git commit -a -m '初始化项目'
git remote add origin git@github.com:xiangrenya/repositoryName.git
git push origin master

# 解决git pull文件时和本地文件冲突
git stash
git pull
git stash pop stash@{0}
git commit -m -a 'message' （手动修改冲突后提交）