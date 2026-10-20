# Mapa de Risco Digital — Cipa Codevasf

Protótipo navegável do mapa de risco do edifício-sede da Codevasf, montado com o Design System gov.br.

## Estrutura

- `index.html`: o site (páginas, estilos e lógica)
- `dados.js`: andares, setores, riscos, medidas, comunicações de exemplo e perguntas frequentes
- `support.js`: runtime que monta a página (carrega React a partir da CDN unpkg)
- `ds/`: tokens, estilos, fontes e componentes do Design System gov.br
- `assets/`: logos gov.br e ilustrações

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `mapa-de-risco`.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório, incluindo o arquivo `.nojekyll`. Pelo navegador: **Add file → Upload files** e arraste os arquivos e pastas.
3. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`. Salve.
4. Depois de 1 a 2 minutos, o link aparece no topo da página: `https://SEU-USUARIO.github.io/mapa-de-risco/`.

## Testar no computador

Abrir o `index.html` com duplo clique não funciona, porque o navegador bloqueia a leitura de `dados.js`. Use um servidor local na pasta:

```
python -m http.server 8000
```

Depois, acesse http://localhost:8000.

## Observações

- O site precisa de internet para carregar React, Font Awesome, Google Fonts, o gerador de QR code e o VLibras.
- O login gov.br, as notificações e as comunicações são simulados, com dados de exemplo.
- Para editar os dados do mapa, altere `dados.js`.
