-- Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
USE faculdade;
SELECT COUNT(DISTINCT nome) FROM biblioteca;