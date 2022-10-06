var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var playerPaddle2= createSprite(10,200,10,100);
    playerPaddle2.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.velocityX=0;
    ball.velocityY=0;

function draw() {
  background(220);
  createEdgeSprites();
  
 if (keyDown("space")) {
   ball.velocityX=4;
   ball.velocityY=5;
 
 
 
 
  if (keyDown("down")) {
    playerPaddle.velocityY=4;
  }
  
  
  if (keyDown("up")) {
      playerPaddle.velocityY=-4;
  }
  
  if (keyDown("w")) {
    playerPaddle2.velocityY=-4;
  }
  if (keyDown("s")) {
    playerPaddle2.velocityY=4;
  }
  
  dibujaRed();
  
  playerPaddle2.collide(bottomEdge);
  playerPaddle2.collide(topEdge);
  
  playerPaddle.collide(bottomEdge);
  playerPaddle.collide(topEdge);
  
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle2);
  ball.bounceOff(playerPaddle);
 
 if (ball.isTouching(rightEdge) || 
 ball.isTouching(leftEdge)){
   resetball();
 }
 
  drawSprites();
  
}

function dibujaRed(){
for (var i = 0; i < 400; i = i+20) {
    line(200,i,200,i+10);
}
}

function resetball(){
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
