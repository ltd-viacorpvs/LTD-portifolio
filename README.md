# Documentação do Projeto LTD - Portfolio

Esta documentação fornece instruções para configurar e executar o projeto Portfolio LTD (Laboratório de Transformação Digital), incluindo a configuração do Contentful como CMS.

## Índice

1. Requisitos
2. Instalação e Configuração
3. Execução com Docker Compose
4. Scripts Disponíveis
5. Estrutura do Contentful
6. Variáveis de Ambiente
7. Estrutura do Projeto
8. Exportando e Importando Modelos do Contentful

## Requisitos

- Node.js (v18.x ou superior recomendado)
- npm ou yarn
- Conta no Contentful (gratuita ou paga)
- Docker e Docker Compose (opcional, para execução via contêiner)

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Portfolio_LTD
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo .env na raiz do projeto (veja a seção Variáveis de Ambiente)

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Execução com Docker Compose

Para facilitar o desenvolvimento e garantir um ambiente consistente, você pode utilizar Docker Compose:

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Portfolio_LTD
   ```

2. Copie o arquivo de exemplo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

3. Configure as variáveis de ambiente no arquivo .env:
   ```
   VITE_CONTENTFUL_SPACE_ID=seu_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=seu_access_token
   VITE_CONTENTFUL_ENVIRONMENT=master
   ```

4. Execute o projeto com Docker Compose:
   ```bash
   docker compose up --build 
   ```

5. Acesse o projeto em `http://localhost:5173`


### Usando a Contentful CLI com Docker

A Contentful CLI já está instalada globalmente para PNPM no contêiner Docker. Para utilizá-la:

1. Acesse o shell do contêiner:
   ```bash
   docker-compose exec frontend zsh
   ```

2. Execute comandos da Contentful CLI:
   ```bash
   contentful login
   ```

3. Para exportar modelos de conteúdo:
   ```bash
   contentful space export --space-id $VITE_CONTENTFUL_SPACE_ID --content-file contentful-export.json --content-only
   ```

4. Para importar modelos de conteúdo:
   ```bash
   contentful space import --space-id $VITE_CONTENTFUL_SPACE_ID --content-file contentful-export.json
   ```

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Cria uma versão de produção do projeto
- `lint`: Executa o linter para verificar erros de código
- `preview`: Visualiza a versão de produção localmente
- `test`: Executa os testes unitários
- `test:watch`: Executa os testes em modo de observação
- `test:coverage`: Executa os testes com relatório de cobertura

## Estrutura do Contentful

### Modelo: Projeto

| Campo | Tipo | Descrição |
|-------|------|-----------|
| title | Texto | Título do projeto |
| slug | Texto | URL amigável (único) |
| excerpt | Texto | Resumo curto do projeto |
| projectDetails | Rich Text | Descrição detalhada do projeto |
| completionDate | Data | Data de conclusão do projeto |
| projectDuration | Texto | Duração do projeto (ex: "3 meses") |
| siteUrl | Texto | URL do site do projeto (opcional) |
| githubUrl | Texto | URL do repositório GitHub (opcional) |
| isHighlighted | Booleano | Se é um projeto destacado |
| technologies | Lista de textos | Lista de tecnologias usadas |
| thumb | Mídia | Imagem de miniatura do projeto |

### Modelo: Post do Blog

| Campo | Tipo | Descrição |
|-------|------|-----------|
| title | Texto | Título do post |
| slug | Texto | URL amigável (único) |
| excerpt | Texto | Resumo do post |
| content | Rich Text | Conteúdo do post |
| category | Texto | Categoria do post |
| readTime | Texto | Tempo estimado de leitura |
| coverImage | Mídia | Imagem de capa do post |
| sections | Lista de referências | Seções do post (opcional) |
| meta.title | Texto | Título para SEO |
| meta.description | Texto | Descrição para SEO |

## Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
VITE_CONTENTFUL_SPACE_ID=seu_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=seu_access_token
VITE_CONTENTFUL_ENVIRONMENT=master
```

Para obter estas credenciais:
1. Faça login no [Contentful](https://app.contentful.com/)
2. Vá para Settings > API keys
3. Crie uma nova API key ou use uma existente
4. Copie o Space ID e o Content Delivery API - access token

## Estrutura do Projeto

```
Portfolio_LTD/
├── public/            # Arquivos estáticos
├── src/
│   ├── assets/        # Imagens e outros recursos
│   ├── components/    # Componentes reutilizáveis
│   ├── hooks/         # Hooks personalizados
│   ├── layouts/       # Layouts da aplicação
│   ├── lib/           # Utilitários e configurações
│   ├── pages/         # Páginas da aplicação
│   ├── services/      # Serviços e APIs
│   ├── utils/         # Funções utilitárias
│   ├── App.tsx        # Componente principal
│   ├── main.tsx       # Ponto de entrada da aplicação
│   └── router.tsx     # Configuração de rotas
├── index.html         # Template HTML principal
├── tsconfig.json      # Configuração do TypeScript
├── vite.config.ts     # Configuração do Vite
├── docker-compose.yml # Configuração do Docker Compose
├── Dockerfile         # Definição da imagem Docker
└── package.json       # Dependências e scripts
```

## Exportando e Importando Modelos do Contentful

### Instalação Local

1. Instale o CLI do Contentful:
   ```bash
   npm install -g contentful-cli
   ```

2. Faça login no CLI:
   ```bash
   contentful login
   ```

### Exportar modelos:

```bash
contentful space export --space-id seu_space_id --content-file contentful-export.json --content-only
```

Adicione o arquivo contentful-export.json ao repositório.

### Importar modelos (para novos desenvolvedores):

1. Crie um novo space no Contentful se necessário
2. Importe os modelos:
   ```bash
   contentful space import --space-id seu_novo_space_id --content-file contentful-export.json
   ```

3. Atualize o .env com o novo space ID e token.

### Usando Contentful CLI com Docker

Como mencionado anteriormente, se estiver usando Docker, a Contentful CLI já está instalada globalmente para PNPM. Você pode executar comandos diretamente no contêiner:

```bash
docker-compose exec app contentful login
docker-compose exec app contentful space export --space-id $VITE_CONTENTFUL_SPACE_ID --content-file contentful-export.json --content-only
```