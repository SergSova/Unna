<?php

/**
 * @var $modx modX
 * @var $scriptProperties string
 */
//задаем значения по умолчанию
$lim         = $_GET['limit'] ? $_GET['limit'] : 3;
$off         = $_GET['offset'] ? $_GET['offset'] : 0;
$res_id = $modx->resource->context_key;

$modx->runSnippet(
	'getResources', array(
		'parents'        => '[[*id]]',
		'tpl'            => 'news_item_TPL',
		'offset'         => $off,
		'limit'          => $lim,
		'tvPrefix'       => '',
		'includeTVs'     => '1',
		'includeContent' => '1',
		'showHidden'     => '1',
	)
);