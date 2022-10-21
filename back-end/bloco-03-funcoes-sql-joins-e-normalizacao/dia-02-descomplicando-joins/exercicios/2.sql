SELECT m.title, (b.international_sales + b.domestic_sales) AS Vendas
	FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;