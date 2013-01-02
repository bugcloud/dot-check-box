# .checkbox - jQuery Plugin

imgタグで指定した画像をcheckboxのドット絵に変換するjQueryプラグインです。

## How to use
HTMLでscriptを読み込みます。
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
<script src="javascripts/jquery.dotCheckbox.js"></script>
```

$(SELECTOR).dotCheckbox()で
**src**
に指定した画像をドット絵に変換します。

```javascript
$(function() {
  $("img.dot-check-box").dotCheckbox()
})
```

## Options

*animation*
ドット絵のアニメーションを指定します。
**blink**
 or
**horizontal-slide**
 or
**vertical-slide**
で指定します。デフォルト値は
**none**
(アニメーションなし)です。

## Stop animation

```javascript
$(function() {
  var $dot = $("img.dot-check-box").dotCheckbox()
  $dot.clearInterval()
})
```

## Sample
http://bugcloud.github.com/dot-check-box/

## License
MIT

=============================

Copyright (c) 2012 bugcloud

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
