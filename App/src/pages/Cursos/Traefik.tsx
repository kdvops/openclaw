import React from 'react';
export default function Traefik() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Traefik</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a proxies y Traefik</li>
        <li>Instalación y configuración de Traefik</li>
        <li>Conceptos clave: routers, middlewares y servicios</li>
        <li>Gestión de certificados y seguridad</li>
        <li>Integración con Docker y Kubernetes</li>
        <li>Monitoreo y troubleshooting</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Traefik:</strong> ¿Qué es Traefik? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en diferentes plataformas, configuración inicial.
        </li>
        <li>
          <strong>Routers y middlewares:</strong> Ejercicios prácticos de configuración y uso.
        </li>
        <li>
          <strong>Certificados y seguridad:</strong> Gestión de HTTPS y seguridad en Traefik.
        </li>
        <li>
          <strong>Integración:</strong> Traefik con Docker y Kubernetes.
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
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/6qkhvhv0_IU?si=WpzxGnBsqtR0oEea" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/UO9YrNj-Y88?si=QJrUPLGRQNMDKMjp" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas, ejercicios guiados y videos recomendados para dominar Traefik.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/1etdW_XVPGE?si=jIRY-A40ke8BrQOh" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/rrhm7Y7EKss?si=20yLxiomHvs1BPh2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}