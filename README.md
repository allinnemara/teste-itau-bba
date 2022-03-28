## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura de Desenvolvimento](#estrutura-de-desenvolvimento)
- [Começando](#come%C3%A7ando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

## Sobre o Projeto

Esse projeto foi desenvolvido com o objetivo de atender aos requisitos solicitados no teste de seleção Itaú BBA. O projeto possui uma estrututa simples e objetiva, observando padrões e boa prática na escrita do código. A aplicação é responsiva, podendo ser utilizado recursos PWA para uma melhor usabilidade no mobile.

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

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Allinne Mara - [Perfil Gitgub](https://github.com/allinnemara) - **allinne.mara@hotmail.com.br**
