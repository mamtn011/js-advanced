let p = document;
p = document.links[0].getAttribute("href");
console.log(p);

/* We can Select html element using those functions ..........................*/

// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByTagName("");
// document.getElementsByName("");
// document.querySelector("");
// document.querySelectorAll("")
let val;
val = document.getElementById("container"); //select by id
val = document.getElementsByClassName("container"); // select by class name
val = document.getElementsByTagName("ul"); //select by tag name
val = document.querySelector(".menu-list"); // querySelector like css selector
val = document.querySelector("#container"); //for class with . and for id with #
val = document.querySelectorAll(".menu-list"); //for class with . and for id with #
val = document.querySelector("ul");
val = val.children[0].nextElementSibling.parentElement; //next sibling and parent
console.log(val);

// val.forEach((nole)=>{
//console.log(nole);
// });

/* HTML content manipulation...........................................*/

//changing style with css property...
let menuStyle;
menuStyle = document.querySelectorAll(".menu-list")[1];
menuStyle.style.color = "red";
menuStyle.style.backgroundColor = "grey"; // not use background-color
//changing text with or without html tag
menuStyle.textContent = "Contact";
menuStyle.innerText = "Accessories";
menuStyle.innerHTML = "<b>Shop</b>"; // with html tag
//find attribute
const getAtt = document.querySelector("a").getAttribute("href");
console.log(getAtt);
const getDataSet = document.querySelector("p").dataset.age; // for custom data-attributes only
console.log(getDataSet);
console.log(document.querySelector("ul").classList.contains("m-3")); // checking whether the class name exist or not.
//changing attribute
document.querySelector("a").setAttribute("href", "http://www.facebook.com");
document.querySelector("a").removeAttribute("href"); // remove attribute
document.querySelector("ul").className = "myClass"; // class name change
document.querySelector("ul").classList.add("myClass-2"); // adding new class
document.querySelector("div").id = "myId"; // Id name change

/*Creating and removing an html element with content ..............................*/
const ul = document.querySelector("ul"); //select the parent element
const li = document.createElement("li"); //creating en element
li.className = "menu-list"; // adding a class
li.appendChild(document.createTextNode("Contact")); // putting text on element
//ul.append(li);// putting the element as last child of parent
ul.prepend(li); // putting the element as first child of parent
// ul.insertBefore(li, ul.chindren[2]);// we can insert anywhere using insertBefore
//removing.............
ul.lastElementChild.remove(); // removing an element
// we can also select an element then use elm.romove();  also we can catch the parent using parentChild then use removeChild(name of selected element).

// insertAdjacentElement() and insertAdjacentHTML().......................
// insertAdjacentElement() help us to insert a html element which is created from dom into the html document.
const li2 = document.createElement("li");
li2.className = "menu-list";
li2.appendChild(document.createTextNode("Watch"));
ul.insertAdjacentElement("beforeend", li2);
// insertAdjacentHTML() help us to insert a string like a part of html document into the html document.
const newLi = '<li class="menu-list">Help</li>';
ul.insertAdjacentHTML("afterbegin", newLi);

/*Replacing an html element with content.............................................*/
const parentReplace = document.querySelector(".container"); //select parent element
const oldElement = document.querySelector(".heading3"); //select old element
const newElement = document.createElement("h4"); //creat  new element
newElement.appendChild(document.createTextNode("Main Menu List")); // putting text
parentReplace.replaceChild(newElement, oldElement); //replacing new to old
//oldElement.replaceWith(newElement);// replacing without select parent

// Dom travarsing....................................................
console.log(ul.children); // recomended.. children take all child in an array.
console.log(ul.children[0]);
console.log(ul.children[1].previousElementSibling); // take previous element
console.log(ul.children[0].nextElementSibling); // take next element
console.log(ul.children[0].nextElementSibling.nextElementSibling);
console.log(ul.children[0].nextElementSibling.parentElement);
console.log(ul.children[0].nextElementSibling.parentElement.parentElement);
console.log(
  ul.children[0].nextElementSibling.parentElement.parentElement.children
);
//closest
console.log(ul.children[0].closest(".container")); // closest element

