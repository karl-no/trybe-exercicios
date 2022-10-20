SELECT AVG(rental_duration), rating FROM sakila.film
GROUP BY rating
ORDER BY rating DESC;