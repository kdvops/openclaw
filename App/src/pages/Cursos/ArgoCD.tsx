import React from 'react';
export default function ArgoCD() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de ArgoCD</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a GitOps y ArgoCD</li>
        <li>Instalación y configuración de ArgoCD</li>
        <li>Conceptos clave: aplicaciones, proyectos y repositorios</li>
        <li>Sincronización y despliegue automático</li>
        <li>Gestión de accesos y seguridad</li>
        <li>Integración con CI/CD y otras herramientas</li>
        <li>Monitoreo y troubleshooting</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a GitOps:</strong> Principios de GitOps, ventajas y flujo de trabajo con ArgoCD.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en Kubernetes, configuración inicial y acceso web.
        </li>
        <li>
          <strong>Aplicaciones y Proyectos:</strong> Definición, creación y gestión. Ejercicios prácticos.
        </li>
        <li>
          <strong>Sincronización:</strong> Despliegue automático, hooks y estrategias de sincronización.
        </li>
        <li>
          <strong>Seguridad:</strong> Gestión de usuarios, roles y permisos. Integración con SSO.
        </li>
        <li>
          <strong>Integración CI/CD:</strong> ArgoCD con Jenkins, GitHub Actions, y otras herramientas DevOps.
        </li>
        <li>
          <strong>Monitoreo:</strong> Uso de métricas, alertas y troubleshooting de despliegues.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios de despliegue real y mejores prácticas.
        </li>
      </ol>
      <p className="mt-4">Las clases combinan teoría, demostraciones en vivo y ejercicios guiados para dominar ArgoCD en entornos reales.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e6Wmu77HoV8?si=NknQHL1Qz8TYdcOb" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AE5xTLV3qMk?si=JtvXby98n8hgNYR_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w3xdopP4aEk?si=GQNS7urBAxbS4te8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/84Ky0aPbHvY?si=xYJ_ggoD1LuEu1oW" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}