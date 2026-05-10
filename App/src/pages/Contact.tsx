
import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold">Contacto</h2>
      <p className="text-slate-300 mt-2">¿Ideas o colaboración? Escríbeme.</p>

      <div className="mt-8 mb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">WhatsApp:</span>
          <a href="https://wa.me/13474608231" target="_blank" rel="noopener" className="text-indigo-500 underline">1-347-460-8231</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Telegram:</span>
          <a href="https://t.me/KDvops" target="_blank" rel="noopener" className="text-indigo-500 underline">@KDvops</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Correo:</span>
          <a href="mailto:support@kdvops.com" className="text-indigo-500 underline">support@kdvops.com</a>
        </div>
      </div>

      <form
        className="glass p-6 mt-6 space-y-4"
        onSubmit={(e)=>{e.preventDefault(); setSent(true)}}
      >
        <input required placeholder="Nombre" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none"/>
        <input required type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none"/>
        <textarea required placeholder="Mensaje" rows={5} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none"></textarea>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500">Enviar</button>
        {sent && <p className="text-green-300">¡Gracias! (demo local)</p>}
      </form>
    </section>
  )
}
