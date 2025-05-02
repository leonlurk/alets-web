'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Hablemos
            </span> de tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos listos para convertir tus ideas en realidad. Cuéntanos sobre tu proyecto 
            y juntos crearemos algo extraordinario.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Ubicación</h3>
                <p className="text-muted-foreground text-sm">
                  Oficina Principal: Ciudad de México<br />
                  Sucursales: Buenos Aires, Santiago, Bogotá
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                <p className="text-muted-foreground text-sm">
                  info@alets.com<br />
                  soporte@alets.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Teléfono</h3>
                <p className="text-muted-foreground text-sm">
                  +52 (55) 1234-5678<br />
                  +1 (800) 123-4567
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Horario</h3>
                <p className="text-muted-foreground text-sm">
                  Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                  Soporte 24/7 para clientes
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-9 h-9 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">Facebook</span><Facebook size={18} /></a>
                <a href="#" className="w-9 h-9 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">Twitter</span><Twitter size={18} /></a>
                <a href="#" className="w-9 h-9 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">LinkedIn</span><Linkedin size={18} /></a>
                <a href="#" className="w-9 h-9 rounded-sm bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"><span className="sr-only">Instagram</span><Instagram size={18} /></a>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 p-8 bg-card border border-border rounded-md shadow-xl shadow-primary/10"
            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-input border border-border rounded-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-input border border-border rounded-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 bg-input border border-border rounded-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-input border border-border rounded-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, filter: 'brightness(1.1)', boxShadow: '0 0 15px hsl(var(--primary))' }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/30"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}