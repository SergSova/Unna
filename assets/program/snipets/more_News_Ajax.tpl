<?php
/**
 * @var $modx modX
 * @var $scriptProperties string
 */
//задаем значения по умолчанию
$lim    = $_GET['limit'] ? $_GET['limit'] : 3;
$off    = $_GET['offset'] ? $_GET['offset'] : 0;
$res_id = $modx->runSnippet(
	'BabelTranslation', array(
		'contextKey' => $modx->resource->context_key,
		'resourceId' => 12
	)
);

$result = $modx->runSnippet(
	'getResources', array(
		'parents'        => "$res_id",
		'tpl'            => 'news_item_TPL',
		'offset'         => "$off",
		'limit'          => "$lim",
		'tvPrefix'       => '',
		'includeTVs'     => '1',
		'includeContent' => '1',
		'showHidden'     => '1',
	)
);
return $result;