

class Flower {
  
  //this time we've added a few more parameters to the constructor class
  constructor(x, y) {
    
    //adding the int here makes sure that number of petals is an integer. This keeps the spacing even. 
    this.numPetals = int(random(3, 25));
    print(this.numPetals);
    this.petalLength = random(30, 70);
    this.petalWidth = random(4, 30);
    this.centerDiameter = random(20, 40);
    this.petalColor = color(random(0, 255), random(0, 255), random(0, 255));
    this.centerColor = color(random(0, 255), random(0, 255), random(0, 255));
    
    // these variables determine a specific behavior and keep track of location.
    this.xLoc = x;
    this.yLoc = y;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.rotations = 0;
    this.rotateSpeed = random(-5, 5);
    
    
  }
//instead of drawing the flower once in the constructor, now we declare a function inside the object which can be called repeatedly, allowing us to redraw it as it moves
  show() {
    
    // when we want to access variables 
    push();

    translate(this.xLoc, this.yLoc);
    rotate(this.rotations);
    fill(this.petalColor);
    for (var i = 0; i < this.numPetals; i++) {
      rotate(360 / this.numPetals);
      ellipse(this.centerDiameter, 0, this.petalLength, this.petalWidth);
    }
    fill(this.centerColor);
    ellipse(0, 0, this.centerDiameter, this.centerDiameter);

    pop();
  }
  
  // we also create another function called move(). Similar to the bouncing ball example from earlier, this function moves the flower around, keeps track of its location, and makes sure it doesn't leave the field of view 

  move() {
    this.xLoc += this.speedX;
    this.yLoc += this.speedY;

    if (this.xLoc > width || this.xLoc < 0) {
      this.speedX = -this.speedX;
    }

    if (this.yLoc > height || this.yLoc < 0) {
      this.speedY = -this.speedY;
    }
    this.rotations = this.rotations + this.rotateSpeed;
  }
}

let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  angleMode(DEGREES);

  // print(flower.numPetals)
}

function draw() {
  background(0);
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
  }
}

function mouseDragged() {
  flowers.push(new Flower(mouseX, mouseY));
}
