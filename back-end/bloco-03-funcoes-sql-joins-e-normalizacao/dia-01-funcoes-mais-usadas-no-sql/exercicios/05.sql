SELECT MAX(salary) AS maior_salario,
	MIN(salary) AS menor_salario,
    SUM(salary) AS soma_salarios,
    ROUND(AVG(salary), 2) AS media_salarios
FROM hr.employees;