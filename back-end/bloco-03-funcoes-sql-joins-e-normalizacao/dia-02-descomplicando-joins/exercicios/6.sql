USE pixar;

SELECT
	m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id,
    b.rating
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
WHERE m.theater_id IS NOT null AND b.rating > 8;
