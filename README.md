# MyAdmin

正在起步中

```bash
  git clone https://github.com/Geng177182/ng-my-admin.git
  cd ng-my-admin
  npm install
  npm run start
```

## npm 包
- ng-zorro-antd
- rxjs
- monaco-editor
- localize

## 国际化
```
npm run extract
注： 此功能在win系统可能使zh.json获取i18n失败，请使用linux、mac启动
```  
修改src/locale/en.js中的中文，请勿修改zh.json中字段

开发环境: 开发环境不支持页面切换语言，代码中切换功能已禁用
```bash
npm run start
npm run start:en
```
