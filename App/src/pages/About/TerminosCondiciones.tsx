import React from 'react';
export default function TerminosCondiciones() {
  return (
    <>

      <main className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-2xl font-bold mb-2">KDvops - Términos de Servicio</h1>
          <p className="meta text-sm text-gray-500">Última actualización: 19 de septiembre de 2025</p>
          <p className="lead mb-4">Documento legal para el sitio y canales de KDvops (Kubernetes, DevOps y automatizaciones).</p>
        </header>
        <nav className="toc mb-6">
          <strong>Contenido</strong>
          <ul className="list-disc pl-6">
            <li><a href="#servicios">1. Servicios</a></li>
            <li><a href="#cuentas">2. Cuentas y acceso</a></li>
            <li><a href="#uso-permitido">3. Uso permitido</a></li>
            <li><a href="#propiedad">4. Contenido y propiedad intelectual</a></li>
            <li><a href="#ugc">5. Envío de contenido por el usuario</a></li>
            <li><a href="#pagos">6. Pagos (si aplica)</a></li>
            <li><a href="#descargos">7. Descargos</a></li>
            <li><a href="#limitacion">8. Limitación de responsabilidad</a></li>
            <li><a href="#terceros">9. Terceros y enlaces</a></li>
            <li><a href="#modificaciones">10. Modificaciones</a></li>
            <li><a href="#ley">11. Ley aplicable y jurisdicción</a></li>
            <li><a href="#contacto">12. Contacto</a></li>
          </ul>
        </nav>
        <section id="servicios" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Servicios</h2>
          <p>Ofrecemos contenido educativo, artículos, ejemplos, repositorios y herramientas informativas. Salvo indicación expresa, no proveemos consultoría personalizada ni garantizamos adecuación a su caso particular.</p>
        </section>
        <section id="cuentas" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Cuentas y acceso</h2>
          <p>Para ciertas funciones puede requerirse cuenta. Usted es responsable de sus credenciales y de la actividad realizada con su cuenta.</p>
        </section>
        <section id="uso-permitido" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Uso permitido</h2>
          <p>Debe cumplir la ley y actuar de buena fe. No puede: (a) vulnerar seguridad o privacidad de terceros; (b) introducir malware; (c) extraer datos masivamente sin permiso; (d) eludir medidas técnicas; (e) infringir derechos de propiedad intelectual.</p>
        </section>
        <section id="propiedad" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Contenido y propiedad intelectual</h2>
          <p>El contenido de KDvops (logotipos, textos, gráficos) está protegido por derechos de autor y marcas. El código y ejemplos pueden publicarse bajo licencias abiertas (p. ej., MIT o Apache-2.0). Cada repositorio indicará su licencia. Salvo lo permitido, no adquiere derechos de propiedad sobre el contenido.</p>
        </section>
        <section id="ugc" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Envío de contenido por el usuario</h2>
          <p>Si publica comentarios o aporta materiales, declara tener derechos para compartirlos y otorga a KDvops una licencia no exclusiva, mundial y libre de regalías para mostrarlos en el contexto del servicio. No publique datos personales de terceros sin autorización.</p>
        </section>
        <section id="pagos" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Pagos (si aplica)</h2>
          <p>Si se ofrecen cursos o servicios de pago, precios, condiciones y reembolsos se indicarán en la página correspondiente. Los pagos pueden gestionarse por terceros, sujetos a sus términos y políticas.</p>
        </section>
        <section id="descargos" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Descargos</h2>
          <p>El contenido se ofrece “tal cual” con fines informativos. No constituye asesoría profesional ni garantía de resultados. La implementación de sistemas, seguridad y cumplimiento depende de su entorno y criterio profesional.</p>
        </section>
        <section id="limitacion" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Limitación de responsabilidad</h2>
          <p>En la máxima medida permitida por la ley, KDvops no será responsable por daños indirectos, incidentales, especiales o consecuentes, ni por pérdida de datos, ingresos o beneficios derivados del uso o imposibilidad de uso de los servicios.</p>
        </section>
        <section id="terceros" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Terceros y enlaces</h2>
          <p>Los servicios pueden contener enlaces a sitios de terceros. KDvops no controla ni respalda esos sitios; su uso es bajo su propia responsabilidad.</p>
        </section>
        <section id="modificaciones" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Modificaciones</h2>
          <p>Podemos modificar estos Términos. La versión vigente se indicará con la fecha de actualización. El uso continuado implica aceptación de los cambios.</p>
        </section>
        <section id="ley" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Ley aplicable y jurisdicción</h2>
          <p>Estos Términos se rigen por las leyes de la República Dominicana, salvo normas imperativas de su país. Las disputas se someterán a los tribunales competentes del domicilio del responsable, sin perjuicio de normas de consumo aplicables.</p>
        </section>
        <section id="contacto" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Contacto</h2>
          <p><a href="mailto:support@kdvops.com" className="text-indigo-500 underline">support@kdvops.com</a></p>
        </section>
        <footer className="mt-8 text-xs text-gray-500">
          © 2025 KDvops. Este documento es una plantilla informativa y no constituye asesoría legal. Considere su revisión por un abogado de su jurisdicción.
        </footer>
      </main>
    </>
  )
}