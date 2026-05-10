
import React from 'react'
import { Workflow, Cloud, Cpu } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Orquestando Nubes, Automatizando <span className="text-indigo-400">DevOps</span>
            </h1>
            <p className="mt-4 text-slate-300">
              KDvops: K = Kubernetes + DevOps. Un hub práctico con guías, utilitarios
              y demos para acelerar tus flujos CI/CD, IaC y observabilidad en la nube y on‑premise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="glass px-4 py-2 inline-flex items-center gap-2"><Workflow className="w-4 h-4"/> CI/CD</span>
              <span className="glass px-4 py-2 inline-flex items-center gap-2"><Cloud className="w-4 h-4"/> Multi‑cloud</span>
              <span className="glass px-4 py-2 inline-flex items-center gap-2"><Cpu className="w-4 h-4"/> Automatización</span>
            </div>
          </div>
          <div className="glass p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-800/40 to-slate-800/40 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-black">KDvops</p>
                <p className="mt-2 text-slate-300">Portal de utilitarios y demos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
