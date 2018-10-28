<?php

/**
 * Plugin Name: Gutenbricks
 * Plugin URI: https://github.com/eliorivero/gutenbricks
 * Description: Adds building blocks to the Gutenberg editor.
 * Version: 0.0.7
 * Author: Elio Rivero
 * Author URI: https://elio.blog
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Domain Path: /languages
 * Text Domain: gutenbricks
 *
 * @package gutenbricks
 */

defined( 'ABSPATH' ) || exit;

define( 'GUTENBRICKS_VERSION', '0.0.7' );
define( '__GUTENBRICKS__', __FILE__ );

add_action( 'plugins_loaded', 'gutenbricks_localization' );

/**
 * Initialize localization routines
 *
 * @since 0.0.7
 * @access public
 */
function gutenbricks_localization() {
	load_plugin_textdomain( 'gutenbricks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

add_action( 'init', 'gutenbricks_block_init' );

function gutenbricks_block_init() {
	wp_register_style(
		'gutenbricks-fold-style',
		plugins_url( 'fold/style.css', __FILE__ )
	);
	wp_register_style(
		'gutenbricks-fold-editor',
		plugins_url( 'fold/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);
	wp_register_script(
		'gutenbricks-fold',
		plugins_url( 'build/fold.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	register_block_type( 'gutenbricks/fold', array(
		'style'         => 'gutenbricks-fold-style',
		'editor_style'  => 'gutenbricks-fold-editor',
		'editor_script' => 'gutenbricks-fold',
	) );
}
