SELECT district, COUNT(address) FROM sakila.address
GROUP BY district
ORDER BY COUNT(address) DESC;
