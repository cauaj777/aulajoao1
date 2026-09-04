// Função para rolar suavemente até a seção desejada
function irPara(id) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}

// Alerta genérico para botões sem link configurado
function clicouBotao() {
  alert('Link ainda não configurado.');
}

// Função unificada e otimizada de envio de mensagem
function enviarMsg() {
  const nome = document.getElementById('inputNome').value;
  const email = document.getElementById('inputEmail').value;
  const mensagem = document.getElementById('inputMsg').value;

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Mensagem enviada com sucesso por ${nome} (${email}): "${mensagem}"`);
}

// Insere automaticamente o ano atual no rodapé ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const spanAno = document.getElementById('ano-atual');
  if (spanAno) {
    spanAno.textContent = new Date().getFullYear();
  }
});
