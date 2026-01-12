import React from 'react'
import logo from "./assets/logo_cleitonavi.svg";
import { IconBrandLinkedin, IconBrandDribbble, IconBrandInstagram, IconBrandBehance } from "@tabler/icons-react";

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
          <img
            src={logo}
            alt="Cleiton Avi"
            className="mx-auto w-2/4 max-w-md mb-6"
          />
          <p className="text-white/70 max-w-xl mx-auto">
            Design estratégico para negócios que buscam longevidade. Transformo empresas em marcas de legado.
          </p>
        </header>

        <section className="mb-12">
          <div className="grid grid-cols-1 gap-4">
            <a href="https://cleitonavi.com/orcamento/" className={primaryBtn} style={primaryStyles}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Iniciar um Projeto</span>
                <span className="text-sm/5 opacity-80 font-medium">Solicite uma proposta de design de marca ou consultoria.</span>
              </div>
            </a>
            <a href="https://cleitonavi.com/" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Meu Trabalho</span>
                <span className="text-sm/5 text-white/70 font-medium">Site com cases, metodologia e muito mais.</span>
              </div>
            </a>
            <a href="https://cleitonavi.com/sobre-mim/" className={secondaryBtn + " border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"}>
              <div className="flex flex-col text-left">
                <span className="text-lg">Quem é Cleiton Avi</span>
                <span className="text-sm/5 text-white/70 font-medium">Minha trajetória e filosofia de design.</span>
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
          <p>EST. 2012 © CLEITON AVI — STRATEGIC BRANDING. BUILD TO LAST.</p>
        </footer>
      </div>
    </main>
  )
}
