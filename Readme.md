# Mini-Proj1

## Instalações realizadas
Instalar *VS Code*

Instalar *Git*
https://git-scm.com/download/win

Instalar *Node.js* versão *Windows* (executar como admin)
https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi

Instalar *http server*
https://stackoverflow.com/questions/27742070/angularjs-error-cross-origin-requests-are-only-supported-for-protocol-schemes
`npm install http-server -g`

## Nota

>Designei o *site* que inicialmente estava definido como "Curriculum Vitae da Rute", como "Cartão de Visita da Rute", por considerar que o resultado final estava num registo mais informal, não tanto como um Curriculum Vitae.

## Descrição do decurso do Mini-Projeto1

### FASE 1 - Planeamento

#### 1º Passo - Objetivo/"Personalidade" do *site*
Refleti sobre as diretrizes gerais do *site* (com base no exemplo do "Firefox OS - Orientações"), pensando na "Personalidade", ambiente do *site*. Sabendo de antemão os temas a abordar, ponderei qual a forma de transmissão do conteúdo pretendido. Decidi que pretendia um CV descontraído e intimista, tendo porém o dilema da privacidade, não pretendendo publicar fotos.

#### 2º Passo - Esboço do *site*
Elaborei primeiro em papel o esboço genérico do *site* (*main page*), evoluindo depois para os componentes de página *Angular*. Esboços finais elaborados em *WireFrame* (*WireframePro*, *MockFlow*, serviço disponível em https://mockflow.com/apps/wireframepro/), apresentados no ficheiro *wireframes.docx* na pasta *doc*. 

Nesta fase, o objetivo foi decidir o desenho conceptual, que define a estrutura e o conteúdo a apresentar nas diversas interfaces, incluindo a navegação do mesmo.

#### 3º Passo - Aspetos visuais
**Cor do Tema**: Com base no objetivo/personalidade do *site* e nos elementos traçados no esboço, pensei de seguida na cor do tema. Gostando de tons de rosa em contraste com o preto, foi realizada a escolha da paleta de cores com recurso ao "*Color picker tool*". Escolhi o preto como cor de fundo da página; o branco para facilitar a leitura do texto dos parágrafos e listas; e dois tons de rosa para dar alma e a tal personalidade ao *site*. Os tons de rosa foram utilizados para os *links*, para os títulos e a frase que antecede cada um dos três tópicos. A escolha de duas cores de rosa foi motivada para poder "brincar" com as mesmas, dando destaque aos referidos elementos, sem exagerar nas cores.

**Imagens**: Ao contrário do sugerido, não recorri às imagens do *Google*, tendo optado por utilizar imagens do *pixabay*, que em termos de pesquisa se revelou mais eficaz para o pretendido. Escolhi três imagens abstratas mas com simbolismo, enquadrado nos tópicos e na escolha das cores, e ainda uma imagem para o *header*. As imagens complementam-se e a intenção é darem uniformidade ao *site*. A escolha das cores foi fundamental, para a escolha das imagens resultarem em termos de construção da identidade do *site*.

**Tipo de Letra**: Utilizei o *Google Fonts*, tal como recomendado, optando pela escolha de duas fontes, que considerei que se encaixassem no *site*. Uma fonte utilizada de forma genérica em todo o *site*, e a segunda fonte para dar destaque à frase/lema de cada tópico.

**Logotipo**: Com base nas sugestões do exemplo da "Firefox OS - Orientações", utilizei o *site* "*Free Logo Design*" (https://pt.freelogodesign.org/) para a criação de um logotipo do *site*.

***Favicon***: Tendo interesse em experimentar a criação e utilização do *favicon*, tive de simplificar o logotipo criado, e converter essa imagen num ícone com a ajuda do *site* *convertico* (https://convertico.com/).

### FASE 2 - Desenvolvimento
Para desenvolvimento baseei-me nas fontes disponibilizadas, assim como nos tutoriais de *HTMl* e *CSS* do *W3Schools*. Além disso, sempre que tive problemas que não conseguia ultrapassar, recorri também pontualmente ao *stackoverflow*, entre outros.

Segui as orientações de criação das pastas sugeridas para projetos de *websites*, nomeadamente, a de *images*  (que contém todas as imagens); a de *styles* (que contém os *css*); a de *scripts* (contém *app.js*); e ainda uma de *pages* (que contém os componentes *Angular*).

Para a edição de código utilizei como ferramenta base o *Visual Studio Code*. Elaborei primeiro todo o *site* numa só página em *HTML* (*index.html*), aplicando seguidamente e compondo as formatações pretendidas com o *CSS*. Terminada essa construção, ainda sem navegação, passei para a implementação da aplicação *SPA*, colocando cada tópico numa página à parte, e adicionando a respetiva navegação.

No entanto, como não planeei nenhuma *homepage* em particular, configurei o componente "Quem eu sou?" como homepage do *site*.

### FASE 3 - Testes
Inicialmente desenvolvi e testei a aplicação localmente sem servidor (ficheiro html, acedido como *file://*). No entanto, para a correta visualização dos botões de identidade virtual (que não eram renderizados corretamente), tive de instalar o *Node.js* e o módulo *http-server*.

Executei a aplicação "CV da Rute" nos *browsers* *Chrome*, *Edge* e *Firefox*.
