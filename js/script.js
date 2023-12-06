// burger bar

let navigation = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");
let ulElement = document.getElementById("ul-element");

burger.addEventListener("click", function () {
  ulElement.classList.toggle("activeNavigation");
  burger.classList.toggle("activeBurger");
});

// this
// 1. default binding
function test() {
  console.log(this); //window
}
test();
// 2. implicit binding
let user = {
  name: "anna",
  age: 25,
  status: "active",
  printName: function () {
    console.log(this.name);
  },
};
user.printName();

// 3. explicit binding - call. apply. bind
function test2(x, y) {
  console.log(this);
  console.log(x, y);
}

test2.call({}, " HelloX", "HelloY");
test2.apply({}, ["HelloX", "HelloY"]);

let user5 = {
  name: "levani",
  age: 30,
};
let user6 = {
  name: "lasha",
  age: 35,
};
let user7 = {
  name: "nini",
  age: 18,
  printName: function () {
    console.log(this.name);
  },
};

user7.printName.apply(user5);

let printNameFunctionNew = user7.printName.bind(user6);
printNameFunctionNew();

// arrow fnc with methods
let testArrow = () => {
  console.log(this);
};
testArrow(); //window

let obj = {
  name: "anna",
  printName: () => {
    console.log(this);
  },
};
obj.printName(); //window

//this
let divElement = document.querySelector(".box");

divElement.addEventListener("click", function () {
  console.log(this);
});

// accordion
let containers = document.querySelectorAll(".accordion-container");

// containers.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// });

for (let el of containers) {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// 1. xml http requist
let requist = new XMLHttpRequest();

requist.addEventListener("load", function () {
  let mosuliInfoText = this.responseText;
  let mosuliInfoRogrocJs = JSON.parse(mosuliInfoText);
  console.log(mosuliInfoRogrocJs);
  let ul = document.createElement("ul");

  mosuliInfoRogrocJs.data.forEach((item) => {
    let li = document.createElement("li");
    // li.innerText = item.first_name + " " + item.last_name;
    li.innerText = `${item.first_name} ${item.last_name}`;
    ul.appendChild(li);
  });

  document.getElementById("api-users").appendChild(ul);
});

requist.open("GET", "https://reqres.in/api/users?page=2");
requist.send();

// 2. fetch
