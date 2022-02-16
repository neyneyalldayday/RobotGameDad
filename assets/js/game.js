
var playerName = window.prompt(" whats your Robot daddys name????");
var playerHealth = 100 ;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players that they are sterting the round
    window.alert('welcome to Robot daddies Fight!!!');

    //subtreact the value of `player Attack` from the value of `enemyHealth` and use that result to updaye the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know the it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining ")

    //check daddy enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of `enemyAttack` frome the value of `playerHealth` and use the result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.

    console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining .")
    //check daddy players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");

    }
    else { 
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }



};



fight();