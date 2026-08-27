# Link na Bio — Dra. Jacqueline Amar

Página "link na bio" em **React + Vite + CSS puro**, mobile-first, pensada para acesso pelo Instagram.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a pasta dist/ pronta para publicar
npm run preview  # testa o resultado do build
```

## Como editar os links

Todos os links e textos ficam em **um único arquivo**:

```
src/config/links.js
```

Basta trocar o conteúdo entre aspas:

- `botoes[].url` → link de cada botão (lista/WhatsApp, assessoria, suporte)
- `redes.instagram` → perfil do Instagram
- `redes.site` → site oficial (deixe `''` para esconder o ícone)
- `perfil` → nome, subtítulo, frase de posicionamento e rodapé

Links de WhatsApp seguem o formato: `https://wa.me/5511999999999?text=Ola`

## Como trocar a foto

Substitua o arquivo `src/assets/dra-jacqueline-amar.jpg` mantendo o mesmo nome
(imagem quadrada, recomendado 800×800px). Nenhum link externo é usado.

## Publicação

O build gera arquivos estáticos em `dist/`, compatíveis com Vercel, Netlify,
GitHub Pages ou qualquer hospedagem comum. O `base: './'` no `vite.config.js`
faz a página funcionar inclusive em subpastas.

## Estrutura

```
src/
├── assets/dra-jacqueline-amar.jpg   foto local
├── components/                      Perfil, Botao, Rodape
├── config/links.js                  ← edite aqui
├── styles/global.css                paleta, tipografia e reset
└── styles/app.css                   layout e responsividade
```

## Identidade visual

- Branco predominante (`#FFFFFF`) e fundo auxiliar `#F6F7F9`
- Azul institucional `#4C5873` — nome, títulos e botão principal
- Dourado `#DCB33F` — arco da foto, filete da frase e setas em destaque
- Neutros com leve viés azulado nos textos secundários
- Fundo com pontinhos dourados piscando (`src/components/CeuDourado.jsx`); para desligar, mude `visual.ceuDourado` para `false` em `src/config/links.js`
- Títulos em Outfit · textos em Figtree

O primeiro botão aparece em azul (destaque). Para mudar qual botão recebe esse
tratamento, mova a linha `destaque: true` em `src/config/links.js`.
