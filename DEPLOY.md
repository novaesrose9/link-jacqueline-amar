# Publicando a página (GitHub → Vercel → domínio na Cloudflare)

## 1. Subir para o GitHub

Dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Link na bio - Dra. Jacqueline Amar"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

A pasta `node_modules` e a `dist` já estão no `.gitignore` — não vão para o repositório.

## 2. Publicar na Vercel

1. Acesse vercel.com → **Add New… → Project** → **Import Git Repository** e escolha o repositório.
2. A Vercel detecta o Vite sozinha. Confirme:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Clique em **Deploy**. Em ~1 minuto sai um endereço `.vercel.app` já funcionando.

A partir daí, todo `git push` na branch `main` publica a nova versão automaticamente.

## 3. Domínio próprio com a Cloudflare

Na Vercel, em **Settings → Domains**, adicione o domínio (ex.: `jacquelineamar.com.br`).
A Vercel mostra os registros exatos. Depois, no painel da Cloudflare, em **DNS → Records**:

| Tipo  | Nome  | Conteúdo                          | Proxy            |
| ----- | ----- | --------------------------------- | ---------------- |
| A     | `@`   | `76.76.21.21`                     | **DNS only** 🌥️ |
| CNAME | `www` | o valor que a Vercel mostrar\*    | **DNS only** 🌥️ |

\* A Vercel gera um CNAME único por projeto (algo como `d1d4fc829fe7bc7c.vercel-dns-017.com`).
Use exatamente o valor exibido no painel dela, não um valor genérico.

**Importante:** deixe a nuvenzinha **cinza (DNS only)**, não laranja. Com o proxy da
Cloudflare ligado, o certificado SSL da Vercel não é emitido e o site pode entrar em
loop de redirecionamento. Se em **SSL/TLS** da Cloudflare houver o modo *Flexible*,
troque para **Full (strict)**.

A propagação costuma levar poucos minutos; a Vercel emite o certificado sozinha.

## 4. Trocar links ou a foto depois

- Links e textos: `src/config/links.js`
- Foto: substitua `src/assets/dra-jacqueline-amar.jpg` (quadrada, 800×800)

Depois é só:

```bash
git add .
git commit -m "Atualiza links"
git push
```

A Vercel republica sozinha.

## Alternativa: Cloudflare Pages

Se preferir manter tudo dentro da Cloudflare, dá para usar o **Cloudflare Pages** no
lugar da Vercel — conecte o mesmo repositório do GitHub e use:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

Nesse caso o domínio é ligado direto pelo painel do Pages, e aí o proxy da Cloudflare
fica ligado normalmente.
