# OpenClaw Stages

This stage templating flow is now consolidated under the same `openclaw` root.

Recommended structure for this app:
- Argo CD definitions in `argoCD/apps/openclaw`
- Kubernetes workloads in `k8s/apps/openclaw`
- Stage-specific overlays in `argoCD/apps/openclaw/stages` and `k8s/apps/openclaw/stages`

It uses:
- one root Argo CD `Application` as app-of-apps
- one frontend Argo CD `ApplicationSet` for `dev`, `qa`, and `prod`
- one shared Argo CD `Application` for stage configuration
- Kustomize only for namespace manifests
- the existing Helm chart from `k8s/apps/openclaw/frontend/webapp`

Files:
- `argoCD/apps/openclaw/stages/root-application.yaml`
- `argoCD/apps/openclaw/stages/children`
- `argoCD/apps/openclaw/stages/kustomize/namespaces`
- `k8s/apps/openclaw/stages/frontend`

Bootstrap example:

```powershell
kubectl apply -f C:\repositorio\ArgoCD\argocd\apps\openclaw\stages\root-application.yaml
```

Promotion flow:
- `dev -> qa -> prod`
