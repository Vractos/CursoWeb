select * from estados;

SELECT sigla, nome as 'Nome do Estado' FROM estados
WHERE regiao = 'Centro-Oeste';

SELECT nome, regiao FROM estados
WHERE populacao >= 10
ORDER BY populacao desc;
