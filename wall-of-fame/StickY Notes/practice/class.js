// CLASSES (note that there are no classes in JS)

class Desert {
  constructor(calories = 100) {
    console.log("Constructor called..");
    this.calories = calories;
    this.ingredients = [];
  }
  addIngredients(ingredient) {
    this.ingredients.push(ingredient);
  }
  getIngredients() {
    console.log(this.ingredients);
  }
}

const vanilla = new Desert();
vanilla.addIngredients("sugar");
vanilla.addIngredients("chocolate powder");
vanilla.getIngredients();

