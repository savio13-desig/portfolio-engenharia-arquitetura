// Formulário de orçamento: valida, monta a mensagem e abre o WhatsApp.
import { CONFIG } from './dados.js';

const campos = () => ({
  tipo: document.getElementById('f-tipo'),
  bairro: document.getElementById('f-bairro'),
  prazo: document.getElementById('f-prazo'),
  nome: document.getElementById('f-nome')
});

export function montarMensagem({ tipo, bairro, prazo, nome } = {}) {
  const saudacao = nome ? `Olá, aqui é ${nome}.` : 'Olá!';
  const linhas = [`${saudacao} Quero um orçamento com a ${CONFIG.empresa}.`];
  if (tipo) linhas.push(`Tipo de obra: ${tipo}`);
  if (bairro) linhas.push(`Bairro ou cidade: ${bairro}`);
  if (prazo) linhas.push(`Prazo para começar: ${prazo}`);
  linhas.push('(Mensagem gerada pelo site de demonstração)');
  return linhas.join('\n');
}

export function linkWhatsapp(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export function definirTipo(valor) {
  const { tipo } = campos();
  if (!tipo) return;
  tipo.value = valor;
  tipo.dispatchEvent(new Event('input', { bubbles: true }));
}

function valores() {
  const c = campos();
  return { tipo: c.tipo.value.trim(), bairro: c.bairro.value.trim(), prazo: c.prazo.value.trim(), nome: c.nome.value.trim() };
}

function mostrarErro(campo, mensagem) {
  const aviso = document.getElementById(campo.id + '-erro');
  if (!aviso) return;
  if (mensagem) {
    aviso.textContent = mensagem;
    aviso.hidden = false;
    campo.setAttribute('aria-invalid', 'true');
  } else {
    aviso.textContent = '';
    aviso.hidden = true;
    campo.removeAttribute('aria-invalid');
  }
}

export function validar(v) {
  const e = {};
  if (!v.tipo) e.tipo = 'Escolha o tipo de obra.';
  if (!v.bairro) e.bairro = 'Informe o bairro ou a cidade da obra.';
  else if (v.bairro.length < 3) e.bairro = 'Escreva pelo menos 3 letras.';
  if (!v.prazo) e.prazo = 'Escolha o prazo desejado.';
  return e;
}

export function iniciarOrcamento() {
  const form = document.querySelector('[data-orcamento]');
  if (!form) return;
  const previa = form.querySelector('[data-previa]');
  const status = form.querySelector('[data-status]');
  const c = campos();

  const atualizarPrevia = () => { previa.textContent = montarMensagem(valores()); };
  form.addEventListener('input', (ev) => {
    atualizarPrevia();
    const alvo = ev.target;
    if (alvo && alvo.getAttribute && alvo.getAttribute('aria-invalid') === 'true') {
      mostrarErro(alvo, validar(valores())[alvo.name]);
    }
  });
  atualizarPrevia();

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const v = valores();
    const e = validar(v);
    ['tipo', 'bairro', 'prazo'].forEach((k) => mostrarErro(c[k], e[k]));
    const primeiro = ['tipo', 'bairro', 'prazo'].find((k) => e[k]);
    if (primeiro) {
      status.textContent = 'Revise os campos indicados.';
      c[primeiro].focus();
      return;
    }
    status.textContent = 'Abrindo o WhatsApp com a mensagem pronta.';
    window.open(linkWhatsapp(montarMensagem(v)), '_blank', 'noopener');
  });
}
