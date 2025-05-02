'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      className="relative bg-card border-t border-border py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="mb-4 inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/Alets_Logos-11.svg"
                alt="Alets Isotipo"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transformando ideas en software de vanguardia. La agencia líder en LATAM.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">Facebook</span><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">Twitter</span><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">LinkedIn</span><Linkedin size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">Instagram</span><Instagram size={16} /></a>
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
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Alets. Todos los derechos reservados.
        </div>
      </div>
      
      <motion.a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-8 bottom-8 w-10 h-10 bg-primary border border-primary/50 rounded-sm flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors shadow-lg shadow-primary/30"
        style={{ clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% 100%, 0 100%)' }}
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </motion.a>
    </footer>
  )
}