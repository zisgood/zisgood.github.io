#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run docs:build # 生成静态文件
cd dist # 进入生成的文件夹

# deploy to github
# echo 'blog.xugaoyi.com' > CNAME #创建一个自定义域名的CNAME文件（如果你没有自定义域名可去掉这个命令）
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:zisgood/zisgood.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://zisgood:${GITHUB_TOKEN}@github.com/zisgood/zisgood.github.io.git
  git config --global user.name "zisgood"
  git config --global user.email "zisgood@sina.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf dist
