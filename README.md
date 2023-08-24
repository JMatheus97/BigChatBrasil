
# Documentação do projeto

<img src="./src/img/teste.png">

# Premissa:
Diante da necessidade de cumprir um prazo desafiador, desenvolvi uma abordagem simplificada e ágil para criar uma API composta por três classes principais: Cliente, Mensagem e BackOfficeFinanceiro. Cada classe desempenha um papel específico no sistema.

## Classe Cliente:
A classe Cliente serve como o ponto central do sistema, contendo informações cruciais sobre cada cliente, incluindo seu saldo de crédito e limite máximo disponível para transações.

## Classe Mensagem:
A classe Mensagem é responsável pela comunicação com os clientes. Ela inclui o número de telefone do cliente e o texto da mensagem a ser enviada. Além disso, essa classe estabelece um relacionamento One-to-Many com a classe Cliente, permitindo que várias mensagens sejam associadas a um único cliente. Uma flag chamada flagWhatsApp determina se a mensagem será enviada por WhatsApp ou SMS.

## Classe BackOfficeFinanceiro:
O BackOfficeFinanceiro desempenha um papel crucial na gestão financeira dos clientes. Ele possui a responsabilidade de alterar o limite de crédito, adicionar saldo à conta do cliente e também modificar o plano associado ao cliente. Essa abordagem adere ao princípio SOLID, com destaque para o Princípio da Responsabilidade Única, assegurando que o cliente não seja encarregado de realizar essas alterações financeiras.

## Conclusão:
Observando a urgência do prazo de apenas dois dias, optei por uma abordagem simplificada. No entanto, reconheço que o projeto tem potencial para ser mais aprofundado. Em um cenário com mais tempo disponível, haveria espaço para implementar validações mais rigorosas, tratamento de erros aprimorado e a integração de APIs externas. Com essas melhorias, o projeto poderia atender a um nível mais alto de robustez e eficiência, oferecendo uma experiência mais sólida aos usuários e desenvolvedores envolvidos.


# Tecnologias Utilizadas:
No desenvolvimento deste projeto, foram empregadas as seguintes tecnologias:

## NestJS:
 A escolha do framework NestJS proporcionou uma base sólida para a construção da API. Sua arquitetura modular e a facilidade de criação de endpoints foram fatores determinantes na escolha.

## Prisma:
A utilização do Prisma como ORM (Mapeamento Objeto-Relacional) facilitou a interação com o banco de dados PostgreSQL. Isso permitiu uma gestão eficiente das entidades e uma integração mais tranquila com o banco de dados.

## PostgreSQL:
O sistema depende da presença do PostgreSQL instalado na máquina local. A URL de conexão do banco de dados deve ser configurada da seguinte forma: postgresql://usuario:senha@localhost:5432/nomeDoBanco?schema=public.

# Inicialização:

- Certifique-se de ter o PostgreSQL instalado em sua máquina.
- Faça a alteração na URL de conexão para refletir suas credenciais e detalhes de conexão.
- Execute o seguinte comando para instalar as dependências necessárias:

```bash
$ npm install
```
- Crie as tabelas do banco de dados executando o comando a seguir para gerar a migração:
```bash
$ npx prisma migrate dev --name init
```
- Finalmente, inicie a API com o seguinte comando:
```bash
# development
$ npm run start
```

Este conjunto de instruções garante que o projeto seja configurado corretamente e esteja pronto para ser executado, proporcionando uma base sólida para o desenvolvimento e testes futuros.


