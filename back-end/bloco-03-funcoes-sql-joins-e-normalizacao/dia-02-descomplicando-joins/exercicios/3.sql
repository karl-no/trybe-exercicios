USE pixar;
SELECT m.title, b.rating FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;