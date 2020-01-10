const canvas = document.querySelector('canvas.paintbox');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const colors = [
  '#ecff20', 
  '#3fb2e0', 
  '#eafeca', 
  '#13a155', 
  '#ef798a', 
  '#f92a80', 
  '#f1d302', 
  '#235789'
]

const random = Math.floor(Math.random() * colors.length)

context.strokeStyle = colors[random]
context.lineWidth = 10
context.lineCap = 'round'

let painting = false

document.addEventListener('mousedown', function(event){
  painting = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener('mouseup', function(event){
  painting = false
})

document.addEventListener('mousemove', function(event){
  if (painting){
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
  } 
})

document.addEventListener('touchstart', function(event){
  painting = true
  context.moveTo(event.X, event.pageY)
  context.beginPath()
})

document.addEventListener('touchend', function(event){
  painting = false
})

document.addEventListener('touchmove', function(event){
  if (painting){
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
  } 
})

