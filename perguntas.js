// ─────────────────────────────────────────────────────────────
//  EDITA AQUI AS PERGUNTAS
//  - "correta" é o índice da opção certa (0 = primeira)
//  - "codigo" é opcional: mostra um bloco de código na pergunta
//  - "nota" é a explicação que aparece depois de responder
//  As opções são embaralhadas em cada jogo, por isso podes
//  deixar sempre a resposta certa no índice 0.
// ─────────────────────────────────────────────────────────────

const TITULO = "Exercício de Programação";
const SUBTITULO = "Nível 1 · Bases de Python em escolha múltipla.";

const PERGUNTAS = [
  {
    pergunta: "Como se cria uma lista vazia em Python?",
    opcoes: ["lista = []", "lista = {}", "lista = ()", "lista = new List()"],
    correta: 0,
    nota: "[] cria uma lista, {} cria um dicionário e () cria um tuplo."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'x = 5\ny = x + 3\nx = 10\nprint(x + y)',
    opcoes: ["18", "23", "13", "20"],
    correta: 0,
    nota: "O y foi calculado quando x ainda era 5, logo y = 8 e fica com esse valor. Mudar x depois para 10 não recalcula o y: 10 + 8 = 18."
  },
  {
    pergunta: "Que método usas para adicionar um elemento no final de uma lista?",
    codigo: 'nums = [1, 2, 3]\nnums.____(4)   # -> [1, 2, 3, 4]',
    opcoes: ["nums.append(4)", "nums.add(4)", "nums.insert(4)", "nums.push(4)"],
    correta: 0,
    nota: "append() acrescenta sempre no fim. add() é dos sets, push() não existe em Python e insert() precisa da posição: nums.insert(0, 4) poria no início."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'nums = [2, 4]\nnums.append(6)\nnums[0] = 10\nprint(nums)',
    opcoes: ["[10, 4, 6]", "[2, 4, 6]", "[10, 2, 4, 6]", "[10, 4]"],
    correta: 0,
    nota: "Primeiro o append põe o 6 no fim: [2, 4, 6]. Depois nums[0] = 10 substitui o elemento da posição 0 (não acrescenta nada): [10, 4, 6]."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'total = 0\nfor n in [1, 2, 3, 4]:\n    total = total + n\nprint(total)',
    opcoes: ["10", "4", "0", "1234"],
    correta: 0,
    nota: "É um acumulador: o total vai somando em cada volta — 0+1=1, 1+2=3, 3+3=6, 6+4=10."
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
    pergunta: "O que imprime este código?",
    codigo: 'def dobro(n):\n    return n * 2\n\nx = 4\nx = dobro(x) + 1\nprint(x)',
    opcoes: ["9", "8", "10", "5"],
    correta: 0,
    nota: "dobro(4) devolve 8, soma-se 1 e o resultado (9) é guardado outra vez no x. O valor antigo do x é substituído."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'a = "um"\nb = "dois"\na, b = b, a\nprint(a, b)',
    opcoes: ["dois um", "um dois", "dois dois", "Erro de sintaxe"],
    correta: 0,
    nota: "a, b = b, a troca os dois valores ao mesmo tempo. O print com vírgula separa os valores por um espaço."
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
    pergunta: "O que imprime este código?",
    codigo: 'total = 17\ncaixas = total // 5\nresto = total % 5\nprint(caixas, resto)',
    opcoes: ["3 2", "3.4 2", "2 3", "3 0"],
    correta: 0,
    nota: "17 // 5 = 3 (quantas caixas cheias) e 17 % 5 = 2 (o que sobra). É o padrão para dividir em grupos."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'nums = [3, 8, 5, 12]\ncontador = 0\nfor n in nums:\n    if n > 4:\n        contador += 1\nprint(contador)',
    opcoes: ["3", "2", "4", "25"],
    correta: 0,
    nota: "O if só conta os maiores que 4: o 8, o 5 e o 12 — três. O 3 não conta. O += 1 soma 1 ao contador."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'palavra = ""\nfor letra in "abc":\n    palavra = letra + palavra\nprint(palavra)',
    opcoes: ["cba", "abc", "aaa", "c"],
    correta: 0,
    nota: "Cada letra nova é colocada à frente do que já existia: \"a\", depois \"ba\", depois \"cba\". É assim que se inverte uma string à mão."
  },
  {
    pergunta: "Qual é o valor de bool(0)?",
    opcoes: ["False", "True", "0", "None"],
    correta: 0,
    nota: "O 0, a string vazia, a lista vazia e o None são todos avaliados como False."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'x = 1\nwhile x < 10:\n    x = x * 3\nprint(x)',
    opcoes: ["27", "9", "10", "Ciclo infinito"],
    correta: 0,
    nota: "O x passa por 3 e 9 (ainda menores que 10) e depois por 27. Nessa altura a condição já é falsa, mas o x fica com 27."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'a = "3"\nb = 4\nprint(a * b)',
    opcoes: ["3333", "12", "81", "Erro de tipos"],
    correta: 0,
    nota: "Uma string multiplicada por um inteiro repete-se: \"3\" quatro vezes dá \"3333\". Para somar seria int(a) * b = 12."
  },
  {
    pergunta: "Qual destes tipos é imutável?",
    opcoes: ["tuple", "list", "dict", "set"],
    correta: 0,
    nota: "Um tuplo não pode ser alterado depois de criado. Listas, dicionários e sets podem."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'a = [1, 2]\nb = a\nb.append(3)\nprint(a)',
    opcoes: ["[1, 2, 3]", "[1, 2]", "[3]", "[[1, 2], 3]"],
    correta: 0,
    nota: "b = a não faz uma copia: os dois nomes apontam para a MESMA lista, por isso alterar b altera a. Para copiar usa-se b = a.copy() ou b = a[:]."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'nome = "Ana"\nidade = 7\nmensagem = nome + " tem " + str(idade)\nprint(mensagem)',
    opcoes: ["Ana tem 7", "Ana tem idade", "Anatem7", "Erro: não se soma texto com número"],
    correta: 0,
    nota: "O + junta strings, mas o número tem de ser convertido com str(). Sem o str(idade) daria TypeError."
  },
  {
    pergunta: "Como se escreve um comentário de uma linha?",
    opcoes: ["# comentário", "// comentário", "/* comentário */", "-- comentário"],
    correta: 0,
    nota: "Python usa o cardinal (#). Para várias linhas é comum usar uma string tripla."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'notas = {"Ana": 10}\nnotas["Bruno"] = 15\nnotas["Ana"] = notas["Ana"] + 5\nprint(notas)',
    opcoes: [
      "{'Ana': 15, 'Bruno': 15}",
      "{'Ana': 10, 'Bruno': 15}",
      "{'Ana': 15}",
      "{'Bruno': 15, 'Ana': 15}"
    ],
    correta: 0,
    nota: "Atribuir a uma chave nova acrescenta-a; atribuir a uma chave que já existe substitui o valor. A Ana passa de 10 para 15 e a ordem de inserção mantém-se."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'nums = [5, 10, 15, 20]\nprint(len(nums), nums[-1])',
    opcoes: ["4 20", "4 15", "3 20", "20 4"],
    correta: 0,
    nota: "len() conta os elementos (4) e o índice -1 vai buscar o último (20), sem precisares de saber o tamanho."
  },
  {
    pergunta: "O que imprime este código?",
    codigo: 'preco = 10\ndesconto = preco / 4\npreco = preco - desconto\nprint(preco)',
    opcoes: ["7.5", "7", "2.5", "6"],
    correta: 0,
    nota: "O / devolve sempre float: 10 / 4 = 2.5. Depois 10 - 2.5 = 7.5 e o resultado é guardado outra vez no preco."
  }
];

// Mensagens finais, por percentagem de acertos (ordem decrescente)
const RESULTADOS = [
  { min: 90, titulo: "Excelente!", texto: "Dominas as bases de Python." },
  { min: 70, titulo: "Muito bom!", texto: "Boa base — faltou pouco para a nota máxima." },
  { min: 50, titulo: "Quase lá", texto: "Já percebes o essencial. Revê as que falharam." },
  { min: 0,  titulo: "Vamos treinar", texto: "Lê as explicações e tenta outra vez." }
];
