// ─────────────────────────────────────────────────────────────
//  EDITA AQUI AS PERGUNTAS DO QUIZ
//  - "correta" é o índice da opção certa (0 = primeira opção)
//  - podes ter quantas perguntas quiseres
// ─────────────────────────────────────────────────────────────

const TITULO = "Quanto é que me conheces? 💕";
const SUBTITULO = "Um quiz feito só para ti, amor.";

const PERGUNTAS = [
  {
    pergunta: "Onde nos conhecemos?",
    opcoes: ["Numa festa", "No trabalho", "Na faculdade", "Pela internet"],
    correta: 0,
    nota: "Nunca me vou esquecer desse dia. ❤️"
  },
  {
    pergunta: "Qual é a minha comida preferida?",
    opcoes: ["Francesinha", "Sushi", "Bacalhau à Brás", "Pizza"],
    correta: 2,
    nota: "Já devias saber esta de cor!"
  },
  {
    pergunta: "Qual foi o primeiro filme que vimos juntos?",
    opcoes: ["Titanic", "O Rei Leão", "Interstellar", "Já não me lembro"],
    correta: 1,
    nota: "Adormeceste a meio, confessa."
  },
  {
    pergunta: "Qual é a minha cor preferida?",
    opcoes: ["Azul", "Verde", "Preto", "Vermelho"],
    correta: 0,
    nota: "Fácil, não foi?"
  },
  {
    pergunta: "Que música me faz sempre pensar em ti?",
    opcoes: ["Perfect — Ed Sheeran", "A Tua Mão — Carolina Deslandes", "Yellow — Coldplay", "Todas"],
    correta: 3,
    nota: "A resposta certa é sempre 'todas'. 🎵"
  },
  {
    pergunta: "Qual é o meu sonho de viagem contigo?",
    opcoes: ["Japão", "Itália", "Islândia", "Maldivas"],
    correta: 1,
    nota: "Um dia vamos lá, prometo."
  },
  {
    pergunta: "O que é que eu mais gosto em ti?",
    opcoes: ["O teu sorriso", "A tua risada", "A forma como cuidas de mim", "Tudo"],
    correta: 3,
    nota: "Não havia como escolher só uma. 🥰"
  }
];

// Mensagens finais, por percentagem de acertos
const RESULTADOS = [
  { min: 100, titulo: "Perfeito! 💯", texto: "Acertaste em tudo. Conheces-me melhor do que eu próprio." },
  { min: 70,  titulo: "Muito bem! 💖", texto: "Quase tudo certo — claramente andas atenta." },
  { min: 40,  titulo: "Nada mal! 😊", texto: "Há aqui umas falhas... vamos ter de passar mais tempo juntos." },
  { min: 0,   titulo: "Ai ai... 😅", texto: "Acho que temos de marcar mais encontros para treinares." }
];
