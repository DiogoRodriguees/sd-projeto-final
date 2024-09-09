# Projeto Final de Sistemas Distribuídos
[Descrição]

![Arquitetura](./path-to-architecture.png)

### Índice
- [Servidor](#servidor)
- [Banco de Dados](#banco-de-dados)
- [Cliente](#cliente)
- [Interfaces (?)](#interfaces)

### Autores
- [Chrstofer Daniel Rodrigues Santos](https://www.linkedin.com/in/christoferlv/)
- [Diogo Rodrigues dos Santos](https://www.linkedin.com/in/diogorodriguees/)
- [Gustavo Zanzin Gurreiro Martins](https://linkedin.com/in/gustavo-martinx)

## Servidor
[Descrição]

### Como executar

1 - Instale as dependências do projeto:
```bash
yarn install
```

2 - Execute a aplicação:
```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Banco de Dados

[Descrição]

### Como obter a imagem Docker do Apache Cassandra
```bash
docker pull cassandra:latest
```

### Como criar e executar o container
```bash
docker run --name cassandra -d -p 9042:9042 cassandra
```

### Como reiniciar ou parar um container existente
Para iniciar novamente um container que já existe, execute:
```bash
docker start cassandra
```
Para finalizar a execução do container, execute:
```bash
docker stop cassandra
```

### Como conectar-se ao Cassandra
Se você deseja se conectar ao Cassandra dentro do container e executar comandos CQL (_Cassandra Query Language_), abra um terminal no container com:
```bash
docker exec -it cassandra cqlsh
```
Em seguida, selecione o nome do _keyspace_ e execute os comandos CQL desejados:
```bash
USE <nome_do_keyspace>;
```

## Cliente
[Descrição]

### Como executar

1 - Instale as dependências do projeto:
```bash
```

2 - Execute a aplicação:
```bash
```