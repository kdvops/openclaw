import React from 'react';
export default function AWSCloudFormation() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de AWS CloudFormation</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la Infraestructura como Código (IaC)</li>
        <li>Conceptos de CloudFormation</li>
        <li>Creación de stacks y recursos</li>
        <li>Sintaxis y estructura de plantillas YAML/JSON</li>
        <li>Parámetros, salidas y condiciones</li>
        <li>Actualización y gestión de stacks</li>
        <li>Integración con otros servicios AWS</li>
        <li>Buenas prácticas y troubleshooting</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a IaC:</strong> Ventajas, conceptos y herramientas principales.
        </li>
        <li>
          <strong>CloudFormation:</strong> ¿Qué es? Casos de uso y ventajas.
        </li>
        <li>
          <strong>Stacks:</strong> Creación, actualización y eliminación de stacks.
        </li>
        <li>
          <strong>Plantillas:</strong> Sintaxis YAML/JSON, parámetros, salidas y condiciones.
        </li>
        <li>
          <strong>Gestión avanzada:</strong> Integración con otros servicios, troubleshooting y buenas prácticas.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar CloudFormation en AWS.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u4qwcztXhDs?si=GzQHS0ddk8t8W0ZW" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XlOxrLt3QL8?si=-nehUSv5B0yb2IZt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5rWD8hq0Zt0?si=b7h1-Fbs6mdPbhF6" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

      </div>
    </div>
  );
}