(function () {
  "use strict";

  var LETRAS = ["A", "B", "C", "D", "E", "F"];

  var ordem = [];      // perguntas desta partida (com opções embaralhadas)
  var indice = 0;
  var acertos = 0;
  var respostas = [];  // { pergunta, escolhida, correta, acertou }

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
    placar: document.getElementById("placar"),
    pergunta: document.getElementById("pergunta"),
    codigo: document.getElementById("codigo"),
    opcoes: document.getElementById("opcoes"),
    explicacao: document.getElementById("explicacao"),
    expTitulo: document.getElementById("explicacao-titulo"),
    expTexto: document.getElementById("explicacao-texto"),
    seguinte: document.getElementById("btn-seguinte"),
    anel: document.getElementById("anel"),
    pontuacao: document.getElementById("pontuacao"),
    resTitulo: document.getElementById("resultado-titulo"),
    resTexto: document.getElementById("resultado-texto"),
    revisao: document.getElementById("revisao"),
    repetir: document.getElementById("btn-repetir")
  };

  function embaralhar(lista) {
    var a = lista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // Embaralha as opções mantendo o registo de qual é a correta
  function preparar() {
    return PERGUNTAS.map(function (q) {
      var textoCorreto = q.opcoes[q.correta];
      var opcoes = embaralhar(q.opcoes);
      return {
        pergunta: q.pergunta,
        codigo: q.codigo || "",
        nota: q.nota || "",
        opcoes: opcoes,
        correta: opcoes.indexOf(textoCorreto)
      };
    });
  }

  function mostrar(ecra) {
    [el.inicio, el.quiz, el.fim].forEach(function (e) {
      e.classList.toggle("ativo", e === ecra);
    });
    window.scrollTo(0, 0);
  }

  // Heurística simples: opções que parecem código usam monospace
  function pareceCodigo(texto) {
    return /[()\[\]{}<>_]|^['"]|\s(==|!=|\/\/|%)\s/.test(texto);
  }

  function mostrarPergunta() {
    var q = ordem[indice];

    el.contador.textContent = (indice + 1) + " / " + ordem.length;
    el.placar.textContent = acertos + " certas";
    el.barra.style.width = (indice / ordem.length) * 100 + "%";
    el.pergunta.textContent = q.pergunta;

    if (q.codigo) {
      el.codigo.querySelector("code").textContent = q.codigo;
      el.codigo.hidden = false;
    } else {
      el.codigo.hidden = true;
    }

    el.explicacao.hidden = true;
    el.seguinte.hidden = true;
    el.opcoes.innerHTML = "";

    q.opcoes.forEach(function (texto, i) {
      var botao = document.createElement("button");
      botao.type = "button";
      botao.className = "opcao" + (pareceCodigo(texto) ? " mono" : "");

      var letra = document.createElement("span");
      letra.className = "letra";
      letra.textContent = LETRAS[i];

      var corpo = document.createElement("span");
      corpo.className = "texto";
      corpo.textContent = texto;

      var marca = document.createElement("span");
      marca.className = "marca";

      botao.appendChild(letra);
      botao.appendChild(corpo);
      botao.appendChild(marca);
      botao.addEventListener("click", function () { responder(i, botao); });
      el.opcoes.appendChild(botao);
    });
  }

  function responder(escolhida, botao) {
    var q = ordem[indice];
    var acertou = escolhida === q.correta;
    var botoes = el.opcoes.querySelectorAll(".opcao");

    botoes.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.correta) {
        b.classList.add("certa");
        b.querySelector(".marca").textContent = "✓";
      } else if (i === escolhida) {
        b.classList.add("errada");
        b.querySelector(".marca").textContent = "✕";
      } else {
        b.classList.add("apagada");
      }
    });

    if (acertou) acertos++;
    el.placar.textContent = acertos + " certas";

    respostas.push({
      pergunta: q.pergunta,
      escolhida: q.opcoes[escolhida],
      correta: q.opcoes[q.correta],
      acertou: acertou
    });

    el.explicacao.className = "explicacao " + (acertou ? "ok" : "nok");
    el.expTitulo.textContent = acertou ? "Certo" : "Errado";
    el.expTexto.textContent = q.nota;
    el.explicacao.hidden = false;

    el.seguinte.textContent = indice === ordem.length - 1 ? "Ver resultado" : "Seguinte";
    el.seguinte.hidden = false;
  }

  function seguinte() {
    indice++;
    if (indice < ordem.length) {
      mostrarPergunta();
      el.quiz.querySelector(".conteudo").scrollTop = 0;
    } else {
      terminar();
    }
  }

  function terminar() {
    var percentagem = Math.round((acertos / ordem.length) * 100);
    var resultado = RESULTADOS.find(function (r) { return percentagem >= r.min; })
      || RESULTADOS[RESULTADOS.length - 1];

    el.pontuacao.textContent = acertos + "/" + ordem.length;
    el.resTitulo.textContent = resultado.titulo;
    el.resTexto.textContent = resultado.texto + " (" + percentagem + "%)";
    el.anel.style.setProperty("--p", percentagem);

    el.revisao.innerHTML = "";
    respostas.forEach(function (r, i) {
      var li = document.createElement("li");

      var icone = document.createElement("span");
      icone.className = "icone";
      icone.textContent = r.acertou ? "✅" : "❌";

      var corpo = document.createElement("div");
      var tit = document.createElement("div");
      tit.textContent = (i + 1) + ". " + r.pergunta;
      corpo.appendChild(tit);

      if (!r.acertou) {
        var det = document.createElement("div");
        det.className = "detalhe";
        det.appendChild(document.createTextNode("Respondeste "));
        det.appendChild(codigoInline(r.escolhida));
        det.appendChild(document.createTextNode(" · correta: "));
        det.appendChild(codigoInline(r.correta));
        corpo.appendChild(det);
      }

      li.appendChild(icone);
      li.appendChild(corpo);
      el.revisao.appendChild(li);
    });

    mostrar(el.fim);
  }

  function codigoInline(texto) {
    var c = document.createElement("code");
    c.textContent = texto;
    return c;
  }

  function comecar() {
    ordem = preparar();
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
  el.comecar.addEventListener("click", comecar);
  el.seguinte.addEventListener("click", seguinte);
  el.repetir.addEventListener("click", comecar);
})();
