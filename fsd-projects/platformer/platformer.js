$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(300, 400, 320, 30);
  createPlatform(800, 400, 300, 30);
  createPlatform(300, 400, 30, 250);
  createPlatform(1070, 400, 30, 250);
  createPlatform(1300, 620, 100, 30);
  createPlatform(1100, 500, 100, 30);
  createFakePlatform(330, 430, 740, 320, "silver");
  createFakePlatform(300, 650, 800, 320, "silver");
  createFakePlatform(600, 400, 200, 30, "silver");
  createPlatform(300, 0, 30, 400);
  createPlatform(330, 280, 100, 30);
  createPlatform(600, 200, 200, 30);
  createPlatform(950, 200, 100, 30);
  createPlatform(1200, 200, 200, 30);
  createPlatform(0, 180, 150, 30);
  createPlatform(150, 300, 150, 30);
  createPlatform(0, 420, 150, 30);
  createPlatform(150, 540, 150, 30);



    // TODO 3 - Create Collectables
createCollectable("database", 740, 650, 0.1);
createCollectable("database", 360, 310, 0.1);
createCollectable("database", 1300, 110, 0.1);


    
    // TODO 4 - Create Cannons
createCannon("top", 210, 1000);
createCannon("top", 758, 2500);
createCannon("right", 400, 3500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
