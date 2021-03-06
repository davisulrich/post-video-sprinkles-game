import {detectCollision} from "/src/collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_sprinkles");
    this.position = position;
  
    this.width = 40;
    this.height = 15;

    this.game = game;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = - this.game.ball.speed.y;
      this.markedForDeletion = true;
    }
  }

  draw(context) {
    context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}