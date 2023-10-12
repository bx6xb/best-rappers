import gulp from 'gulp'
import * as sassComp from 'sass'
import sassGulp from 'gulp-sass'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify-es'
import clean from 'gulp-clean'
import woff2 from 'gulp-ttf2woff2'
import htmlmin from 'gulp-html-minify'
import imagemin from 'gulp-imagemin'
import browser from 'browser-sync'

const sass = sassGulp(sassComp)

const { src, dest, series, watch, parallel } = gulp

export const script = () =>
  src('src/js/*.js').pipe(uglify.default()).pipe(dest('dist/js'))

export const style = () =>
  src('src/sass/style.sass')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(dest('src/css'))
    .pipe(dest('dist/css'))

export const font = () =>
  src('src/fonts/*.woff2').pipe(woff2()).pipe(dest('dist/fonts'))

export const html = () =>
  src('src/**/*.html').pipe(htmlmin()).pipe(dest('dist'))

export const image = () =>
  src('src/**/*.{webp,png,jpeg,jpg}').pipe(imagemin()).pipe(dest('dist'))

export const video = () => src('src/video/*.webm').pipe(dest('dist/video'))

export const cleanDist = () => src('dist').pipe(clean())

export const startSrc = () =>
  browser.create().init({
    server: {
      baseDir: 'src',
    },
  })

export const startDist = () =>
  browser.create().init({
    server: {
      baseDir: 'dist',
    },
  })

export default series(cleanDist, script, style, font, html, image, video)
