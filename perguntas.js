// ─────────────────────────────────────────────────────────────
//  EDITA AQUI AS PERGUNTAS
//  - "correta" é o índice da opção certa (0 = primeira)
//  - "codigo" é opcional: mostra um bloco de código na pergunta
//  - "nota" é a explicação que aparece depois de responder
// ─────────────────────────────────────────────────────────────

const TITULO = "Exercício de Programação";
const SUBTITULO = "Nível 1 · Bases de Python em escolha múltipla.";

const PERGUNTAS = [
  {
    pergunta: "Qual é o resultado deste código?",
    codigo: "print(type(5))",
    opcoes: ["<class 'int'>", "<class 'float'>", "<class 'number'>", "int"],
    correta: 0,
    nota: "type() devolve a classe do objeto. O 5 é um inteiro, logo <class 'int'>."
  },
  {
    pergunta: "Como se cria uma lista vazia em Python?",
    opcoes: ["lista = []", "lista = {}", "lista = ()", "lista = new List()"],
    correta: 0,
    nota: "[] cria uma lista, {} cria um dicionário e () cria um tuplo."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: "x = 10\ny = 3\nprint(x // y)",
    opcoes: ["3", "3.333...", "1", "Erro"],
    correta: 0,
    nota: "O operador // faz divisão inteira: descarta a parte decimal e devolve 3."
  },
  {
    pergunta: "Qual destas é a forma correta de definir uma função?",
    opcoes: [
      "def soma(a, b):",
      "function soma(a, b):",
      "def soma(a, b) {",
      "fun soma(a, b):"
    ],
    correta: 0,
    nota: "Em Python usa-se a palavra-chave def, seguida dos parâmetros e dois pontos."
  },
  {
    pergunta: "Qual é o comprimento desta string?",
    codigo: 'len("Python")',
    opcoes: ["6", "5", "7", "Erro"],
    correta: 0,
    nota: "len() conta os caracteres: P-y-t-h-o-n = 6."
  },
  {
    pergunta: "O que faz o operador % entre dois números?",
    opcoes: [
      "Devolve o resto da divisão",
      "Calcula a percentagem",
      "Faz a divisão exata",
      "Eleva ao quadrado"
    ],
    correta: 0,
    nota: "7 % 3 dá 1, porque 1 é o resto de dividir 7 por 3. É o operador módulo."
  },
  {
    pergunta: "Qual é o índice do primeiro elemento de uma lista?",
    opcoes: ["0", "1", "-1", "Depende da lista"],
    correta: 0,
    nota: "Em Python os índices começam em 0. O último pode ser acedido com -1."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'nums = [1, 2, 3, 4]\nprint(nums[1:3])',
    opcoes: ["[2, 3]", "[1, 2, 3]", "[2, 3, 4]", "[1, 2]"],
    correta: 0,
    nota: "No slicing [1:3] o início é incluído e o fim é excluído: posições 1 e 2."
  },
  {
    pergunta: "Qual destes tipos é imutável?",
    opcoes: ["tuple", "list", "dict", "set"],
    correta: 0,
    nota: "Um tuplo não pode ser alterado depois de criado. Listas, dicionários e sets podem."
  },
  {
    pergunta: "Como se escreve um comentário de uma linha?",
    opcoes: ["# comentário", "// comentário", "/* comentário */", "-- comentário"],
    correta: 0,
    nota: "Python usa o cardinal (#). Para várias linhas é comum usar uma string tripla."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'print("3" + "4")',
    opcoes: ["34", "7", "Erro", "'3' '4'"],
    correta: 0,
    nota: "Com strings, o + concatena. Para somar seria int(\"3\") + int(\"4\") = 7."
  },
  {
    pergunta: "Qual é o valor de bool(0)?",
    opcoes: ["False", "True", "0", "None"],
    correta: 0,
    nota: "O 0, a string vazia, a lista vazia e o None são todos avaliados como False."
  },
  {
    pergunta: "Que estrutura usas para repetir código um número conhecido de vezes?",
    opcoes: ["for", "while True", "if", "def"],
    correta: 0,
    nota: "O ciclo for percorre uma sequência, por exemplo for i in range(5)."
  },
  {
    pergunta: "O que faz este código?",
    codigo: 'd = {"nome": "Ana"}\nprint(d["nome"])',
    opcoes: ["Imprime Ana", "Imprime nome", "Dá KeyError", "Imprime o dicionário"],
    correta: 0,
    nota: "Num dicionário acede-se ao valor através da chave. Aqui a chave 'nome' vale 'Ana'."
  },
  {
    pergunta: "Como converter a string \"42\" num número inteiro?",
    opcoes: ['int("42")', 'str(42)', 'float("42")', 'number("42")'],
    correta: 0,
    nota: "int() converte para inteiro. float() daria 42.0 e str() faria o contrário."
  }
];

// Mensagens finais, por percentagem de acertos (ordem decrescente)
const RESULTADOS = [
  { min: 90, titulo: "Excelente!", texto: "Dominas as bases de Python." },
  { min: 70, titulo: "Muito bom!", texto: "Boa base — faltou pouco para a nota máxima." },
  { min: 50, titulo: "Quase lá", texto: "Já percebes o essencial. Revê as que falharam." },
  { min: 0,  titulo: "Vamos treinar", texto: "Lê as explicações e tenta outra vez." }
];
