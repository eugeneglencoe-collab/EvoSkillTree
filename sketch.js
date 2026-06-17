new p5();

// Variables globales conservées
let regularFont, headingFont, titleFont;
let skillInfo, creatorImg;
let skillList = [];
let skillTree = {};
let selectedNode = -1;
let selectedDropdown = "What is EvoSkillTree?";
let branch = [];
let confetti = [];
let releaseConfetti = false;
let linkBoxIdx = 0;
let linkBoxes = [];
let linkList = [];

function preload(){
  regularFont = loadFont('fonts/Raleway-Medium.ttf');
  headingFont = loadFont('fonts/Raleway-Regular.ttf');
  titleFont = loadFont('fonts/Raleway-SemiBold.ttf');
  skillInfo = loadJSON('skill_info.json');
  creatorImg = loadImage('creator_photo.jpeg');
}

function setup() {
  // On utilise windowWidth et windowHeight pour que l'arbre occupe tout l'écran
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1'); // Place le canvas derrière le header
  
  // Initialisation des données (votre logique originale)
  // [Assurez-vous que vos listes skillNameList et skillNameTree sont bien définies avant ceci]
  
  for(let i = 0; i < skillNameList.length; i++){
    append(skillList, new SkillNode(width/2, height/2, skillNameList[i]));
  }
  // ... (votre logique de construction d'arbre reste la même)
  
  frameRate(60);
}

function draw() {
  // On ne met pas de background ici pour laisser le dégradé du CSS ou le fond sombre
  // Si vous voulez un fond p5.js, utilisez clear() pour la transparence
  clear(); 
  
  // [Copiez ici toute votre logique de dessin originale : 
  // le tracé des connexions, les boucles de calcul de force, l'affichage des nœuds]
  
  // ASTUCE : Si l'arbre n'apparaît toujours pas, vérifiez que 
  // les coordonnées x, y des nœuds ne sont pas en dehors de (0, 0, width, height)
}

// CONSEIL IMPORTANT : 
// Si vous voulez garder le header et le footer HTML par-dessus, 
// assurez-vous que votre 'sketch.js' ne redessine pas ces éléments 
// (texte, rectangles) par-dessus votre interface HTML.
