
import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Utilitarios */}
          <div className="glass p-6">
            <h3 className="text-xl font-bold">Utilitarios</h3>
            <p className="text-slate-300 mt-2">Colección curada de herramientas: N8N, Azure, AWS, SonarQube, Trivy, Ansible, Terraform, Azure DevOps, ArgoCD, Jenkins.</p>
            <Link to="/tools" className="text-indigo-300 hover:text-indigo-200 inline-block mt-3">Explorar →</Link>
          </div>
          {/* Guías & Demos */}
          <div className="glass p-6">
            <h3 className="text-xl font-bold">Guías & Demos</h3>
            <p className="text-slate-300 mt-2">Recetas reales para CI/CD, IaC, seguridad y observabilidad.</p>
            <Link to="/cursos" className="text-indigo-300 hover:text-indigo-200 inline-block mt-3">Ver Cursos →</Link>
          </div>
          {/* Roadmap KDvops */}
          <div className="glass p-6">
            <h3 className="text-xl font-bold">Roadmap KDvops</h3>
            <p className="text-slate-300 mt-2">Qué viene: más integraciones, plantillas y tutoriales.</p>
            <Link to="/roadmap" className="text-indigo-300 hover:text-indigo-200 inline-block mt-3">Explorar →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
