'use strict'

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr) }

function makeSpans (selector) {
  var _document$querySelect = document.querySelectorAll(selector)
  var _document$querySelect2 = _toArray(_document$querySelect)
  var elements = _document$querySelect2.slice(0)

  return elements.map(function (element) {
    var text = element.innerText.split('')
    var spans = text.map(function (letter) {
      return '<span>' + letter + '</span>'
    }).join('')
    return element.innerHTML = spans
  })
}

makeSpans('p, h1, h2, h3, h4, h5')

// new mouse
const cursor = document.querySelector('div.cursor')
let isMouseDown = false

const grow = function(){
  cursor.classList.add('is-down')
}

const shrink = function(){
   cursor.classList.remove('is-down')
}

const moveCursor = function(x, y){
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
}

document.addEventListener('mousedown', function(event){
  isMouseDown = true
  grow()
})

document.addEventListener('mouseup', function(){
  isMouseDown = false
  shrink()
})

document.addEventListener('mousemove', function(event){
  moveCursor(event.pageX, event.pageY)
  // console.log(event)
})

$('a').on('mouseenter', function(){
  $('.cursor').addClass('is-down')
})

$('a').on('mouseleave', function(){
  $('.cursor').removeClass('is-down')
})


// animate logo

// project movement
const projectlink = document.querySelectorAll('project-list a')
$(projectlink).on('click', function(){
  $('div.project-list').css('transform', 'translateX(-100%)')
})
