
# KDvops Portal (Frontend)

KDvops. Portal de automatización con utilitarios (n8n, Azure, AWS, SonarQube, Trivy, Ansible, Terraform, Azure DevOps, Argo CD, Jenkins).

## Requisitos
- Node.js 20+ y npm
- Docker

## Desarrollo local
```bash
npm install
npm run dev
# abre http://localhost:5173
```

## Build de producción
```bash
npm run build
npm run preview
```

## Contenedor Docker (multi-stage + Nginx)
```bash
docker login
docker build -t silencfox/kdvops:latest . --push
# docker buildx build --platform linux/arm64 -t silencfox/kdvops:arm64 . --push
docker push silencfox/kdvops:latest
docker run --rm -p 8080:80 silencfox/kdvops:latest
# http://localhost:8080
```

## Docker Compose
```bash
docker compose up -d --build
```