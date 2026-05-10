
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Props {
  name: string
  desc: string
  link?: string
  tags?: string[]
}
export default function ToolCard({ name, desc, link, tags }: Props) {
  return (
    <div className="glass p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-slate-300 mt-2">{desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {tags?.map(t => <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10">{t}</span>)}
        </div>
        {link && (
          <a className="text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1" href={link} target="_blank" rel="noreferrer">
            Docs <ArrowUpRight className="w-4 h-4"/>
          </a>
        )}
      </div>
    </div>
  )
}
