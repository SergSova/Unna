<?php
/**
 * @var $modx modX
 * @var $scriptProperties string
 */
//задаем значения по умолчанию
$res_id = $_GET['id'];

$result = $modx->runSnippet(
	'getResources', array(
		'resources'      => "$res_id",
		'tpl'            => 'premises_AJAX-item',
		'tvPrefix'       => '',
		'includeTVs'     => '1',
		'includeContent' => '1',
		'showHidden'     => '1',
	)
);

return $result;