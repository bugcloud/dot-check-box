
/*
.checkbox - jQuery Plugin

About this plugin, visit github project page.
https://github.com/bugcloud/dot-check-box/
*/

(function() {
  var $;

  $ = jQuery;

  $.fn.dotCheckbox = function(opt) {
    var defaultOptions, options;
    defaultOptions = {
      animation: "none"
    };
    options = $.extend({}, defaultOptions, opt);
    return this.each(function() {
      var $_, canvas, cont, img,
        _this = this;
      $_ = $(this);
      if ($("canvas").length <= 0) $_.parent().append("<canvas></canvas>");
      canvas = $("canvas:first").get(0);
      cont = canvas.getContext('2d');
      if ($_.attr("src")) {
        img = new Image();
        img.onload = function() {
          var $t, c, col, d_, dots, html, i, imgData, offsetIndex, r, row, _i, _j, _len, _len2, _ref;
          canvas.width = img.width;
          canvas.height = img.height;
          cont.drawImage(img, 0, 0, img.width, img.height);
          imgData = cont.getImageData(0, 0, img.width, img.height);
          d_ = imgData.data;
          i = 0;
          dots = [];
          row = [];
          col = 0;
          while (i < imgData.data.length) {
            if (!(d_[i] === 255 && d_[i + 1] === 255 && d_[i + 2] === 255 && d_[i + 3] === 255)) {
              row.push({
                checked: true
              });
            } else {
              row.push({
                checked: false
              });
            }
            i += 4;
            col += 1;
            if (col > (img.width - 1)) {
              dots.push(row);
              row = [];
              col = 0;
            }
          }
          html = "<div class='dot-check'>";
          $_.dots = dots;
          _ref = $_.dots;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            r = _ref[_i];
            html = "" + html + "<div class='dot-check-row'>";
            for (_j = 0, _len2 = r.length; _j < _len2; _j++) {
              c = r[_j];
              html = "" + html + "<input type='checkbox'" + (c.checked ? " checked" : "") + ">";
            }
            html = "" + html + "</div>";
          }
          html = "" + html + "</div>";
          $t = $_.parent().append(html);
          $_.parent().find("canvas:last").remove();
          $_.remove();
          if (options.animation === "blink") {
            return setInterval(function() {
              return $t.find("input[type='checkbox']").each(function() {
                if ($(this).is(":checked")) {
                  return $(this).attr("checked", false);
                } else {
                  return $(this).attr("checked", "checked");
                }
              });
            }, 1000);
          } else if (options.animation === "horizontal-slide") {
            offsetIndex = img.width;
            return setInterval(function() {
              var $checkbox, colIndex, rowIndex, _ref2, _ref3;
              $t.find("input[type='checkbox']").attr("checked", false);
              for (rowIndex = 0, _ref2 = $_.dots.length - 1; 0 <= _ref2 ? rowIndex <= _ref2 : rowIndex >= _ref2; 0 <= _ref2 ? rowIndex++ : rowIndex--) {
                row = $_.dots[rowIndex];
                for (colIndex = 0, _ref3 = row.length - 1; 0 <= _ref3 ? colIndex <= _ref3 : colIndex >= _ref3; 0 <= _ref3 ? colIndex++ : colIndex--) {
                  $checkbox = $t.find("input[type='checkbox']:eq(" + (rowIndex * $_.dots.length + colIndex + (offsetIndex - (offsetIndex <= row.length / 2 ? 0 : row.length))) + ")");
                  if (row[colIndex].checked) {
                    $checkbox.attr("checked", "checked");
                  } else {
                    $checkbox.attr("checked", false);
                  }
                }
              }
              offsetIndex--;
              if (offsetIndex <= 0) return offsetIndex = img.width;
            }, 1000);
          } else if (options.animation === "vertical-slide") {
            offsetIndex = -1 * img.height;
            return setInterval(function() {
              var $checkbox, colIndex, rowIndex, _ref2, _ref3;
              $t.find("input[type='checkbox']").attr("checked", false);
              for (rowIndex = 0, _ref2 = $_.dots.length - 1; 0 <= _ref2 ? rowIndex <= _ref2 : rowIndex >= _ref2; 0 <= _ref2 ? rowIndex++ : rowIndex--) {
                row = $_.dots[rowIndex];
                for (colIndex = 0, _ref3 = row.length - 1; 0 <= _ref3 ? colIndex <= _ref3 : colIndex >= _ref3; 0 <= _ref3 ? colIndex++ : colIndex--) {
                  $checkbox = $t.find("input[type='checkbox']:eq(" + (rowIndex * $_.dots.length + colIndex + offsetIndex * $_.dots.length) + ")");
                  if (row[colIndex].checked) {
                    $checkbox.attr("checked", "checked");
                  } else {
                    $checkbox.attr("checked", false);
                  }
                }
              }
              offsetIndex++;
              if (offsetIndex >= 0) return offsetIndex = -1 * img.height;
            }, 1000);
          }
        };
        return img.src = $_.attr('src');
      }
    });
  };

}).call(this);
