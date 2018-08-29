#!/usr/bin/env sh

# ��ֹһ������
set -e

# ����
npm run docs:build

# �������ɵĹ����ļ���
cd docs/.vuepress/dist

# �������Ҫ�����Զ�������
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# �������Ҫ���� https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# �������Ҫ���� https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:linzhixian/quick-vue-admin-document.git master:gh-pages

cd -