## image build
```
// build
docker build -t asia.gcr.io/gke-test-235823/web-angular-ssr:v2 .

// コンテナにアタッチ
docker run -d -it asia.gcr.io/gke-test-235823/web-angular-ssr:v2 /bin/bash
docker attach 

// ローカルでコンテナ起動
docker run -p 3000:80 --rm asia.gcr.io/gke-test-235823/web-angular-ssr:v2

// containerにpush
gcloud docker -- push asia.gcr.io/gke-test-235823/web-angular-ssr:v2
```

## 参考
[ng buildを使ってdocker化](https://medium.com/@DenysVuika/your-angular-apps-as-docker-containers-471f570a7f2)
[ng serveを使ってdocker化](https://mherman.org/blog/dockerizing-an-angular-app/)