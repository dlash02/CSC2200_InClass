const adventureGame = {
    player: {
        health: 100,
        attackPower: 10,
        inventory: [],
    },
    locations: {
        forest: {
            description: "You are in a dense forest. The trees are tall, and you hear mysterious sounds.",
            enemy: { name: "Goblin", health: 30, attackPower: 5 },
            item: "Magic Potion",
        },
        cave: {
            description: "You are in a dark cave. The air is damp, and something is watching you.",
            enemy: { name: "Troll", health: 50, attackPower: 8 },
            item: "Golden Key",
        },
    },
    currentLocation: "forest",

    updateUI(message) {
        document.getElementById("health").innerText = this.player.health;
        document.getElementById("inventory").innerText = this.player.inventory.join(", ") || "None";
        document.getElementById("location-description").innerText = this.locations[this.currentLocation].description;
        document.getElementById("game-log").innerHTML += `<p>${message}</p>`;
    },

    fight() {
        const location = this.locations[this.currentLocation];
        const enemy = location.enemy;

        while (enemy.health > 0 && this.player.health > 0) {
            enemy.health -= this.player.attackPower;
            this.updateUI(`You attack the ${enemy.name}. It has ${enemy.health} health left.`);
            if (enemy.health > 0) {
                this.player.health -= enemy.attackPower;
                this.updateUI(`The ${enemy.name} attacks you! You have ${this.player.health} health left.`);
            }
        }

        if (this.player.health <= 0) {
            this.updateUI("You have been defeated! Game Over.");
            this.resetGame();
        } else {
            this.updateUI(`You defeated the ${enemy.name}!`);
            this.collectItem();
        }
    },

    collectItem() {
        const location = this.locations[this.currentLocation];
        if (location.item) {
            this.updateUI(`You found a ${location.item}! It has been added to your inventory.`);
            this.player.inventory.push(location.item);
            location.item = null; // Remove item from location
        }
    },

    moveTo(newLocation) {
        if (this.locations[newLocation]) {
            this.currentLocation = newLocation;
            this.updateUI(`You travel to the ${newLocation}.`);
            this.updateUI(this.locations[newLocation].description);
        } else {
            this.updateUI("You can't go there!");
        }
    },

    resetGame() {
        this.player.health = 100;
        this.player.inventory = [];
        this.currentLocation = "forest";
        document.getElementById("game-log").innerHTML = "<p>The game has been reset. Good luck on your new adventure!</p>";
        this.updateUI(this.locations[this.currentLocation].description);
    }
};

// Bind functions to buttons
function fight() {
    adventureGame.fight();
}

function moveTo(location) {
    adventureGame.moveTo(location);
}

function resetGame() {
    adventureGame.resetGame();
}

// Initialize game UI
adventureGame.updateUI("You find yourself in a mysterious land. Good luck on your adventure!");
