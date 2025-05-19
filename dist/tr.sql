
delimiter $$

drop trigger if exists after_insert_lines$$
create trigger after_insert_lines
after insert on hopi_hari_db.`lines`
for each row
begin
  declare wait_time int default 0;
  declare line_count int default 0;
  declare total_wait int default 0;

  -- Ensure wait_time is retrieved correctly
  select tempo_espera into wait_time
  from atracoes
  where id = new.id_ride;

  -- Ensure line_count is calculated correctly
  select count(id_user) into line_count
  from hopi_hari_db.`lines`
  where id_ride = new.id_ride;

  -- Calculate total_wait
  set total_wait = ifnull(wait_time, 0) * ifnull(line_count, 0);

  -- Insert into notifications with a valid description
  insert into notifications (descripition, atracoes_id, users_id, status)
  values (
    CONCAT(total_wait, " minutos de espera para o brinquedo"),
    new.id_ride,
    new.id_user,
    true
  );
end$$

delimiter ;