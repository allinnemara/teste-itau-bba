<!-- PROJECT SHIELDS -->
<p>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Html5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Css3" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</p>

<a href="">
  <h1 align="left">Itaú BBA</h1>
</a>

## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura de Desenvolvimento](#estrutura-de-desenvolvimento)
- [Começando](#come%C3%A7ando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Workflow](#workflow)  
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

## Sobre o Projeto

Esse projeto foi desenvolvido com o objetivo de atender aos requisitos solicitados no teste de seleção Itaú BBA. O projeto possui uma estrututa simples e objetiva, observando padrões e boas práticas na escrita do código. A aplicação é responsiva, podendo ser utilizado recursos PWA para uma melhor usabilidade no mobile. Foi utilizado o padrão de nomenclatura camelCase para a criação das classes no css.

### Estrutura de Desenvolvimento

Abaixo segue o que foi utilizado na criação do projeto:

- [Angular CLI](https://www.npmjs.com/package/@angular/cli) - O Angular CLI é uma ferramenta de interface de linha de comando que você usa para inicializar, desenvolver, criar scaffold e manter aplicativos Angular diretamente de um shell de comando;
- [Angular Material](https://material.angular.io/) - Componentes do Material Design para Angular;
- [Angular Router](https://angular.io/guide/router) - Componentes do Angular para rotas;
- [Angular Service Workers](https://angular.io/guide/service-worker-getting-started) - Service Workers Angular;
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - Estrutura mais popular do mundo para a criação de sites responsivos;
- [ngx-mask](https://www.npmjs.com/package/ngx-mask) - Mascaras de inputs;
- [ngx-currency](https://www.npmjs.com/package/ngx-currency) - Mascaras monetárias de inputs;

## Começando

Para instanciar o projeto, siga os passos abaixo.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
teste-itau-bba
├── dist/
├── src/
│   ├── app/
│   │   ├── shared/
│   │   ├── interfaces/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.module.js
│   │   └── app-routing.js
│   └── assets/
│       ├── icons/
│       ├── img/
│       ├── styles/
│       │   ├── base/
│       │   └── abstracts/
│       └── main.scss
└── index.html

```

Serão explicados os arquivos e diretórios na seção de [Workflow](#workflow).

### Instalação

1. Para instalar e utilizar a aplicação o processo é bem simples, basta iniciar o clone do repositório no diretório base escolhido para o desenvolvimento:
```sh
git clone https://github.com/allinnemara/teste-itau-bba.git
"Entre com suas credenciais do repositório."
```

2. Entre no diretório da aplicaçao e execute o NPM.

```sh
cd teste-itau-bba
npm i
```

3. Agora basta executar o micro serviço para ver no browser. https:localhost:4200

```sh
ng serve
```

### Workflow

Nesta seção haverão instruções para editar o template e manter a estrutura principal de módulos explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **dist/** - Diretório publico de arquivos estáticos da aplicação;
- **src/** - 
>- **app/** - Diretório principal de configuração e organização da aplicação;
> >- **services/**  - Serviços utilizados na aplicação;
> > >- **interceptos/** - Interceptors utilizados na aplicação;
> >- **shared/**  - Componentes reutilizáveis ou particionados;
> >- **routes/**  - Cada componente é tratado como um mini aplicativo Angular;
> >- **interfaces/**  - Contém as interfaces utilizadas pela aplicação;
>- **assets/** - Arquivos da aplicação;
> >- **icons/** - Armazena o favicon e ícones relacionados;
> >- **img/** - Imagens e ícones utilizados na aplicação;
> >- **styles/** - Arquivos SCSS (baseado no padrão SMACSS);
> > >- **base/** - Código padrão para o projeto;
> > >- **abstracts/** - Guarda todas as ferramentas e auxiliares de SASS usados por todo o projeto;
> > >- **components/** - Contêm tudo que é necessário para criar o layout do site ou aplicação, com foco nos componentes da aplicação;
> > >- **main.scss** - Arquivo main CSS;
- *index.html* - Arquivo padrão de start da aplicação;

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Allinne Mara - [Linkedln](https://www.linkedin.com/in/allinne-mara/) - **allinne.mara@hotmail.com.br**
