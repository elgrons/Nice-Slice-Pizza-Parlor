// BUSINESS LOGIC

// Business Logic for my Constructor: NiceSlice:

function NiceSlice(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaCost = 0;
}

NiceSlice.prototype.orderSummary = function() {
  this.pizzaCost = (this.pizzaSize + this.pizzaTopping);
  return this.pizzaCost;
}

// USER INTERFACE LOGIC

function handleFormSubmission(event) {
  event.preventDefault();

  const inputSize = parseInt(document.querySelector("input[name='size']:checked").value);

  let inputTopping = 0;
  const pizzaToppings = document.getElementsByClassName('toppings');
  for (let i=0; i < pizzaToppings.length; ++i) {
      if (pizzaToppings[i].checked) {
        inputTopping += parseInt(pizzaToppings[i].value);
      }
    }

  let niceSlice = new NiceSlice(inputSize, inputTopping);

  let orderTotal = niceSlice.orderSummary();

  document.getElementById("order-total").innerText = orderTotal;
}

window.addEventListener("load", function() { 
  document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
});