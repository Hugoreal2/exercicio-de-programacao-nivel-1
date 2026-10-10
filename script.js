(function () {
  "use strict";

  var indice = 0;
  var acertos = 0;
  var respostas = []; // { pergunta, escolhida, correta, acertou }

  var el = {
    inicio: document.getElementById("ecra-inicio"),
    quiz: document.getElementById("ecra-quiz"),
    fim: document.getElementById("ecra-fim"),
    titulo: document.getElementById("titulo"),
    subtitulo: document.getElementById("subtitulo"),
    total: document.getElementById("total-perguntas"),
    comecar: document.getElementById("btn-comecar"),
    barra: document.getElementById("barra-fill"),
    contador: document.getElementById("contador"),
    pergunta: document.getElementById("pergunta"),
    opcoes: document.getElementById("opcoes"),
    feedback: document.getElementById("feedback"),
    seguinte: document.getElementById("btn-seguinte"),
    pontuacao: document.getElementById("pontuacao"),
    resTitulo: document.getElementById("resultado-titulo"),
    resTexto: document.getElementById("resultado-texto"),
    revisao: document.getElementById("revisao"),
    repetir: document.getElementById("btn-repetir")
  };

  function mostrar(ecra) {
    [el.inicio, el.quiz, el.fim].forEach(function (e) {
      e.classList.toggle("ativo", e === ecra);
    });
  }

  function mostrarPergunta() {
    var q = PERGUNTAS[indice];

    el.contador.textContent = "Pergunta " + (indice + 1) + " de " + PERGUNTAS.length;
    el.barra.style.width = (indice / PERGUNTAS.length) * 100 + "%";
    el.pergunta.textContent = q.pergunta;
    el.feedback.textContent = "";
    el.seguinte.hidden = true;
    el.opcoes.innerHTML = "";

    q.opcoes.forEach(function (texto, i) {
      var botao = document.createElement("button");
      botao.type = "button";
      botao.className = "opcao";
      botao.textContent = texto;
      botao.addEventListener("click", function () {
        responder(i, botao);
      });
      el.opcoes.appendChild(botao);
    });
  }

  function responder(escolhida, botao) {
    var q = PERGUNTAS[indice];
    var acertou = escolhida === q.correta;
    var botoes = el.opcoes.querySelectorAll(".opcao");

    botoes.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.correta) b.classList.add("certa");
    });
    if (!acertou) botao.classList.add("errada");

    if (acertou) acertos++;
    respostas.push({
      pergunta: q.pergunta,
      escolhida: q.opcoes[escolhida],
      correta: q.opcoes[q.correta],
      acertou: acertou
    });

    el.feedback.textContent = (acertou ? "Certíssimo! " : "Não foi essa... ") + (q.nota || "");
    el.seguinte.hidden = false;
    el.seguinte.textContent = indice === PERGUNTAS.length - 1 ? "Ver resultado 🎉" : "Seguinte →";
    el.seguinte.focus();
  }

  function seguinte() {
    indice++;
    if (indice < PERGUNTAS.length) {
      mostrarPergunta();
    } else {
      terminar();
    }
  }

  function terminar() {
    var percentagem = Math.round((acertos / PERGUNTAS.length) * 100);
    var resultado = RESULTADOS.find(function (r) { return percentagem >= r.min; }) || RESULTADOS[RESULTADOS.length - 1];

    el.pontuacao.textContent = acertos + "/" + PERGUNTAS.length;
    el.resTitulo.textContent = resultado.titulo;
    el.resTexto.textContent = resultado.texto;

    el.revisao.innerHTML = "";
    respostas.forEach(function (r) {
      var li = document.createElement("li");
      var linha1 = document.createElement("div");
      linha1.innerHTML = (r.acertou ? "✅ " : "❌ ") + "<b>" + escapar(r.pergunta) + "</b>";
      li.appendChild(linha1);

      if (!r.acertou) {
        var linha2 = document.createElement("div");
        linha2.textContent = "Respondeste: " + r.escolhida + " · Certo: " + r.correta;
        li.appendChild(linha2);
      }
      el.revisao.appendChild(li);
    });

    mostrar(el.fim);
    chuvaDeCoracoes(percentagem === 100 ? 30 : 12);
  }

  function escapar(texto) {
    var d = document.createElement("div");
    d.textContent = texto;
    return d.innerHTML;
  }

  function chuvaDeCoracoes(quantidade) {
    var caixa = document.querySelector(".coracoes");
    var emojis = ["💕", "💖", "❤️", "💗", "🩷"];
    for (var i = 0; i < quantidade; i++) {
      var s = document.createElement("span");
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = (6 + Math.random() * 6).toFixed(1) + "s";
      s.style.animationDelay = (Math.random() * 4).toFixed(1) + "s";
      s.style.fontSize = (16 + Math.random() * 18).toFixed(0) + "px";
      caixa.appendChild(s);
    }
  }

  function reiniciar() {
    indice = 0;
    acertos = 0;
    respostas = [];
    mostrar(el.quiz);
    mostrarPergunta();
  }

  // arranque
  el.titulo.textContent = TITULO;
  el.subtitulo.textContent = SUBTITULO;
  el.total.textContent = PERGUNTAS.length;
  el.comecar.addEventListener("click", reiniciar);
  el.seguinte.addEventListener("click", seguinte);
  el.repetir.addEventListener("click", reiniciar);
  chuvaDeCoracoes(12);
})();
