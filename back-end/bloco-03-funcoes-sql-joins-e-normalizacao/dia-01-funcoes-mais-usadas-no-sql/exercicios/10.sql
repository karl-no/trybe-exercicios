SELECT department_id, AVG(salary), COUNT(*) AS numero_funcionarios FROM hr.employees
GROUP BY department_id
HAVING numero_funcionarios > 10;