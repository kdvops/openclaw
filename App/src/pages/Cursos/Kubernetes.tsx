import React from 'react';
export default function Kubernetes() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Kubernetes</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a contenedores y Kubernetes</li>
        <li>Arquitectura y componentes de Kubernetes</li>
        <li>Instalación y configuración de clústeres</li>
        <li>Gestión de recursos y objetos</li>
        <li>Networking y almacenamiento</li>
        <li>Seguridad y RBAC</li>
        <li>Monitoreo y troubleshooting</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Kubernetes:</strong> ¿Qué es? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Arquitectura:</strong> Componentes principales, funcionamiento y despliegue.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en diferentes plataformas, configuración inicial.
        </li>
        <li>
          <strong>Gestión de recursos:</strong> Pods, deployments, services y otros objetos.
        </li>
        <li>
          <strong>Networking y almacenamiento:</strong> Configuración y ejemplos prácticos.
        </li>
        <li>
          <strong>Seguridad:</strong> RBAC, autenticación y autorización.
        </li>
        <li>
          <strong>Monitoreo:</strong> Herramientas de observabilidad y troubleshooting.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Kubernetes en la gestión de aplicaciones y clústeres.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/1z4JgFj40pU" title="¿Qué es Kubernetes?"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2v6rj5yGg0w" title="Kubernetes para principiantes"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}