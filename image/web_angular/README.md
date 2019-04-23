## image build
```
// build
docker build -t asia.gcr.io/gke-test-235823/web-angular:v1 .

// ローカルでコンテナ起動
docker run -p 3000:80 --rm asia.gcr.io/gke-test-235823/web-angular:v1

// containerにpush
gcloud docker -- push asia.gcr.io/gke-test-235823/web-angular:v1
```

## 参考
[ng buildを使ってdocker化](https://medium.com/@DenysVuika/your-angular-apps-as-docker-containers-471f570a7f2)
[ng serveを使ってdocker化](https://mherman.org/blog/dockerizing-an-angular-app/)