console.log(ul.children[0].nextSibling); // not recomended.. it take next empty text if exist. like childNodes
console.log(ul.childNodes); // not recomended. childNodes take all empty text and child in an array

// form selecting......................................................
const form1 = document.forms; // all forms take in an array.
console.log(form1[0]); // 1st form from html document
const form1st = form1[0];
console.log(form1st);
console.log(form1st.menuname); // delect by name
console.log(form1st.emaill); // select by id
console.log(form1st.elements); // take all inputs in an array
console.log(form1st.elements[0]);

/*EVENT.......................................................................*/
//most common event...click, mouseover, dblclick, keypress, drag, submit
//syntex and example 1
const h1Event = document.querySelector("h1");
function eventFunction(evt) {
  // evt is for getting event information
  evt.preventDefault(); // preventing default operations
  console.log(evt); // to see event info
  console.log(evt.type); // we can get a key value of event object
  console.log("H1 clicked");
}
h1Event.addEventListener("click", eventFunction); // adding click event
//example 2
const form = document.querySelector("form"); // select form
const menuname = document.getElementById("menuname"); // select menuname/input
form.addEventListener("submit", (ent) => {
  ent.preventDefault(); // preventing default operations
  console.log(menuname.value); // printing input value
  const newItem = document.createElement("li"); // adding the value as a menu list
  newItem.textContent = menuname.value;
  newItem.className = "menu-list";
  ul.append(newItem);
}); // adding event / function as parameter

/* Event bubbling / event could be run in parents(down to up)*/
// Here if we click 1st li then event for ii, ul, and div will run. because ul is parent of li and div is parent of ul. but event for h1 won't run. because it is not parent of li or ul or div.
// if we want to stop bubbling, we can use stopPropagation() method.
// to show the output..commentout capturing part
(function () {
  const listLi = document.querySelector("li");
  const liParentUl = document.querySelector("ul");
  const ulParentDiv = document.querySelector(".container");
  const h1Event2 = document.querySelector("h1");
  listLi.addEventListener("click", (e) => {
    console.log(e.target); // element in which i clicked
    console.log("bubbling: ", e.currentTarget); // element for which the event run
    //e.stopPropagation();
  });
  liParentUl.addEventListener("click", (e) => {
    console.log(e.target);
    console.log("bubbling parent: ", e.currentTarget);
    //e.stopPropagation();
  });
  h1Event2.addEventListener("click", (e) => {
    console.log("Clicked h1"); // not be printed/cause hi is not li parent.
  });
  ulParentDiv.addEventListener("click", (e) => {
    console.log(e.target);
    console.log("bubbling grandparent: ", e.currentTarget);
  });
})();
// capturing.............................................................................
// capturing is almost similar to bubblinbg..just it run parent to child.(up to down). for capturing we have to add true as 3rd parameter into addEventListener( "target", (evt)=> , true ).
// to show the output..commentout bubbling part
(function () {
  const listLi = document.querySelector("li");
  const liParentUl = document.querySelector("ul");
  const ulParentDiv = document.querySelector(".container");
  const h1Event2 = document.querySelector("h1");
  listLi.addEventListener(
    "click",
    (e) => {
      console.log(e.target);
      console.log("capturing grandchild: ", e.currentTarget);
    },
    true
  );
  liParentUl.addEventListener(
    "click",
    (e) => {
      console.log(e.target);
      console.log("capturing child: ", e.currentTarget);
    },
    true
  );
  h1Event2.addEventListener("click", (e) => {
    console.log("Clicked h1");
  });
  ulParentDiv.addEventListener(
    "click",
    (e) => {
      console.log(e.target);
      console.log("capturing: ", e.currentTarget);
    },
    true
  );
})();

// Event delegation.................................................................
/*
If we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor. In the handler we get evt.target to see where the event actually happened and handle it. 

Benefits:
1. Simplifies initialization and saves memory: no need to add many handlers.
2. Less code: when adding or removing elements, no need to add/remove handlers.

*/

(function () {
  const ul = document.querySelector("ul");

  ul.addEventListener("click", (evt) => {
    const target = evt.target.tagName;
    if (target === "LI") {
      // here we can handle all li in ul without assigning a handler to each of them because of event delegation
      console.log("Delegation: ", evt.target.textContent);
    }
  });
})();
