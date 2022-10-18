UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10.00
		WHEN length > 100 THEN 20.00
	END
);
SELECT * FROM sakila.film;