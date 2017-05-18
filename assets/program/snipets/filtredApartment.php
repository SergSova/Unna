<?php
/**
 * @var $modx modX
 *
 * limit,offset,rooms,levels,full-area-from,full-area-to,price-from,price-to
 */
$detect = new Mobile_Detect();


//задаем значения по умолчанию
$lim = $_GET['limit'] ? $_GET['limit'] : 3;
$off = $_GET['offset'] ? $_GET['offset'] : 0;

$chank = $modx->getOption( 'tpl', $scriptProperties, 'apart-filtred-item-TPL' );
if ( $detect->isMobile() ) {
	$chank = $modx->getOption( 'tpl', $scriptProperties, 'apart-mobile-filtred-item-TPL' );
}
$context_key = $modx->resource->context_key;

$parent = $modx->runSnippet(
	'BabelTranslation', array(
		'contextKey' => $modx->resource->context_key,
		'resourceId' => 2
	)
);
//region tvValue condition
$resource_tvfilter = array();
if ( isset( $_GET['rooms'] ) ) {
	array_push( $where_arr, array( 'tvr.rooms' => $_GET['rooms'] ) );
	array_push( $resource_tvfilter, 'rooms==' . $_GET['rooms'] );
}
if ( isset( $_GET['levels'] ) ) {
	array_push( $where_arr, array( 'TemplateVarResources.levels' => $_GET['levels'] ) );
	array_push( $resource_tvfilter, 'levels==' . $_GET['levels'] );
}
//region full-area
$full_area = array();
if ( isset( $_GET['full-area-from'] ) && $_GET['full-area-from'] != '' ) {
	array_push( $where_arr, array( 'TemplateVarResources.full-area:>=' => $_GET['full-area-from'] ) );
	array_push( $full_area, 'full-area>=' . $_GET['full-area-from'] );
}
if ( isset( $_GET['full-area-to'] ) && $_GET['full-area-to'] != '' ) {
	array_push( $where_arr, array( 'TemplateVarResources.full-area:<=' => $_GET['full-area-to'] ) );
	array_push( $full_area, 'full-area<=' . $_GET['full-area-to'] );
}
if ( count( $full_area ) ) {
	array_push( $resource_tvfilter, implode( ',', $full_area ) );
}
//endregion
//region price
$price = array();
if ( isset( $_GET['price-from'] ) && $_GET['price-from'] != '' ) {
	array_push( $where_arr, array( 'TemplateVarResources.price:>=' => $_GET['price-from'] ) );
	array_push( $price, 'price>=' . $_GET['price-from'] * 1000 );
}
if ( isset( $_GET['price-to'] ) && $_GET['price-to'] != '' ) {
	array_push( $where_arr, array( 'TemplateVarResources.price:<=' => $_GET['price-to'] ) );
	array_push( $price, 'price<=' . $_GET['price-to'] * 1000 );
}
if ( count( $price ) ) {
	array_push( $resource_tvfilter, implode( ',', $price ) );
}
//endregion
$resource_tvfilter = implode( ',', $resource_tvfilter ); //(|| - OR)(, - AND)
//endregion


$setting = array(
	'parents'    => "$parent",
	'where'      => "{published:1, deleted:0, context_key:$context_key}",
	'tpl'        => $chank,
	'includeTVs' => '1',
	'sortby'     => '{pagetitle:ASC}',
	'tvFilters'  => $resource_tvfilter,
	'limit'      => "$lim",
	'offset'     => "$off",
);

return $modx->runSnippet( 'getResources', $setting );