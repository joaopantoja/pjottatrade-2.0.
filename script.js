// Simulação de leitura de padrões (fictício para fins visuais)
let sinal = document.getElementById("sinalAtual");

function avaliarMercado() {
    const chance = Math.random() * 100;

    if (chance > 90) {
        sinal.innerText = Math.random() > 0.5 ? "Compra Forte na próxima vela!" : "Venda Forte na próxima vela!";
    } else {
        sinal.innerText = "Aguardando sinal...";
    }
}

setInterval(avaliarMercado, 10000);

// TradingView embed
new TradingView.widget({
  "width": "100%",
  "height": 400,
  "symbol": "FX:EURUSD",
  "interval": "1",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "br",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_top_toolbar": false,
  "save_image": false,
  "container_id": "tradingview_chart"
});
