// Comparador antes/depois: o controle de intervalo (teclado e toque) move a linha de corte.
export function iniciarComparador() {
  const raiz = document.querySelector('[data-comparador]');
  if (!raiz) return;
  const quadro = raiz.querySelector('.comparador__quadro');
  const controle = raiz.querySelector('[data-comparador-ctrl]');
  const atualizar = () => {
    const v = Number(controle.value);
    quadro.style.setProperty('--pos', v + '%');
    controle.setAttribute('aria-valuetext', `Antes ${v}%, depois ${100 - v}%`);
  };
  controle.addEventListener('input', atualizar);
  atualizar();

  // Arrastar direto sobre a imagem também funciona
  let arrastando = false;
  const mover = (x) => {
    const r = quadro.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100));
    controle.value = String(Math.round(pct));
    atualizar();
  };
  quadro.addEventListener('pointerdown', (e) => { arrastando = true; quadro.setPointerCapture(e.pointerId); mover(e.clientX); });
  quadro.addEventListener('pointermove', (e) => { if (arrastando) mover(e.clientX); });
  const soltar = () => { arrastando = false; };
  quadro.addEventListener('pointerup', soltar);
  quadro.addEventListener('pointercancel', soltar);
}
