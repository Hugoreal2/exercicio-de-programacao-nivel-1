# Quiz do Amor 💕

Um quiz simples em HTML + CSS + JavaScript puro, pronto para publicar no GitHub Pages.

## Como editar as perguntas

Abre o ficheiro **`perguntas.js`**. É o único ficheiro que precisas de mexer:

```js
{
  pergunta: "A tua pergunta aqui?",
  opcoes: ["Opção A", "Opção B", "Opção C", "Opção D"],
  correta: 0,            // 0 = primeira opção, 1 = segunda, ...
  nota: "Mensagem que aparece depois de responder."
}
```

Também podes mudar o `TITULO`, o `SUBTITULO` e as mensagens finais (`RESULTADOS`).

## Ver localmente

Basta abrir o `index.html` no browser (duplo clique). Ou:

```bash
python3 -m http.server 8000
# depois abre http://localhost:8000
```

## Publicar no GitHub Pages

1. No repositório no GitHub: **Settings → Pages**
2. Em *Source*, escolhe **Deploy from a branch**
3. Branch: `main`, pasta `/ (root)` → **Save**
4. Ao fim de um minuto o quiz fica em `https://<utilizador>.github.io/quiz-amor/`

## Ficheiros

| Ficheiro | O que faz |
|---|---|
| `index.html` | Estrutura da página |
| `style.css` | Aspeto visual |
| `perguntas.js` | **As perguntas e os textos** |
| `script.js` | Lógica do quiz |
