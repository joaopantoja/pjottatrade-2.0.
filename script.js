
let acertos = 0;
let erros = 0;

function atualizarTela() {
  const total = acertos + erros;
  const taxa = total > 0 ? ((acertos / total) * 100).toFixed(2) : 0;

  document.getElementById('acertos').innerText = `Acertos: ${acertos}`;
  document.getElementById('erros').innerText = `Erros: ${erros}`;
  document.getElementById('taxaAcerto').innerText = `Taxa de Acerto: ${taxa}%`;
  document.getElementById('ultimoResultado').innerText = `Último Resultado: ${total > 0 ? (acertos > erros ? 'Acerto' : 'Erro') : 'Nenhum ainda'}`;
  document.getElementById('ultimaVerificacao').innerText = `Última Verificação: ${new Date().toLocaleTimeString()}`;
}

// Simulação de verificação a cada minuto
setInterval(() => {
  const sinal = Math.random() > 0.5 ? 'COMPRA' : 'VENDA';
  document.getElementById('sinalAtual').innerText = `Sinal Atual: ${sinal}`;
}, 60000);

// Simular clique manual para marcar acerto/erro
window.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    acertos++;
    atualizarTela();
  } else if (e.key === 'e') {
    erros++;
    atualizarTela();
  }
});
