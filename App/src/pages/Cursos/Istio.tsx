import React from 'react';
export default function Istio() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Istio</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a Service Mesh y Istio</li>
        <li>Arquitectura y componentes de Istio</li>
        <li>Instalación y configuración de Istio</li>
        <li>Gestión de tráfico y políticas</li>
        <li>Seguridad y autenticación</li>
        <li>Monitoreo y observabilidad</li>
        <li>Integración con Kubernetes y otras herramientas</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Istio:</strong> ¿Qué es un Service Mesh? Ventajas y casos de uso de Istio.
        </li>
        <li>
          <strong>Arquitectura:</strong> Componentes principales, funcionamiento y despliegue.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en clústeres, configuración inicial.
        </li>
        <li>
          <strong>Gestión de tráfico:</strong> Reglas, políticas y ejemplos prácticos.
        </li>
        <li>
          <strong>Seguridad:</strong> Autenticación, autorización y encriptación de tráfico.
        </li>
        <li>
          <strong>Monitoreo:</strong> Herramientas de observabilidad y troubleshooting.
        </li>
        <li>
          <strong>Integración:</strong> Istio con Kubernetes y otras soluciones DevOps.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Istio en Kubernetes.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ofJ5swfP2kQ?si=t_SCWj4xILeuDMn7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/16fgzklcF7Y?si=HeqJeY12rMjTJcQU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}