var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var click = false
var selectedShape = document.getElementById("shapeSelect").value
// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions

//circle
function drawCircle(x, y, size, color) {
  var newCircle = document.createElementNS(namespace,"circle")
  newCircle.setAttribute("fill",color)
  newCircle.setAttribute("r",size)
  newCircle.setAttribute("cx",x)
  newCircle.setAttribute("cy",y)
  screen.appendChild(newCircle)
}

document.addEventListener("mousedown",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "circle"){
    if(click==false){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
    click = true
    }
  }
})
document.addEventListener("mousemove",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "circle"){
    if(click==true){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
    }
  }
})
document.addEventListener("mouseup",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "circle"){
    click = false
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
  }
})

//rectangle
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

document.addEventListener("mousedown",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "square"){
    if(click==false){
    var pt = transformPoint(e, screen)
    drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
    click = true
    }
  }
})
document.addEventListener("mousemove",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "square"){
    if(click==true){
    var pt = transformPoint(e, screen)
    drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
    }
  }
})
document.addEventListener("mouseup",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "square"){
    click = false
    var pt = transformPoint(e, screen)
    drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
  }
})




// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
