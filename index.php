<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>

<body>
    <div id="app"></div>
    <?php wp_footer(); ?>
    <script src="<?php echo(get_template_directory_uri() . '/build/index.bundle.js');?>"></script>
</body>

</html>