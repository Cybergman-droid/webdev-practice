let player;
let lanes = [150, 300, 450];
let cars;
let items;

let speed = 5;
let score = 0;

function setup() {
  createCanvas(600, 600);

  player = new Sprite(lanes[1], 520, 60, 80);
  player.color = "#00C8FF";
  player.lane = 1;

  cars = new Group();
  items = new Group();
}

function draw() {
  background(30, 30, 40);

  // Spawn cars
  if (frameCount % 60 === 0) spawnCar();

  // Spawn snow/ice
  if (frameCount % 180 === 0) spawnItem();

  // Move cars
  for (let c of cars) {
    c.y += speed;

    if (c.y > height + 100) {
      c.remove();
      score++;
      continue;
    }

    if (player.overlaps(c)) {
      gameOver();
    }
  }

  for (let it of items) {
    it.y += speed;

    if (player.overlaps(it)) {
      if (it.type === "snow") speed = max(2, speed - 2);
      if (it.type === "ice") speed = min(12, speed + 2);
      it.remove();
      continue;
    }

    if (it.y > height + 50) {
      it.remove();
    }
  }

  drawHUD();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) movePlayer(-1);
  if (keyCode === RIGHT_ARROW) movePlayer(1);
}

function movePlayer(dir) {
  player.lane = constrain(player.lane + dir, 0, 2);
  player.x = lanes[player.lane];
}

function spawnCar() {
  let lane = floor(random(3));
  let c = new cars.Sprite(lanes[lane], -100, 60, 80);
  c.color = "#FF5050";
}

function spawnItem() {
  let lane = floor(random(3));
  let it = new items.Sprite(lanes[lane], -50, 40, 40);

  if (random() < 0.5) {
    it.type = "snow";
    it.color = "#DDDDDD";
  } else {
    it.type = "ice";
    it.color = "#00FFFF";
  }
}

function drawHUD() {
  fill(255);
  textSize(24);
  text("Score: " + score, 20, 40);
  text("Speed: " + speed, 20, 70);
}

function gameOver() {
  noLoop();
  fill("#FF4444");
  textSize(50);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
}
