/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from './plugins/font/font';

import './custom.css';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Heading,
	Paragraph,
	Alignment,
	Font
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'bold',
			'italic',
			'alignment',
			'undo',
			'redo'
		]
	},
	fontSize: {
		options: [
			'default',
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15
		]
	},
	fontFamily: {
		options: [
			'default',
			'Aguafina Script, cursive',
			'Amatic SC, cursive',
			'Bitter, serif',
			'Catamaran, sans-serif',
			'Dancing Script, cursive',
			'Gloria Hallelujah, cursive',
			'Indie Flower, cursive',
			'Lobster, cursive',
			'Noto Serif, serif',
			'Raleway, sans-serif',
			'Shadows Into Light, cursive',
			'Source Sans Pro, sans-serif',
			'Swanky and Moo Moo, cursive'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'pt-br'
};
