// Alternância de tema claro/escuro. Sem preferência salva, segue o sistema.
const CHAVE = 'tc-tema';

function temaAtual() {
  const forcado = document.documentElement.dataset.tema;
  if (forcado === 'claro' || forcado === 'escuro') return forcado;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
}

export function iniciarTema() {
  const botao = document.querySelector('[data-tema-botao]');
  if (!botao) return;
  const atualizar = () => botao.setAttribute('aria-pressed', String(temaAtual() === 'escuro'));
  atualizar();
  botao.addEventListener('click', () => {
    const novo = temaAtual() === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.dataset.tema = novo;
    try { localStorage.setItem(CHAVE, novo); } catch { /* armazenamento indisponível */ }
    atualizar();
  });
}
