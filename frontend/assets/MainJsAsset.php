<?php

namespace frontend\assets;

use yii\web\AssetBundle;

class MainJsAsset extends AssetBundle
{
	public $depends = [
		'yii\web\JqueryAsset',
		'yii\bootstrap\BootstrapPluginAsset',
		'frontend\assets\UnderscoreAsset',
		'frontend\assets\BackboneAsset',
		'frontend\assets\BackboneMarionetteAsset',
		'frontend\assets\TextJsAsset',
	];
}

class UnderscoreAsset extends AssetBundle
{
    public $sourcePath = '@bower/underscore';
    public $js = [
        'underscore.js',
    ];
}

class BackboneAsset extends AssetBundle
{
    public $sourcePath = '@bower/backbone';
    public $js = [
        'backbone.js',
    ];
}

class BackboneMarionetteAsset extends AssetBundle
{
    public $sourcePath = '@bower/marionette/lib';
    public $js = [
        'backbone.marionette.js',
    ];
}

class TextJsAsset extends AssetBundle
{
	public $sourcePath = '@bower/text';
	public $js = [
		'text.js',
	];
}
