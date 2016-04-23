var Order = function (orderValues) {
    // Pulls values from the DOM.
    this.strong = orderValues[0];
    this.salty = orderValues[1];
    this.bitter = orderValues[2];
    this.sweet = orderValues[3];
    this.fruity = orderValues[4];
};

var pantry = {
    strong: ["glug of rum", "slug of whisky", "splash of gin"],
    salty: ["olive on a stick", "salt-dusted rim", "rasher of bacon"],
    bitter: ["shake of bitters", "splash of tonic", "twist of lemon peel"],
    sweet: ["sugar cube", "spoonful of honey", "spash of cola"],
    fruity: ["slice of orange", "dash of cassis", "cherry on top"]
};

var Drink = function (pantry, drinkOrder) {
    var ingredientNumber,
        ingredientsArray = [];

    for (var userPreference in drinkOrder) {
        ingredientNumber = generateRandomNumber(0, 2);
        if (drinkOrder[userPreference]) {
            ingredientsArray.push(pantry[userPreference][ingredientNumber]);
        }
    }
    return ingredientsArray;
};

var toTitleCase = function (str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Function to generate the random number
var generateRandomNumber = function (min, max) {
    //Returns a random integer between min (included) and max (included); Math.floor() will give you a non-uniform distribution!
    //random number generator details can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// use if statements to piece together name conditionally based on the ingredients that comprise it
var drinkNamer = function (concoction) {
    var drinkNamerOutput = concoction[0].split(" ");
    return toTitleCase(drinkNamerOutput[drinkNamerOutput.length - 1]);
};

$(document).ready(function () {

    $('.output').hide();


    $('form').on('submit', function (e) {

        orderValues = [];
        e.preventDefault();

        $('select').each(function () {
            orderValues.push($(this).val() === 'yes' ? true : false);
        });

        drinkOrder = new Order(orderValues); // create new order from DOM
        concoction = new Drink(pantry, drinkOrder); // mix drink with Drink constructor


        $('.output').show();

        var buildTheHtmlOutput = "";
        $.each(concoction, function (key, value) {
            buildTheHtmlOutput += "<li>" + value + "</li>";
        });
        $(".output ul").html(buildTheHtmlOutput);

        // name the customer's beverage with drinkNamer();
        $(".output h3").html("Here be yer Sparkly " + drinkNamer(concoction) + " Grog, ye scurvy dog!");
    });
});
