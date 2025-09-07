import React from 'react'
import { IconBrandWhatsapp, IconMail, IconBrandLinkedin, IconBrandDribbble, IconBrandInstagram, IconBrandBehance } from "@tabler/icons-react";

export default function App() {
  const brandTurquoise = "#22D3C5";
  const primaryBtn =
    "group relative inline-flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-base font-semibold transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 font-inter-tight";
  const primaryStyles = { backgroundColor: brandTurquoise, color: "#0b0f13" };
  const secondaryBtn =
    "group relative inline-flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-base font-semibold transition-all border hover:translate-y-[-1px] font-inter-tight";

  return (
    <main className="min-h-screen w-full bg-[#0b0f13] text-white antialiased font-inter-tight">
      <div aria-hidden className="pointer-events-none fixed inset-0 opacity-70" style={{
        background:
          "radial-gradient(60% 40% at 20% 0%, rgba(34, 211, 197, .15), transparent 60%), radial-gradient(60% 40% at 100% 20%, rgba(34, 211, 197, .08), transparent 60%)",
      }} />
      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Cleiton Avi | Designer de Marcas</h1>
          <p className="mt-2 text-white/70 max-w-xl mx-auto">
            Especialista em identidade visual e branding. Há mais de 12 anos ajudando marcas a serem a melhor versão de si mesmas através de design estratégico.
          </p>
        </header>

        <section className="mb-12">
          <div className="grid grid-cols-1 gap-4">
            <a href="https://cleitonavi.com/" className={primaryBtn} style={primaryStyles}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Portfólio Completo</span>
                <span className="text-sm/5 opacity-80 font-medium">Conheça meus projetos e cases de sucesso em identidade visual</span>
              </div>
            </a>
            <a href="https://cleitonavi.com/orcamento/" className={primaryBtn} style={primaryStyles}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Solicitar Orçamento</span>
                <span className="text-sm/5 opacity-80 font-medium">Vamos conversar sobre seu projeto de identidade visual</span>
              </div>
            </a>
            <a href="https://cleitonavi.com/sobre-mim/" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Sobre Mim</span>
                <span className="text-sm/5 text-white/70 font-medium">Conheça minha trajetória e experiência em design</span>
              </div>
            </a>
            <a href="https://cleitonavi.com/servicos/" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Serviços</span>
                <span className="text-sm/5 text-white/70 font-medium">Identidade visual e consultoria em branding</span>
              </div>
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Contato</h2>
          <div className="grid grid-cols-1 gap-3">
            <a href="https://wa.me/5547989077672" target="_blank" rel="noopener noreferrer" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col text-left">
                  <span className="text-lg">WhatsApp</span>
                  <span className="text-sm/5 text-white/70 font-medium">Vamos conversar sobre seu projeto</span>
                </div>
                <IconBrandWhatsapp size={24} color={brandTurquoise} />
              </div>
            </a>
            <a href="mailto:contato@cleitonavi.com" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col text-left">
                  <span className="text-lg">E-mail para Contato</span>
                  <span className="text-sm/5 text-white/70 font-medium">contato@cleitonavi.com</span>
                </div>
                <IconMail size={24} color={brandTurquoise} />
              </div>
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Redes Sociais</h2>
          <div className="grid grid-cols-1 gap-3">
            <a href="https://www.linkedin.com/in/cleiton-avi/" target="_blank" rel="noopener noreferrer" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg">LinkedIn</span>
                <IconBrandLinkedin size={24} color={brandTurquoise} />
              </div>
            </a>
            <a href="https://dribbble.com/cleitonavi" target="_blank" rel="noopener noreferrer" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg">Dribbble</span>
                <IconBrandDribbble size={24} color={brandTurquoise} />
              </div>
            </a>
            <a href="https://www.instagram.com/cleitonavi.design/" target="_blank" rel="noopener noreferrer" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg">Instagram</span>
                <IconBrandInstagram size={24} color={brandTurquoise} />
              </div>
            </a>
            <a href="https://www.behance.net/cleiton" target="_blank" rel="noopener noreferrer" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg">Behance</span>
                <IconBrandBehance size={24} color={brandTurquoise} />
              </div>
            </a>
          </div>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>Cleiton Avi - Designer de Marcas © 2025</p>
          <p className="mt-1">Desde 2012 ajudando marcas a serem a melhor versão de si mesmas</p>
        </footer>
      </div>
    </main>
  )
}
