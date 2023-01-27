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
  let contactsDiv = document.querySelector("div#pizzaTotal");
  contactsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
}

window.addEventListener("load", function() {

})

// adding this function to keep up separation of concerns. This will make a UI list function to display the objects we've taken in.
function listContacts(addressBookToDisplay) {
  let contactsDiv = document.querySelector("div#contacts");
  contactsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
}
// example: contactsDiv.append(ul) is our single hit to the DOM *which is most EFFICIENT* as opposed to having it say something like: contactsList.append(li)

// this function will allow clicking on the name to show information in the console
function displayContactDetails(event) {
  const contact = addressBook.findContact(event.target.id); //adding our .findContact()method from our Business Logic we're cheating a bit b/c addressBook is global, which is standing in for a database
  // .class-name #id-name . calls from class-name, # calls from id-name
  document.querySelector(".first-name").innerText = contact.firstName;
  document.querySelector(".last-name").innerText = contact.lastName;
  document.querySelector(".phone-number").innerText = contact.phoneNumber;
  document.querySelector(".email-address").innerText = contact.emailAddress;
  document.querySelector(".home-address").innerText = contact.homeAddress;
  document.querySelector("div#contact-details").removeAttribute("class");
  // console.log("The id of this <li> is " + event.target.id + "."); --this console.log was the first line of code we added to this function from the lesson plan

  // The line below this one is new to help with "delete functionality". our button will need access to the id of the current contact that's being displayed. The displayContactDetails() function already has access to the Contact object's details, so let's update that function to also update our new delete button with an id attribute set to the id of the contact.
  document.querySelector("button.delete").setAttribute("id", contact.id);
  //we are accessing our delete button in the html and then giving it an id attribute (because in the HTML it is only assigned a class attribute)set to the Contact object's id set in the javascript. 
  document.querySelector("div#contact-details").removeAttribute("class");
  //our CSS class is "hidden" which we already created, and that's why the delete works, because it "hides" our info like it's supposed to.
}


function handleDelete(event) {
  addressBook.deleteContact(event.target.id);//addressBook is a global variable, we can call on it from within the handleDelete() function. Remember that we're using the global addressBook variable as a mock database 
  document.querySelector("button.delete").removeAttribute("id");//we remove the id attribute from the delete button, thereby resetting it.
  document.querySelector("div#contact-details").setAttribute("class", "hidden");//we are hiding the contact details div once more.
  listContacts(addressBook);//Finally, we call the listContacts function again to refresh the list of contacts, this time without the contact that we've deleted.
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
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