# ApixCSS development

**Clone Repository and Add Remote to local repo for Develop**
```bash
git clone https://github.com/mbahgoez/apixcss.git
cd apixcss
git remote add https://github.com/mbahgoez/apixcss.git
```

**Development**
```bash

npm install -g gulp

<!-- skip. if already install gulp -->

npm install
```


### Compile SCSS to CSS

**Compile SCSS file from folder SCSS to CSS folder**
```bash
sass scss/look.scss:css/look.css --watch
```



### Compile using GulpJS
**Run task Default Gulpfile**



```bash
<!-- Running task -->
gulp

<!-- Watch Task -->
gulp watch


<!-- Gulp Sass -->
gulp sass

<!-- Gulp Sass Minify -->
gulp sass-minify

```



**Gulpfile.js for Configure**

```javascript
var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function(){
    gulp.src('./scss/look.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass-minify', function(){
    gulp.src('./scss/look.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css/minify/'));
});


gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass', 'sass-minify']);
});

gulp.task('default', ['watch'], function(){
    
});
```



## For Production
```bash
bower install apix
npm install apix
```


## Documentation
[Download ZIP](http://github.io)

or clone repository and generate with jekyll

```bash
git clone https://github.com/mbahgoez/apixcss.git
cd apixcss && jekyll serve

open url 
localhost:4000
or
127.0.0.1:4000
```