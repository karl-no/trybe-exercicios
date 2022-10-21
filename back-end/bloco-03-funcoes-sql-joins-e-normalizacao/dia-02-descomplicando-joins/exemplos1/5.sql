SELECT c.first_name, COUNT(a.address) AS `quantidade de endereços`
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;
