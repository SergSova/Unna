<?php
/** @var modX $modx */

$res_id = $modx->resource->id;
if ($res_id == $modx->config['site_start']) {
    $q = $modx->newQuery('modResource');
    $q->where(
        array(
            'parent' => '0',
            'published' => '1',
            'deleted' => '0',
            'context_key' => $modx->resource->context_key
        )
    );
    $q->sortby('menuindex');
    $q->select('id');
    $q->prepare();
    $q->stmt->execute();
    $main_arr = $q->stmt->fetchAll(PDO::FETCH_ASSOC);

    $next = false;
    foreach ($main_arr as $item) {
        if ($next) {
            return $modx->makeUrl($item['id']);
        }
        if ($item['id'] == $res_id) {
            $next = true;
            continue;
        }
    }
} else {
    $q = $modx->newQuery('modResource');
    $q->where(
        array(
            'parent' => $res_id,
            'published' => '1',
            'deleted' => '0',
        )
    );
    $q->select('id');
    $q->sortby('menuindex');
    $q->limit(1);
    $q->prepare();
    $q->stmt->execute();
    $id = $q->stmt->fetch(PDO::FETCH_COLUMN);
    return $modx->makeUrl($id);
}