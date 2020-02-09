# Install metrics-server
minikube addons disable metrics-server
git clone https://github.com/kubernetes-sigs/metrics-server
Edit deployment in metrics-server/deploy/kubernetes/metrics-server-deployment.yaml

```        args:
          - --cert-dir=/tmp
          - --secure-port=4443
          - --kubelet-insecure-tls
          - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
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