import React from 'react';
export default function Helm() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Helm</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la gestión de paquetes en Kubernetes</li>
        <li>Conceptos clave de Helm</li>
        <li>Instalación y configuración de Helm</li>
        <li>Charts: estructura y creación</li>
        <li>Variables, templates y valores</li>
        <li>Despliegue y actualización de aplicaciones</li>
        <li>Helm repos y Helm Hub</li>
        <li>Buenas prácticas y troubleshooting</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Helm:</strong> ¿Qué es Helm? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en clústeres, configuración inicial.
        </li>
        <li>
          <strong>Charts:</strong> Estructura, creación y ejemplos prácticos.
        </li>
        <li>
          <strong>Variables y Templates:</strong> Uso de valores y plantillas.
        </li>
        <li>
          <strong>Despliegue:</strong> Instalación y actualización de aplicaciones.
        </li>
        <li>
          <strong>Helm repos:</strong> Uso de repositorios y Helm Hub.
        </li>
        <li>
          <strong>Buenas prácticas:</strong> Troubleshooting y organización de proyectos.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Helm en Kubernetes.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/CPjfb-I_BKU?si=3ESZ6dL8DXejXiag" title="¿Qué es Helm?"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/jScW2XaS8uI?si=JUhnJydV13ZENNvc" title="Helm para principiantes"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}