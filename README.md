# Link Hub — Cleiton Avi
Projeto Vite + React + Tailwind com ícones Tabler, pronto para deploy.

## Rodar localmente
npm i
npm run dev

## Build
npm run build  # arquivos em dist/

## Deploy (Vercel)
- Crie repositório no GitHub e envie o projeto
- Em vercel.com → New Project → importe o repo
- Framework: Vite (auto)
- Build: npm run build | Output: dist
- Em Domains, adicione links.cleitonavi.com
- No DNS, crie CNAME: links → cname.vercel-dns.com

## Deploy (Netlify)
- New site from Git | Build: npm run build | Publish: dist
- Em Domain settings, adicione links.cleitonavi.com
- No DNS, CNAME: links → seu-site.netlify.app

## WordPress (Elementor)
Crie a página Links (modelo Elementor Canvas) e cole:
<iframe src="https://links.cleitonavi.com" style="border:0;width:100%;min-height:100vh;display:block;" loading="eager"></iframe>
