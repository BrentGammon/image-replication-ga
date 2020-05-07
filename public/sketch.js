let img;
let canvas;
function setup() {
    img = loadImage('../assets/gaga.jpg', img => {
        const height = img.height;
        const width = img.width;
        canvas = createCanvas(height, width);

        image(img, 0, 0, img.width / 2, img.height / 2);
        img.loadPixels()

        for(let i = 0; i <= width; i++) {
            for(let j = 0; j <= height; j++) {
                var out_color = color(random(0, 255), random(0,255), random(0,255));
                img.set(i, j, out_color);
            }

        }
        img.updatePixels();
        img.save( 'newGaga', 'jpg');
        noLoop();
    });
}

function draw() {
    noSmooth();
    image(img, 0, 0, img.width / 2, img.height / 2);
}