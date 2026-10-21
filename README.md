# Tijolo & Cal — site de demonstração (engenharia, arquitetura e obras)

Site de uma página, em português do Brasil, criado pela [novapicks](https://novapicks.website) como **exemplo** para escritórios de arquitetura, construtoras e pequenas incorporadoras.

> **Tudo aqui é fictício.** A empresa Tijolo & Cal, o CNPJ, o endereço, as obras, os números e os depoimentos não existem. As fotos são ilustrações geradas por IA (origem em [`prompts/imagens-gemini.md`](prompts/imagens-gemini.md)). O número de WhatsApp é um espaço reservado.

Site publicado: https://savio13-desig.github.io/portfolio-engenharia-arquitetura/

## O que a página tem

1. Hero com a promessa e um CTA único, "Pedir orçamento pelo WhatsApp".
2. Portfólio com 6 projetos (metragem, prazo, bairro e frase de resultado). Cada um abre em um `<dialog>` com imagem ampliada, escopo e atalho para o orçamento.
3. Antes e depois de um apartamento, com comparador acessível (controle de intervalo, teclado, toque e arraste).
4. Como trabalhamos: 4 etapas com prazo e entrega.
5. Avaliações no estilo Google: nota e 3 depoimentos, todos marcados como exemplo.
6. Formulário curto (tipo de obra, bairro, prazo), com validação, pré-visualização da mensagem e abertura do WhatsApp.
7. Rodapé com CNPJ de exemplo, área de atuação e mapa ilustrativo.
8. Faixa "Exemplo de site criado pela novapicks" no topo e no rodapé, com link para novapicks.website.

Modo claro e escuro (segue o sistema e tem botão), `prefers-contrast: more` e `prefers-reduced-motion` respeitados.

## Tecnologias

HTML, CSS e JavaScript puros (módulos ES), sem framework e sem requisições a terceiros. Fontes locais: Fraunces e Hanken Grotesk (licença OFL, arquivos em `fontes/`). Dependências só de desenvolvimento: `esbuild` e `html-minifier-terser`.

## Executar

Pré-requisitos: Node 20 ou superior e Python 3 (só para servir a pasta).

```bash
npm install
npm run build        # gera dist/ (JS, CSS e HTML minificados)
npm run preview      # http://localhost:8000
```

Os módulos ES não abrem por `file://`; use sempre o servidor HTTP.

## Trocar os dados para um cliente real

- `js/modules/dados.js`: número de WhatsApp (`CONFIG.whatsapp`) e dados dos projetos exibidos no detalhe.
- `html/index.html`: textos, projetos e rodapé.
- `imagens/`: fotos reais em WebP (600 e 1200 px de largura) e `prompts/imagens-gemini.md` para registrar a origem.
- `css/estilo.css`: paleta e tipografia ficam nos tokens do `:root`.

## Estrutura

```
index.html            redireciona para html/index.html
html/index.html       página única
css/estilo.css        Design System e layout (mobile-first, 5 breakpoints)
js/main.js            ponto de entrada
js/modules/           tema, menu, comparador, modal, orcamento, dados
imagens/              WebP responsivos e favicon
fontes/               fontes locais (woff2) e licenças
prompts/              origem e prompts das imagens
scripts/build.mjs     build de produção
.github/workflows/    CI (build) e deploy no GitHub Pages
```

## Verificações

Os resultados medidos de cada versão estão nas notas de lançamento (Releases). Resumo do método: validador W3C (HTML e CSS), axe-core 4.14 (WCAG 2.1 A e AA e boas práticas) nos temas claro e escuro, contraste calculado pela fórmula do WCAG, teclado real (Tab, Enter, Esc), viewport de celular a 390 px e Lighthouse.

## Limitações

- Não foi testado com leitor de tela real (NVDA, VoiceOver ou TalkBack).
- As fotos são de IA e têm pequenas inconsistências naturais desse tipo de imagem. Em produção, entram fotos reais.
- O botão de WhatsApp usa um número de espaço reservado.
- O bloco de avaliações do Google é estático e de exemplo; em produção seria preciso integrar ao perfil real (Google Business Profile).

## Versionamento

GitFlow (`main`, `develop`, `feature/*`), Conventional Commits em português e SemVer. O deploy roda só em push na `main`.
