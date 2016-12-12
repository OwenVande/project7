var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var click = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

console.log("hi")
// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var newSquare = document.createElementNS(namespace,"rect")
  newSquare.setAttribute("fill",color)
  newSquare.setAttribute("x",x)
  newSquare.setAttribute("y",y)
  newSquare.setAttribute("width",size)
  newSquare.setAttribute("height",size)
  screen.appendChild(newSquare)
}

function drawCircle(x, y, size, color) {
  var newCircle = document.createElementNS(namespace,"circle")
  newCircle.setAttribute("fill",color)
  newCircle.setAttribute("r",size)
  newCircle.setAttribute("cx",x)
  newCircle.setAttribute("cy",y)
  screen.appendChild(newCircle)
}
document.addEventListener("mousedown",function(e){
  if(click==false){
  var pt = transformPoint(e, screen)
  drawCircle(pt.x,pt.y,10,"blue")
  click = true
}
})
document.addEventListener("mousemove",function(e){
  if(click==true){
  var pt = transformPoint(e, screen)
  drawCircle(pt.x,pt.y,10,"blue")
}
})
document.addEventListener("mouseup",function(e){
  click = false
  var pt = transformPoint(e, screen)
  drawCircle(pt.x,pt.y,10,"blue")
})




// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
