
// Sistema de contagem automática

let acertos = 0;
let erros = 0;

// Função para simular sinal recebido
function novoSinal(tipo, precoEntrada) {
    const precoAtual = precoEntrada * (tipo === 'compra' ? 1.002 : 0.998); // 0.2% variação
    setTimeout(() => verificarSinal(tipo, precoEntrada, precoAtual), 60000); // 1 minuto depois
}

// Verifica se o sinal acertou
function verificarSinal(tipo, entrada, atual) {
    let resultado = false;
    if (tipo === 'compra' && atual >= entrada * 1.002) resultado = true;
    if (tipo === 'venda' && atual <= entrada * 0.998) resultado = true;

    if (resultado) {
        acertos++;
        document.getElementById('ultimo').textContent = "Acertou";
    } else {
        erros++;
        document.getElementById('ultimo').textContent = "Errou";
    }
    atualizarTela();
}

// Atualiza o painel de resultados
function atualizarTela() {
    const total = acertos + erros;
    const taxa = total ? ((acertos / total) * 100).toFixed(2) : 0;
    document.getElementById('acertos').textContent = acertos;
    document.getElementById('erros').textContent = erros;
    document.getElementById('taxa').textContent = taxa + '%';
    document.getElementById('hora').textContent = new Date().toLocaleTimeString();
}

// Reset diário às 00:00
setInterval(() => {
    const agora = new Date();
    if (agora.getHours() === 0 && agora.getMinutes() === 0) {
        acertos = 0;
        erros = 0;
        atualizarTela();
    }
}, 60000);

// Exemplo para testes manuais (remover em produção)
novoSinal('compra', 100);
