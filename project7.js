var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var click = false
var selectedShape = document.getElementById("shapeSelect").value
var rainbowOn = document.getElementById("colorSelect").value
var rainbowArray = ["red","orange","yellow","green","blue","purple"]
var currentColor = 0
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
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "circle" && rainbowOn != "rainbow"){
    if(click==false){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
    click = true
    }
  }
})
document.addEventListener("mousemove",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "circle" && rainbowOn != "rainbow"){
    if(click==true){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
    }
  }
})
document.addEventListener("mouseup",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "circle" && rainbowOn != "rainbow"){
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

//rainbow rectangle
document.addEventListener("mousedown", function(e) {
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "square" && rainbowOn == "rainbow"){
    var pt = transformPoint(e, screen)
    drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,rainbowArray[currentColor])
    currentColor = 1
    click = true
  }
})
document.addEventListener("mousemove",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "square" && rainbowOn == "rainbow"){
    if(click==true){
      var pt = transformPoint(e, screen)
      drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,rainbowArray[currentColor])
      if(currentColor<5){
        currentColor = currentColor+1
      }
      else if(currentColor==5){
        currentColor = 0
      }
    }
  }
})
document.addEventListener("mouseup",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "square" && rainbowOn == "rainbow"){
    click = false
    var pt = transformPoint(e, screen)
    drawSquare(pt.x,pt.y,document.getElementById("sizeSelect").value,rainbowArray[currentColor])
  }
})

//rainbow circle
document.addEventListener("mousedown", function(e) {
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "circle" && rainbowOn == "rainbow"){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,rainbowArray[currentColor])
    currentColor = 1
    click = true
  }
})
document.addEventListener("mousemove",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "circle" && rainbowOn == "rainbow"){
    if(click==true){
      var pt = transformPoint(e, screen)
      drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,rainbowArray[currentColor])
      if(currentColor<5){
        currentColor = currentColor+1
      }
      else if(currentColor==5){
        currentColor = 0
      }
    }
  }
})
document.addEventListener("mouseup",function(e){
  selectedShape = document.getElementById("shapeSelect").value
  rainbowOn = document.getElementById("colorSelect").value
  if(selectedShape == "circle" && rainbowOn == "rainbow"){
    click = false
    var pt = transformPoint(e, screen)
    drawCircle(pt.x,pt.y,document.getElementById("sizeSelect").value,rainbowArray[currentColor])
  }
})



//stamp
document.addEventListener("mouseup", function(e) {
  selectedShape = document.getElementById("shapeSelect").value
  if(selectedShape == "stamp"){
    var pt = transformPoint(e, screen)
    document.getElementById("screen").innerHTML += "<image xlink:href= 'face.png' x="+pt.x+" y="+pt.y+" height=50px width=50px />"
  }
})

//reload page
function reloadPage(){
	location.reload();
}
