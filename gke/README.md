## Ingress
* ingress_static
* ingress_go
* ingress_angular

## Service, Deployment
* web_static.yaml
* web_go.yaml
* web_angular.yaml
* api.yaml

## 作成手順
### クラスタ
```
// 作成
gcloud container clusters create gke-simple-app --cluster-version=1.12.6-gke.10 \
--machine-type=n1-standard-1 \
--num-nodes=3

// 認証
gcloud container clusters get-credentials gke-simple-app
```

###  API
```
kubectl apply -f api.yaml
```

### Web
```
kubectl apply -f web_static.yaml
kubectl apply -f web_go.yaml
kubectl apply -f web_angular.yaml
kubectl apply -f web_nuxt.yaml

// webコンテナに接続
kubectl exec -it web-694bd65655-k5kq9 sh -c web

// webコンテナからapiに接続できるか確認
apk --no-cache add curl
curl http://api
```

### Ingress
```
kubectl apply -f ingress_static.yaml
kubectl apply -f ingress_go.yaml
kubectl apply -f ingress_angular.yaml
kubectl apply -f ingress_nuxt.yaml
```

### クリーニング
以下はコンソールからも簡単に操作可能
```
// clusterサイズを0に変更
gcloud container clusters resize gke-simple-app --size 0

// deployment, serviceの削除
kubectl delete -f api.yaml
kubectl delete -f web_static.yaml
kubectl delete -f web_go.yaml
kubectl delete -f web_angular.yaml

// ingress削除
kubectl delete -f ingress_static.yaml
kubectl delete -f ingress_go.yaml
kubectl delete -f ingress_angular.yaml
```