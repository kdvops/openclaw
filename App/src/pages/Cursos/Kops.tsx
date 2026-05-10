import React from 'react';
export default function Kops() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Kops</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a Kubernetes y Kops</li>
        <li>Instalación y configuración de Kops</li>
        <li>Creación y gestión de clústeres</li>
        <li>Configuración avanzada y networking</li>
        <li>Actualización y mantenimiento de clústeres</li>
        <li>Integración con otras herramientas</li>
        <li>Casos prácticos y troubleshooting</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Kops:</strong> ¿Qué es Kops? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en diferentes plataformas, configuración inicial.
        </li>
        <li>
          <strong>Creación de clústeres:</strong> Ejercicios prácticos de creación y gestión.
        </li>
        <li>
          <strong>Configuración avanzada:</strong> Networking, seguridad y personalización.
        </li>
        <li>
          <strong>Actualización y mantenimiento:</strong> Buenas prácticas y troubleshooting.
        </li>
        <li>
          <strong>Integración:</strong> Kops con otras herramientas DevOps.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Kops en la gestión de clústeres Kubernetes.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/f6vv4RkkjG4?si=cA9c8c-YbihcxGt_" title="¿Qué es Kops?"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ySHF-TQxKsw?si=vzQ21306i2is3j_R" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}