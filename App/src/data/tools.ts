
export const tools = [
  { name: 'n8n', desc: 'Automatización visual de flujos con nodos y webhooks; ideal para orquestar APIs y tareas.', link: 'https://n8n.io', tags: ['Automation','Webhooks','Integrations'] },
  { name: 'Azure', desc: 'Servicios cloud empresariales. IaC con Bicep/Terraform, y CI/CD con Azure DevOps.', link: 'https://azure.microsoft.com', tags: ['Cloud','IaC'] },
  { name: 'AWS', desc: 'Plataforma cloud con ECS/EKS, Lambda, S3, CloudWatch. Amplio ecosistema.', link: 'https://aws.amazon.com', tags: ['Cloud','Containers'] },
  { name: 'SonarQube', desc: 'Análisis estático y calidad de código; coverage y deuda técnica.', link: 'https://www.sonarsource.com/products/sonarqube/', tags: ['Code Quality','Security'] },
  { name: 'Trivy', desc: 'Escáner de vulnerabilidades para contenedores, archivos y repos.', link: 'https://aquasecurity.github.io/trivy/', tags: ['Security','SBOM'] },
  { name: 'Ansible', desc: 'Automatización de configuración y orquestación para Linux/Windows.', link: 'https://www.ansible.com', tags: ['Automation','ConfigMgmt'] },
  { name: 'Terraform', desc: 'Infraestructura como código multi‑cloud y on‑premise.', link: 'https://www.terraform.io', tags: ['IaC'] },
  { name: 'Azure DevOps', desc: 'Repos, Pipelines, Artefacts y Boards para DevOps.', link: 'https://azure.microsoft.com/products/devops/', tags: ['CI/CD','Planning'] },
  { name: 'Argo CD', desc: 'Entrega continua declarativa para Kubernetes, estilo GitOps.', link: 'https://argo-cd.readthedocs.io', tags: ['Kubernetes','GitOps'] },
  { name: 'Jenkins', desc: 'Servidor de CI extendible con enorme ecosistema de plugins.', link: 'https://www.jenkins.io', tags: ['CI'] },
] as const
