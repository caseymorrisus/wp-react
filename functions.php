<?php
// Define plugin dir path
if ( ! defined('BUILD_REST__PLUGIN_DIR')) {
  define( 'BUILD_REST__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

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
      'rewrite' => array(
        'slug' => 'project',
        'with_front' => false,
      ),
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
      'rewrite' => array(
        'slug' => 'work',
        'with_front' => false,
      ),
    ));
  }
}

// Add Works post types on init
add_action('init', 'create_works_type');

// Adds WP_REST_ROUTES to JS global
function build_routes() {
  require_once( BUILD_REST__PLUGIN_DIR . 'includes/build_rest_routes.php' );  
}

add_action('init', 'build_routes');

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

// Adds Settings REST route
require_once( BUILD_REST__PLUGIN_DIR . 'includes/add_settings_rest_route.php' );

// Adds Menus REST route
require_once( BUILD_REST__PLUGIN_DIR . 'includes/add_menus_rest_route.php' );

// Adds Routes REST route
require_once( BUILD_REST__PLUGIN_DIR . 'includes/add_routes_rest_route.php' );

// Enqueue React bundle script
wp_enqueue_script('rest-theme-react', BUILD_REST__PLUGIN_DIR . '/build/bundle.js', array(), '1.0.0', true);

?>