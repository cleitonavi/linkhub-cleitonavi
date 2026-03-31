import React from 'react'
import logo from "./assets/logo_cleitonavi.svg";
import { 
  IconBrandLinkedin, 
  IconBrandDribbble, 
  IconBrandInstagram, 
  IconBrandBehance,
  IconArrowUpRight
} from "@tabler/icons-react";

const LinkButton = ({ title, subtitle, href, isPrimary = false, delay = "0ms" }) => {
  return (
    <div className="animate-fade-up opacity-0" style={{ animationDelay: delay }}>
      <a 
        href={href} 
        className={`
          group relative flex items-center justify-between gap-4 rounded-8 p-4 transition-all duration-300
          border-0.5 overflow-hidden
          ${isPrimary 
            ? 'bg-brand-teal border-brand-teal text-dark-bg animate-pulse-soft' 
            : 'bg-white/[0.02] border-white/10 hover:border-brand-teal/40 hover:bg-white/[0.04]'
          }
          hover:-translate-y-[1px]
        `}
      >
        <div className="relative z-20 flex flex-col items-start">
          <span className="text-base font-semibold leading-tight">{title}</span>
          {subtitle && <span className={`text-xs font-medium opacity-70 mt-0.5 tracking-[0.02em] ${isPrimary ? 'text-dark-bg/80' : 'text-white/60'}`}>{subtitle}</span>}
        </div>
        
        <div className={`
          relative z-20 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full border-0.5
          ${isPrimary ? 'border-dark-bg/20 bg-dark-bg/5' : 'border-white/10 bg-white/5 group-hover:border-brand-teal/30'}
        `}>
          <IconArrowUpRight size={16} className={isPrimary ? 'text-dark-bg' : 'text-white/80 group-hover:text-brand-teal'} />
        </div>

        {!isPrimary && (
          <div className="shimmer-effect -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </a>
    </div>
  );
};

const SocialButton = ({ icon: Icon, name, href, delay = "0ms" }) => (
  <div className="animate-fade-up opacity-0" style={{ animationDelay: delay }}>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 rounded-8 border-0.5 border-white/10 bg-white/[0.02] p-3 transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-teal/40 hover:bg-white/[0.04] overflow-hidden"
    >
      <Icon size={20} className="text-white/60 transition-colors group-hover:text-brand-teal" />
      <span className="text-sm font-medium text-white/80">{name}</span>
      <div className="shimmer-effect -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    </a>
  </div>
);

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-dark-bg font-inter-tight selection:bg-brand-teal/30 selection:text-brand-teal">
      {/* Noise Texture */}
      <div className="noise-overlay" />
      
      {/* Radial Glow */}
      <div className="pointer-events-none fixed inset-0 radial-glow" />

      <div className="relative mx-auto flex max-w-[480px] flex-col px-6 py-16 sm:py-20">
        <header className="mb-12 flex flex-col items-center text-center animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
          <img
            src={logo}
            alt="Cleiton Avi | Designer de Marcas"
            className="mb-6 w-[70%] h-auto filter brightness-110"
          />
          <p className="text-sm font-medium leading-relaxed text-white/60 tracking-[0.02em]">
            Identidade visual e estratégia para líderes que constroem legado.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <LinkButton 
            title="Iniciar um Projeto" 
            subtitle="Solicite uma proposta" 
            href="https://cleitonavi.com/orcamento/" 
            isPrimary 
            delay="100ms"
          />
          <LinkButton 
            title="Meu Trabalho" 
            subtitle="Cases, processo e metodologia" 
            href="https://cleitonavi.com/" 
            delay="200ms"
          />
          <LinkButton 
            title="Quem é Cleiton Avi" 
            subtitle="Trajetória e forma de trabalhar" 
            href="https://cleitonavi.com/sobre-mim/" 
            delay="300ms"
          />
        </section>

        {/* Separator */}
        <div className="my-10 flex items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
          <div className="h-px flex-1 bg-white/10" />
          <div className="h-1 w-1 rounded-full bg-brand-teal" />
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <section>
          <div className="grid grid-cols-2 gap-3">
            <SocialButton icon={IconBrandLinkedin} name="LinkedIn" href="https://www.linkedin.com/in/cleiton-avi/" delay="500ms" />
            <SocialButton icon={IconBrandInstagram} name="Instagram" href="https://www.instagram.com/cleitonavi.design/" delay="600ms" />
            <SocialButton icon={IconBrandBehance} name="Behance" href="https://www.behance.net/cleiton" delay="700ms" />
            <SocialButton icon={IconBrandDribbble} name="Dribbble" href="https://dribbble.com/cleitonavi" delay="800ms" />
          </div>
        </section>

        <footer className="mt-16 text-center animate-fade-up opacity-0" style={{ animationDelay: '900ms' }}>
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase whitespace-nowrap">
            Est. 2012 · Cleiton Avi · Strategic Branding · Build to Last
          </p>
        </footer>
      </div>
    </main>
  )
}
