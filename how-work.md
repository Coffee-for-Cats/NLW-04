# ENTIDADES
Entidades são objetos que posso chamar de diversos lugares do código, assim eu mantenho tudo separado porém junto ao mesmo tempo.

# REPOSITORIOS
Eles juntam tudo, então utilizam as classes, as entidades, a coisa toda.

# MIGRATIONS
Estruturas e scripts feitos para serem executados uma vez, adicionando as informações necessárias no banco de dados para funcionar corretamente... Isso evita que o banco de dados fique cheio (repeetindo a adiçao toda vez que o servidor da um run) e permite que nós adicionemos as informações (usando yarn migrations:run) além de permitir que sejam desfeitas (yarn migration:revert) etc. Elas criam as estruturas do banco de dados também.

# APP & ROUTES
Nesses dois arquivos o sistema em sí se comunica mais diretamente com o node.js. Esses são os arquivos executadas primeiramente e buscam informações e classes em todos os outros.
## Como parâmetros de rotas funcionam:

* http://loc[...]/:value/:id/ 
    "value" e "id" são Route Params, eles são extraídos da rota.

* http://loc[...]/?u=uuid
    "u" é um Query Param, eles são opcionais e vem na sequência |chave=valor|. Nesse caso "u" é uma chave, e "uuid" é o valor.

# MODELS
Arquivos que definem diversas:
## Classes
(Aparentemente) Definem regras para um objeto ou estrutura... Depois disso nós criamos essa estrutura/objeto usando "new", com isso temos um objeto.

## Controllers
Controlam o banco de dados e fazem as funções que queremos.
### rotas
    chamam os controllers sempre que uma requisição chega, passando para eles todas as informações que receberam.