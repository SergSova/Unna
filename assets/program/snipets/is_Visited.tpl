<?php
//unset($_COOKIE[['visit']]);
if ( ! isset( $_COOKIE['visit'] ) || $_COOKIE['visit'] != '1' ) {
	setcookie( 'visit', '1', time() + 3600 );
	$modx->setPlaceholder( 'visit', '0' );
	return;
}
$modx->setPlaceholder( 'visit', '1' );