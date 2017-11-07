<?php

if ( ! class_exists('CM_Build_Rest_Routes') ) {
  class CM_Build_Rest_Routes {
    const GLOBAL_TO_USE = 'WP_REST_ROUTES';

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
      self::register_script();
      self::localize_script();
    }

    /**
     * If instance already exists, return instance, otherwise create and return instance
     *
     * @return CM_Build_Rest_Routes
     */

    public static function getInstance() {
      if ( !self::$instance ) {
        self::$instance = new self;
      }

      return self::$instance;
    }

    /**
     * Registers script to use in localization
     *
     * @return void
     */

    public static function register_script() {
      wp_register_script('rest-theme-react', get_template_directory_uri() . '/build/bundle.js');
    }

    /**
     * Sets variable to be used globally
     *
     * @return void
     */

    public static function localize_script() {
      wp_localize_script('rest-theme-react', self::GLOBAL_TO_USE, self::build_routes());
    }

    /**
     * Builds the array of routes to set as global variable
     *
     * @return array
     */

    public static function build_routes() {
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
  }
}

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

// Instantiate plugin class
$CM_Build_Rest_Routes = CM_Build_Rest_Routes::getInstance();