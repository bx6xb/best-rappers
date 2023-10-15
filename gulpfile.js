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
import pugComp from 'gulp-pug'

browser.create()

const sass = sassGulp(sassComp)

const { src, dest, series, watch, parallel } = gulp

export const html = () =>
  src('src/**/*.html').pipe(htmlmin()).pipe(dest('dist')).pipe(browser.stream())

export const pug = () =>
  src('src/pug/*.pug')
    .pipe(pugComp())
    .pipe(dest('src/html'))
    .pipe(dest('dist/html'))

export const style = () =>
  src('src/sass/style.sass')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(dest('src/css'))
    .pipe(dest('dist/css'))
    .pipe(browser.stream())

export const script = () =>
  src(['src/js/*.js', '!src/js/main.min.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify.default())
    .pipe(dest('src/js'))
    .pipe(dest('dist/js'))
    .pipe(browser.stream())

export const image = () =>
  src('src/**/*.{webp,png,jpeg,jpg}').pipe(imagemin()).pipe(dest('dist'))

export const video = () => src('src/video/*.webm').pipe(dest('dist/video'))

export const font = () =>
  src('src/fonts/*.{ttf,woff2}')
    .pipe(woff2())
    .pipe(dest('src/fonts'))
    .pipe(dest('dist/fonts'))

export const cleanDist = () => src('dist').pipe(clean())

export const watching = () => {
  watch('src/sass/*.sass', style)
  watch(['src/js/*.js', '!src/js/main.min.js'], script)
  watch('src/**/*.html', html)
  watch('src/pug/*.pug', pug)
}

export const startSrc = () =>
  browser.init({
    server: {
      baseDir: 'src',
    },
  })

export const startDist = () =>
  browser.init({
    server: {
      baseDir: 'dist',
    },
  })

export const work = parallel(startSrc, watching)

export default series(cleanDist, html, style, script, image, video, font)
