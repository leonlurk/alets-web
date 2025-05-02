'use client'; // Make this a Client Component

import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  const sectionPadding = "py-20 lg:py-28"; // Slightly adjusted padding
  const containerClasses = "container mx-auto px-6"; // Adjusted padding

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar /> 
      {/* Uncommented Navbar */}

      {/* Hero Section - Uncommented */}
      
      <section id="hero" > 
        <Hero />
      </section>
      

      {/* Uncomment all other sections */}
      <section id="about" className={`${sectionPadding} bg-muted`}>
        <motion.div 
          className={containerClasses}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        >
          {/* <div className={containerClasses}> */}
            <About />
          {/* </div> */}
        </motion.div>
      </section>
       
      <section id="services" className={`${sectionPadding} bg-background`}> 
         <motion.div 
          className={containerClasses}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <div className={containerClasses}> */}
            <Services />
          {/* </div> */}
        </motion.div>
      </section>
      
      <section id="projects" className={`${sectionPadding} bg-muted`}>
         <motion.div 
          className={containerClasses}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger earlier due to height
        >
          {/* <div className={containerClasses}> */}
            <Projects />
          {/* </div> */}
        </motion.div>
      </section>
      
      <section id="testimonials" className={`${sectionPadding} bg-background`}> 
         <motion.div 
          className={containerClasses}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <div className={containerClasses}> */}
            <Testimonials />
          {/* </div> */}
        </motion.div>
      </section>
      
      <section id="contact" className={`${sectionPadding} bg-muted`}>
         <motion.div 
          className={containerClasses}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <div className={containerClasses}> */}
            <Contact />
          {/* </div> */}
        </motion.div>
      </section>
      
      <Footer /> 
    </main>
  )
}