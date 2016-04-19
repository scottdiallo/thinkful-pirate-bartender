var Order = function (orderValues) {
    // Pulls values from the DOM.
    this.strong = orderValues[0];
    this.salty = orderValues[1];
    this.bitter = orderValues[2];
    this.sweet = orderValues[3];
    this.fruity = orderValues[4];
};

var Drink = function (pantry, drinkOrder) {
    var ingredientNumber,
        ingredientsArray = [];

    for (var userPreference in drinkOrder) {
        ingredientNumber = Math.floor(Math.random() * 2);
        if (drinkOrder[userPreference]) {
            ingredientsArray.push(pantry[userPreference][ingredientNumber]);
        }
    }
    return ingredientsArray;

};

var drinkNamer = function (concoction) {
    // use if statements to piece together name conditionally
    // based on the ingredts that comprise it
};

$(document).ready(function () {

    var concoction,
        pantry = {
            strong: ["glug of rum", "slug of whisky", "splash of gin"],
            salty: ["olive on a stick", "salt-dusted rim", "rasher of bacon"],
            bitter: ["shake of bitters", "splash of tonic", "twist of lemon peel"],
            sweet: ["sugar cube", "spoonful of honey", "spash of cola"],
            fruity: ["slice of orange", "dash of cassis", "cherry on top"]
        },

        questions = {
            strong: "Do ye like yer drinks strong?",
            salty: "Do ye like it with a salty tang?",
            bitter: "Are ye a lubber who likes it bitter?",
            sweet: "Would ye like a bit of sweetness with yer poison?",
            fruity: "Are ye one for a fruity finish?"
        };

    $('form').on('submit', function (e) {
        orderValues = [];
        e.preventDefault();

        $('select').each(function () {
            orderValues.push($(this).val() === 'yes' ? true : false);
        });

        drinkOrder = new Order(orderValues); // create new order from DOM
        concoction = new Drink(pantry, drinkOrder); // mix drink with Drink constructor
        document.write(concoction);
        customerBeverage = drinkNamer(concoction); // name the customer's beverage with drinkNamer();
    });
});
