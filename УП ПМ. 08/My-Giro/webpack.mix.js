let mix = require('laravel-mix');

mix
  .sass('sass/layout/columns.scss', 'css/layout')
  .sass('sass/styles/project.scss', 'css/styles')
  .options({
    processCssUrls: false,
  })
  .styles(
    ['css/layout/columns.css', 'css/styles/project.css'],
    'css/style.css'
  );
