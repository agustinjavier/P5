//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
  background(173,216,230);

}

//The draw function happens over and over again
function draw() {
 //an RGB color for the canvas' background
  

  //particle system//


    noStroke();

    fill(255,255,0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
      ellipse(width/2+mouseX/500,height/2+mouseY/500,350,350); // center of canvas, 20px dia
  
    fill(0,0,0)
      ellipse(width/3+mouseX/100,height/2.5+mouseY/100,70,70);
      ellipse(width/1.5+mouseX/100,height/2.5+mouseY/100,70,70);
    
    //pupils
    fill(255,255,255)
      ellipse(width/3 +mouseX/50,height/2.6+mouseY/50,40,40);
      ellipse(width/1.5+mouseX/50,height/2.6+mouseY/50,40,40)

    fill(0,0,0)
      ellipse(width/2+mouseX/250,height/1.65+mouseY/250,100,30);


      if(mouseIsPressed) {
      	     	ellipse(width/2, 300, 100)
      }

     }

  function mousePressed() {
  	var r = random(0, 500);
  	 var r2 = random(0, 500);		
  	ellipse(r, r2, 100)
  }