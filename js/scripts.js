// BUSINESS LOGIC

//Business Logic for NewOrder (maybe a global variable and delete)
function NewOrder () {
  this.pizza = {};
  this.orderSummary = orderSummary;
}

// Business Logic for my Constructor: NiceSlice:
function NiceSlice(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.orderSummary = 0;
}

NiceSlice.prototype.addSizeCost = function() {
  this.pizzaSize = 0;
  if (this.pizzaSize === "regular") {
    this.pizzaSize + 20;
  } 
    else if (this.pizzaSize === "large") {
    this.pizzaSize + 28;
  }
  return this.pizzaSize;
}

// NiceSlice.prototype.addToppingCost = function() {
//   let toppings = 
//   this.pizzaTopping = 0;
//   let pepperoni = this.pizzaTopping +4;
//   let pineapple = this.pizzaTopping +3;
//   let jalapeno = this.pizzaTopping +3;
//   if (this.pizzaTopping + "pepperoni" + "pineapple" + "jalapeno" = 
//   return this.pizzaTopping; 
// }

NiceSlice.prototype.orderSummary = function() {
  this.orderSummary = 0;
  let totalCost = (this.pizzaSize + this.pizzaTopping);
  totalCost.push(this.orderSummary)
  return this.orderSummary;
}

// Business Logic for orderSummary:
function orderSummary() {
  let pizzaTotal = this.pizzaSize + this.pizzaTopping
  return pizzaTotal;
}

// USER INTERFACE LOGIC

let niceSlice = new NiceSlice();

function orderSummary(orderSummaryToDisplay) {
  document.querySelector(".first-name").innerText = contact.firstName;
  let pizzaTotalDiv = document.querySelector("div#pizzaTotal");
  return 
}

window.addEventListener("load", function() {

})

<form id="new-order">
<div class="pizza-size">
  <h3>Choose Size:</h3>
  <p>*Required: Choose One*</p>
  <input type="radio" name="size" value="regular" id="regular" checked>
  <label for="regular">Regular 12" - $20</label><br>
  <input type="radio" name="size" value="Large" id="large">
  <label for="large">Large 18" - $28</label><br>
  <div class="pizza-toppings">
    <br>
    <h3>Choose Toppings:</h3>
    <p>*Select as many as you like*</p>
    <input type="checkbox" name="topping" value="plain" id="plain" checked>
    <label for="regular">Plain: sauce and cheese only</label><br>
    <input type="checkbox" name="topping" value="pepperoni" id="pepperoni">
    <label for="large">Add Vegan Pepperoni +$4</label><br>
    <input type="checkbox" name="topping" value="pineapple" id="pineapple">
    <label for="regular">Add Pineapple +$3</label><br>
    <input type="checkbox" name="topping" value="jalapeno" id="jalapeno">
    <label for="large">Add Jalapeno +$3</label>
    <br>
    <br>
    <button type="submit" class="btn-primary">Place Order</button>
  </div>
</form>
function getResults(event) {
  let form = document.getElementById("new-order")
  event.preventDefault();
  const animal = parseInt(document.querySelector("input[name='animal']:checked").value);
  const allergy = parseInt(document.querySelector("input[name='allergy']:checked").value);
  const soup = parseInt(document.querySelector("input[name='soup']:checked").value);
  const shoes = parseInt(document.querySelector("input[name='shoes']:checked").value);
  const resultRange = animal + allergy + soup + shoes;

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = parseInt(document.querySelector("input#new-first-name").value);
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  const inputtedEmailAddress = document.querySelector("input#new-email-address").value;
  const inputtedAddress = document.querySelector("input#new-home-address").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedAddress);
  addressBook.addContact(newContact);
  listContacts(addressBook);  // <--- This is the newer line where we call the listContacts() function and replaced our console.log *shows the full names, but not the phone number*

  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
  document.querySelector("input#new-email-address").value = null;
  document.querySelector("input#new-home-address").value = null;

  //code from the lines above are to empty out our form fields after submission.
}


//event listeners actually call the functions to make them happen (ex. handleFormSubmission and displayContactDetails)
//function() is a stand-in for the specific function listed below, and "submit", "click" etc are the events tied to the specific functions
window.addEventListener("load", function() { 
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
  // The line below this one is new and is related to our function displayContactDetails()
  document.querySelector("div#contacts").addEventListener("click", displayContactDetails); 
  // The line below this one is new and made according to page 20 "delete functionality"
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});