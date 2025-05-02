'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const SCROLL_THRESHOLD = 50;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > SCROLL_THRESHOLD);
  })

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: "#about", label: "Nosotros" },
    { href: "#services", label: "Servicios" },
    { href: "#projects", label: "Proyectos" },
    { href: "#testimonials", label: "Testimonios" },
  ];

  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: '-100%', opacity: 0 }
  };

  // Minimalist mobile menu variants
  const mobileMenuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  return (
    <>
      <motion.header
        variants={navbarVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          initial={false}
          animate={{ // Minimalist state (no border)
            backgroundColor: isScrolled ? 'hsla(var(--background), 0.7)' : 'hsla(var(--background), 0)',
            backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
            WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Minimalist state
          className={`transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : 'shadow-none'}`} // Minimalist state (no border-b)
        >
          <div className="container mx-auto flex items-center justify-between h-16 px-6">
             {/* Logo state before cyberpunk (no motion wrapper) */}
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <Image
                src="/Alets_Logos-06.svg"
                alt="Alets Logo"
                width={100}
                height={40}
                className="h-8 w-auto md:h-10 brightness-0 invert"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8"> {/* space-x-8 from minimalist */}
              {navLinks.map((link) => (
                // Link state before cyberpunk (no relative/group/span)
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
               {/* CTA state before cyberpunk (rounded-full, simpler hover) */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-5 py-2 text-sm font-medium border border-primary/50 text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
              >
                Contáctanos
              </motion.a>
            </nav>

            {/* Mobile toggle button - unchanged */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-foreground p-2"
                aria-label="Toggle Menu"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'x' : 'menu'}
                    initial={{ rotate: isMobileMenuOpen ? -90: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: isMobileMenuOpen ? -90 : 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu state from minimalist edits */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants} // Use the restored variants
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 right-0 w-full max-w-xs z-40 bg-background/70 backdrop-blur-lg border-l border-border/10 md:hidden shadow-xl"
          >
             {/* Previous padding/spacing */}
            <div className="flex flex-col h-full p-6 pt-20">
              <nav className="flex flex-col space-y-2"> {/* space-y-2 from minimalist */}
                {navLinks.map((link, index) => (
                  // motion.div wrapper was from minimalist
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                   >
                     <Link
                       href={link.href}
                       // Previous className from minimalist
                       className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3"
                       onClick={toggleMobileMenu}
                     >
                       {link.label}
                     </Link>
                   </motion.div>
                 ))}
                  {/* CTA state from minimalist */}
                 <motion.div
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                 >
                   <Link
                     href="#contact"
                      // Previous className from minimalist (rounded-full)
                     className="mt-8 w-full inline-block px-6 py-3 text-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
                     onClick={toggleMobileMenu}
                   >
                     Contáctanos
                   </Link>
                 </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}