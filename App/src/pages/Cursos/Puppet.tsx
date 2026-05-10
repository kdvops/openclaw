import React from 'react';
export default function Puppet() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Puppet</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la automatización de configuración</li>
        <li>Instalación y configuración de Puppet</li>
        <li>Manifiestos, módulos y clases</li>
        <li>Gestión de nodos y ambientes</li>
        <li>Testing y troubleshooting</li>
        <li>Integración con otras herramientas DevOps</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Puppet:</strong> ¿Qué es Puppet? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en servidores y nodos. Configuración inicial.
        </li>
        <li>
          <strong>Manifiestos y módulos:</strong> Estructura, sintaxis y ejemplos prácticos.
        </li>
        <li>
          <strong>Gestión de nodos:</strong> Organización y administración de ambientes.
        </li>
        <li>
          <strong>Testing:</strong> Herramientas de testing y troubleshooting.
        </li>
        <li>
          <strong>Integración DevOps:</strong> Puppet con Jenkins, Docker, Kubernetes.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas, ejercicios guiados y videos recomendados para dominar Puppet.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LE2sq5B1FLI?si=HT_f3v-4C92fXuAn" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lV1g9-Zta1M?si=bMcDSv8WaCJUxmgv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0g1R7RMM6cE?si=BiVAoCoIc3Y1cBy8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}