#!/usr/bin/env bash
echo 'npm config set registry npm'
npm config set registry http://registry.npmjs.org

echo 'npm login'
npm login

echo 'npm publish'
npm publish

echo 'npm config set registry taobao'
npm config set registry https://registry.npm.taobao.org