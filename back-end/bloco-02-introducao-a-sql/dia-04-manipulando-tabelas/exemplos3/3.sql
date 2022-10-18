USE sakila;
DELETE FROM film_text
WHERE description LIKE '%saga%';

SELECT * FROM film_text;