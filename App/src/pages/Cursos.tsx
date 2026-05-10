import React from "react";
import { tools } from "../data/tools";

// Ejemplo de categorías (puedes expandir según tus necesidades)
const categories = {
  "Automation": ["Ansible", "n8n"],
  "Cloud": ["Azure", "AWS"],
  "IaC": ["Terraform", "Azure", "AWS"],
  "CI/CD": ["Jenkins", "Azure DevOps", "Argo CD"],
  "Security": ["SonarQube", "Trivy"],
  "Kubernetes": ["Argo CD"],
};

// Información básica de ejemplo para cada curso
const courseInfo = {
  "Ansible": { duration: "8h", teacher: "Juan Pérez" },
  "n8n": { duration: "6h", teacher: "Ana Gómez" },
  "Azure": { duration: "10h", teacher: "Carlos Ruiz" },
  "AWS": { duration: "10h", teacher: "Laura Torres" },
  "SonarQube": { duration: "4h", teacher: "Pedro Díaz" },
  "Trivy": { duration: "3h", teacher: "Sofía López" },
  "Terraform": { duration: "7h", teacher: "Miguel Castro" },
  "Azure DevOps": { duration: "9h", teacher: "Luis Martínez" },
  "Argo CD": { duration: "5h", teacher: "María Fernández" },
  "Jenkins": { duration: "8h", teacher: "José Ramírez" },
};

interface CursoCardProps {
  name: string;
  desc: string;
  duration: string;
  teacher: string;
  link: string;
}

function CursoCard({ name, desc, duration, teacher, link }: CursoCardProps) {
  return (
  <div className="bg-slate-900/80 rounded-lg shadow p-4 flex flex-col gap-2 border border-slate-700">
      <h3 className="text-lg font-bold text-indigo-700">{name}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
      <div className="flex justify-between text-xs text-slate-500">
        <span>Duración: {duration}</span>
        <span>Profesor: {teacher}</span>
      </div>
  <a href={link} className="mt-2 text-indigo-500 hover:underline text-xs">Ver más</a>
    </div>
  );
}

export default function Cursos() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">Cursos</h1>
      {Object.entries(categories).map(([cat, cursos]) => (
        <div key={cat} className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cursos.map((curso) => {
              const tool = tools.find(t => t.name.toLowerCase() === curso.toLowerCase());
              const info = (courseInfo as Record<string, { duration: string; teacher: string }>)[curso] || { duration: '', teacher: '' };
              if (!tool) return null;
              // Generar el enlace interno para cada curso
              // Mapeo manual para cursos con nombre diferente a la ruta
              const cursoRouteMap: Record<string, string> = {
                "Azure": "azuredevops",
                "AWS": "awscloudformation",
                "ARM / Bicep": "armbicep",
                "Azure DevOps": "azuredevops",
                "Argo CD": "argocd",
                "Nginx Ingres": "ngningres",
                "Github Actions": "githubactions"
              };
              const routeName = cursoRouteMap[curso] || curso.replace(/ /g, '').toLowerCase();
              const internalLink = `/cursos/${routeName}`;
              return (
                <CursoCard
                  key={curso}
                  name={tool.name}
                  desc={tool.desc}
                  duration={info.duration}
                  teacher={info.teacher}
                  link={internalLink}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
