//#import React from 'react';
//#export default function SobreNosotros() {
//  return <div className="p-8">Sobre nosotros</div>;
//}



export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold">¿Qué es KDvops?</h2>
      <p className="text-slate-300 mt-4">
        KDvops sintetiza <strong>K = Kubernetes</strong> y <strong>DevOps</strong>.
        Es un proyecto enfocado en automatización, CI/CD, IaC y cultura DevOps para
        acelerar entregas seguras en multi‑cloud y on‑premise.
      </p>
      <ul className="list-disc list-inside mt-6 space-y-2 text-slate-300">
        <li>Plantillas reales para pipelines y despliegues.</li>
        <li>Buenas prácticas de seguridad (shift‑left) y calidad de código.</li>
        <li>Infraestructura como código con Terraform y Ansible.</li>
        <li>GitOps con Argo CD y Kubernetes como plataforma.</li>
      </ul>
    </section>
  )
}