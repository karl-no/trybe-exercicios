UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20.00;
-- UPDATE sakila.film
-- SET rental_rate = 25
-- WHERE length > 100
-- AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
-- AND replacement_cost > 20;
SELECT COUNT(*) FROM sakila.film
WHERE rental_rate >= 25.00;