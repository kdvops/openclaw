import React from 'react';
export default function ARMBicep() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de ARM / Bicep</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la Infraestructura como Código (IaC)</li>
        <li>Conceptos de ARM Templates</li>
        <li>Creación y despliegue de recursos con ARM</li>
        <li>Introducción a Bicep</li>
        <li>Sintaxis y estructura de archivos Bicep</li>
        <li>Conversión de ARM a Bicep</li>
        <li>Despliegue de recursos con Bicep</li>
        <li>Buenas prácticas y casos de uso</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a IaC:</strong> Ventajas, conceptos y herramientas principales.
        </li>
        <li>
          <strong>ARM Templates:</strong> Estructura, sintaxis JSON, parámetros y variables.
        </li>
        <li>
          <strong>Despliegue con ARM:</strong> Ejercicios prácticos de despliegue en Azure.
        </li>
        <li>
          <strong>Bicep:</strong> ¿Qué es Bicep? Diferencias con ARM, ventajas y sintaxis.
        </li>
        <li>
          <strong>Conversión:</strong> Migración de plantillas ARM a Bicep. Herramientas y ejemplos.
        </li>
        <li>
          <strong>Despliegue con Bicep:</strong> Ejercicios prácticos, integración con pipelines.
        </li>
        <li>
          <strong>Buenas prácticas:</strong> Organización de código, reutilización y seguridad.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar ARM y Bicep en Azure.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q36cSy1wqS8?si=Xifmb1-w3vYvbSF6" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ge_Sp-1lWZ4?si=GehDHXw0JiArYQKt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}