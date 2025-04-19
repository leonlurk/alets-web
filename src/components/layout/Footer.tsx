'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-background py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary mb-6 block">
              <span className="glow-text">DevGenius</span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Transformamos ideas en experiencias digitales excepcionales. La agencia líder 
              en desarrollo de software en Latinoamérica.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors"
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
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {['Desarrollo Web', 'Desarrollo Móvil', 'UI/UX Design', 'DevOps & Cloud', 'SEO & Marketing'].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Compañía</h3>
            <ul className="space-y-3">
              {['Sobre Nosotros', 'Proyectos', 'Nuestro Equipo', 'Testimonios', 'Carreras'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Términos de Servicio', 'Política de Privacidad', 'Cookies', 'Licencias'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DevGenius. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Términos
            </Link>
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
      
      {/* Botón "back to top" */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-8 bottom-8 w-10 h-10 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.a>
    </footer>
  )
}