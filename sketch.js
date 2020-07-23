var B1, B2, B3, B4;

function setup() {
  createCanvas(800, 400);


  B1 = createSprite(100, 200, 100, 50);
  B1.shapeColor = "white";
  B2 = createSprite(350, 200, 50, 80);
  B2.shapeColor = "pink";

  B3 = createSprite(100, 100, 50, 50);
  B3.shapeColor = "yellow";
  B3.velocityX = 3;
  B4 = createSprite(600, 100, 50, 90);
  B4.shapeColor = "red";
  B4.velocityX = -3;
}

function draw() {
  background(0);
  B2.x = mouseX;
  B2.y = mouseY;
  if (B1.x - B2.x < B1.width / 2 + B2.width / 2
    && B2.x - B1.x < B1.width / 2 + B2.width / 2
    && B1.y - B2.y < B1.height / 2 + B2.height / 2
    && B2.y - B1.y < B2.height / 2 + B1.height / 2
  ) {
    B1.shapeColor = "yellow";
    B2.shapeColor = "red";
  }
  else {
    B1.shapeColor = "white";
    B2.shapeColor = "pink";
  }
  if (B3.x - B4.x < B3.width / 2 + B4.width / 2
    && B4.x - B3.x < B3.width / 2 + B4.width / 2) {
    B3.velocityX = - B3.velocityX;
    B4.velocityX = -B4.velocityX;
  }

  edges = createEdgeSprites();
  B3.bounceOff(edges[0]);
  B3.bounceOff(edges[1]);
  B4.bounceOff(edges[0]);
  B4.bounceOff(edges[1]);
  drawSprites();
}