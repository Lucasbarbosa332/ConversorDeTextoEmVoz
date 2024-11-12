// Variáveis
let voices = [];
let selectedVoice = null;
let isRecognizing = false;
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
let speechSynthesis = window.speechSynthesis;
let textInput = document.getElementById("text-input");

// Carregar vozes
function loadVoices() {
    voices = speechSynthesis.getVoices();
    let voiceSelect = document.getElementById("voice-select");
    voices.forEach((voice, index) => {
        let option = document.createElement("option");
        option.textContent = voice.name;
        option.value = index;
        voiceSelect.appendChild(option);
    });
    voiceSelect.addEventListener("change", (e) => {
        selectedVoice = voices[e.target.value];
    });
}

// Função para ler o texto
function readText() {
    let text = textInput.value;
    if (!text) {
        alert("Por favor, insira um texto.");
        return;
    }

    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.rate = document.getElementById("rate").value;
    utterance.pitch = document.getElementById("pitch").value;
    speechSynthesis.speak(utterance);
}

// Função para salvar texto no LocalStorage
function saveText() {
    let text = textInput.value;
    if (text) {
        let savedTexts = JSON.parse(localStorage.getItem("savedTexts") || "[]");
        savedTexts.push(text);
        localStorage.setItem("savedTexts", JSON.stringify(savedTexts));
        alert("Texto salvo com sucesso!");
        loadSavedTexts();  // Atualiza a lista de textos salvos
    }
}

// Carregar textos salvos
function loadSavedTexts() {
    let savedTexts = JSON.parse(localStorage.getItem("savedTexts") || "[]");
    let savedTextList = document.getElementById("saved-texts");
    savedTextList.innerHTML = "";
    savedTexts.forEach((text, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = text;
        listItem.addEventListener("click", () => {
            textInput.value = text;
        });
        savedTextList.appendChild(listItem);
    });
}

// Funcionalidade de favoritar texto
function toggleFavorite() {
    // Lógica para marcar como favorito
    alert("Texto marcado como favorito!");
}

// Reconhecimento de voz
function toggleVoiceRecognition() {
    if (isRecognizing) {
        recognition.stop();
    } else {
        recognition.start();
    }
    isRecognizing = !isRecognizing;
}

// Tradução do texto (placeholder)
function translateText() {
    alert("Função de tradução não implementada.");
}

// Exportar texto para PDF (placeholder)
function exportToPDF() {
    alert("Função de exportação para PDF não implementada.");
}

// Inicializar vozes e carregar textos salvos ao iniciar
loadVoices();
loadSavedTexts();
