const path = require('path')
const mix = require('laravel-mix')
require('laravel-mix-ejs')
require('laravel-mix-clean')
require('laravel-mix-eslint')

Mix.manifest.refresh = (_) => void 0

mix
  .setPublicPath('dist/')
  .clean()
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  })
  .js(
    path.resolve(__dirname, 'resources/assets/js/main.js'),
    path.resolve(__dirname, 'dist/assets/js/main.js')
  )
  .eslint({
    fix: true,
  })
  .sass(
    path.resolve(__dirname, 'resources/assets/css/common.scss'),
    path.resolve(__dirname, 'dist/assets/css/style.css')
  )
  .options({
    autoprefixer: { remove: false },
  })
  .ejs(
    path.resolve(__dirname, 'resources/view/index.ejs'),
    path.resolve(__dirname, 'dist')
  )
  .copyDirectory(
    path.resolve(__dirname, 'public/'),
    path.resolve(__dirname, 'dist/assets/')
  )
  .browserSync({
    startPath: '/',
    proxy: false,
    server: 'dist',
    files: ['dist/**/*'],
  })
