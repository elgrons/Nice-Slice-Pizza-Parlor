// BUSINESS LOGIC

// Business Logic for my Constructor: NiceSlice:
function NiceSlice(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

NiceSlice.prototype.pizzaOrder = function() {
  if (this.pizzaSize = 'regular') {
    this.pizzaSize += 20;
  }
  else if (this.pizzaSize = 'regular') {
    this.pizzaSize += 28;
  }
  return this.pizzaSize;
}

NiceSlice.prototype.pizzaToppings = function () {
let toppingsTotal = 0;
  this.pizzaTopping.ForEach(function(topping)) {
    if (topping.includes('pepperoni') || topping.includes('pineapple') || topping.includes('jalapeno')) {
      toppingsTotal += 4.00
    }
  };
}

  
  

NiceSlice.prototype.orderTotal = function() {

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

NiceSlice.prototype.addToppingCost = function() {
  // if none are checked = null
  this.pizzaTopping = 0;
  for (let i = 0; i< this.pizzas.length; i++) {
    this.total += this.pizzas[i].cost;
  }
}

  let toppings = 
  this.pizzaTopping = 0;
  let pepperoni = this.pizzaTopping +4;
  let pineapple = this.pizzaTopping +3;
  let jalapeno = this.pizzaTopping +3;
  if (this.pizzaTopping + "pepperoni" + "pineapple" + "jalapeno" = 
  return this.pizzaTopping; 
}

NiceSlice.prototype.orderSummary = function() {
  this.orderSummary = 0;
  let totalCost = (this.pizzaSize + this.pizzaTopping);
  totalCost.push(this.orderSummary)
  return this.orderSummary;
}

// Business Logic for orderSummary:
function orderSummary() {
  let pizzaTotal = this.pizzaSize + this.pizzaTopping;
  return pizzaTotal;
}

// USER INTERFACE LOGIC

let niceSlice = new NiceSlice();

// function orderSummary(orderSummaryToDisplay) {
//   document.querySelector(".first-name").innerText = contact.firstName;
//   let pizzaTotalDiv = document.querySelector("div#pizzaTotal");
//   return 
// }

// window.addEventListener("load", function() {

// })

function handleFormSubmission(event) {
  event.preventDefault();
  const inputRegular = parseInt(document.querySelector("input[id='regular']:checked").value);
  const inputLarge = parseInt(document.querySelector("input[id='large']").value);
  const inputPepperoni = parseInt(document.querySelector("input[id='pepperoni']").value);
  const inputPineapple = parseInt(document.querySelector("input[id='pineapple']").value);
  const inputJalapeno = parseInt(document.querySelector("input[id='jalapeno']").value);

  let niceSlice = new NiceSlice(pizzaSize, pizzaTopping, pizzaTotal);


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
});