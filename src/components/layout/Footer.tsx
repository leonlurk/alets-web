'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="text-3xl font-bold text-primary mb-4 inline-block">
              <span className="glow-text">Alets</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transformando ideas en software de vanguardia. La agencia líder en LATAM.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Servicios</h3>
            <ul className="space-y-3">
              {['Desarrollo Web', 'Desarrollo Móvil', 'UI/UX Design', 'DevOps & Cloud', 'SEO & Marketing'].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Compañía</h3>
            <ul className="space-y-3">
              {['Sobre Nosotros', 'Proyectos', 'Nuestro Equipo', 'Testimonios', 'Carreras'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {['Términos de Servicio', 'Política de Privacidad', 'Cookies', 'Licencias'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Alets. Todos los derechos reservados.
        </div>
      </div>
      
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-8 bottom-8 w-10 h-10 bg-muted border border-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.a>
    </footer>
  )
}