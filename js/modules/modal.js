// Detalhe do projeto em <dialog>: o navegador cuida do foco preso, do Esc e do retorno do foco.
import { PROJETOS } from './dados.js';
import { definirTipo } from './orcamento.js';

export function iniciarModal() {
  const dlg = document.getElementById('modal-obra');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  const q = (s) => dlg.querySelector(s);
  let ultimoGatilho = null;

  function abrir(id, gatilho) {
    const p = PROJETOS[id];
    if (!p) return;
    ultimoGatilho = gatilho;
    const img = q('[data-modal-img]');
    img.src = p.img;
    img.alt = p.alt;
    q('[data-modal-tipo]').textContent = p.tipo;
    q('[data-modal-titulo]').textContent = p.titulo;
    q('[data-modal-resumo]').textContent = p.resumo;
    q('[data-modal-area]').textContent = p.area;
    q('[data-modal-prazo]').textContent = p.prazo;
    q('[data-modal-local]').textContent = p.local;
    const lista = q('[data-modal-escopo]');
    lista.replaceChildren(...p.escopo.map((t) => { const li = document.createElement('li'); li.textContent = t; return li; }));
    dlg.dataset.projeto = id;
    document.body.classList.add('modal-aberto');
    dlg.showModal();
    dlg.scrollTop = 0;
  }

  document.querySelectorAll('[data-abrir]').forEach((b) =>
    b.addEventListener('click', () => abrir(b.dataset.abrir, b)));

  q('[data-fechar]').addEventListener('click', () => dlg.close());
  // Clique no fundo escuro fecha
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => {
    document.body.classList.remove('modal-aberto');
    if (ultimoGatilho) ultimoGatilho.focus();
  });

  q('[data-modal-orcar]').addEventListener('click', (e) => {
    e.preventDefault();
    const p = PROJETOS[dlg.dataset.projeto];
    ultimoGatilho = null;
    dlg.close();
    if (p) definirTipo(p.tipoOrcamento);
    document.getElementById('orcamento').scrollIntoView();
    document.getElementById('f-tipo').focus({ preventScroll: true });
  });
}
