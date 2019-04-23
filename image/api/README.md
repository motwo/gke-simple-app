##  イメージをContainer Registryにプッシュ
```
// image作成
docker build -t asia.gcr.io/gke-test-235823/api:v1 .

// container registryにプッシュ（プッシュ後、GCP管理画面で確認可能）
gcloud docker -- push asia.gcr.io/gke-test-235823/api:v1
```