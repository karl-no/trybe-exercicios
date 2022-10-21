SELECT
	CONCAT(manager.first_name, ' ', manager.last_name) AS `Ǹome Gerente`,
    COUNT(*) AS `QD de Pessoas Lideradas`
FROM hr.employees AS manager
INNER JOIN hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY manager.employee_id;

SELECT * FROM hr.employees;