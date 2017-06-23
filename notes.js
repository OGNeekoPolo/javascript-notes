//JavaScript Notes and Examples


let arr = [1,3,5,6,7,8]; // This is the standard method of creating an array.

console.log(arr[2]); //Using the array index number of '2', you can find the third number in the array because all arrays start with an index of 0.

let obj = {'thing' : 'stuff'}; // This is the standar way of creating an object with JavaScript.

console.log(obj); //By logging the variable 'obj', you will be able to see all of the different items in the object.
console.log(obj.thing); //By using the variable name 'obj.' you can call the different parts of the object by the name. Hence obj.name.


//Using a variable name without let or var will completely
//reassign the variable and will overwrite its previous assignment.
obj = {'thing' : 'stuff', 'name' : 'Jon', 'age' : 27,}


console.log(obj);
console.log(obj['age']); //This is considered 'bracket notation', and is one of the methods of pulling information out of our objects.
console.log(obj.name); // This is considered 'dot notation', and is the alternate way of pulling information from our objects.

obj['multi-line'] = 'thing'; //If the header in the object is multi-worded, you can only call that information using bracket notation. Dot notation will not recognize a hyphonated word.

console.log(obj);


//This is the extended way of writing out a complete object. Notice that the header 'address' has actually opened up to be another object.
//Objects can be put inside of objects to make different branches and tiers.
obj = {
  'name' : 'Jon',
  'address' : { //Address has been made into an object because there are different individual parts of the address (ie. city and street names)
    'city' : 'Indy',
    'street' : 'N. Deleware',
  }, //When closing an object inside of an object, make sure that the closing bracket is followed by a comma in order to tell javascript that you are closing that item and moving on to other headers in your object.
  'age' : 27,
  'position' : 'teacher'
};

console.log(obj);


//Below will show you the method of creating arrays inside of objects.
obj = {
 'arr' : [1,2,3,4],
}


//In order to log the array, you must first call the name of the object, and then branch it to the header of the array (ie. obj.arr)
//Below are two separate ways to call the exact same thing.

//Dot Notation
console.log(obj.arr);
//Bracket Notation
console.log(obj['arr']);

//In order to call a specific part of the array, you must do the steps to call the array, and then you will have to link the index number associated with the information you are trying to get.
//You can also write this using Dot and Bracket notation to get what you want.

//Bracket Notation
console.log(obj['arr'][2]);
//Dot Notation
console.log(obj.arr[2]);


arr = [1,2,3,4,5,6];


//Using the .map() function allows us to manipulate every single piece of information in an array one by one.
//It essentially acts as a self looping function that runs through the entire array.
let newArr = arr.map(function(num){
  return num * 2;
});

console.log(newArr);


//Using the .forEach() function is almost identical to .map(), except for one crucial difference.
//.map() is a lot better at returning the results of what you had the function do. The answer will come back undefined if you attempt to run the code.
let newestArr = newArr.forEach(function(x){
  console.log(x / 2);
});


for (var i = 0; i < newArr.length; i++) {
  console.log(arr[i] / 2);
}


//This is how you set up a timer for something to actually happen. The 'setTimeout' command will take a fuction and set it aside in the call stack to be called after everything else in the stack has been sent through.
//The timer in setTimeout() is calculated in miliseconds. (ie. 2000 ms = 2 seconds).
console.log("Hello My Name Is");

//The setTimeout() element is set up with two parameters (function, timer).
setTimeout(name, 2000);


function name(){
  console.log("Cameron");
}

(function () {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      // console.log(response.json());
      return response.json();
    })
    .then(function(users){
      // const user = users[0];
      // alert(user.name);
      const container = document.createElement('div');
      let newLis = "";
      for (let i = 0; i < users.length; i++) {
        newLis += createLi(users[i]);
      }
      container.innerHTML = "<ul>" + newLis + "</ul>";
      document.body.appendChild(container);
    });

    function createLi(user){
      const name = user.name;
      const li = "<li>" + name + "</li>";
      return li;
    }
})();


(function () {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      return response.json();
    })
    .then(function(users){
      const container = document.createElement('div');
      const newLis = users.map(createLi);
      newLis.sort(function(x, y){
        if (x > y) {
          return -1
        } else if (x < y) {
          return 1;
        } else {
          return 0;
        }
      })
      container.innerHTML = "<ul>" + newLis + "</ul>";
      document.body.appendChild(container);
    });

    function createLi(users){
      const name = users.name;
      const li = "<li>" + name + "</li>";
      return li;
    }
})();

//If, Else, and Else If (Elsif) Statements

arr = [1,3,5,6,7,8];

function arrPlay(arr) {
  arr.forEach(function(x){
    if (x > 5) {
      console.log("Hey look this is bigger than five!");
    } else if (x === 3) {
      console.log("Hey look its three!");
    } else {
      console.log("Look its else");
    }
  })
};

arrPlay(arr);

function getSize(height, width, depth){
  const area = height * width;
  const volume = height * width * depth;
  var sizes = [area, volume];
  return sizes;
};

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

console.log(volumeOne);

var hotel = {
  name : "Quay",
  rooms : 50,
  booked : 20,
  amenities : true,
  roomTypes : ['twin', 'double', 'queen', 'king'],
  checkAvailability : function(){
     return this.rooms - this.booked;
  }
};

document.write(hotel.checkAvailability());

var park = new Object();

park.name = 'Park';
park.rooms = 100;
park.booked = 67;
park.amenities = false;
park.roomTypes = ['double', 'queen', 'king'];
park.checkAvailability = function(){
  return this.rooms - this.booked;
};

console.log(park);

park.name = 'New Park';

console.log(park);

function Hotel(name, rooms, booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function(){
    return this.rooms - this.booked;
  };
}

var newLife = new Hotel("New Life", 50, 22);
var newHilton = new Hotel('Hilton', 120, 56);

console.log(newHilton);
console.log(newLife);
