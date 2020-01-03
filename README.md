# postcss-one-to-many
> One to many for postcss

## installation
```shell
npm i -D @feizheng/postcss-one-to-many
```

## usage
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
var one2many = require('@feizheng/postcss-one-to-many');

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

## suport list:
```js
// margins:
module.exports = {
  'm': [
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left'
  ],
  'mx': [
    'margin-right',
    'margin-left'
  ],
  'my': [
    'margin-top',
    'margin-bottom'
  ],
  'mt': [
    'margin-top'
  ],
  'mr': [
    'margin-right'
  ],
  'mb': [
    'margin-bottom'
  ],
  'ml': [
    'margin-left'
  ]
};

// paddings:
module.exports = {
  'p': [
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left'
  ],
  'px': [
    'padding-right',
    'padding-left'
  ],
  'py': [
    'padding-top',
    'padding-bottom'
  ],
  'pt': [
    'padding-top'
  ],
  'pr': [
    'padding-right'
  ],
  'pb': [
    'padding-bottom'
  ],
  'pl': [
    'padding-left'
  ]
};

//radius:
module.exports = {
  'radius':[
    'border-radius'
  ],
  'radius-bottom': [
    'border-bottom-left-radius',
    'border-bottom-right-radius'
  ],
  'radius-left': [
    'border-top-left-radius',
    'border-bottom-left-radius'
  ],
  'radius-right': [
    'border-top-right-radius',
    'border-bottom-right-radius'
  ],
  'radius-top': [
    'border-top-left-radius',
    'border-top-right-radius'
  ]
};
```
