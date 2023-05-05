let playerHP = 100;
let playerMP = 50;
let playerLevel = 1;
let playerXP = 0;

let enemies = [
  { name: "Goblin", hp: 50, xp: 10 },
  { name: "Orc", hp: 75, xp: 20 },
  { name: "Troll", hp: 100, xp: 30 },
  { name: "Dragon", hp: 150, xp: 50 }
];

let currentEnemyIndex = 0;
let currentEnemy = enemies[currentEnemyIndex];

function attack() {
  let attackDamage = Math.floor(Math.random() * 10) + 1;
  currentEnemy.hp -= attackDamage;
  document.getElementById("enemy-hp").innerHTML = currentEnemy.hp;
  
}