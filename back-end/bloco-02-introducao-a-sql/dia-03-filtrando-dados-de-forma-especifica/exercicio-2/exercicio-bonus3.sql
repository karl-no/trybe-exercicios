USE Scientists;
SELECT CODE, Name FROM Projects
WHERE Code Like '%3%'
ORDER BY Name ASC;