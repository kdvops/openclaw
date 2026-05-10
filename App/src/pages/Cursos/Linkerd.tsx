import React from 'react';
export default function Linkerd() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Linkerd</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a Service Mesh y Linkerd</li>
        <li>Arquitectura y componentes de Linkerd</li>
        <li>Instalación y configuración de Linkerd</li>
        <li>Gestión de tráfico y políticas</li>
        <li>Seguridad y observabilidad</li>
        <li>Integración con Kubernetes y otras herramientas</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Linkerd:</strong> ¿Qué es un Service Mesh? Ventajas y casos de uso de Linkerd.
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
          <strong>Seguridad y observabilidad:</strong> Autenticación, autorización y monitoreo.
        </li>
        <li>
          <strong>Integración:</strong> Linkerd con Kubernetes y otras soluciones DevOps.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Linkerd en Kubernetes.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nawwLTs0KyY?si=DNAKmcFCyKFisvB2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xo9Tq2UNKfM?si=7LgijdCus5UkdunU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NqjRqe0J98U?si=vpci2B1fsSpTQ4OT" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        
      </div>
    </div>
  );
}