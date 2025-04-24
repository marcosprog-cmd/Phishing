function mostrarFormulario(event) {
  event.preventDefault();
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("etapa2").style.display = "block";
}

function enviarSimulacao(event) {
  event.preventDefault();
  alert("✅ Simulação completa!\nNenhuma informação foi enviada.\nEste conteúdo é apenas para fins educativos.");
}