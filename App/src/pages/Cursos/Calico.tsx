import React from 'react';
export default function Calico() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Calico</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a redes en Kubernetes</li>
        <li>Conceptos de Calico y arquitectura</li>
        <li>Instalación y configuración de Calico</li>
        <li>Políticas de red y seguridad</li>
        <li>Monitoreo y troubleshooting</li>
        <li>Integración con otras herramientas</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a redes:</strong> Redes en Kubernetes, conceptos básicos y ventajas de Calico.
        </li>
        <li>
          <strong>Arquitectura:</strong> Componentes principales, funcionamiento y despliegue.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en clústeres, configuración inicial.
        </li>
        <li>
          <strong>Políticas de red:</strong> Creación y gestión de políticas de seguridad.
        </li>
        <li>
          <strong>Monitoreo:</strong> Herramientas de monitoreo y troubleshooting.
        </li>
        <li>
          <strong>Integración:</strong> Calico con otras soluciones de red y seguridad.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas y ejercicios guiados para dominar Calico en Kubernetes.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JGQNQuFzgbg?si=SOtBji_WufdjbY3R" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qo74TCKsQy4?si=yCTef1LdcDkqwYRw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A8AkkP5_GbE?si=EXDTeY18xy4r4QGY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
}