USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE Preco > 15 AND Preco < 40
ORDER BY Preco ASC;