#Nginx com Proxy Reverso e Node.js

Este projeto é parte de um desafio. Ele demonstra a utilização do Nginx como proxy reverso para uma aplicação Node.js. 
A aplicação Node.js gera nomes completos (nome e sobrenome) de forma dinâmica, insere esses nomes na tabela `users` de um banco de dados MySQL e exibe uma lista desses nomes. 
A cada requisição recebida, um novo nome é gerado aleatoriamente, inserido no banco de dados e a lista atualizada de nomes é exibida.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para implementar a lógica da aplicação.
- **MySQL**: Banco de dados utilizado para armazenar os nomes gerados pela aplicação.
- **Nginx**: Atua como proxy reverso, direcionando as requisições para a aplicação Node.js.
- **Docker**: Utilizado para containerizar e isolar a aplicação e suas dependências.
- **Docker Compose**: Facilita a definição e execução da aplicação Docker multi-container.

## Pré-requisitos

Para rodar este projeto, você precisa ter o Docker e o Docker Compose instalados no seu sistema.

## Executando o Projeto

1. Clone o repositório do projeto:

```bash
git clone https://github.com/unixlira/nginx-node-docker.git
```

Entre no diretório do projeto:
```bash
cd nginx-node-docker
```
Inicie os serviços definidos no docker-compose.yml com o seguinte comando:
```bash
docker-compose up -d
```
Após os serviços estarem em execução, acesse a aplicação através do navegador em:
http://localhost:8080

Você verá uma página HTML com a mensagem "Full Cycle Rocks!" e a lista de nomes completos gerados dinamicamente e salvos na tabela users do banco de dados MySQL.

Estrutura do Projeto
A pasta node/app contém o código fonte da aplicação Node.js.
A pasta nginx contém a configuração do Nginx utilizada para fazer o proxy reverso.
O arquivo docker-compose.yml define os serviços Docker necessários para rodar a aplicação, incluindo o Node.js, Nginx e MySQL.
Contribuição
Sinta-se livre para contribuir com o projeto. Toda contribuição é bem-vinda!

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
