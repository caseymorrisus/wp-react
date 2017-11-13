<?php

if ( ! class_exists('CM_Add_Routess_Rest_Route') ) {
  class CM_Add_Routes_Rest_Route {

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
        '/routes',
        array(
          'methods' => 'GET',
          'callback' => function() {
            $routes = array();

            $query = new WP_Query(array(
              'post_type'       => 'any',
              'post_status'     => 'publish',
              'posts_per_page'  => -1
            ));

            if ($query->have_posts()) {
              while ($query->have_posts()) {
                $query->the_post();
                $routes[] = array(
                  'id'    => get_the_ID(),
                  'type'  => get_post_type(),
                  'slug'  => basename(get_permalink())
                );
              }
            }

            wp_reset_postdata();

            return $routes;
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
$CM_Add_Routes_Rest_Route = CM_Add_Routes_Rest_Route::getInstance();