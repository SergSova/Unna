<?php

//region set_up filters data
/** @var modX $modx */
$q = $modx->newQuery( 'modTemplateVarResource', array( 'tmplvarid' => 21 ) );
$q->select( 'value' );
$q->prepare();
$q->stmt->execute();
$res = $q->stmt->fetchAll( PDO::FETCH_ASSOC );
$modx->setPlaceholder( 'price-min', min( $res )['value'] / 1000 );
$modx->setPlaceholder( 'price-max', max( $res )['value'] / 1000 );


$q = $modx->newQuery( 'modTemplateVarResource', array( 'tmplvarid' => 20 ) );
$q->select( 'value' );
$q->prepare();
$q->stmt->execute();
$res = $q->stmt->fetchAll( PDO::FETCH_ASSOC );
$modx->setPlaceholder( 'area-min', (int) min( $res )['value'] );
$modx->setPlaceholder( 'area-max', (int) max( $res )['value'] );
//endregion
