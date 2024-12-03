Site Uniesp 2024

Este site foi desenvolvido com o objetivo de aplicar e aprimorar os conhecimentos adquiridos na disciplina de Front-End Avançado. 
O projeto foca na criação de interfaces modernas e funcionais, seguindo as melhores práticas de desenvolvimento web. 
A principal proposta é proporcionar uma experiência de usuário (UX) otimizada, utilizando tecnologias e ferramentas atuais para garantir um código limpo, eficiente e escalável.

    Navegação dinâmica entre páginas (início, notícias, contato).
    Sistema de gerenciamento de notícias: criação, edição, exclusão e listagem.
    Design responsivo e componentes estilizados.

Tecnologias e Bibliotecas Utilizadas
React

    Estrutura os componentes principais da aplicação (Navbar, formulários, etc.).
    Gerencia estados e efeitos de forma eficiente.

React Router Dom

    Gerencia as rotas e facilita a navegação entre as páginas.

Axios

    Realiza requisições HTTP para comunicação com o backend simulado.
    Opera com o JSON-Server para buscar, cadastrar, editar e excluir dados.

Material-UI (MUI)

    Fornece uma biblioteca de componentes estilizados e acessíveis, como botões, formulários, e menus.

JSON-Server

    Simula um backend RESTful, servindo como banco de dados para as notícias.

Vite

    Utilizado para configurar o ambiente de desenvolvimento.
    Garante builds rápidos e uma experiência otimizada para desenvolvedores.

Como Executar o Projeto

Clone o repositório:

git clone git clone https://github.com/YasminKSouza/Frontend_Avancado.git
cd Frontend_Avancado

Instale as dependências:

npm install

Inicie o JSON-Server:

npm run server

Inicie o projeto:

npm run dev

    Acesse o projeto no navegador em http://localhost:5173.

Estrutura de Pastas:

    src/components: Componentes reutilizáveis da interface.
    src/pages: Páginas do projeto (Início, Notícias, Contato).
    src/services: Configurações e chamadas à API (Axios).
    db.json: Arquivo de dados usado pelo JSON-Server.
