<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class RequireJsAsset extends AssetBundle
{
	public $sourcePath = '@bower/requirejs';
    public $js = [
        'require.js',
    ];
    public $jsOptions = [
		'data-main' => '/app/js/main',
	];
}
