<?php

if ( ! class_exists('CM_Build_Rest_Menu') ) {
  class CM_Build_Rest_Menus {
    const GLOBAL_TO_USE = 'WP_REST_MENUS';

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
     * @return CM_Build_Rest_Menus
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
      wp_localize_script('rest-theme-react', self::GLOBAL_TO_USE, self::build_menus());
    }

    /**
     * Builds the array of menus to set as global variable
     *
     * @return array
     */

    public function build_menus() {
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
  }
}

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

// Instantiate plugin class
$CM_Build_Rest_Menus = CM_Build_Rest_Menus::getInstance();