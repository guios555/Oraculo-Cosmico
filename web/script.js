const telaConsulta = document.querySelector("#tela-consulta");
const telaArquivos = document.querySelector("#tela-arquivos");

const chatBox = document.querySelector("#chat-box");
const input = document.querySelector(".chat-input input");
const button = document.querySelector(".chat-input button");

const sanityText = document.querySelector(".sanity-card strong");
const sanityBar = document.querySelector(".sanity-bar span");
const statusText = document.querySelector(".status-pill");
const hero = document.querySelector(".hero");

const btnArquivos = document.querySelector("#arquivos-vazados");
const btnConsulta = document.querySelector("#consulta-oraculo");

let sanity = 100;

const oracleResponses = {
    stable: [
        "O acervo reconhece sua pergunta, mas ainda não concede uma resposta completa.",
        "Há fragmentos sobre isso nos registros da ala norte.",
        "Os arquivos indicam padrões recorrentes, mas a origem permanece incerta."
    ],

    strange: [
        "A margem do documento parece responder antes da tinta.",
        "Esse tema aparece em notas que não constam no catálogo oficial.",
        "Há registros semelhantes, mas alguns foram removidos sem assinatura."
    ],

    anomalous: [
        "As páginas não permanecem na mesma ordem quando observadas por muito tempo.",
        "O índice recusa essa classificação. Ainda assim, ele aponta para baixo.",
        "Sua pergunta ecoa em registros que deveriam estar vazios."
    ],

    critical: [
        "A consulta foi aceita por algo que não consta no sistema.",
        "O acervo abriu uma seção que não deveria existir.",
        "Não leia a próxima linha em voz alta."
    ],

    apex: [
        "A consulta deixou de pertencer ao pesquisador.",
        "O Oráculo não responde. Ele atravessa.",
        "A entidade está presente."
    ]
};

button.addEventListener("click", sendMessage);

btnArquivos.addEventListener("click", () => {

    mostrarArquivosVazados();

});

btnConsulta.addEventListener("click", () => {

    mostrarConsulta();

});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userText = input.value.trim();

    if (userText === "") {
        return;
    }

    addMessage("user", "Pesquisador", userText);

    input.value = "";

    decreaseSanity();

    const responseGroup = getSanityState();
    const oracleText = getRandomResponse(responseGroup);

    addMessage("oracle", "Oráculo", oracleText);
}

function decreaseSanity() {
    const sanityLoss = Math.floor(Math.random() * 10) + 1;

    sanity = sanity - sanityLoss;

    if (sanity < 0) {
        sanity = 0;
    }

    sanityText.textContent = sanity + "%";
    sanityBar.style.width = sanity + "%";

    updateInterfaceState();
}

function getSanityState() {
    if (sanity >= 75) {
        return "stable";
    }

    if (sanity >= 50) {
        return "strange";
    }

    if (sanity >= 25) {
        return "anomalous";
    }

    if (sanity >= 1) {
        return "critical";
    }

    return "apex";
}

function updateInterfaceState() {
    const state = getSanityState();

    if (state === "stable") {
        statusText.innerHTML = "<span></span>estável";
        hero.style.background = "linear-gradient(135deg, #14352f, #25564b)";
    }

    if (state === "strange") {
        statusText.innerHTML = "<span></span>observação incomum";
        hero.style.background = "linear-gradient(135deg, #2f3d32, #615c3a)";
    }

    if (state === "anomalous") {
        statusText.innerHTML = "<span></span>evento anômalo";
        hero.style.background = "linear-gradient(135deg, #3b2f3d, #5a3d4f)";
    }

    if (state === "critical") {
        statusText.innerHTML = "<span></span>manifestação possível";
        hero.style.background = "linear-gradient(135deg, #3d1f2b, #111111)";
    }

    if (state === "apex") {
        statusText.innerHTML = "<span></span>manifestação";
        hero.style.background = "linear-gradient(135deg, #050505, #1a050c)";
    }
}

function getRandomResponse(groupName) {
    const responses = oracleResponses[groupName];
    const randomIndex = Math.floor(Math.random() * responses.length);

    return responses[randomIndex];
}

function addMessage(type, author, text) {
    const message = document.createElement("div");
    message.classList.add("message", type);

    message.innerHTML = `
        <strong>${author}</strong>
        <p>${text}</p>
    `;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function mostrarConsulta() {
    telaConsulta.classList.remove("hidden");
    telaArquivos.classList.add("hidden");
    btnConsulta.classList.add("active");
    btnArquivos.classList.remove("active");
}

function mostrarArquivosVazados() {
    telaConsulta.classList.add("hidden");
    telaArquivos.classList.remove("hidden");
    btnConsulta.classList.remove("active");
    btnArquivos.classList.add("active");
}