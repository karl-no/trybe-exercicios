-- Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro ‘Um livro do Ano’
	-- e ‘Novas conquistas novas responsabilidades’;
SELECT nome FROM faculdade.biblioteca LIMIT 2 OFFSET 1;