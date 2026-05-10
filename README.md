
# OpenClaw 

# 2) Instalar/actualizar OpenClaw en dev
clear
sudo helm uninstall openclaw-frontend-dev -n openclaw-dev

sudo helm upgrade --install openclaw-frontend-dev \
  /home/kalcala/openclaw/k8s/apps/openclaw/frontend/webapp \
  -n openclaw-dev \
  --create-namespace \
  -f /home/kalcala/openclaw/k8s/apps/openclaw/frontend/webapp/values.yaml \
  -f /home/kalcala/openclaw/k8s/apps/openclaw/stages/frontend/values-dev-frontend.yaml


clear
sudo helm uninstall openclaw-frontend-dev -n openclaw-dev

sudo helm upgrade --install openclaw-frontend-dev \
  /home/kalcala/openclaw/k8s/apps/openclaw/frontend/webapp \
  -n openclaw-dev \
  --create-namespace \
  -f /home/kalcala/openclaw/k8s/apps/openclaw/frontend/webapp/values.yaml \
  -f /home/kalcala/openclaw/k8s/apps/openclaw/stages/frontend/values-dev-frontend.yaml \
  --set istio.enabled=false \
  --set virtualService.enabled=false


sudo kubectl get pods,svc,ingress -n openclaw-dev

sudo kubectl get gateway -A