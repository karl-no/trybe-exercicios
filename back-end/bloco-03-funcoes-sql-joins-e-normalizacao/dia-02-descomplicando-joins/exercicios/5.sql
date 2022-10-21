USE pixar;

SELECT
	t.id,
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
	FROM theater AS t
RIGHT JOIN movies AS m
ON m.theater_id = t.id
ORDER BY t.name ASC;