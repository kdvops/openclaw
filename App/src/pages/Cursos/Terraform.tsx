import React from 'react';
export default function Terraform() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Terraform</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la Infraestructura como Código (IaC)</li>
        <li>Instalación y configuración de Terraform</li>
        <li>Conceptos clave: providers, resources y state</li>
        <li>Creación y despliegue de infraestructura</li>
        <li>Variables, outputs y módulos</li>
        <li>Gestión de estados y backend</li>
        <li>Integración con otras herramientas DevOps</li>
        <li>Casos prácticos y mejores prácticas</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Terraform:</strong> ¿Qué es Terraform? Ventajas y casos de uso.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en diferentes plataformas, configuración inicial.
        </li>
        <li>
          <strong>Providers y resources:</strong> Ejercicios prácticos de uso y despliegue.
        </li>
        <li>
          <strong>Variables y módulos:</strong> Uso avanzado y organización de código.
        </li>
        <li>
          <strong>State y backend:</strong> Gestión de estados y almacenamiento remoto.
        </li>
        <li>
          <strong>Integración DevOps:</strong> Terraform con Jenkins, GitHub Actions, Kubernetes.
        </li>
        <li>
          <strong>Casos prácticos:</strong> Ejercicios y mejores prácticas en producción.
        </li>
      </ol>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/7xngnjfIlK4" title="¿Qué es Terraform?"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z94DYoF5ufg?si=N8RfoLJ-l88HU0QL" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_84CxYRv9Ik?si=fJGx9pksopGvGsvJ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      <p className="mt-4">Las clases incluyen teoría, demostraciones prácticas, ejercicios guiados y videos recomendados para dominar Terraform.</p>
    </div>
  );
}