import React from 'react';
export default function N8N() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de N8N</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la automatización de flujos</li>
        <li>Instalación y configuración de N8N</li>
        <li>Creación de workflows y nodos</li>
        <li>Integración con APIs y servicios externos</li>
        <li>Gestión de datos y variables</li>
        <li>Despliegue y administración</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a N8N:</strong> ¿Qué es N8N? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en diferentes plataformas, configuración inicial.
        </li>
        <li>
          <strong>Workflows:</strong> Creación y gestión de flujos de trabajo y nodos.
        </li>
        <li>
          <strong>Integración:</strong> Conexión con APIs, servicios y bases de datos.
        </li>
        <li>
          <strong>Gestión de datos:</strong> Variables, almacenamiento y manipulación de datos.
        </li>
        <li>
          <strong>Despliegue:</strong> Administración y monitoreo de N8N.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en automatización.
        </li>
      </ol>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/T3LNPmYp980?si=3bvjew3vtEFd7iYw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KCrUzFfankI?si=0gHMY07x4Xj4HupL" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3IvcIPDGB1k?si=u3wKQ3ORlMzTf5qS" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas, ejercicios guiados y videos recomendados para dominar N8N.</p>
    </div>
  );
}