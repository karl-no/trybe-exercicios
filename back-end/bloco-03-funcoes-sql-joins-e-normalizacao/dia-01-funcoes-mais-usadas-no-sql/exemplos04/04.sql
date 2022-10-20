-- Como eu fiz:
SELECT * FROM sakila.film;
SELECT AVG(length) AS `Média de Duração` FROM sakila.film;
SELECT MIN(length) AS `Duração Mínima` FROM sakila.film;
SELECT MAX(length) AS `Duração Máxima` FROM sakila.film;
SELECT SUM(length) AS `Tempo de Exibição Total` FROM sakila.film;
SELECT COUNT(length) AS `Filmes Registrados` FROM sakila.film;

-- Uma maneira melhor de apresentar:
SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;