// Dados da demonstração. Tudo aqui é fictício.
export const CONFIG = {
  // Número de espaço reservado (demonstração). Em produção, trocar pelo WhatsApp do escritório.
  whatsapp: '5511900000000',
  empresa: 'Tijolo & Cal'
};

const IMG = '../imagens/';

export const PROJETOS = {
  'casa-olivo': {
    titulo: 'Casa Olivo',
    tipo: 'Casa nova',
    tipoOrcamento: 'Casa nova',
    img: IMG + 'casa-olivo-1200.webp',
    alt: 'Casa Olivo: fachada em concreto aparente e ipê, com oliveira no jardim de cascalho, ao entardecer',
    resumo: 'Residência de dois pavimentos em concreto aparente e ipê, organizada em torno de um jardim de cascalho e de uma oliveira.',
    area: '285 m²',
    prazo: '14 meses',
    local: 'Cidade Jardim, São Paulo',
    escopo: ['Projeto de arquitetura e estrutura', 'Fundação e estrutura em concreto aparente', 'Esquadrias de aço e vidro', 'Paisagismo e iluminação externa']
  },
  'apartamento-pinheiros': {
    titulo: 'Apartamento Pinheiros',
    tipo: 'Reforma completa',
    tipoOrcamento: 'Reforma de apartamento',
    img: IMG + 'sala-depois-1200.webp',
    alt: 'Sala reformada com piso de espinha de peixe, estante de carvalho embutida e sofá em tom areia',
    resumo: 'Apartamento de 1994 refeito do piso ao forro, com planta aberta, marcenaria embutida e luz natural contínua na sala.',
    area: '112 m²',
    prazo: '5 meses',
    local: 'Pinheiros, São Paulo',
    escopo: ['Demolição seletiva e novo layout', 'Piso de carvalho em espinha de peixe', 'Elétrica e iluminação novas', 'Marcenaria sob medida na sala e nos quartos']
  },
  'cozinha-verde': {
    titulo: 'Cozinha Verde',
    tipo: 'Interiores',
    tipoOrcamento: 'Interiores e marcenaria',
    img: IMG + 'cozinha-1200.webp',
    alt: 'Cozinha com ilha em marcenaria ripada verde, tampo de quartzito branco e prateleiras de carvalho',
    resumo: 'Cozinha integrada à sala, com ilha em marcenaria ripada que reúne preparo, apoio e convivência.',
    area: '38 m²',
    prazo: '10 semanas',
    local: 'Perdizes, São Paulo',
    escopo: ['Projeto de interiores e marcenaria', 'Ilha com tampo de quartzito', 'Revestimento artesanal na parede', 'Iluminação cênica e pontos de apoio']
  },
  'escritorio-vila-olimpia': {
    titulo: 'Escritório Vila Olímpia',
    tipo: 'Corporativo',
    tipoOrcamento: 'Escritório ou loja',
    img: IMG + 'escritorio-1200.webp',
    alt: 'Planta aberta de escritório com mesas longas de carvalho, sala de reunião em vidro e painéis acústicos cor de terracota',
    resumo: 'Andar corporativo em planta aberta, com sala de reunião envidraçada e tratamento acústico. A obra foi faseada em quatro blocos.',
    area: '460 m²',
    prazo: '4 meses',
    local: 'Vila Olímpia, São Paulo',
    escopo: ['Layout e projeto executivo', 'Forro, iluminação linear e climatização', 'Divisórias de vidro e esquadria de aço', 'Painéis acústicos e mobiliário sob medida']
  },
  'casa-atibaia': {
    titulo: 'Casa Atibaia',
    tipo: 'Casa de campo',
    tipoOrcamento: 'Casa nova',
    img: IMG + 'casa-campo-1200.webp',
    alt: 'Casa térrea de tijolo pintado de branco com varanda de madeira e telhado cerâmico, cercada por eucaliptos',
    resumo: 'Casa térrea de tijolo caiado, com telhado cerâmico e varanda funda voltada para o vale. O projeto responde ao clima e à topografia da serra.',
    area: '190 m²',
    prazo: '10 meses',
    local: 'Atibaia, SP',
    escopo: ['Projeto de arquitetura e paisagismo', 'Terraplenagem e drenagem', 'Estrutura de madeira da varanda', 'Piso de pedra e acabamentos rústicos']
  },
  'galpao-mooca': {
    titulo: 'Galpão Mooca',
    tipo: 'Retrofit',
    tipoOrcamento: 'Retrofit de imóvel antigo',
    img: IMG + 'galpao-1200.webp',
    alt: 'Galpão de tijolo aparente convertido em estúdio, com esquadrias de aço preto e sheds de vidro, ao anoitecer',
    resumo: 'Galpão industrial convertido em estúdio. A fachada de tijolo foi preservada; o interior ganhou mezanino de madeira e sheds envidraçados.',
    area: '320 m²',
    prazo: '8 meses',
    local: 'Mooca, São Paulo',
    escopo: ['Laudo e recuperação da alvenaria', 'Reforço estrutural e mezanino', 'Novas esquadrias de aço', 'Instalações prediais completas']
  }
};
