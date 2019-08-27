<?php

$recepient = "nnoarmy@yandex.ru";
$sitename = "Неармия";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка на сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>