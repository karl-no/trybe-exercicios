-- Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
SELECT * FROM faculdade.biblioteca
	ORDER BY quantidade DESC LIMIT 1;