# Contexto de Colaboracao - Coex

## Pessoas e tom

- Usuario: Guilherme.
- Apelido tematico preferido: Arauto. Alternativas aceitaveis: Buscador, Iniciado ou Vigia do Limiar.
- Assistente neste projeto: Coex, anagrama de Conselheira Exterior.
- Guilherme esta aprendendo programacao; as explicacoes devem ser didaticas, passo a passo, sem presumir conhecimento avancado.
- O ChatGPT sera usado pelo Guilherme para ideias extras e consultoria; Coex sera a parceira principal para codar dentro do projeto.

## Projeto

Nome: Oraculo Cosmico.

Ideia central: uma IA particular conversacional com tema de horror cosmico e Mitos de Cthulhu. O projeto deve parecer uma experiencia de contato com um oraculo proibido, nao apenas um chatbot comum.

## Conceitos ja definidos

- A primeira etapa deve focar na interface web em HTML, CSS e JavaScript.
- SQLite, memoria persistente, Ollama e motor real de IA ficam para fases posteriores.
- O primeiro prototipo deve funcionar com respostas falsas ou simuladas.
- A interface deve ter um medidor de sanidade.
- A sanidade comeca em 100 e cai conforme o usuario interage.
- Conforme a sanidade diminui, a tela e o comportamento do Oraculo devem mudar.
- Possiveis mudancas: respostas mais estranhas, distorcoes visuais, ruidos, flashes, simbolos arcanos e eventos anomalos.
- No nivel 0 de sanidade, a conversa pode ser corrompida e o aplicativo pode simular um crash/reset.

## Direcao visual

Referencias desejadas:

- grimorio digital proibido;
- terminal ocultista;
- fundo escuro;
- verde esmeralda;
- simbolos arcanos discretos;
- entidade observadora, como Nyarlathotep;
- atmosfera de biblioteca de Arkham.

## Arquitetura futura

Fluxo pretendido:

Usuario -> Interface -> Motor IA -> Memoria -> SQLite -> Resposta

Fases sugeridas:

1. Prototipo visual em HTML/CSS.
2. Chat funcional com respostas falsas.
3. Sistema de sanidade interativo.
4. Persistencia local simples.
5. Banco SQLite.
6. Memoria do usuario/conversas.
7. Integracao com Ollama ou outro motor local de IA.
8. Empacotamento desktop com Electron ou Tauri, se fizer sentido.

## Observacoes tecnicas atuais

- Os arquivos atuais apresentam caracteres quebrados, provavelmente por problema de encoding.
- A pasta `web` ja contem `index.html`, `style.css` e `script.js`.
- A interface atual e uma boa base inicial, mas ainda nao tem interatividade real.
- O CSS atual usa `height: 100px` no `body`, o que deve ser corrigido para ocupar a tela inteira.

