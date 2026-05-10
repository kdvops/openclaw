import React from 'react';
export default function Kustomize() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Kustomize</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la personalización de recursos en Kubernetes</li>
        <li>Conceptos clave de Kustomize</li>
        <li>Instalación y configuración de Kustomize</li>
        <li>Bases, overlays y patches</li>
        <li>Gestión de configuraciones avanzadas</li>
        <li>Integración con kubectl y otras herramientas</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Kustomize:</strong> ¿Qué es? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación y configuración inicial.
        </li>
        <li>
          <strong>Bases y overlays:</strong> Estructura, ejemplos prácticos y uso de patches.
        </li>
        <li>
          <strong>Configuraciones avanzadas:</strong> Gestión de parámetros y secretos.
        </li>
        <li>
          <strong>Integración:</strong> Uso con kubectl y otras herramientas DevOps.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Kustomize en la personalización de recursos Kubernetes.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2G_CCDnxXcE?si=gdfN02s88kezOyC8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YC_ushm0f0I?si=35HjOK9IlboP0amc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}