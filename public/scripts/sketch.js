let img;
let canvas;
function setup() {
  console.log("setup");
  img = loadImage("../assets/gaga.jpg", (img) => {
    const height = img.height;
    const width = img.width;
    canvas = createCanvas(width / 4, height / 4);

    image(img, 0, 0, img.width / 4, img.height / 4);
    img.loadPixels();

    for (let i = 0; i <= width; i++) {
      for (let j = 0; j <= height; j++) {
        const out_color = color(random(0, 255), random(0, 255), random(0, 255));
        img.set(i, j, out_color);
      }
    }
    img.updatePixels();
    img.save("newGaga", "jpg");
    console.log("saved image");
    new GeneticAlgorithm().go();
    noLoop();
  });
}

function draw() {
  noSmooth();
  image(img, 0, 0, img.width / 4, img.height / 4);
}
