<?php
/* ф-я подсчитывает пользователей на линии; возвращает кол-во пользователей в
отформатированном виде, т.е. для вывода результата нужно лишь прописать в
нужном месте типа: echo on_line(); */
function on_line() {
	$host    = "jenshen.mysql.ukraine.com.ua"; // хост, где расположена база данных MySql
	$db_name = "jenshen_19j2land"; // имя базы данных; как правило совпадает с именем юзера
	// (переменная ниже), хотя я категорически против одинаковых
	// имен, ориентируясь на защиту...
	$db_user     = "jenshen_19j2land"; // пользователь, которому разрешен доступ к базе
	$db_password = "9kvrzlad"; // пароль пользователя
	$wine        = 300; // точность он-лайн (секунды); время, в течении которого
	// пользователя, зашедшего на страничку, мы считаем находящимся
	// на сайте
	$table_online = "online"; // имя таблицы
// делаем доступной глобальную переменную ИП-адреса
	global $REMOTE_ADDR;
	$REMOTE_ADDR = $_SERVER['REMOTE_ADDR'];
	// соединяемся с сервером MySQL и выбираем нужную базу
	mysql_connect( $host, $db_user, $db_password ) or die( mysql_error() );
	mysql_select_db( $db_name ) or die( mysql_error() );

	// удаляем всех, кто уже пробыл $wine секунд или у кого ИП текущий
	$sql_update = "DELETE FROM $table_online WHERE `unix`+$wine < " . time() .
	              " OR `ip` = '$REMOTE_ADDR'";
	$result_update = mysql_query( $sql_update ) or die( mysql_error() );

	// вставляем свою запись
	$sql_insert = "INSERT INTO $table_online VALUES ('','$REMOTE_ADDR','" . time() . "')";
	$result_insert = mysql_query( $sql_insert ) or die( mysql_error() );

	// считаем уников он-лайн
	$sql_sel = "SELECT `id` FROM $table_online";
	$result_sel = mysql_query( $sql_sel ) or die( mysql_error() );

	$online_people = mysql_num_rows( $result_sel ); // кол-во On-Line пользователей

	$online_people = (string) $online_people; // приводим к строковому типу
	// (так надо.. см. дальше)
	return $online_people;
	/*$rain = strlen( $online_people ) - 1; // номер последнего символа в числе
	// on-line юзеров

// форматирование вывода (я все сделал за вас =)
	if ( $online_people[ $rain ] == 2 || $online_people[ $rain ] == 3
	     || $online_people[ $rain ] == 4
	     || ( strlen( $online_people ) != 1 && $online_people[ strlen( $online_people ) - 2 ] != 1 )
	) // $line - переменная, определяющая формат вывода
	{
		$line = "человека";
	} else {
		$line = "человек";
	}

// возвращаем результат
	return "На сайте <strong>" . $online_people . "</strong>$line";*/
}