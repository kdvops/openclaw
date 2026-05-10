
import React from 'react'
import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'

export default function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold">Utilitarios</h2>
      <p className="text-slate-300 mt-2">Stack base para automatización y DevOps.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {tools.map(t => <ToolCard key={t.name} name={t.name} desc={t.desc} link={t.link} tags={t.tags as unknown as string[]}/>)}
      </div>
    </section>
  )
}
