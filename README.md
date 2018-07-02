# postcss-one-to-many
> One to many for postcss


## usage:
+ css parts:
```css
body{
    user-select: none;
    px:10px;
    py:20px;
    p: 10px;
}
```

+ style parts:
```js
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var one2many = require('postcss-one-to-many');

// styles:
gulp.task('styles', function () {
    var plugins = [
      one2many(),
      autoprefixer({ browsers: ['last 1 version'] }),
      cssnano()
    ];
    return gulp.src('input.css')
      .pipe(postcss(plugins))
      .pipe(gulp.dest('dist'));
});
```
