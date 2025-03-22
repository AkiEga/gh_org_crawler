# 説明
GitHubの組織情報(organization)を取得するスクリプトです

# 準備
1. 少なくとも下記ver以上のNode.jsとnpmをインストールしてください

```bash
$ node -v  
v22.14.0
$ npm -v       
11.0.0
```
2. GitHubのPersonal Access Tokenを取得してください

# 使い方
1. [.env](c:\Users\user\work\gh_org_crawler\.env) に GitHubのPersonal Access Token を設定します。  
2. [package.json](c:\Users\user\work\gh_org_crawler\package.json) のスクリプトを使ってビルド・実行します:  
   ```sh
   npm install # 初回のみ
   npm run build
   npm start
   ```
3. 下記のように出力されます
```bash
$ npm start

> gh_org_crawler@1.0.0 start
> node dist/index.js

Organization Settings: {
  login: '${organization名}',
  id: ...,
  :
```

# LICENSE
[ISC](https://www.isc.org/licenses/)
