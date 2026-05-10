import React from 'react';
export default function Ansible() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Curso de Ansible</h1>
      <h2 className="text-xl font-semibold mb-2">Plan de Estudio</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Introducción a la automatización y Ansible</li>
        <li>Instalación y configuración de Ansible</li>
        <li>Inventarios y gestión de hosts</li>
        <li>Playbooks y YAML</li>
        <li>Módulos y tareas</li>
        <li>Variables, facts y templates</li>
        <li>Roles y reutilización de código</li>
        <li>Automatización avanzada y Ansible Galaxy</li>
        <li>Integración con otras herramientas DevOps</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Temario y Desarrollo de Clase</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong>Introducción a Ansible:</strong> ¿Qué es Ansible? Ventajas y casos de uso. Ejemplos prácticos.
        </li>
        <li>
          <strong>Instalación:</strong> Instalación en Linux y Windows. Configuración inicial. Primeros comandos.
        </li>
        <li>
          <strong>Inventarios:</strong> Tipos de inventario, archivos estáticos y dinámicos. Ejercicios de inventario.
        </li>
        <li>
          <strong>Playbooks:</strong> Sintaxis YAML, estructura de un playbook, ejecución y depuración.
        </li>
        <li>
          <strong>Módulos:</strong> Uso de módulos básicos y avanzados. Ejercicios prácticos.
        </li>
        <li>
          <strong>Variables y Templates:</strong> Uso de variables, facts, y plantillas Jinja2. Ejemplo de parametrización.
        </li>
        <li>
          <strong>Roles:</strong> Creación y uso de roles. Organización de proyectos grandes.
        </li>
        <li>
          <strong>Ansible Galaxy:</strong> Instalación de roles externos. Ejemplo de integración.
        </li>
        <li>
          <strong>Integración DevOps:</strong> Ansible con Jenkins, Docker, Kubernetes. Ejercicios finales.
        </li>
      </ol>
      <p className="mt-4">Cada clase incluye teoría, demostraciones prácticas y ejercicios guiados para aplicar los conceptos.</p>
      <h2 className="text-xl font-semibold mb-2">Videos recomendados</h2>
      <div className="space-y-4">
<iframe width="560" height="315" src="https://www.youtube.com/embed/1id6ERvfozo?si=H4Q6xNgenDUaZ0ss" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/NqHqhlEdtX4?si=c1kL3Qi3q49rEVnJ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/BS0GLQaSGPo?si=jWCfrd1fOTEynMIP" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>      </div>

    </div>
  );
}

