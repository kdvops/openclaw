import React from 'react';
export default function Chef() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Chef</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la automatización de configuración</li>
        <li>Conceptos clave de Chef</li>
        <li>Instalación y configuración de Chef</li>
        <li>Recetas, cookbooks y recursos</li>
        <li>Roles, ambientes y nodos</li>
        <li>Testing y troubleshooting</li>
        <li>Integración con otras herramientas DevOps</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Chef:</strong> ¿Qué es Chef? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en servidores y nodos. Configuración inicial.
        </li>
        <li>
          <strong>Recetas y Cookbooks:</strong> Estructura, sintaxis y ejemplos prácticos.
        </li>
        <li>
          <strong>Roles y Ambientes:</strong> Organización y gestión de nodos.
        </li>
        <li>
          <strong>Testing:</strong> Herramientas de testing y troubleshooting.
        </li>
        <li>
          <strong>Integración DevOps:</strong> Chef con Jenkins, Docker, Kubernetes.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Chef en automatización de infraestructura.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ns_tRKD20c4?si=VKbuKRrP_hpF6bzO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/F-NGOvYiV9g?si=wWG5ZT7kgOTfXduX" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kHD4KQKKP5Y?si=mf9bhTjr9DfJxZbC" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}