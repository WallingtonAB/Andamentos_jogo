let playerHP = 100;
let playerMP = 50;
let enemyHP = 80;
let enemyMP = 40;

function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  updateStats();
}

function updateStats() {
  document.getElementById("playerHP").innerHTML = playerHP;
  document.getElementById("playerMP").innerHTML = playerMP;
  document.getElementById("enemyHP").innerHTML = enemyHP;
  document.getElementById("enemyMP").innerHTML = enemyMP;
}

function playerAttack() {
  let damage = Math.floor(Math.random() * 10) + 1;
  enemyHP -= damage;
  updateStats();
  if (enemyHP <= 0) {
    alert("Você ganhou!");
    location.reload();
  }
  enemyAttack();
}

function enemyAttack() {
  let damage = Math.floor(Math.random() * 10) + 1;
  playerHP -= damage;
  updateStats();
  if (playerHP <= 0) {
    alert("Você perdeu!");
    location.reload();
  }
}

function playerHeal() {
  let heal = Math.floor(Math.random() * 10) + 1;
  playerHP += heal;
  playerMP -= 10;
  updateStats();
  enemyAttack();
}
