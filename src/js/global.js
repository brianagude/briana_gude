//  text effect

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


// change elements on scroll


document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  const sections = document.querySelectorAll('section.projects')
  const topic = document.querySelector('div.topic h4')
  const title = document.querySelector('div.title h4')
  const desc = document.querySelector('div.desc')

  sections.forEach(section => {
    if (section.offsetTop - 200 <= pixels){
      topic.innerHTML = section.getAttribute('data-topic')
      title.innerHTML = section.getAttribute('data-title')
      desc.innerHTML = section.getAttribute('data-desc')
    }
  })
})
