-- Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
SELECT DISTINCT nome, vendas FROM faculdade.biblioteca
	ORDER BY vendas DESC;