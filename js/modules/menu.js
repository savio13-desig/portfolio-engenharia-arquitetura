// Menu recolhível em telas pequenas e link "Pular para o conteúdo".
export function iniciarMenu() {
  const botao = document.querySelector('[data-menu-botao]');
  const menu = document.getElementById('menu');
  if (botao && menu) {
    const fechar = () => { menu.classList.remove('aberto'); botao.setAttribute('aria-expanded', 'false'); };
    botao.addEventListener('click', () => {
      const aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', String(aberto));
    });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) fechar(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('aberto')) { fechar(); botao.focus(); }
    });
  }

  const pular = document.querySelector('[data-pular]');
  const principal = document.getElementById('conteudo');
  if (pular && principal) {
    pular.addEventListener('click', (e) => {
      e.preventDefault();
      principal.focus({ preventScroll: true });
      principal.scrollIntoView();
    });
  }
}
