<?php

if ( ! class_exists('CM_Add_Menus_Rest_Route') ) {
  class CM_Add_Menus_Rest_Route {

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
        '/menus',
        array(
          'methods' => 'GET',
          'callback' => function() {
            $rest_url = trailingslashit( get_rest_url() . 'wp-api-menus/v2' . '/menus/' );
            $i = 0;
            $wp_menus = wp_get_nav_menus();
            $rest_menus = array();
            foreach ( $wp_menus as $wp_menu ) :
              $menu = (array) $wp_menu;
              $rest_menus[ $i ]                = $menu;
              $rest_menus[ $i ]['id']          = $menu['term_id'];
              $rest_menus[ $i ]['name']        = $menu['name'];
              $rest_menus[ $i ]['slug']        = $menu['slug'];
              $rest_menus[ $i ]['description'] = $menu['description'];
              $rest_menus[ $i ]['count']       = $menu['count'];
              $rest_menus[ $i ]['items']       = wp_get_nav_menu_items($menu['term_id']);
              $i ++;
            endforeach;

            return $rest_menus; 
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
$CM_Add_Menus_Rest_Route = CM_Add_Menus_Rest_Route::getInstance();