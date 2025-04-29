// Inicializar contadores
let acertos = 0;
let erros = 0;

function atualizarPainel(resultado) {
  if (resultado === "acerto") {
    acertos++;
  } else if (resultado === "erro") {
    erros++;
  }
  const total = acertos + erros;
  const taxa = total > 0 ? ((acertos / total) * 100).toFixed(1) : 0;
  
  document.getElementById('acertos').innerText = `Acertos: ${acertos}`;
  document.getElementById('erros').innerText = `Erros: ${erros}`;
  document.getElementById('taxaAcerto').innerText = `Taxa de Acerto: ${taxa}%`;
  document.getElementById('ultimoResultado').innerText = `Último Resultado: ${resultado.toUpperCase()}`;
}

// Simular análise de vela para sinal de operação
function analisarMercado() {
  const chance = Math.random() * 100;

  if (chance > 90) {
    const direcao = Math.random() > 0.5 ? "Compra Forte" : "Venda Forte";
    document.getElementById('sinalAtual').innerHTML = `Sinal Atual: <span style="color:lime">${direcao}</span>`;
    
    // Supondo acerto inicial
    const resultado = Math.random() > 0.2 ? "acerto" : "erro"; // 80% de chance de ser acerto
    atualizarPainel(resultado);
  } else {
    document.getElementById('sinalAtual').innerHTML = `Sinal Atual: <span style="color:lime">Aguardando...</span>`;
  }
}

// Atualizar a cada 1 minuto (60000 ms)
setInterval(analisarMercado, 60000);

// TradingView
new TradingView.widget({
  "container_id": "tradingview_chart",
  "autosize": true,
  "symbol": "BINANCE:BTCUSDT",
  "interval": "1",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "br",
  "toolbar_bg": "#000000",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "hide_side_toolbar": false,
  "details": true
});