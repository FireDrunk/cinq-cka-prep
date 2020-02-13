# Install metrics-server
```
minikube addons disable metrics-server
git clone https://github.com/kubernetes-sigs/metrics-server
cd metrics-server/deploy/kubernetes/
```

Edit metrics-server-deployment.yaml
```        args:
          - --cert-dir=/tmp
          - --secure-port=4443
          - --kubelet-insecure-tls
          - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
```
Deploy the metrics server:
```
kubectl apply -f .
```

Deploy the test application:
```
kubectl apply -f deploy_basic.yaml -f svc.yaml
```

Deploy the HPA:
```
kubectl apply -f hpa.yaml
```

Start a shell:
```
kubectl run --generator=run-pod/v1 -it --rm load-generator --image=busybox /bin/sh
```

Run this command:
```
while true; do wget -q -O- http://hpa-demo.default.svc.cluster.local; done
```

Watch the magic!