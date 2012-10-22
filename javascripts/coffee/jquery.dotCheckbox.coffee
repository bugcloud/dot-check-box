###
.checkbox - jQuery Plugin

About this plugin, visit github project page.
https://github.com/bugcloud/dot-check-box/
####

$ = jQuery

$.fn.dotCheckbox = (opt) ->
  defaultOptions =
    animation: "none"
  options = $.extend {}, defaultOptions, opt
  this.each () ->
    $_ = $(this)
    if $("canvas").length <= 0
      $_.parent().append "<canvas></canvas>"
    canvas = $("canvas:first").get 0
    cont = canvas.getContext '2d'

    if $_.attr("src")
      img = new Image()
      img.onload = () =>
        canvas.width = img.width
        canvas.height = img.height
        cont.drawImage img, 0, 0, img.width, img.height
        imgData = cont.getImageData(0, 0, img.width, img.height)
        d_ = imgData.data
        i = 0
        dots = []
        row = []
        col = 0
        while i<imgData.data.length
          if d_[i] is 0 and d_[i+1] is 0 and d_[i+2] is 0 and d_[i+3] is 255
            row.push {checked: true}
          else
            row.push {checked: false}
          i += 4
          col += 1
          if col > (img.width - 1)
            dots.push row
            row = []
            col = 0

        html = "<div>"
        for r in dots
          html = "#{html}<div>"
          for c in r
            html = "#{html}<input type='checkbox'#{if c.checked then " checked" else ""}>"
          html = "#{html}</div>"
        html = "#{html}</div>"
        $t = $_.parent().append html
        $_.parent().find("canvas:last").remove()
        $_.remove()

        if options.animation is "blink"
          setInterval () ->
            $t.find("input[type='checkbox']").each () ->
              if $(this).is(":checked")
                $(this).attr "checked", false
              else
                $(this).attr "checked", "checked"
          , 1000

      img.src = $_.attr 'src'
