# Portal Comercial Stages

This stage templating flow is now consolidated under the same `portal-comercial` root.

Recommended structure for this app:
- Argo CD definitions in `argocd/apps/portal-comercial`
- Kubernetes workloads in `k8s/apps/portal-comercial`
- Stage-specific overlays in `argocd/apps/portal-comercial/stages` and `k8s/apps/portal-comercial/stages`

It uses:
- one root Argo CD `Application` as app-of-apps
- one backend Argo CD `ApplicationSet` for `dev`, `next`, `qa`, and `prod`
- one frontend Argo CD `ApplicationSet` for `dev`, `next`, `qa`, and `prod`
- one shared Argo CD `Application` for stage configuration
- one Argo CD `Application` to bootstrap Kargo resources for this app
- Kustomize only for namespace manifests
- the existing Helm charts from `k8s/apps/portal-comercial/.../webapp`

Files:
- `argocd/apps/portal-comercial/stages/root-application.yaml`
- `argocd/apps/portal-comercial/stages/children`
- `argocd/apps/portal-comercial/stages/kustomize/namespaces`
- `k8s/apps/portal-comercial/stages/backend`
- `k8s/apps/portal-comercial/stages/frontend`
- `kargo/kargo-yaml/portal-comercial`

Bootstrap example:

```powershell
kubectl apply -f C:\repositorio\ArgoCD\argocd\apps\portal-comercial\stages\root-application.yaml
```

Kargo resources included:
- `Project` + `ProjectConfig`: `portal-comercial`
- `Warehouse`: tracks backend and frontend images
- `PromotionTask`: updates stage values files (`backend` and `frontend`)
- `Stage`: `dev -> qa -> prod` promotion flow, plus an independent `next` stage
