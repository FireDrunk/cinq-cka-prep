# Logging (short)
kubectl logs podname --follow
kubectl logs podname containername

# Liveness Probe
# Readiness Probe
https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/

# Monitoring (short)
kubectl top node

# Debugging
kubectl get pods
-> Scheduling fout

kubectl get pod podname -o wide
-> Image Pull fout

kubectl describe pod podname (-o wide)
-> Andere Pod fouten

kubectl get service servicename -o wide

kubectl get endpoints
kubectl describe endpoints
-> Label fout
-> Poort fout
