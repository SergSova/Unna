<?php

if ( ! isset($_POST['action']) || $_POST['action'] != 'send_mail') {
    echo json_encode(array('error' => '1'));

    return;
}

$to        = $_POST['to'];
$subject   = $_POST['subject'];
$message   = $_POST['message'];
$name      = $_POST['name'];
$phone     = $_POST['phone'];
$email     = $_POST['mail'];
$page_link = $_POST['page_link'];
if ($page_link) {
    $page_info = $_POST['page_info'];
}


$body = '<html><head><title>' . $subject . '</title> 
    </head> 
    <body> <p><b>Данные отправителя:</b></p><table cellpadding="5">';
if ($name) {
    $body .= '<tr valign="top"><td>Имя:</td><td> ' . $name . '</td></tr>';
}
if ($phone) {
    $body .= '<tr valign="top"><td>Телефон:</td><td> ' . $phone . '</td></tr>';
} else {
//	echo json_encode(array('error'=>'Телефон пустой'));
//	echo json_encode( array( 'error' => '2' ) );
//	return;
}
if ($email) {
    $body .= '<tr valign="top"><td>Email:</td><td>' . $email . '</td></tr>';
}
if ($page_link) {
    $body
        .= '<tr valign="top" colspan="2"><td> </td></tr>
<tr valign="top"><td>Страница:</td><td><a href="' . $page_link . '">'
        . $page_info . '</a></td></tr>';
}
if ($message) {
    $body .= '<tr valign="top"><td>Сообщение:</td><td>' . $message
        . '</td></tr>';
}

$body .= '</table></body></html>';


$additional_headers = "Content-type: text/html; charset=utf-8 \r\n";
$additional_parameters = null;

if ( !mail(
    $to, $subject, $body, $additional_headers, $additional_parameters
)
) {
    echo json_encode(array('error' => '3'));
    return;
} else {
    echo json_encode(array('success' => 'OK'));
    return;
}
