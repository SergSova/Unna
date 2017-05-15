<?php
if ( $ids ) {
	//если введено множественные значения
	$ids    = explode( ',', $ids );
	$result = array();
	if ( is_array( $ids ) ) {
		foreach ( $ids as $resId ) {
			$res = $modx->runSnippet(
				'BabelTranslation', array(
					'contextKey' => $modx->resource->context_key,
					'resourceId' => $resId
				)
			);
			if ( $res ) {
				array_push( $result, $res );
			}
		}
		return implode( ',', $result );
	}
}
$resId = $modx->getOption( 'id', $scriptProperties, '' );

return $modx->runSnippet(
	'BabelTranslation', array(
		'contextKey' => $modx->resource->context_key,
		'resourceId' => $resId
	)
);