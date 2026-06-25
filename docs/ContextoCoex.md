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

Em caso de alteração de sanidade 
- grimorio digital proibido;
- terminal ocultista;
- fundo escuro;
- verde esmeralda;
Em caso de sanidade padrao
- simbolos arcanos discretos;
- entidade observadora, como Nyarlathotep;
- atmosfera de faculdade de Arkham.
- cores verde e dourada

## Arquitetura futura

Fluxo pretendido:

Usuario -> Interface -> Motor IA -> Memoria -> SQLite -> Resposta

Fases sugeridas:

1. Prototipo visual em HTML/CSS/JavaScript.
2. Chat funcional com respostas falsas.
3. Sistema de sanidade interativo.
4. Persistencia local simples.
5. Banco SQLite.
6. Memoria do usuario/conversas.
7. Integracao com Ollama ou outro motor local de IA.
8. Empacotamento desktop com Electron ou Tauri, se fizer sentido.

## Observacoes tecnicas atuais

- A fase atual temos um site parcialmente interativo com teste de navegação em duas abas Consulta/Arquivos.
- Temos mais personalidade com fades na side bar 
- Iniciando a inserção de arquivos .md na aba Arquivos Vazados. E criação de toda estrutura de wiki.

## Progresso registrado em 2026-06-05

- A interface web foi redesenhada com direcao visual de uma biblioteca/faculdade de Arkham moderna.
- O estilo escolhido deve parecer academico, confiavel e institucional, sem horror explicito de primeira vista.
- A navegacao superior usa: Acervo, Pesquisa, Oraculo e Anotacoes.
- A tela atual tem hero institucional, menu lateral, painel de chat, status da sessao e indicador de bem-estar cognitivo.
- O chat ja funciona com JavaScript: o usuario digita, envia com botao ou Enter, e o Oraculo responde com mensagens simuladas.
- O sistema de sanidade ja esta interativo.
- A sanidade comeca em 100 e decai aleatoriamente entre 1 e 10 por interacao.
- As faixas implementadas sao:
  - 100-75: stable
  - 74-50: strange
  - 49-25: anomalous
  - 24-1: critical
  - 0: apex
- O estado `apex` representa o apice da interacao entre humano e ser exterior supremo.
- O painel de chat deve ter rolagem interna para manter o indicador de sanidade visivel.
- Guilherme fez os commits no GitHub por conta propria para praticar Git.

## Proximo passo sugerido

Refinar a experiencia do chat e da sanidade antes de integrar qualquer IA real:

1. Garantir que a rolagem interna do chat esteja confortavel.
2. Melhorar a exibicao da perda de sanidade por interacao.
3. Trocar o texto "Bem-estar cognitivo" ou manter como nome discreto para sanidade, dependendo do tom desejado.
4. Criar pequenas variacoes visuais por estado de sanidade sem deixar a interface caricata.
5. Depois disso, pensar em memoria local simples ou respostas simuladas mais inteligentes.

## Progresso registrado em 22-06-2026

A interação de chat e usuário memso que falsa esta ocorrendo perfeitamente, gerando respostas genéricas prontas mas se corelacionando com o nivel de sanidade e seus parâmetros, ou seja , quanto menor a sanidade respostas mais "bizarras" são dadas 

Criação de interações diferentes dependendo de palavras chaves com as intidades, a primeira utilizada foi nyarlathotep, foram atribuidos dialogos ocultos caso a pessoa tenha conhecimento sobre a entidade assim fazendo com que o chat interaja de forma diferente, junto com isso foram atribuidos caracteristicas imutaveis a personalidade da entidade.

Realizada atribuições diferentes para os botões de indice na side bar do site. As atribuições até o momento foram:
- Consulta ao Oráculo	(Conversar atraves de Chat)
- Arquivos Vazados	(Aprender através de Wiki )
- Diário	(Registrar através de Bloco de notas)
- Casos Abertos	(Progredir através de quests estipuladas ou investigações em aberto)

Estrutura pretendida para a criação da wiki 
SQLite = índice e busca
Markdown = conteúdo dos artigos
Node.js = leitura dos arquivos
HTML/CSS = exibição

## Progresso registrado em 25-06-2026

Interação da side bar entre consulta e arquivos vazados esta ok, o chat consegue guardar as conversas mesmo quando realiza a troca de abas isso acontece pq o html esta carregando todas as logicas no backend e apenas carrega o visual durante o click para navegação das abas.
Junto com isso sigo na implementação da wiki interativa na aba arquivos vazados atraves de consulta de arquivos salvos em .md na pasta wiki
O chat me recomendou a seguinte interatividade para a ligação com a lore tematica

Fase 1
Categorias
Arquivos .md
Carregamento manual

Fase 2
Busca por palavras-chave
Filtros

Fase 3
Arquivos bloqueados
Sistema de sanidade

Fase 4
Nyarlathotep referenciando documentos da wiki durante conversas
Um exemplo seria o pesquisador perguntar.
"Quem é Hastur?"
E a IA responder:
"Consulte o Arquivo M-UA-041. Seu nível de autorização é suficiente."
A tendencia seria conforme a sanidade do pesquisador ou como ele conversar com o chat ele teria pistas sobre os arquivos ocultos e vazados.
