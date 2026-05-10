import React from 'react';
export default function AzureDevops() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Azure DevOps</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a DevOps y Azure DevOps</li>
        <li>Repositorios y control de versiones</li>
        <li>Pipelines de CI/CD</li>
        <li>Gestión de artefactos</li>
        <li>Boards y gestión de proyectos</li>
        <li>Integración con otras herramientas</li>
        <li>Seguridad y buenas prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Azure DevOps:</strong> Conceptos, ventajas y casos de uso.
        </li>
        <li>
          <strong>Repositorios:</strong> Git, control de versiones y flujos de trabajo.
        </li>
        <li>
          <strong>Pipelines:</strong> Creación y configuración de pipelines de CI/CD.
        </li>
        <li>
          <strong>Artefactos:</strong> Gestión y publicación de artefactos.
        </li>
        <li>
          <strong>Boards:</strong> Gestión de tareas, sprints y proyectos.
        </li>
        <li>
          <strong>Integración:</strong> Conexión con otras herramientas DevOps.
        </li>
        <li>
          <strong>Seguridad:</strong> Buenas prácticas y gestión de permisos.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Azure DevOps en proyectos reales.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4BibQ69MD8c?si=BNIS5dXcmzgUa8JZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/11KT1hPNkY4?si=L4X_XyAhvL0q-KKq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KLl2IJDypYs?si=zGV54nI--0P78jcF" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

      </div>
    </div>
  );
}