<?php

if ( ! class_exists('CM_Add_Settings_Rest_Route') ) {
  class CM_Add_Setting_Rest_Route {

    /**
     * Holds instance of singleton
     *
     */

    static $instance = false;

    /**
     * Constructor, inits hooks
     *
     * @return void
     */

    private function __construct() {
      add_action('rest_api_init', array($this, 'add_rest_route'));
    }

    /**
     * If instance already exists, return instance, otherwise create and return instance
     *
     * @return CM_Build_Rest_Info
     */

    public static function getInstance() {
      if ( !self::$instance ) {
        self::$instance = new self;
      }

      return self::$instance;
    }

    /**
     * Builds and registers the rest route for settings
     *
     * @return void
     */

    public static function add_rest_route() {
      register_rest_route(
        'wp-react/v1',
        '/settings',
        array(
          'methods' => 'GET',
          'callback' => function() {
            return array(
              'title' => get_bloginfo('name'),
              'description' => get_bloginfo('descriptiong'),
              'url' => get_bloginfo('url'),
              'timezone' => get_option('timezone_string'),
              'date_format' => get_option('date_format'),
              'time_format' => get_option('time_format'),
              'start_of_week' => get_option('start_of_week'),
              'language' => get_bloginfo('language'),
              'default_category' => get_option('default_category'),
              'default_post_format' => get_option('default_post_format'),
              'posts_per_page' => get_option('posts_per_page'),
              'post_types' => get_post_types(array(
                  'public' => true
              )),
            );
          }
        )
      );
    }
  }
}

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

// Instantiate plugin class
$CM_Add_Setting_Rest_Route = CM_Add_Setting_Rest_Route::getInstance();