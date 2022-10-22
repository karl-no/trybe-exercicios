SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS `Tempo na empresa` FROM hr.employees;
