# Serverless + Express + DynamoDB usando SOLID 
## Aplicação para Captura de Lead
Aplicação Express adaptada a microsserviços Serverless para captura de dados de Landing Pages.

O intuito da aplicação não só foi atender as necessidades do cliente, mas também aprofundar os estudos em princípios SOLID, Arquitetura Serverless, Microsserviços e ferramentas da AWS tais como: API Gateway, DynamoDB e Lambdas.

### Requisitos funcionais
- O usuário deve conseguir salvar suas informações

### Regras de Negócio
- O usuário precisa especificar Nome, Email, Telefone e Estado para salvar suas informações

### Requisitos não-funcionais
- Os dados da aplicação devem ser persistidos um banco DynamoDB
- A aplicação deve se manter disponível através da Lambda (AWS)
- A aplicação deve ter um nome de domínio personalizado usando API Gateway + Lambdas

## Instalação:
```sh
 $ npm install
```
ou:
```sh
 $ yarn install
```

## Desenvolvimento:

Iniciar aplicação local com Express:
```sh
 $ npm run dev:express
```

Iniciar aplicação local com Serverless:
```sh
 $ npm run dev:serverless
```

### Deploy

### 1 - Instalar aws cli
Para seguir com o deploy, você precisará da ferramenta AWS Command Line Interface, que será responsável por disponibilizar nossa aplicação no serviço de Lambdas da AWS. Download disponível na documentação: https://aws.amazon.com/pt/cli/

### 2 - Configurar AWS CLI
Execute o comando a seguir e coloque as chaves do usuário IAM de acordo com o solicitado
```sh
 $ aws configure
```

### 3 - Deploy da aplicação 🚀
Por fim, execute:
```sh
 $ yarn deploy
```
ou
```sh
 $ serverless deploy
```