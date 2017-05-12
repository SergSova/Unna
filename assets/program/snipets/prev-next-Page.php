<?php
/**
 * @var $modx modX
 * @var $resources modResource
 * @var $objects modResource[]
 */

$detect = new Mobile_Detect();
$p404   = $modx->config['error_page'];
$chank  = $modx->getOption( 'tpl', $scriptProperties, 'prev-next-Page-tpl' );

if ( $docid ) {
	$resource = $modx->getObject( 'modResource', $docid );
	$curent   = $resource;
} else {
	$curent = $modx->resource;
}
if ( ! $chank ) {
	return null;
}
$q = $modx->newQuery(
	'modResource', array(
		'parent'      => 0,
		'published'   => 1,
		'id:<>'       => $modx->config['site_start'],
		'context_key' => $modx->context->key
	)
);
$q->sortby( 'menuindex', 'ASC' );


$objects = $modx->getCollection( 'modResource', $q );


/*foreach ( $objects as $object ) {
	var_dump($object->id);
}
die();*/
$index = 0;
$flag  = false;
$size  = count( $objects ) - 1;

$count = 0;
$modx->setPlaceholder( '_first', 0 );
$modx->setPlaceholder( '_last', 0 );


foreach ( $objects as $res ) {
	if ( $res->id == $curent->parent || $res->id == $curent->id ) {
		//prev Page
		if ( $index == 0 ) {
			$modx->setPlaceholder( '_first', 1 );
			$index = 27;
//			continue;
		}
//		$index = $index != 0 ? $index;

		$prev = $modx->getObject( 'modResource', $index );
		$modx->setPlaceholder( 'prev-id', $prev->id );
		if ( $prev->get( 'menutitle' ) != '' ) {
			$modx->setPlaceholder( 'prev-pagetitle', $prev->get( 'menutitle' ) );
		} else {
			$modx->setPlaceholder( 'prev-pagetitle', $prev->get( 'pagetitle' ) );
		}

		$flag = true;
		continue;
	}
	if ( $flag ) {
		//next Page
		if ( $res->id == $p404 ) {
//			$res = $modx->getObject( 'modResource', $modx->config['site_start'] );
			$modx->setPlaceholder( '_last', 1 );
		}
		$modx->setPlaceholder( 'next-id', $res->id );
		if ( $res->get( 'menutitle' ) != '' ) {
			$modx->setPlaceholder( 'next-pagetitle', $res->get( 'menutitle' ) );
		} else {
			$modx->setPlaceholder( 'next-pagetitle', $res->get( 'pagetitle' ) );
		}
		break;
	}
	$size --;
	if ( $size <= 0 ) {
		//если последний елемент
		$modx->setPlaceholder( '_last', 1 );
	}
	$index = $res->id;
}

$output = $modx->getChunk( $chank );

return $output;