import React from 'react';
export default function Jenkins() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Jenkins</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a CI/CD y Jenkins</li>
        <li>Instalación y configuración de Jenkins</li>
        <li>Creación de pipelines y jobs</li>
        <li>Plugins y extensiones</li>
        <li>Integración con otras herramientas DevOps</li>
        <li>Seguridad y buenas prácticas</li>
        <li>Casos prácticos y troubleshooting</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Jenkins:</strong> ¿Qué es Jenkins? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en servidores, configuración inicial.
        </li>
        <li>
          <strong>Pipelines:</strong> Creación y configuración de pipelines y jobs.
        </li>
        <li>
          <strong>Plugins:</strong> Instalación y uso de plugins y extensiones.
        </li>
        <li>
          <strong>Integración DevOps:</strong> Jenkins con Git, Docker, Kubernetes.
        </li>
        <li>
          <strong>Seguridad:</strong> Buenas prácticas y gestión de permisos.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y troubleshooting en proyectos reales.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Jenkins en automatización de proyectos.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DpoKXjuWKwE?si=iYAh0jwPPMtELjW1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6YZvp2GwT0A?si=gM4mm1juKgOZXgob" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}