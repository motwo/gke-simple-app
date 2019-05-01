# api-test
## プロジェクト作成
```
vue init nuxt-community/starter-template
```

## インストール
```
npm install @nuxtjs/axios
```

## イメージ作成
```
// build
docker build -t asia.gcr.io/gke-test-235823/web-nuxt:v1 .

// containerにpush
gcloud docker -- push asia.gcr.io/gke-test-235823/web-nuxt:v1
```

## 確認事項
* middlewareを使わずにSSRを実装できるか？（http://api に接続できるか？）
* できない場合はmiddlewareを実装することで解決できるか？

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

