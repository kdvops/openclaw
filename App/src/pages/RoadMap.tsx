import React from 'react';

export default function RoadMap() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Roadmap KDvops: DevOps Experto</h1>
      <p className="mb-6 text-slate-300">Guía de aprendizaje para convertirte en un profesional DevOps capaz de manejar Kubernetes, múltiples nubes, CI/CD y automatización con Bash y Python.</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Fundamentos DevOps</strong>
          <ul className="list-disc pl-6">
            <li>Conceptos de integración y entrega continua (CI/CD)
              <ul className="list-none pl-4 text-xs">
                <li><a href="https://www.atlassian.com/continuous-delivery" target="_blank" className="text-indigo-400 underline">Referencia CI/CD</a></li>
              </ul>
            </li>
            <li>Control de versiones (<a href="https://git-scm.com/doc" target="_blank" className="text-indigo-400 underline">Git</a>, <a href="https://docs.github.com/" target="_blank" className="text-indigo-400 underline">GitHub</a>)</li>
            <li>Metodologías ágiles y colaboración <a href="https://www.scrum.org/resources/what-is-scrum" target="_blank" className="text-indigo-400 underline">Scrum</a></li>
          </ul>
        </li>
        <li>
          <strong>Automatización y Scripting</strong>
          <ul className="list-disc pl-6">
            <li>Manejo avanzado de <span className="font-mono">Bash</span> (<a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" className="text-indigo-400 underline">Docs</a>) y <span className="font-mono">Python</span> (<a href="https://docs.python.org/3/" target="_blank" className="text-indigo-400 underline">Docs</a>)</li>
            <li>Automatización de tareas y flujos</li>
          </ul>
        </li>
        <li>
          <strong>Infraestructura como Código (IaC)</strong>
          <ul className="list-disc pl-6">
            <li>
              <a href="https://www.terraform.io/docs" target="_blank" className="text-indigo-400 underline">Terraform</a>,
              <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview" target="_blank" className="text-indigo-400 underline">ARM/Bicep</a>,
              <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html" target="_blank" className="text-indigo-400 underline">AWS CloudFormation</a>
            </li>
            <li>Gestión de configuración:
              <a href="https://docs.ansible.com/" target="_blank" className="text-indigo-400 underline">Ansible</a>,
              <a href="https://docs.chef.io/" target="_blank" className="text-indigo-400 underline">Chef</a>,
              <a href="https://puppet.com/docs/" target="_blank" className="text-indigo-400 underline">Puppet</a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Kubernetes y Orquestación de Contenedores</strong>
          <ul className="list-disc pl-6">
            <li>Instalación y administración de clusters (
              <a href="https://kops.sigs.k8s.io/" target="_blank" className="text-indigo-400 underline">Kops</a>,
              <a href="https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/" target="_blank" className="text-indigo-400 underline">Kubeadm</a>,
              <a href="https://learn.microsoft.com/en-us/azure/aks/" target="_blank" className="text-indigo-400 underline">AKS</a>,
              <a href="https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html" target="_blank" className="text-indigo-400 underline">EKS</a>,
              <a href="https://cloud.google.com/kubernetes-engine/docs" target="_blank" className="text-indigo-400 underline">GKE</a>
            )</li>
            <li>
              <a href="https://helm.sh/docs/" target="_blank" className="text-indigo-400 underline">Helm</a>,
              <a href="https://kubectl.docs.kubernetes.io/references/kustomize/" target="_blank" className="text-indigo-400 underline">Kustomize</a>,
              <a href="https://argo-cd.readthedocs.io/en/stable/" target="_blank" className="text-indigo-400 underline">ArgoCD</a>,
              <a href="https://www.jenkins.io/doc/" target="_blank" className="text-indigo-400 underline">Jenkins</a>,
              <a href="https://docs.github.com/en/actions" target="_blank" className="text-indigo-400 underline">Github Actions</a>
            </li>
            <li>Networking:
              <a href="https://docs.projectcalico.org/" target="_blank" className="text-indigo-400 underline">Calico</a>,
              <a href="https://doc.traefik.io/traefik/" target="_blank" className="text-indigo-400 underline">Traefik</a>,
              <a href="https://kubernetes.github.io/ingress-nginx/" target="_blank" className="text-indigo-400 underline">Nginx Ingress</a>,
              <a href="https://istio.io/latest/docs/" target="_blank" className="text-indigo-400 underline">Istio</a>,
              <a href="https://linkerd.io/2.14/reference/" target="_blank" className="text-indigo-400 underline">Linkerd</a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Cloud Computing</strong>
          <ul className="list-disc pl-6">
            <li>
              Fundamentos de
              <a href="https://docs.aws.amazon.com/" target="_blank" className="text-indigo-400 underline">AWS</a>,
              <a href="https://learn.microsoft.com/en-us/azure/" target="_blank" className="text-indigo-400 underline">Azure</a>,
              <a href="https://cloud.google.com/docs" target="_blank" className="text-indigo-400 underline">Google Cloud</a>
            </li>
            <li>Despliegue de aplicaciones en múltiples nubes</li>
          </ul>
        </li>
        <li>
          <strong>Monitorización, Seguridad y Observabilidad</strong>
          <ul className="list-disc pl-6">
            <li>
              <a href="https://prometheus.io/docs/introduction/overview/" target="_blank" className="text-indigo-400 underline">Prometheus</a>,
              <a href="https://grafana.com/docs/" target="_blank" className="text-indigo-400 underline">Grafana</a>,
              <a href="https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-elastic-stack.html" target="_blank" className="text-indigo-400 underline">ELK Stack</a>
            </li>
            <li>Seguridad en pipelines y clusters</li>
          </ul>
        </li>
        <li>
          <strong>Plataformas de Integración</strong>
          <ul className="list-disc pl-6">
            <li>
              <a href="https://docs.n8n.io/" target="_blank" className="text-indigo-400 underline">N8N</a>, integración de APIs y automatización de flujos
            </li>
          </ul>
        </li>
      </ol>
      <div className="mt-8">
        <p className="text-slate-400">¿Listo para comenzar? Explora los cursos y utilitarios en KDvops para cada etapa del roadmap.</p>
      </div>
    </section>
  );
}
