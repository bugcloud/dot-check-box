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

## Sample
http://bugcloud.github.com/dot-check-box/

## License
MIT
