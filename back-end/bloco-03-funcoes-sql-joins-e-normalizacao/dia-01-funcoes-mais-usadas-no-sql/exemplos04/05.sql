SELECT first_name, COUNT(*) AS Quantidade FROM sakila.actor
GROUP BY first_name;