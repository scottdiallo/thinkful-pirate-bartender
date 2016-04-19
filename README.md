# thinkful-pirate-bartender
Creating preferences, loops through question objects for the Thinkful Frontend course



The basic requirements

Create questions and ingredients objects
The bartender should ask questions that determine your tastes and then identify ingredients to suit those tastes. If you like you can use our examples below, but feel free to customize!

Example questions:

Do ye like yer drinks strong?
Do ye like it with a salty tang?
Are ye a lubber who likes it bitter?
Would ye like a bit of sweetness with yer poison?
Are ye one for a fruity finish?
Example ingredients:

Strong ingredients: Glug of rum, slug of whisky, splash of gin
Salty ingredients: Olive on a stick, salt-dusted rim, rasher of bacon
Bitter ingredients: Shake of bitters, splash of tonic, twist of lemon peel
Sweet ingredients: Sugar cube, spoonful of honey, splash of cola
Fruity ingredients: Slice of orange, dash of cassis, cherry on top
Create constructor functions for questions, ingredients, and the pantry (which will contain all of the available ingredients). Then use these constructors to create objects representing the bartenders questions, ingredients and pantry.

Ask what style of drink a customer likes
Create a UI which will ask the user to provide an input for each of the questions. When the user submits their choices you should build a preferences object (so for example if the user answers that they like a strong drink then this should be recording in the object).

Construct a drink object
Create a constructor for a bartender object, and give the bartender a createDrink method. This method should take the preferences object, and construct a new drink object by fetching randomly chosen ingredients from the pantry which match the user's preferences. Create a bartender object, and add in logic so that when the user submits their preferences, the drink is created and displayed in your UI.

Extra challenges

If you found completing the basic requirements fairly straightforward then you should try to extend your app to add the following features:

Give the cocktails a name
All good cocktails should have a memorable name. Try to write a function which will name your cocktails. The name should be a random combination of an adjective and a noun (for example your bartender could make a "Fluffy Chinchilla", a "Salty Sea-Dog", or a "Fluffy Sea-Dog").

A burger chef
Try making your objects more generic so you can also create a burger chef. Focus on how you can reuse the code from your bartender, and consider using inheritance to allow similar behavior to be used by both the chef and the bartender. Each should be able to access the same pantry of ingredients, but use a different selection of these.

Extension exercises

If the extra challenges were not a problem and you're running ahead of schedule then you could try to implement one or two of the following features in your app:

Multiple customers: The bartender and chef could ask for the customer's name before they are served. They could then remember the customer's preferences for when the same customer asks for another drink or meal.
Stock control: Even pirate bars don't have a limitless supply of ingredients. You could add a stock count for each ingredient which decreases whenever a drink or burger. The bartender and chef could restock the ingredients when supplies are low.
