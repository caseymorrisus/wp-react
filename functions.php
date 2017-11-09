<?php
// Define plugin dir path
if ( ! defined('BUILD_REST__PLUGIN_DIR')) {
  define( 'BUILD_REST__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

// Adds WP_REST_ROUTES to JS global
require_once( BUILD_REST__PLUGIN_DIR . 'includes/build_rest_routes.php' );

// Adds WP_REST_MENUS to JS global
require_once( BUILD_REST__PLUGIN_DIR . 'includes/build_rest_menus.php' );

// Adds WP_REST_INFO to JS global
require_once( BUILD_REST__PLUGIN_DIR . 'includes/build_rest_info.php' );

// Adds WP_REST_SETTINGS to JS global
// called on init to make custom post types available
function build_settings() {
  require_once( BUILD_REST__PLUGIN_DIR . 'includes/build_rest_settings.php' );
}

add_action('init', 'build_settings');

// Create custom post type (Project)
if ( !function_exists( 'create_projects_type' ) ) {
  function create_projects_type() {
    register_post_type('projects', array(
      'labels' => array(
        'name' => __('Projects'),
        'singular_name' => __('Project')
      ),
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'projects')
    ));
  }
}

// Add Projects post types on init
add_action('init', 'create_projects_type');

// Create custom post type (Works)
if ( !function_exists( 'create_works_type' ) ) {
  function create_works_type() {
    register_post_type('works', array(
      'labels' => array(
        'name' => __('Works'),
        'singular_name' => __('Work')
      ),
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true,
      'rewrite' => array('slug' => 'works')
    ));
  }
}

// Add Works post types on init
add_action('init', 'create_works_type');

// Enqueue React bundle script
wp_enqueue_script('rest-theme-react', BUILD_REST__PLUGIN_DIR . '/build/bundle.js', array(), '1.0.0', true);

?>