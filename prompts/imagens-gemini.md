# Origem das imagens

Todas as fotos do site são **imagens ilustrativas geradas por IA** no Google Gemini (conta do Savio, modelo "Flash"), em 21/10/2026.
Nenhuma mostra uma obra real. Em um site de cliente, entram as fotos das obras do próprio escritório.

Os arquivos originais ficam em `originais/` (fora do Git); o site usa as versões em WebP de `imagens/`.

| Arquivo | Uso | Original | Prompt (resumo, enviado em português com o texto técnico em inglês) |
|---|---|---|---|
| `casa-olivo` | Hero e projeto 01 | 1376×768 | Fachada de casa contemporânea de dois pavimentos, concreto aparente, ipê, vidro com esquadria preta, uma oliveira, jardim de cascalho, luz de fim de tarde, lente 24 mm tilt-shift, sem pessoas nem texto |
| `sala-depois` | Projeto 02 e comparador | 1264×848 | Sala de apartamento reformado, janela larga à esquerda com cortina de linho, piso de carvalho em espinha de peixe, estante embutida de carvalho, sofá cor areia, mesa de travertino, sem pessoas |
| `sala-antes` | Comparador | 1264×848 | Mesmo cômodo, mesmo ângulo e mesma janela, antes da reforma: taco escuro, paredes manchadas, cortina pesada, sofá de couro, estante de MDF, luz fluorescente. Gerado na mesma conversa da imagem "depois" para manter a geometria |
| `cozinha` | Projeto 03 | 1264×848 | Cozinha com ilha em marcenaria ripada verde-escura, puxadores de latão, tampo de quartzito, prateleiras de carvalho, revestimento artesanal claro, limões |
| `escritorio` | Projeto 04 | 1264×848 | Andar corporativo em planta aberta, mesas longas de carvalho, sala de reunião em vidro e aço preto, forro de concreto com iluminação linear, painéis acústicos cor de terracota |
| `casa-campo` | Projeto 05 | 2528×1696 | Casa térrea de tijolo caiado em Atibaia, telhado cerâmico escuro, varanda funda de madeira, piso de pedra, jardim nativo e eucaliptos, luz nublada de manhã |
| `galpao` | Projeto 06 | 1264×848 | Galpão de tijolo aparente convertido em estúdio, esquadrias de aço preto, porta pivotante alta, sheds de vidro, mezanino de madeira, hora azul, rua de paralelepípedo molhado |

Ajuste: cada imagem saiu na primeira rodada, sem retoques; o par antes/depois usou duas mensagens na mesma conversa.

## Tratamento
`magick` (ImageMagick) com `-strip`: WebP com perdas, qualidade 78 a 82, larguras de 600, 800 (só hero), 1200 e 1376 (só hero).
