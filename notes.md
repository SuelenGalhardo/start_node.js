

SQL (Structured Query Language)- NAO É BANCO DE DADOS- É UMA LINGUAGEM PADRAO PARA BANCO DE DADOS RELACIONAIS- CONSEGUE UTILIZAR O CONHECIMENTO, EM OUTRO BANCO DE DADOS. Mysql- etc.

comandos DDL 
data definition language

CREATE Criar 
DROP- deletar 
ALTER- aterar

Nessa aula aprenderemos a alterar o nome das tabelas, adicionar e deletar colunas do banco de dados.

Alterar nome da tabela:

ALTER TABLE users 
RENAME TO clients
Adicionando coluna status:

ALTER TABLE users 
ADD status VARCHAR
Renomeando coluna status :

ALTER TABLE users 
RENAME COLUMN status to active
Deletando coluna status:

ALTER TABLE users 
DROP COLUMN status

Nessa aula aprenderemos os conceitos dos comandos DDL (Data Definition Language) - INSERT, SELECT, UPDATE E DELETE.


DML (Data Manipulation Language)


CRUD : 
CREAT- READ- UPDATE- DELE

CRUD EN SQL :

CREATE = INSERT- 
READ = SELECT 
UPDATE = UPDATE
DELETE = DELETE 


Manipulando Dados

Nessa aula aprenderemos como inserir, buscar, atualizar e deletar os registros na tabela users

Inserindo dados na tabela users

INSERT INTO users

(name, email, password)

VALUES

('birobirobiro', 'birobirobiro@email.com', '123');

Buscando registros na tabela users:

SELECT * FROM users;

Atualizando registros:

UPDATE users SET

avatar = 'birobirobiro.png'

WHERE id = 1

Deletando registros:

DELETE FROM users 

WHERE id = 3

INSERT INTO users
(name, email, password)

VALUES 
('suelen', 'suelen@.com', '123')



SELECT * FROM users 