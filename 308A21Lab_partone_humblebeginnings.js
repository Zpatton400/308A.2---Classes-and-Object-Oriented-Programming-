//Part One:  Humble Beginnings
class Adventurer {
  constructor(name, health, inventory, companion) {
    this.name = name;
    this.health = health;
    this.inventory = inventory;
    this.companion = companion;
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Companion {
  constructor(name, type, belongings) {
    this.name = name;
    this.type = type;
    this.belongings = belongings;
  }
}

// Create a companion for Leo
const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);

// Create a companion for Robin
const leo = new Companion("Leo", "Cat", ["collar"], frank);

// Create an adventurer
const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], leo);

// Log each item in Robin's inventory
robin.inventory.forEach(item => console.log(item));

// Roll the dice a few times
robin.roll();
robin.roll();
robin.roll();