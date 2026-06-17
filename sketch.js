new p5();

let regularFont, headingFont, titleFont;
let width, height;
let skillInfo, creatorImg;

function preload(){
  regularFont = loadFont('fonts/Raleway-Medium.ttf');
  headingFont = loadFont('fonts/Raleway-Regular.ttf');
  titleFont = loadFont('fonts/Raleway-SemiBold.ttf');
  skillInfo = loadJSON('skill_info.json');
  creatorImg = loadImage('creator_photo.jpeg');
}

class SkillNode {
  constructor(x, y, name) {
    this.x = x; this.y = y; this.name = name;
    this.r = 27; this.locked = true;
  }
  drawNode() {
    push();
    fill(this.locked ? '#334155' : '#38bdf8');
    stroke('#FFFFFF');
    strokeWeight(3 * min(width/1991, height/1122));
    ellipse(this.x, this.y, this.r*2, this.r*2);
    pop();
    push();
    fill('FFFFFF');
    textAlign(CENTER, CENTER);
    textSize(8 * min(width/1991, height/1122));
    textFont(regularFont);
    noStroke();
    text(this.name, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
    pop();
  }
}

class Confetti {
  constructor(x, y, s) {
    this.x = x; this.y = y; this.speed = s;
    this.time = random(0, 200);
    this.confettiColor = [color('#00aeef'), color('#d64040'), color('#72c8b6')];
    this.color = random(this.confettiColor);
    this.amp = random(2, 30);
    this.phase = random(0.5, 2);
    this.size = 25 * min(width/1991, height/1122);
  }
  confettiDisplay() {
    push();
    fill(this.color);
    noStroke();
    translate(this.x, this.y);
    translate(this.amp * sin(this.time*this.phase), this.speed * cos(2*this.time*this.phase));
    rotate(this.time);
    rectMode(CENTER);
    scale(cos(this.time/4), sin(this.time/4));
    rect(0, 0, this.size, this.size/2);
    pop();
    this.time += 0.1;
    this.speed += 1/10;
    this.y += this.speed;
  }
}

// (Les listes skillNameList et skillNameTree restent inchangées ici pour la brièveté)
// [Insérez ici votre liste skillNameList et skillNameTree originale]

let skillList = [];
for(let i = 0; i < skillNameList.length; i++) append(skillList, new SkillNode(0, 0, skillNameList[i]));

let skillTree = {};
for(let key in skillNameTree){
  let ind = skillNameList.indexOf(key);
  skillTree[ind] = [];
  for(let skill of skillNameTree[key]) append(skillTree[ind], skillNameList.indexOf(skill));
}

// [Variables globales inchangées...]
// (Note : Utilisez vos variables globales originales)

function setup() {
  width = 900; height = 600; // Dimensions de votre conteneur
  let cnv = createCanvas(width, height);
  cnv.parent('canvas-container');
  
  // Ajustements de mise à l'échelle
  connectionDist *= min(width/1991, height/1122);
  // ... (Appliquez ici tous vos multiplicateurs de setup originaux)
  
  for(let i = 0; i < 300; i++) confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
  for(let i = 0; i < skillList.length; i++){
    skillList[i].x *= width/1991;
    skillList[i].y *= height/1122;
    skillList[i].r = min(skillList[i].r*width/1991, skillList[i].r*height/1122);
  }
  frameRate(60);
}

function draw() {
  //
