<?php 

function react_webpack_theme_register_styles(){
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css', array(), '4.5.2', 'all');
    wp_enqueue_style('custom-style1', get_stylesheet_directory_uri() . '/src/index.scss');

    wp_enqueue_style('font-style', 'https://fonts.googleapis.com/css2?family=Raleway&display=swap',array());

}

add_action('wp_enqueue_scripts','react_webpack_theme_register_styles');

function react_theme_register_scripts(){
    wp_enqueue_script('script-bundle', get_template_directory_uri() . '/build/index.bundle.js',array());
    wp_enqueue_script('bootstrap',"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",array(),'4.5.2','all');
    wp_enqueue_script('jquery',"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",array(),'3.5.1','all');
}

add_action('wp_enqueue_scripts','react_theme_register_scripts');

add_theme_support( 'post-thumbnails' );

?>