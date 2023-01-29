# Nice Slice Pizza Parlor 🍕

#### By Eliot Gronstal, January 2023

#### A website for a pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost. Made for my Independent Project in Week 4 of Epicodus Coding School.

## Technologies Used

* HTML
* Javascript
* CSS
* GitHub

## Description

A website for a pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost. Made for my Independent Project in Week 4 of Epicodus Coding School.

This project will:
* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen using my own formula.

## TDD

Describe: NiceSlice()

* Test One
Test: "It should return a NiceSlice object with two properties for toppings and size."
Code: 
let niceSlice = new NiceSlice("regular", ["pineapple", "jalapeno"]);
Expected Output: niceSlice {pizzaSize: 'regular', pizzaTopping:["pineapple" "jalapeno"]}

<!-- function NiceSlice(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
} -->

*Test Passes*

Describe: NiceSlice.prototype.pizzaCost

* Test One
Test: "It should add the cost of the size of the pizza to the total."
Code: 
NiceSlice.prototype.pizzaCost
Expected Output: 






## Setup/Installation Requirements

* Clone the repository to your desktop.
* Open the files and visit the website to order a nice slice!

* If there are any questions or concerns please reach out to Eliot at eliot.lauren@gmail.com.

## Known Bugs

* Bugs here:
* More toppings and custom styles of pizza can always be added! There's no such thing as too much pizza!

## License

MIT

Copyright (c) 2023 Eliot Gronstal