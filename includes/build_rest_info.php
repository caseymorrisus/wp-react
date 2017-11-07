<?php

if ( ! class_exists('CM_Build_Rest_Info') ) {
  class CM_Build_Rest_Info {
    const GLOBAL_TO_USE = 'WP_REST_INFO';

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
     * @return CM_Build_Rest_Info
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
      wp_localize_script('rest-theme-react', self::GLOBAL_TO_USE, self::build_info());
    }

    /**
     * Builds the info to set as global variable
     *
     * @return array
     */

    public static function build_info() {
      return array(
        'root'      => esc_url_raw(rest_url()),
        'nonce'     => wp_create_nonce('wp_rest'),
        'site_name' => get_bloginfo('name'),
        'blog_info' => get_bloginfo('description')
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
$CM_Build_Rest_Info = CM_Build_Rest_Info::getInstance();