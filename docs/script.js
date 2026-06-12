function nextScreen(numero){

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("screen" + numero)
        .classList.add("active");
}

function executarPrograma(){

    nextScreen(5);

    const terminal = document.getElementById("terminal");

    const linhas = [

        "✓ Conexão estabelecida",
        "✓ Conversas carregadas",
        "✓ Risadas carregadas",
        "✓ Carinho carregado",
        "✓ Saudade carregada",
        "",
        "Erro:",
        "Distância detectada.",
        "",
        "Tentando corrigir...",
        "Tentando corrigir...",
        "Tentando corrigir...",
        "",
        "Falha.",
        "",
        "Solução encontrada:",
        "Conhecer pessoalmente ❤️"

    ];

    let i = 0;

    const intervalo = setInterval(() => {

        terminal.innerHTML += "<p>" + linhas[i] + "</p>";

        i++;

        if(i >= linhas.length){

            clearInterval(intervalo);

            setTimeout(() => {

    document
    .getElementById("musicaPrincipal")
    .classList.remove("hidden");

}, 500);

setTimeout(() => {

    document
    .getElementById("playlist")
    .classList.remove("hidden");

}, 1500);

setTimeout(() => {

    document
    .getElementById("mensagemFinal")
    .classList.remove("hidden");

}, 3000);
        }

    }, 700);
}

function criarCoracao(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(criarCoracao, 300);
