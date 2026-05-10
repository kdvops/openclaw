
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Tools from './pages/Tools'
import About from './pages/About'
import Contact from './pages/Contact'
import TerminosCondiciones from './pages/About/TerminosCondiciones';
import PoliticaPrivacidad from './pages/About/PoliticaPrivacidad';
import SobreNosotros from './pages/About/SobreNosotros';

import Kubernetes from './pages/Cursos/Kubernetes';
import Helm from './pages/Cursos/Helm';
import Kops from './pages/Cursos/Kops';
import Istio from './pages/Cursos/Istio';
import Kustomize from './pages/Cursos/Kustomize';
import NginxIngres from './pages/Cursos/NginxIngres';
import Traefik from './pages/Cursos/Traefik';
import Linkerd from './pages/Cursos/Linkerd';
import Calico from './pages/Cursos/Calico';
import AzureDevops from './pages/Cursos/AzureDevops';
import AWSCloudFormation from './pages/Cursos/AWSCloudFormation';
import ARMBicep from './pages/Cursos/ARMBicep';
import Jenkins from './pages/Cursos/Jenkins';
import GithubActions from './pages/Cursos/GithubActions';
import ArgoCD from './pages/Cursos/ArgoCD';
import Terraform from './pages/Cursos/Terraform';
import Chef from './pages/Cursos/Chef';
import Puppet from './pages/Cursos/Puppet';
import Ansible from './pages/Cursos/Ansible';
import N8N from './pages/Cursos/N8N';
import RoadMap from './pages/RoadMap';
import Cursos from './pages/Cursos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
  { path: 'tools', element: <Tools /> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
  { path: 'cursos', element: <Cursos /> },
      { path: 'cursos/kubernetes', element: <Kubernetes /> },
      { path: 'cursos/helm', element: <Helm /> },
      { path: 'cursos/kops', element: <Kops /> },
      { path: 'cursos/istio', element: <Istio /> },
      { path: 'cursos/kustomize', element: <Kustomize /> },
      { path: 'cursos/ngningres', element: <NginxIngres /> },
      { path: 'cursos/traefik', element: <Traefik /> },
      { path: 'cursos/linkerd', element: <Linkerd /> },
      { path: 'cursos/calico', element: <Calico /> },
      { path: 'cursos/azuredevops', element: <AzureDevops /> },
      { path: 'cursos/awscloudformation', element: <AWSCloudFormation /> },
      { path: 'cursos/armbicep', element: <ARMBicep /> },
      { path: 'cursos/jenkins', element: <Jenkins /> },
      { path: 'cursos/githubactions', element: <GithubActions /> },
      { path: 'cursos/argocd', element: <ArgoCD /> },
      { path: 'cursos/terraform', element: <Terraform /> },
      { path: 'cursos/chef', element: <Chef /> },
      { path: 'cursos/puppet', element: <Puppet /> },
  { path: 'cursos/ansible', element: <Ansible /> },
  { path: 'cursos/n8n', element: <N8N /> },
  { path: 'roadmap', element: <RoadMap /> },
  { path: 'terminos', element: <TerminosCondiciones /> },
  { path: 'privacidad', element: <PoliticaPrivacidad /> },
  { path: 'nosotros', element: <SobreNosotros /> },
    ],
  },
], {basename: '/'} )

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
