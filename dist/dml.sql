Usuarios
insert into users (first_name, last_name, email, password, birth_date, phone)
values ("Luiz", "Barbosa", "lubarbosa@gmail.com", "$2b$10$HmO2jFiBWOXpjXM6OyCUb.N.Gb4BeQJEJZvXEcf8nMlY5UPLvrqbu", "1910-10-10", "14 995875147");

insert into users (first_name, last_name, email, password, birth_date, phone)
values ("Felipe", "Barbosa", "febarbosa@gmail.com", "$2b$10$MOrHGUoL/lIZGwJQeBxQ2OMiS.ni2pFHGUkUeAi1/5x/RcJXavQUy", "1908-08-08", "14 978794325");

insert into users (first_name, last_name, email, password, birth_date, phone)
values ("Leonardo", "Barbosa", "lebarbosa@gmail.com", "$2b$10$xSwY2hKdH7Tj2fglbNhHduokQRQEuJ6EVaEG97ZZ1L7uTfeTBJHp6", "1922-02-22", "14 987693546");

Rides
insert into atracoes (nome, tempo_espera, status, area)
values ("Montanha russa", "5 min", "Disponivel", "A");

insert into atracoes (nome, tempo_espera, status, area)
values ("Roda Gigante", 15, "Indiponivel", "B");

insert into atracoes (nome, tempo_espera, status, area)
values ("Carriho Bate-Bate", 60 , "Disponivel", "C");

Filas
insert into  `lines` (id_user, id_ride)
values (11, 22)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Query que lista por Brinquedo 

SELECT * FROM users;
select * from  atracoes;
SELECT * FROM `lines`;

SELECT 
    users.first_name AS name,
    `lines`.id_ride,
    `lines`.id_user,
    atracoes.nome AS name_brinquedo,
    atracoes.area
FROM
    `lines`
        INNER JOIN
    users ON users.id = `lines`.id_ride
        INNER JOIN
    atracoes ON atracoes.id = `lines`.id_user



