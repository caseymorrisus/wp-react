<?php

if ( ! class_exists('CM_Build_Rest_Settings') ) {
  class CM_Build_Rest_Settings {
    const GLOBAL_TO_USE = 'WP_REST_SETTINGS';

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
     * @return CM_Build_Rest_Settings
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
      wp_localize_script('rest-theme-react', self::GLOBAL_TO_USE, self::build_settings());
    }

    /**
     * Builds the settings to set as global variable
     *
     * @return array
     */

    public static function build_settings() {
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
  }
}

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

// Instantiate plugin class
$CM_Build_Rest_Settings = CM_Build_Rest_Settings::getInstance();