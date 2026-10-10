# Exercício de Programação — Nível 1 🐍

Quiz de escolha múltipla sobre as bases de Python, com ênfase em prever o output de código que mexe em variáveis. HTML, CSS e JavaScript puro — sem dependências, sem build.

**Online:** https://hugoreal2.github.io/exercicio-de-programacao-nivel-1/

## Editar as perguntas

Só precisas de mexer no ficheiro **`perguntas.js`**:

```js
{
  pergunta: "O que imprime este código?",
  codigo: "print(2 ** 3)",        // opcional: bloco de código
  opcoes: ["8", "6", "9", "Erro"],
  correta: 0,                     // 0 = primeira opção
  nota: "** é a potência: 2 elevado a 3 = 8."
}
```

As opções são **embaralhadas em cada jogo**, por isso a posição da resposta certa
no ficheiro não importa — podes deixar sempre a correta no índice `0`.

Também podes mudar o `TITULO`, o `SUBTITULO` e as mensagens finais (`RESULTADOS`).

## Ver localmente

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Design

Pensado primeiro para telemóvel:

- Layout de altura total (`100dvh`) com o botão principal fixo em baixo
- Áreas de toque de 54–56 px e respeito pela *safe area* do iPhone
- Tema escuro com acento azul/amarelo, sem dependências de fontes externas
- Barra de progresso, contador de acertos e explicação após cada resposta
- Em ecrãs largos passa a cartão centrado
- Respeita `prefers-reduced-motion`

## Ficheiros

| Ficheiro | O que faz |
|---|---|
| `index.html` | Estrutura dos três ecrãs (início, quiz, resultado) |
| `style.css` | Design e responsividade |
| `perguntas.js` | **As perguntas e os textos** |
| `script.js` | Lógica: embaralhar, pontuar, revisão final |

## Publicar no GitHub Pages

Já está ativo (branch `main`, pasta raiz). Depois de cada `git push` o site
atualiza-se ao fim de cerca de um minuto.
