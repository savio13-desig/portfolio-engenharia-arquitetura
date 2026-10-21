import { iniciarTema } from './modules/tema.js';
import { iniciarMenu } from './modules/menu.js';
import { iniciarComparador } from './modules/comparador.js';
import { iniciarModal } from './modules/modal.js';
import { iniciarOrcamento, montarMensagem, linkWhatsapp } from './modules/orcamento.js';

iniciarTema();
iniciarMenu();
iniciarComparador();
iniciarModal();
iniciarOrcamento();

// CTA geral: abre o WhatsApp com a mensagem-base (sem campos preenchidos)
document.querySelectorAll('[data-whatsapp="geral"]').forEach((a) => {
  a.href = linkWhatsapp(montarMensagem());
  a.target = '_blank';
  a.rel = 'noopener';
});
