function setup() {
    // Creates a canvas 600 pixels wide and 400 pixels high. 
    createCanvas(600, 400);
}
function draw() {
    // Sky blue background
    background(49, 95, 130);
    // Sun in top-right corner

    // Bubbles
    circle(50, 50, 10);
    fill(177, 191, 201);
    stroke(177, 191, 201)
    strokeWeight(20);
    circle(550, 50, 50);
    circle(400, 200, 20);
    circle(200, 100, 14);
    circle(300, 250, 10);
    circle(80, 200, 10);

    // Emojis
    textSize(40)
    text("🐟", 100, 250)
    text("🐟", 110, 350)
    text("🐟", 20, 300)
    text("🐡", 345, 390)

    textSize(15)
    text("🦐", 300, 40)
    text("🦐", 310, 60)
    text("🦐", 290, 55)
    text("🦐", 280, 35)
    text("🦐", 317, 32)

    textSize(80)
    text("🦑", 40, 40)

    textSize(200)
    text("🐳", mouseX, mouseY)
    
}