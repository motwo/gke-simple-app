## image build
```
// build
docker build -t asia.gcr.io/gke-test-235823/web-go:v1 .

// containerにpush
gcloud docker -- push asia.gcr.io/gke-test-235823/web-go:v1
```