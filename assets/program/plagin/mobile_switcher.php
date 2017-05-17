<?php
/** @var modX $modx */
if ( $modx->event->name == 'OnLoadWebDocument' && $modx->context->get( 'key' ) != "mgr" ) {
	require_once( MODX_BASE_PATH . 'Mobile_Detect.php' );
	$detect = new Mobile_Detect();

	$url = $modx->runSnippet(
		'BabelTranslation', array( 'contextKey' => $modx->resource->context_key, 'resourceId' => 1 )
	);
	/** @var modResource $obj */
	$obj = $modx->getObject( 'modResource', $url );
	$url = $obj->get( 'alias' );

	if ( $detect->isMobile() ) {
		if ( $modx->resource->id == $modx->config['site_start'] ) {
			$modx->sendRedirect( $url );
		}
		$modx->resource->clearCache( $modx->resource->context_key );
		$mobile_template = $modx->resource->getTVValue( 'mob_template' );
		if ( $mobile_template ) {
			$modx->resource->set( 'template', $mobile_template );
		}
	}
	if ( $detect->isTablet() ) {
		if ( $modx->resource->id == $modx->config['site_start'] ) {
			$modx->sendRedirect( $url );
		}
		$modx->resource->clearCache( $modx->resource->context_key );
//		$tmp             = $modx->getObject( 'modTemplate', $modx->resource->template );
//      $tablet_template = $tmp->get( 'properties' )['tab_template']['value'];
		$tablet_template = $modx->resource->getTVValue( 'tab_template' );
		if ( $tablet_template ) {
			$modx->resource->set( 'template', $tablet_template );
		}
	}
}
return true;