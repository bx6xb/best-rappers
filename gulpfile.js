import gulp from "gulp"
import imagemin from "gulp-imagemin"
import rename from "gulp-rename"

const { src, dest, series, parallel } = gulp

export const image = () =>
  src("src/**/*.{webp,png,jpeg,jpg}").pipe(imagemin()).pipe(dest("dist"))

export const font = () =>
  src("src/fonts/*.{ttf,woff2}")
    .pipe(woff2())
    .pipe(dest("src/fonts"))
    .pipe(dest("dist/fonts"))

export default series(cleanDist, html, style, script, image, video, font)
