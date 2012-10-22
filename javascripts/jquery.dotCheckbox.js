// Generated by CoffeeScript 1.3.3

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
      if ($("canvas").length <= 0) {
        $_.parent().append("<canvas></canvas>");
      }
      canvas = $("canvas:first").get(0);
      cont = canvas.getContext('2d');
      if ($_.attr("src")) {
        img = new Image();
        img.onload = function() {
          var $t, c, col, d_, dots, html, i, imgData, r, row, _i, _j, _len, _len1;
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
            if (d_[i] === 0 && d_[i + 1] === 0 && d_[i + 2] === 0 && d_[i + 3] === 255) {
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
          html = "<div>";
          for (_i = 0, _len = dots.length; _i < _len; _i++) {
            r = dots[_i];
            html = "" + html + "<div>";
            for (_j = 0, _len1 = r.length; _j < _len1; _j++) {
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
          }
        };
        return img.src = $_.attr('src');
      }
    });
  };

}).call(this);
