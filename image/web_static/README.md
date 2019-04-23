## image build
```
// build
docker build -t asia.gcr.io/gke-test-235823/web-static:v1 .

// ローカルでコンテナ起動
docker run -p 3000:80 --rm asia.gcr.io/gke-test-235823/web-static:v1

// containerにpush
gcloud docker -- push asia.gcr.io/gke-test-235823/web-static:v1
```