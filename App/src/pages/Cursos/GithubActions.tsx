import React from 'react';
export default function GithubActions() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de GitHub Actions</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a CI/CD y GitHub Actions</li>
        <li>Conceptos clave: workflows, jobs y steps</li>
        <li>Creación y configuración de workflows</li>
        <li>Variables, secretos y matrices</li>
        <li>Integración con otras herramientas</li>
        <li>Testing y despliegue automático</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a GitHub Actions:</strong> ¿Qué es? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Workflows:</strong> Estructura, sintaxis YAML, jobs y steps.
        </li>
        <li>
          <strong>Variables y Secretos:</strong> Uso seguro y ejemplos prácticos.
        </li>
        <li>
          <strong>Integración:</strong> Conexión con otras herramientas DevOps.
        </li>
        <li>
          <strong>Testing y Despliegue:</strong> Ejercicios de automatización y despliegue continuo.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en proyectos reales.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar GitHub Actions en automatización de proyectos.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MNBf-ylhtK0?si=K7pr91vYNkaB3jNM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/R8_veQiYBjI?si=3ggz_x4RPwnNbPqq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TLB5MY9BBa4?si=J3kLyw75G6vF0V8r" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}