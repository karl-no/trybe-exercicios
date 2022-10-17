-- Quero os livros mais recentes primeiro, e também em ordem alfabética;
SELECT * FROM faculdade.biblioteca
	ORDER BY ano_lancamento ASC, nome ASC;