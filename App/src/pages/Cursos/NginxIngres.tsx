import React from 'react';
export default function NginxIngres() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Nginx Ingress</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a Ingress Controllers en Kubernetes</li>
        <li>Conceptos clave de Nginx Ingress</li>
        <li>Instalación y configuración de Nginx Ingress</li>
        <li>Gestión de reglas y rutas</li>
        <li>Certificados SSL y seguridad</li>
        <li>Monitoreo y troubleshooting</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Nginx Ingress:</strong> ¿Qué es un Ingress Controller? Ventajas y casos de uso de Nginx Ingress.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en clústeres Kubernetes, configuración inicial.
        </li>
        <li>
          <strong>Reglas y rutas:</strong> Ejercicios prácticos de configuración de rutas y hosts.
        </li>
        <li>
          <strong>Certificados y seguridad:</strong> Gestión de HTTPS y seguridad en Nginx Ingress.
        </li>
        <li>
          <strong>Monitoreo:</strong> Herramientas de observabilidad y troubleshooting.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/pzFirwIpMag?si=j0iIDXcTG1Dli9VQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/80Ew_fsV4rM?si=Nry-5204nfHsU7vJ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas, ejercicios guiados y videos recomendados para dominar Nginx Ingress en Kubernetes.</p>
    </div>
  );
}