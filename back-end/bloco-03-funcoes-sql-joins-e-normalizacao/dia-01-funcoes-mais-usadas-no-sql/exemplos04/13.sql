SELECT rating, AVG(length) AS `average_running_time` FROM sakila.film
GROUP BY rating
HAVING average_running_time BETWEEN 115.0 AND 121.50
ORDER BY average_running_time DESC;