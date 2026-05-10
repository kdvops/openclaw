
import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Rocket, TerminalSquare, Github } from 'lucide-react'
import pkg from '../package.json'

export default function App() {
  const version: string = (pkg as any).version || '0.0.0'
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-400/20">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="font-bold">
              <span className="text-indigo-400">K</span>Dvops
              <span className="ml-2 text-xs text-slate-400">K = Kubernetes + Dvops</span>
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <button className="lg:hidden p-2 rounded-lg border border-slate-700 text-indigo-400" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <div className={`flex-col lg:flex-row flex items-center justify-center gap-6 text-sm fixed lg:static top-0 left-0 w-full lg:w-auto h-screen lg:h-auto bg-slate-950/95 lg:bg-transparent z-40 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden lg:flex'}`}>
            <button className="lg:hidden absolute top-4 right-4 p-2" onClick={()=>setMenuOpen(false)} aria-label="Cerrar menú">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
            <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-indigo-300'} onClick={()=>setMenuOpen(false)}>Inicio</NavLink>
            <NavLink to="/tools" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-indigo-300'} onClick={()=>setMenuOpen(false)}>Utilitarios</NavLink>
            {/* Cursos Dropdown - responsive */}
            <div className="relative w-full lg:w-auto flex flex-col items-center group">
              <button className="w-full lg:w-auto hover:text-indigo-300 flex items-center gap-1 cursor-pointer select-none py-2 lg:py-0 justify-center text-center" onClick={()=>setCursosOpen(!cursosOpen)}>
                Cursos <span className="ml-1">▼</span>
              </button>
              {/* Mobile/Tablet dropdown */}
              {cursosOpen && (
                <div className="lg:hidden w-full">
                  <ul className="py-2 text-center bg-slate-900 border border-slate-700 rounded shadow-lg">
                    <li className="px-4 py-1 font-semibold text-indigo-400">Kubernetes
                      <ul className="pl-6">
                        <li><NavLink to="/cursos/helm" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Helm</NavLink></li>
                        <li><NavLink to="/cursos/kops" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Kops</NavLink></li>
                        <li><NavLink to="/cursos/istio" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Istio</NavLink></li>
                        <li><NavLink to="/cursos/kustomize" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Kustomize</NavLink></li>
                        <li><NavLink to="/cursos/ngningres" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Nginx Ingres</NavLink></li>
                        <li><NavLink to="/cursos/traefik" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Traefik</NavLink></li>
                        <li><NavLink to="/cursos/linkerd" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Linkerd</NavLink></li>
                        <li><NavLink to="/cursos/calico" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Calico</NavLink></li>
                      </ul>
                    </li>
                    <li className="px-4 py-1 font-semibold text-indigo-400">CI/CD
                      <ul className="pl-6">
                        <li><NavLink to="/cursos/azuredevops" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Azure Devops</NavLink></li>
                        <li><NavLink to="/cursos/awscloudformation" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>AWS CloudFormation</NavLink></li>
                        <li><NavLink to="/cursos/armbicep" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>ARM / Bicep</NavLink></li>
                        <li><NavLink to="/cursos/jenkins" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Jenkins</NavLink></li>
                        <li><NavLink to="/cursos/githubactions" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Github Actions</NavLink></li>
                        <li><NavLink to="/cursos/argocd" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>ArgoCD</NavLink></li>
                      </ul>
                    </li>
                    <li className="px-4 py-1 font-semibold text-indigo-400">IaC
                      <ul className="pl-6">
                        <li><NavLink to="/cursos/terraform" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Terraform</NavLink></li>
                        <li><NavLink to="/cursos/chef" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Chef</NavLink></li>
                        <li><NavLink to="/cursos/puppet" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Puppet</NavLink></li>
                      </ul>
                    </li>
                    <li className="px-4 py-1 font-semibold text-indigo-400">Gestión de configuración
                      <ul className="pl-6">
                        <li><NavLink to="/cursos/ansible" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>Ansible</NavLink></li>
                      </ul>
                    </li>
                    <li className="px-4 py-1 font-semibold text-indigo-400">Integration Platform
                      <ul className="pl-6">
                        <li><NavLink to="/cursos/n8n" className="block py-1 px-2 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setCursosOpen(false);}}>N8N</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
              {/* Desktop dropdown */}
              <div className="hidden lg:block lg:absolute left-0 lg:top-full min-w-[220px] bg-slate-900 border border-slate-700 rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <ul className="py-2 text-center">
                  <li className="px-4 py-1 font-semibold bg-indigo-700 text-white rounded transition-colors duration-200 hover:bg-indigo-900">Kubernetes
                    <ul className="pl-6">
                      <li><NavLink to="/cursos/helm" className="block py-1 px-2 hover:bg-slate-800">Helm</NavLink></li>
                      <li><NavLink to="/cursos/kops" className="block py-1 px-2 hover:bg-slate-800">Kops</NavLink></li>
                      <li><NavLink to="/cursos/istio" className="block py-1 px-2 hover:bg-slate-800">Istio</NavLink></li>
                      <li><NavLink to="/cursos/kustomize" className="block py-1 px-2 hover:bg-slate-800">Kustomize</NavLink></li>
                      <li><NavLink to="/cursos/ngningres" className="block py-1 px-2 hover:bg-slate-800">Nginx Ingres</NavLink></li>
                      <li><NavLink to="/cursos/traefik" className="block py-1 px-2 hover:bg-slate-800">Traefik</NavLink></li>
                      <li><NavLink to="/cursos/linkerd" className="block py-1 px-2 hover:bg-slate-800">Linkerd</NavLink></li>
                      <li><NavLink to="/cursos/calico" className="block py-1 px-2 hover:bg-slate-800">Calico</NavLink></li>
                    </ul>
                  </li>
                  <li className="px-4 py-1 font-semibold bg-indigo-700 text-white rounded transition-colors duration-200 hover:bg-indigo-900">CI/CD
                    <ul className="pl-6">
                      <li><NavLink to="/cursos/azuredevops" className="block py-1 px-2 hover:bg-slate-800">Azure Devops</NavLink></li>
                      <li><NavLink to="/cursos/awscloudformation" className="block py-1 px-2 hover:bg-slate-800">AWS CloudFormation</NavLink></li>
                      <li><NavLink to="/cursos/armbicep" className="block py-1 px-2 hover:bg-slate-800">ARM / Bicep</NavLink></li>
                      <li><NavLink to="/cursos/jenkins" className="block py-1 px-2 hover:bg-slate-800">Jenkins</NavLink></li>
                      <li><NavLink to="/cursos/githubactions" className="block py-1 px-2 hover:bg-slate-800">Github Actions</NavLink></li>
                      <li><NavLink to="/cursos/argocd" className="block py-1 px-2 hover:bg-slate-800">ArgoCD</NavLink></li>
                    </ul>
                  </li>
                  <li className="px-4 py-1 font-semibold bg-indigo-700 text-white rounded transition-colors duration-200 hover:bg-indigo-900">IaC
                    <ul className="pl-6">
                      <li><NavLink to="/cursos/terraform" className="block py-1 px-2 hover:bg-slate-800">Terraform</NavLink></li>
                      <li><NavLink to="/cursos/chef" className="block py-1 px-2 hover:bg-slate-800">Chef</NavLink></li>
                      <li><NavLink to="/cursos/puppet" className="block py-1 px-2 hover:bg-slate-800">Puppet</NavLink></li>
                    </ul>
                  </li>
                  <li className="px-4 py-1 font-semibold bg-indigo-700 text-white rounded transition-colors duration-200 hover:bg-indigo-900">Gestión de configuración
                    <ul className="pl-6">
                      <li><NavLink to="/cursos/ansible" className="block py-1 px-2 hover:bg-slate-800">Ansible</NavLink></li>
                    </ul>
                  </li>
                  <li className="px-4 py-1 font-semibold bg-indigo-700 text-white rounded transition-colors duration-200 hover:bg-indigo-900">Integration Platform
                    <ul className="pl-6">
                      <li><NavLink to="/cursos/n8n" className="block py-1 px-2 hover:bg-slate-800">N8N</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* About US Dropdown - responsive */}
            <div className="relative w-full lg:w-auto flex flex-col items-center group">
              <button className="w-full lg:w-auto hover:text-indigo-300 flex items-center gap-1 cursor-pointer select-none py-2 lg:py-0 justify-center text-center" onClick={()=>setAboutOpen(!aboutOpen)}>
                About US <span className="ml-1">▼</span>
              </button>
              {/* Mobile/Tablet dropdown */}
              {aboutOpen && (
                <div className="lg:hidden w-full">
                  <ul className="py-2 text-center bg-slate-900 border border-slate-700 rounded shadow-lg">
                    <li><NavLink to="/terminos" className="block py-1 px-4 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setAboutOpen(false);}}>Términos y condiciones</NavLink></li>
                    <li><NavLink to="/privacidad" className="block py-1 px-4 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setAboutOpen(false);}}>Política de privacidad</NavLink></li>
                    <li><NavLink to="/nosotros" className="block py-1 px-4 hover:bg-slate-800" onClick={()=>{setMenuOpen(false);setAboutOpen(false);}}>Sobre nosotros</NavLink></li>
                  </ul>
                </div>
              )}
              {/* Desktop dropdown */}
              <div className="hidden lg:block lg:absolute left-0 lg:top-full min-w-[200px] bg-slate-900 border border-slate-700 rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <ul className="py-2 text-center">
                  <li><NavLink to="/terminos" className="block py-1 px-4 hover:bg-slate-800">Términos y condiciones</NavLink></li>
                  <li><NavLink to="/privacidad" className="block py-1 px-4 hover:bg-slate-800">Política de privacidad</NavLink></li>
                  <li><NavLink to="/nosotros" className="block py-1 px-4 hover:bg-slate-800">Sobre nosotros</NavLink></li>
                </ul>
              </div>
              {/* Desktop dropdown */}
              <div className="hidden lg:block lg:absolute left-0 lg:top-full min-w-[200px] bg-slate-900 border border-slate-700 rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <ul className="py-2 text-center">
                  <li><NavLink to="/terminos" className="block py-1 px-4 hover:bg-slate-800">Términos y condiciones</NavLink></li>
                  <li><NavLink to="/privacidad" className="block py-1 px-4 hover:bg-slate-800">Política de privacidad</NavLink></li>
                  <li><NavLink to="/nosotros" className="block py-1 px-4 hover:bg-slate-800">Sobre nosotros</NavLink></li>
                </ul>
              </div>
            </div>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-indigo-300'} onClick={()=>setMenuOpen(false)}>Contacto</NavLink>
            <a href="https://github.com/silencfox" target="_blank" rel="noreferrer" className="hidden sm:inline-flex hover:text-indigo-300">
              <Github className="w-5 h-5"/>
            </a>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-4">
          <p>© {new Date().getFullYear()} KDvops — Automatización con Kubernetes & DevOps.</p>
          <div className="mt-2 flex flex-wrap gap-4 justify-center items-center">
            <NavLink to="/terminos" className="hover:text-indigo-400 underline">Términos y condiciones</NavLink>
            <NavLink to="/privacidad" className="hover:text-indigo-400 underline">Política de privacidad</NavLink>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
            <a href="https://t.me/KDvops" target="_blank" rel="noopener" title="Telegram" className="hover:text-indigo-400">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9.993 16.574l-.398 4.01c.57 0 .818-.246 1.116-.543l2.68-2.604 5.563 4.057c1.02.563 1.75.267 2.01-.943l3.644-17.07c.334-1.53-.553-2.13-1.54-1.77L1.13 9.13c-1.48.576-1.46 1.4-.253 1.77l4.37 1.365 10.16-6.41c.48-.31.92-.14.56.2z"/></svg>
            </a>
            <a href="https://instagram.com/kdvops" target="_blank" rel="noopener" title="Instagram" className="hover:text-pink-500">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.378c-.981.981-1.247 2.093-1.306 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.325 2.393 1.306 3.374.981.981 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.325 3.374-1.306.981-.981 1.247-2.093 1.306-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.325-2.393-1.306-3.374-.981-.981-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://facebook.com/KDvops" target="_blank" rel="noopener" title="Facebook" className="hover:text-blue-600">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
            </a>
            <a href="https://tiktok.com/@kdvops" target="_blank" rel="noopener" title="TikTok" className="hover:text-black">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.002c.001 2.209 1.792 4 4.001 4 .001 0 .001 0 .001 0v2.001c-1.104 0-2-.896-2-2V2.002h-2.002v12.001c0 1.104-.896 2-2 2s-2-.896-2-2c0-1.104.896-2 2-2 .001 0 .001 0 .001 0V10.002c-2.209 0-4.001 1.792-4.001 4.001s1.792 4.001 4.001 4.001c2.209 0 4.001-1.792 4.001-4.001V2.002h-2.001z"/></svg>
            </a>
            <a href="https://github.com/kdvops" target="_blank" rel="noopener" title="GitHub" className="hover:text-gray-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://github.com/silencfox" target="_blank" rel="noopener" title="GitHub" className="hover:text-gray-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@KDvops" target="_blank" rel="noopener" title="YouTube" className="hover:text-red-600">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.998 2.998 0 0 0-2.115-2.115C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.383.571A2.998 2.998 0 0 0 .502 6.186C0 8.144 0 12 0 12s0 3.856.502 5.814a2.998 2.998 0 0 0 2.115 2.115C4.575 20.5 12 20.5 12 20.5s7.425 0 9.383-.571a2.998 2.998 0 0 0 2.115-2.115C24 15.856 24 12 24 12s0-3.856-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://twitter.com/KDvops" target="_blank" rel="noopener" title="Twitter/X" className="hover:text-blue-400">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .386.045.763.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.104-6.102 2.104-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="https://discord.com/invite/kdvops" target="_blank" rel="noopener" title="Discord" className="hover:text-indigo-400">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.217 18.217 0 0 0-5.487 0 12.522 12.522 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.683 4.369a.07.07 0 0 0-.032.027C.533 8.159-.319 11.87.099 15.539a.082.082 0 0 0 .031.056c2.052 1.507 4.042 2.422 5.993 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.198.372.291a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.891.076.076 0 0 0-.04.105c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.951-1.522 6.003-3.029a.077.077 0 0 0 .031-.055c.5-4.177-.838-7.846-3.549-11.143a.061.061 0 0 0-.031-.028zM8.02 14.331c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm7.974 0c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612z"/></svg>
            </a>
          </div>
          <p className="mt-2 inline-flex items-center gap-2 justify-center">
            <TerminalSquare className="w-4 h-4" /> hecho con React + Vite + Tailwind
          </p>
          <p className="mt-2 text-xs text-slate-500">v{version}</p>
        </div>
      </footer>
    </div>
  )
}
