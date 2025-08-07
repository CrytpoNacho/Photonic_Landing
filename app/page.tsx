"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Cloud,
  Settings,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ChevronUp,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AstronautImage from "@/components/Hero/AstronautImage";
import AstronautStats from "@/components/Hero/AstronautStats";
import CircularProgress from "@/components/Hero/CircularProgress";
import NavBar from "@/components/NavBar/NavBar";
import ContactSection from "@/components/contact/ContactSection"
import EmailOverlay from "@/components/contact/EmailOverlay"

// Importamos los iconos oficiales de React Icons
import { SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiDocker } from "react-icons/si"

// Importamos las traducciones
import { translations, type Language } from "@/lib/translations/index"

export default function PhotonicSoftwareLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("es")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Agregar smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Función para manejar el smooth scroll
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Función para mostrar/ocultar el botón de scroll to top
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    // Agregar event listeners
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Obtenemos las traducciones para el idioma actual
  const t = translations[language]

  const technologies = [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#585858ff",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
    },
  ]

  const handleMobileNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <NavBar language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a0b2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%)",
        }}
      >
        {/* Background Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute bottom-32 left-8 w-12 h-12 border-2 border-orange-400/50 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-10 h-10 border-2 border-purple-400/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-10 right-1/4 w-6 h-6 bg-white/20 rotate-45 animate-pulse delay-1000"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">
                  Software Development
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">{t.hero.title}</h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">{t.hero.subtitle}</p>

              {/* Quotation */}
              <div className="mb-8 p-4 border-l-4 border-purple-400 bg-white/5 backdrop-blur-sm rounded-r-lg">
                <p className="text-white/80 italic text-sm md:text-base">
                  {translations[language].hero.quotation}
                </p>
                <p className="text-purple-400 text-sm mt-2">- Photonic Software</p>
              </div>

              {/* HERO - Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button
                    size="default"
                    className="text-base px-6 py-3 h-auto bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <a href="#projects">
                  <Button
                    variant="outline"
                    size="default"
                    className="text-base px-6 py-3 h-auto border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    {t.hero.ctaSecondary}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Side: Astronaut */}
            <div className="relative h-full flex items-center justify-center">
              <AstronautImage />
              <AstronautStats language={language} />
              <CircularProgress />
            </div>
          </div>
        </div>

        {/* Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 z-[50] pointer-events-none">
          <svg viewBox="0 0 1050 120" preserveAspectRatio="none" className="w-full h-40 fill-white">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1200,160,1248,128,1296,112L1344,96L1344,120L1296,120C1248,120,1152,120,1056,120C960,120,864,120,768,120C672,120,576,120,480,120C384,120,288,120,192,120C96,120,48,120,24,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => {
              const icons = [Code, Database, Cloud, Settings]
              const Icon = icons[index]
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-[#1f002c] transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#1f002c" }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1f002c" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.technologies.title}</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{t.technologies.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={index}
                  className="text-center group transition-transform duration-300 hover:scale-105"
                  style={{ color: tech.color }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl">
                    <IconComponent className="w-10 h-10 text-black group-hover:text-[inherit] transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-[inherit] transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.projects.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#a357ba] to-[#612b73] relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${index + 1}`}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-[#1f002c]/10 text-[#1f002c]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1f002c" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.process.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: "#1f002c" }}
                >
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection language={language} />

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1f002c" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Photonic Software</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{t.footer.description}</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-white/70 hover:text-white transition-colors">
                    {t.nav.technologies}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/70 hover:text-white transition-colors">
                    {t.nav.projects}
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                    {t.nav.testimonials}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-white/70">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@photonicsoftware.com
                </li>
                <li className="flex items-center text-white/70">
                  <Phone className="h-4 w-4 mr-2" />
                  +506 8554-9454
                </li>
                <li className="flex items-center text-white/70">
                  <MapPin className="h-4 w-4 mr-2" />
                  San José, Costa Rica
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/70">© {new Date().getFullYear()} Photonic Software. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={scrollToTop}
            size="lg"
            className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#1f002c" }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}
    </div>
  )
}
